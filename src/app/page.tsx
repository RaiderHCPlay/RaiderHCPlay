import ProjectsComponent from "@/components/home/Projects";
import MediaComponent from "@/components/home/Media";
import TechComponent from "@/components/home/Tech";
import Footer from "@/components/global/Footer";
import Top from "@/components/home/Top";
import AboutSection from "@/components/home/About";
import FavouritesSection from "@/components/home/Favourites";
import FunFactsSection from "@/components/home/FunFacts";

export default function Home() {
  return (
    <div className={"home-wrapper"}>
      <Top />
      <hr />
      <AboutSection />
      <hr />
      <TechComponent />
      <hr />
      <ProjectsComponent />
      <hr />
      <FavouritesSection />
      <hr />
      <FunFactsSection />
      <hr />
      <MediaComponent />
      <Footer />
    </div>
  );
}
