import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHero from "../(server-components)/SectionHero";

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* <div className="container space-y-24 lg:space-y-28"> */}
      <div className="container  lg:space-y-28">

        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        <SectionGridFeaturePlaces from="/listings" />
      </div>
    </main>
  );
}

export default PageHome;
