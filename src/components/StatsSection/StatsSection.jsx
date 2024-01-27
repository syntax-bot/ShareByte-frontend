import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';
import "./StatsSection.css";
export default function StatsSection({ parallexElement }) {
  let [counterFlag,setCounterFlag]=useState(false);
  useEffect(() => {
    let observer = new IntersectionObserver((elements) => {
      let element = elements[0];
      if (element.isIntersecting) {
        setCounterFlag(true);
      }
      else{
        setCounterFlag(false);
      }
    });
    observer.observe(document.getElementById("statsSub2"));
  }, []);
  return (
    <>
      <section className="parallax">
        <img className="Layer" speed="24" src="/parallex/p0.png" />
        <img className="Layer" speed="18" src="/parallex/p1.png" />
        <img className="Layer" speed="12" src="/parallex/p2.png" />
        <img className="Layer" speed="8" src="/parallex/p3.png" />
        <img className="Layer" speed="6" src="/parallex/p4.png" />
        <img className="Layer" speed="0" src="/parallex/p5.png" />
        <div ref={parallexElement} className="IntoViewDetector"></div>
      </section>
      <div className="statsData">
        <h2>The Idea</h2>
        <div className="statsSub">
          <div className="statsSub1">
            <h4>Who are We?</h4>
            <p>
              Who we are? The Robin Hood Army is a volunteer based, zero-funds
              organization that works to get surplus food from restaurants and
              the community to serve less fortunate people.
              <br />
              Our local chapters are run by friends and colleagues, who hope to
              create a difference in their own unique way. For example,
              restaurants in the neighbourhood Green Park, will contribute to
              the homeless of the locality, through volunteers who live in Green
              Park. Our “Robins” are largely students and young working
              professionals - everyone does this in their free time. The lesser
              fortunate sections of society we serve include homeless families,
              orphanages, patients from public hospitals, and old age homes.
            </p>
            <h4>Our Vision</h4>
            <p>
              Simple really, beat global hunger and bring out the best of
              humanity using food as a medium.
              <br />
              The idea is to create self-sustained chapters across the world who
              will look after their local community. And in the process, inspire
              people around us to give back to those who need it most.
            </p>
          </div>
          <div id="statsSub2" className="statsSub2">
            <div>
              <img src="/icons/mea" alt="person" />
              <h5 className="mealsCount">+{counterFlag?<CountUp end={100} />:<>0</>}</h5>
              <h5>Meals Served</h5>
            </div>
            <div>
              <img src="/icons/hero" alt="person" />
              <h5 className="personCount">+{counterFlag?<CountUp end={100} />:<>0</>}</h5>
              <h5>Heroes Enlisted</h5>
            </div>
            <div>
              <img src="/icons/per" alt="person" />
              <h5 className="personCount">%{counterFlag?<CountUp end={100} />:<>0</>}</h5>
              <h5>Target Achieved</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

