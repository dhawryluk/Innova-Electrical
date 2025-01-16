import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nscsv0b", "template_d9y4hy4", form.current, {
        publicKey: "VcIB62HdSA8oGv4IJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="h-screen w-2/3 m-auto flex flex-col gap-2 text-xl text-light"
    >
      <h1 className="text-2xl text-center my-6">Get in touch!</h1>
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        className="bg-bgSecondary rounded-md p-2"
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className="bg-bgSecondary rounded-md p-2"
      />
      <label>Message</label>
      <textarea name="message" className="bg-bgSecondary rounded-md p-2" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
