import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Text } from "@nextui-org/react"
import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();

    return <>
        <main>
            <Image alt="404 page" src="https://img.icons8.com/external-basic-line-gradient-yogi-aprelliyanto/256/external-404-error-coding-and-programming-basic-line-gradient-yogi-aprelliyanto.png" width={400} height={400} />
            <Button onClick={() => router.push("/")} css={{
                marginTop: 25
            }} >
                Back to Home
            </Button>
        </main>
    </>
}