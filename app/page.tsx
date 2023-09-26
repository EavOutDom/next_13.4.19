import Image from "next/image";
import hats from "@/public/images/hats.jpeg";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src="https://zandokh.com/image/catalog/banner/2023/pchum-ben/pcb-sale1.jpg"
        alt="hats"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
