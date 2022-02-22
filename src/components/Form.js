import emailjs from "emailjs-com";

function Form() {
  function SendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_39xc98u",
        "template_plaf5rt",
        e.target,
        "user_ot1kctrPFOU9NPpEl1J1G"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container-fluid">
      <section id="contacts" className="row justify-content-center padTop">
        <div className="col-md-7 col-lg-8">
          <h2 className="">Get In Touch</h2>
          <form className="p-4" onSubmit={SendMail}>
            <div className="row g-3">
              <div className="col-sm-6">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control input"
                  id="firstName"
                  placeholder=""
                  name="name"
                />
              </div>
              <div className="col-sm-6">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control input"
                  id="lirstName"
                  placeholder=""
                  name="last_name"
                />
              </div>
              <div className="col-12">
                <label>Email</label>
                <input
                  type="mail"
                  className="form-control input"
                  id="email"
                  placeholder=""
                  name="email"
                />
              </div>
              <div className="col-12">
                <label>Message</label>
                <textarea
                  type="text"
                  className="form-control input"
                  id="message"
                  placeholder=""
                  name="message"
                />
              </div>
            </div>
            <div className="d.flex text-center">
              <button type="submit" className="btn button-submit mt-4">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
