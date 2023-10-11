import { Metadata } from "next";

export default async function Home() {
  return <main>Hello world</main>;
}

export const metadata: Metadata = {
  title: "home page",
  description: "home page description",
};
