import BestSelling from "./components/Home/BestSelling";
import Categories from "./components/Home/Categories";
import ExploreProducts from "./components/Home/ExploreProducts";
import FlashSale from "./components/Home/FlashSale";
import Hero from "./components/Home/Hero";
import NewArrival from "./components/Home/NewArrival";
import SecondHero from "./components/Home/SecondHero";
import Services from "./components/Home/Services";
export default function Home() {
  return (
   <>
   <Hero/>
   <FlashSale/>
   <Categories/>
   <BestSelling/>
   <SecondHero/>
   <ExploreProducts/>
   <NewArrival/>
   <Services/>
   </>
  );
}
