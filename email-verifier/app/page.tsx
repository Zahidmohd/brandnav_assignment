import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Verifier from "./components/Verifier";
import Working from "./components/Working";

const Home = () => {
  return (
    <main className="bg-[#09061A]">
      <Hero />
      <Working />
      <Features />
      <Pricing />
      <Verifier />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Home;
