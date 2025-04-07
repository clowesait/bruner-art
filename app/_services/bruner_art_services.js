import emailjs from "emailjs-com";

const SERVICE_ID = "service_p1mhtf3";
const TEMPLATE_ID = "template_9jc7w8e";
const PUBLIC_KEY = "XYWQMdGzZcAgcHF2x";

// This function sends an email using EmailJS service with the provided name, email, and message.
// It returns a success status and the result or error message.
export const sendContactEmail = async ({ name, email, message }) => {
  try {
    const result = await emailjs.send(SERVICE_ID,TEMPLATE_ID,{ name, email, message },PUBLIC_KEY);
    return { success: true, result };
  } catch (error) {
    console.error("Error:", error);
    return { success: false, error };
  }
};
