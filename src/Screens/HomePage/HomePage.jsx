import Fact from "../../components/Facts/Fact";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Ngo from "../../components/NGO/Ngo";

import "../../app.css";
import Contact from "../../components/Contact/Contact";
import GetStarted from "../../components/GetStarted/GetStarted";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Ngo />
      <Fact />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default HomePage;