import Fact from "../../components/Facts/Fact";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Ngo from "../../components/NGO/Ngo";

import "../../app.css";

const HomePage = () => {
  return (
    <div className="App">
      <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
      </div>
      <Ngo/>
      <Fact/>
    </div>
  );
};

export default HomePage;