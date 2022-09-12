import "./Registry.css";
import happy from "../img/happy.jpg";

const Registry = () => {
  return (
    <section className="registry" id="registry">
      <div className="registry-text">
        <h2>Our registry</h2>
        <h3>We are registed at babylist.com</h3>
      </div>
      <img src={happy} alt="happy couple" />
      <p>
        We thank you guys for supporting us in our journey. We are so excited
        for our baby to arrive, and can't wait to start setting up the room.
        Below is the registry if you would like to help us prepare for the
        baby's arrival.
      </p>
      <button>REGISTRY</button>
    </section>
  );
};

export default Registry;
