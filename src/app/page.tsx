import ProjectsComponent from "@/components/layout/home/Projects";
import MediaComponent from "@/components/layout/home/Media";
import TechComponent from "@/components/layout/home/Tech";
import Footer from "@/components/layout/global/Footer";
import Top from "@/components/layout/home/Top";

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
