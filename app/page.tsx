import { HeroSection } from "@/components/hero-section";
import { getHeroImages } from "@/app/lib/dataFetching";

export default async function Home() {
  const images = await getHeroImages();
  console.log(images);

  return (
    <div className="pt-24">
      <HeroSection images={images} />
      <h1>Welcome to the home page</h1>
    </div>
  );
}
