import { useRef } from "react";
import { useInView } from "framer-motion";

import pin from "../img/pin.svg";
import "./Footer.css";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <footer className="footer">
      <div className="footer-text" ref={ref}>
        <p>Saturday, November 16, 2022</p>
        <p id="f-mid">Begins @ 2pm</p>
        <span id="loco">
          <img
            src={pin}
            alt="pin"
            id="heart"
            style={{
              transform: isInView ? "none" : "translateY(-50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
            }}
          />
          <p
            style={{
              transform: isInView ? "none" : "translateX(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
            }}
          >
            8212 Orange St. Denver, CO
          </p>
        </span>
      </div>
      <h3 id="site">
        Made at <a href="https://www.pixelinvite.com/">PixelInvite.com</a>
      </h3>
    </footer>
  );
};

export default Footer;
