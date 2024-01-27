import React, { useEffect, useRef} from "react";

import "./Home.css";

import Footer from "../../components/Footer/Footer";
import StatsSection from "../../components/StatsSection/StatsSection";
import * as basicScroll from "basicscroll";
import JoinUs from "../../components/JoinUs/JoinUs";

function Home() {
  
  let parallexElement = useRef();
  useEffect(() => {
    let observer = new IntersectionObserver((elements) => {
      let element = elements[0];
      if (element.isIntersecting) {
        document.querySelectorAll(".Layer").forEach((elem) => {
          const speed = elem.getAttribute("speed");

          basicScroll
            .create({
              elem: elem,
              from: 0,
              to: 519,
              direct: true,
              props: {
                "--translateY": {
                  from: "0",
                  to: `${10 * speed}px`,
                },
              },
            })
            .start();
        });
      }
    });
    observer.observe(parallexElement.current);
  }, []);

  useEffect(()=>{
    document.getElementsByClassName("bannerInner")[0].setAttribute('style','display: flex !important;')
    document.getElementsByClassName("banner")[0].setAttribute('style','height: 50rem !important;')

  },[])

  return (
    <>
      <StatsSection parallexElement={parallexElement} />
      <JoinUs/>
      <Footer />
    </>
  );
}

export default Home;
