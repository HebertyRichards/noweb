import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CollaborationSection } from "./components/ColaborationSection";
import { EmpoweringBrands } from "./components/EmpoweringBrands";
import { StatsAndVideo } from "./components/StatsAndVideo";
import { WorkflowSection } from "./components/WorkFlowSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <CollaborationSection />
      <EmpoweringBrands />
      <StatsAndVideo />
      <WorkflowSection />
    </div>
  );
}

export default App;
