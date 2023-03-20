import Image from "next/image";
import { Button, Link, Navbar, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

export const AppBar = () => {
    const router = useRouter();
    return <Navbar isBordered variant={"floating"}
        css={{ width: "100%" }}
     >
        <Navbar.Brand onClick={() => router.push("/")}>
            <Image alt="emojibee" src="/bee.jpg" width="60" height="60" />
            <Text css={{ fontSize: 30, fontWeight: "bold" }}>
                EmojiBee
            </Text>
        </Navbar.Brand>
        <Navbar.Content>
            {router.pathname === "/" &&
                <Navbar.Item>
                <Button color={"secondary"} auto as={Link} href="/docs">
                    API usage
                </Button>
            </Navbar.Item>
            }
        </Navbar.Content>
    </Navbar>
}