import "./About.css";
import couple from "../img/couple.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <img src={couple} alt="couple" />
      <div className="about-text">
        <h1>Our story</h1>
        <p>
          Hi everyone! We ask you to please join us, as we begin to prepare for
          the birth of our baby boy. Our beautfiul boy is healthy, and
          everything is going great. At our last doctors appointment he had a
          heartbeat of 110 BPM and is now the size of an avocado! We are looking
          forward to seeing family and friends as we prepare for the birth of
          our boy. Please RSVP on the site and visit the registry; thank you
          from the bottom of our hearts.
        </p>
        <h3 id="note">
          Love,<br></br>Kristen and Mike
        </h3>
      </div>
    </section>
  );
};

export default About;
