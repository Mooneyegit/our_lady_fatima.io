import About from "@/Component/Page/About";
import Hero from "@/Component/Page/Hero";
import LifeAtHomeSecton from "@/Component/Page/LifeAtHomeSecton";
import Services from "@/Component/Page/Services";
import CtaCard from "@/Component/UI/CtaCard";
import Faq from "@/Component/UI/Faq";


export default function Home() {
  return (
   <div>
    <Hero />
    <About />
    <LifeAtHomeSecton/>
    <Services />
    <CtaCard />
    <Faq />
   </div>
  );
}
