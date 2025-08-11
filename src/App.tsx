import { Header } from "./templates/Header";
import { Hero } from "./components/Hero";
import { CollaborationSection } from "./components/ColaborationSection";
import { EmpoweringBrands } from "./components/EmpoweringBrands";
import { StatsAndVideo } from "./components/StatsAndVideo";
import { WorkflowSection } from "./components/WorkFlowSection";
import { DrivingSuccessSection } from "./components/DrivingSuccessSection";
import { Footer } from "./templates/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <CollaborationSection />
      <EmpoweringBrands />
      <StatsAndVideo />
      <WorkflowSection />
      <DrivingSuccessSection />
      <Footer />
    </div>
  );
}

export default App;
