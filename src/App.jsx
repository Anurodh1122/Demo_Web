import Hero from "./sections/Hero";
import Header from "./components/Header";
import PlatformOverview from "./sections/PlatformOverview";
import RolePortals from "./sections/RolePortals";
import PortalPreviews from "./sections/PortalPreviews";
import CTAFooter from "./sections/CTAFooter";

export default function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <PlatformOverview />
        <RolePortals />
        <PortalPreviews />
        <CTAFooter />
      </main>
    </div>
  );
}
