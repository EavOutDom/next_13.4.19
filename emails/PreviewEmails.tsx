import React from "react";
import {
  Html,
  Preview,
  Body,
  Tailwind,
  Container,
  Text,
  Link,
} from "@react-email/components";

const PreviewEmails = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://eav-outdom.web.app/">
              www.eav-outdom.web.app
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PreviewEmails;
