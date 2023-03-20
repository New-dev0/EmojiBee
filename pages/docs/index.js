import { Row, Spacer, Text, Card, Divider } from "@nextui-org/react";
import styles from "../../styles/Home.module.css";
import { apiUrl } from "../../src/constants";
import { useIsMobile } from "../../src/hooks/mediaQuery";

export default function APIUsage() {
    const isMobile = useIsMobile();
    return <>
        <main>
            <Text h1 className={styles.text}>
                Docs
            </Text>
            <Row justify="center" align="center">
                <Text className={styles.text}>
                    API URL:
                </Text>
                <code style={{ marginLeft: 20, padding: 9 }}>
                    {apiUrl}/generate
                </code>
            </Row>
            <Spacer y={2} />
            <Card css={{
                maxW: isMobile ? "95%" : "50%",
            }}>
                <Card.Header>
                    <Text css={{
                        textAlign: "center",
                        width: "inherit"
                    }} h4>
                        Params
                    </Text>
                </Card.Header>
                <Card.Body>
                    <li>GET
                        <code style={{ marginLeft: 20 }}>
                            image
                        </code>
                        &nbsp; - Image url
                    </li>
                    <li>GET
                        <code style={{ marginLeft: 20 }}>
                            text
                        </code>
                        &nbsp; &nbsp; - for Emoji Generation from text.

                    </li>
                    <Card.Divider style={{ marginBottom: 15 }} />
                    <li>

                        POST
                        <code style={{ marginLeft: 20 }}>
                            imageBuffer as body
                        </code>
                    </li>
                </Card.Body>
            </Card>
            <Text css={{
                        textAlign:"center",
                        width: isMobile ? "95%" : "50%"
                    }} blockquote>
                        Any of the above method can be used with proper param to make request.
                    </Text>
        </main>
    </>
}