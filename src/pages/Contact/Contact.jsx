import './Contact.css'

function Contact() {
  return (
    <>
      <div>
        <main className="main-page">
          <div className="page">
            <div className="left-side">
              <div>
                <h1 className="contact-us">Get in touch</h1>
              </div>
              <div>
                <input
                  className="email-address"
                  type="text"
                  placeholder="  Email address"
                />
              </div>
              <div>
                <input
                  className="reasons"
                  type="text"
                  name=""
                  id=""
                  placeholder="  Reason for contacting"
                />
              </div>
              <div>
                <input
                  className="details"
                  type="text"
                  placeholder="  Additional Details"
                />
              </div>
              <div>
                <button className="contact-button" aria-placeholder="">
                  Submit
                </button>
              </div>
              <div></div>
            </div>
            <div className="right-side">
              <h1 className="call-to-action">
                Have A Cool Idea Let Us Know. We are open to a variety of ideas.
              </h1>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Contact;
