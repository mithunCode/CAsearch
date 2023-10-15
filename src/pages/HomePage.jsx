import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import JoinUs from "../sections/JoinUs";
import Platform from "../sections/Platform";

const HomePage = () => {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <JoinUs />
      <Platform />
      <Footer />
    </div>
  );
};

export default HomePage;
