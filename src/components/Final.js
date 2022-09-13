import { useRef } from "react";
import { useInView } from "framer-motion";
import "./Final.css";

import final from "../img/final.jpg";

const Final = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="final" ref={ref}>
      <img
        src={final}
        alt="happy couple"
        style={{
          transform: isInView ? "none" : "translateY(25px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.75s ease-in 0.25s",
        }}
      />
      <h1
        style={{
          transform: isInView ? "none" : "translateY(25px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s ease-in 0.75s",
        }}
      >
        Love you guys!
      </h1>
      <p
        style={{
          transform: isInView ? "none" : "translateY(25px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s ease-in 1s",
        }}
      >
        We hope to see you all at the shower
      </p>
    </section>
  );
};

export default Final;
