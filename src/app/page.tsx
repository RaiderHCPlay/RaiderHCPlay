import ProjectsComponent from "@/components/home/Projects";
import MediaComponent from "@/components/home/Media";
import TechComponent from "@/components/home/Tech";
import Footer from "@/components/global/Footer";
import Top from "@/components/home/Top";

export default function Home() {
  return (
    <div className={"home-wrapper"}>
      <Top />
      <hr />
      <TechComponent />
      <hr />
      <ProjectsComponent />
      <hr />
      <MediaComponent />
      <Footer />
    </div>
  );
}
