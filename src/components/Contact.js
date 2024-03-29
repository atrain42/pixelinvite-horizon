import "./Contact.css";

const Contact = () => {
  const onSubmit = () => {
    fetch('https://formsubmit.co/ajax/pixelprism42@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: 'FormSubmit',
        message: "I'm from Devro LABS",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }
  return (
    <section className="contact" id="rsvp">
      <h1>RSVP</h1>
      <form action="https://formsubmit.co/pixelprism42@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="Someone just RSVP'd!"></input>
        <input type="hidden" name="_autoresponse" value="your custom message" />
        <input
          type="text"
          name="First&nbsp;Name"
          placeholder="First Name *"
          required
        />
        <input
          type="text"
          name="First&nbsp;Name"
          placeholder="Last Name *"
          required
        />
        <h1 id="rea">Are you attending? *</h1>
        <span>
          <input
            type="radio"
            name="Are&nbsp;you&nbsp;attending"
            value="Yes"
            className="radio-btn"
          />
          <label htmlFor="I'm coming" c>
            Accept with pleasure
          </label>
        </span>
        <span>
          <input
            type="radio"
            name="Are&nbsp;you&nbsp;attending *"
            value="No"
            className="radio-btn"
          />
          <label htmlFor="I cant't make it">Decline with regret</label>
        </span>
        <textarea name="" cols="20" rows="15" placeholder="Message"></textarea>
        <button onClick={onSubmit}>submit</button>
      </form>
    </section>
  );
};

export default Contact;
