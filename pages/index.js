import Head from 'next/head';
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Button, Container, Grid, Input, Row, Text, Loading, Divider, Spacer } from '@nextui-org/react'
import { useIsMobile } from '../src/hooks/mediaQuery';
import { ToastContainer, toast } from "react-nextjs-toast";
import { apiUrl } from '../src/constants';

// const Input = ({children, ...props}) => {
//   return <>
//     <input onClick={console.log} style={{ height: 1, width: 1, opacity: 0, overflow: "hidden" }} type="file" accept='accept="image/*;capture=camera"' {...props}/>
//   {props.children}
//   </>
// }

export default function Home() {
  //  const router = useRouter();
  const [image, setImage] = useState();
  const [emojis, setEmojis] = useState();
  const [clicked, setClick] = useState();
  const isMob = useIsMobile();
  const arr = [...new Array(7).keys()].slice(1);

  const DetectEmojis = async () => {
    setClick(true);
    let isImgStr = typeof image === "string";
    let Img = image;
    if (isImgStr) {
      if (window.location.host.includes("localhost:")) {
        isImgStr = false;
        console.log(33, image)
        Img = await (await fetch(image)).arrayBuffer();
      }
      else {
        Img = `${window.location.protocol}/${window.location.host}${image}`;
      }
    }
    let suff = isImgStr ? `?image=${Img}` : '';
    let resp;
    try {
      await fetch(`${apiUrl}/generate${suff}`, {
        method: "POST",
        body: isImgStr ? null : Img,
        mode: "no-cors"
      });
      resp = await (await fetch(`${apiUrl}/getResponse`)).json();
    }
    catch (e) {
      //throw e
      console.error(e);
      setClick(false);
      return;
    }
    setClick(false);
    if (resp instanceof Array) {
      setEmojis(resp);
      return;
    }
    console.error(resp);
    setClick(false);
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Container display='flex' direction='column' alignItems='center'>
          {
            image && <Row align='center'>
              <Container css={{
                backgroundImage: `url(${typeof image === 'string' ? image : URL.createObjectURL(image)})`,
                backgroundRepeat: "no-repeat",
                height: isMob ? 300 : 450,
                width: isMob ? 800 : 600,
                backgroundPosition: "center",
                backgroundSize: "contain",

              }} justify='center' alignItems='center' alignContent='center' >

              </Container>
            </Row>}
          {
            image && <Container>
              {emojis && <Row justify='center' css={{ marginTop: 20 }}>
                <Text css={{
                  fontSize: 30,
                  paddingRight: 10, paddingLeft: 10
                }} className={styles.Ebox}>
                  {emojis.join('')}
                </Text>
                <Button auto color={"secondary"} css={{ marginTop: 5, marginLeft: 20 }}
                  onPress={() => {
                    navigator.clipboard.writeText(emojis);
                    toast.notify('', {
                      type: "success",
                      title: "Copied!",
                      duration: 2
                    })
                  }}>
                  Copy
                </Button>
              </Row>}
              <Row align="baseline" justify='center' css={{
                marginTop: emojis ? 25 : 0
              }}>
                {!emojis && <Button css={{
                  marginTop: 15
                }}
                  disabled={clicked}
                  auto color={"secondary"} onPress={DetectEmojis}>
                  {clicked ? <><Loading type="points-opacity" color="currentColor" size="sm" />
                    <p style={{ marginLeft: 10 }}>Loading</p> </>
                    : 'Detect Emojis'}
                </Button>}
                <Button css={{
                  marginLeft: 14,

                }} auto={!emojis} color="none"
                  onPress={() => {
                    setImage(null);
                    setEmojis(null);
                    setClick(null);
                  }}>
                  Clear
                </Button>
              </Row>
            </Container>
          }
          {!image && <>
            <input style={{
              marginTop: image ? "20px" : 0,
              width: isMob ? "80%" : null
            }} onChange={e => setImage(e.currentTarget.files[0])} className={styles.input} type="file" accept="image/*, camera" />
            <Spacer y={2} />
            <Divider style={{
              backgroundColor: "white",
              maxWidth: "50%"
            }} />
            <Spacer y={.2} />
            <Text className={styles.text} css={{
              fontSize: 22
            }}>
              Checkout some examples
            </Text>
            <Grid.Container gap={1} css={{
              justifyContent: "center"
            }}>
              {arr.map(ind => <Grid key={ind} onClick={() => {
                setImage(`/examples/${ind}.jpg`);
              }} >
                <Image alt="Picked image" className={styles.pickImg} src={`/examples/${ind}.jpg`} width={60} height={60} />
              </Grid>)}
            </Grid.Container>
          </>}
        </Container>
      </main>
      <ToastContainer />
    </div>
  )
}
