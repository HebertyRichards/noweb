import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CollaborationSection } from "./components/ColaborationSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <CollaborationSection />
    </div>
  );
}

export default App;
