import { Metadata } from "next";
import Image from "next/image";
import RenderHeavyComp from "./components/RenderHeavyComp";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <h1 className="font-menlo">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        adipisci labore vel consequatur tempora officia amet illo. Doloremque,
        id sint rerum eius soluta necessitatibus saepe eaque hic aspernatur sed
        temporibus.
      </h1>
      {/* <Image
        src="https://zandokh.com/image/catalog/banner/2023/pchum-ben/pcb-sale1.jp"
        alt="hats"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      <RenderHeavyComp />
    </main>
  );
}

export const metadata: Metadata = {
  title: "home page",
  description: "home page description",
};
