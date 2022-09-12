import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-scroll";
import classes from "./MobileNavigation.module.css";

const NavLinks = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ul className={classes.navLinks} ref={ref}>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        style={{
          transform: isInView ? "none" : "translateY(25px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <li>Our story</li>
      </Link>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <Link
        to="registry"
        spy={true}
        smooth={true}
        duration={500}
        offset={50}
        className="mid"
        onClick={() => props.isMobile && props.closeMobileMenu()}
        style={{
          transform: isInView ? "none" : "translateY(25px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <li>Registry</li>
      </Link>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <Link
        to="rsvp"
        spy={true}
        smooth={true}
        duration={500}
        offset={25}
        onClick={() => props.isMobile && props.closeMobileMenu()}
        style={{
          transform: isInView ? "none" : "translateY(25px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}
      >
        <li>RSVP</li>
      </Link>
      <h1
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s linear 1s",
        }}
      >
        Made at&nbsp;
        <span>
          <a href="https://www.pixelinvite.com/" className={classes.site}>
            PixelInvite.com
          </a>
        </span>
      </h1>
    </ul>
  );
};

export default NavLinks;
