import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";

// Set the modal's root element
Modal.setAppElement("#root");

const Contact = () => {
  const form = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nscsv0b",
        "template_d9y4hy4",
        form.current,
        "VcIB62HdSA8oGv4IJ"
      )
      .then(
        () => {
          setModalTitle("Success");
          setModalMessage("Your message was sent successfully!");
          setModalIsOpen(true);
        },
        () => {
          setModalTitle("Error");
          setModalMessage("Failed to send the message. Please try again.");
          setModalIsOpen(true);
        }
      );
  };

  const closeModal = () => {
    setModalIsOpen(false);
    form.current.reset();
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="h-screen w-5/6 md:w-2/3 m-auto flex flex-col gap-2 text-xl text-light"
      >
        <h1 className="text-2xl text-center my-6">
          Schedule a Consultation or Request a Quote
        </h1>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className="bg-bgSecondary rounded-md p-2"
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="bg-bgSecondary rounded-md p-2"
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          className="bg-bgSecondary rounded-md p-2"
          required
        />
        <button type="submit" className="p-2 bg-neon rounded-md text-bgPrime">
          Send
        </button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Submission Status"
        className="flex flex-col items-center justify-center bg-light rounded-lg shadow-lg max-w-md mx-auto p-4"
        overlayClassName="fixed inset-0 bg-bgSecondary bg-opacity-75 flex items-center justify-center"
      >
        <h2 className="text-lg font-semibold mb-4">{modalMessage}</h2>
        <button
          onClick={closeModal}
          className="mt-4 p-2 bg-neon rounded-md text-bgPrime"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Contact;
