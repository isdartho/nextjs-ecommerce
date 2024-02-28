import Image from "next/image";
import ImageCarousel from "./components/ui/image-carousel/image-carousel";
import Cards from "./components/ui/cards/cards";

export default function Home() {
  return (
    <main className="">
      <div className="ad-banner-carousel w-full h-screen max-w-8xl mx-auto">
        <ImageCarousel />
      </div>
      <div className="content-head container flex justify-center mx-auto">
        <h1 className="p-5 text-2xl">Products</h1>
      </div>
      <div className="content-body container flex justify-center mx-auto my-5">
        <Cards />
      </div>
    </main>
  );
}
