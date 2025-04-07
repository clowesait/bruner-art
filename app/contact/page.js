"use client";
import { useState } from "react";
import { sendContactEmail } from "../_services/bruner_art_services";

export default function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    // sets the form data to the state
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({...prevData,[name]: value,}));
    }

    // handles the form submission and sends the email using the sendContactEmail function
    // from the bruner_art_services.js file
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { name, email, message } = formData;
      const response = await sendContactEmail({ name, email, message });
      
      //If email is sent successfully, reset the form data
      // Otherwise, show an error message
      if (response.success) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send email. Please try again.");
      }
    };
    return (
      <main className="flex min-h-screen flex-col items-center">
        <strong className="text-3xl ">Contact Page</strong>
        <form className="w-full max-w-lg mt-8">
          <div className="mb-4">
            <label className=" text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="border rounded border-amber-600 border-b-amber-400 w-full py-2 px-3"
              name="name"
              type="text"
              onChange={handleChange}
              value={formData.name}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="border rounded border-amber-600 border-b-amber-400 border-t-amber-400 w-full py-2 px-3"
              name="email"
              
              type="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className=" text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              className="border border-amber-600 border-t-amber-400 w-full py-2 px-3"
              name="message"
              rows="4"
              onChange={handleChange}
              value={formData.message}
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-amber-400 hover:bg-amber-600 font-bold py-2 px-4  "
              type="submit"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </form>
      </main>
    );
  }