"use client"
import React, { useRef, useState } from "react";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Cta from "./common/Cta";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        if (value && validateEmail(value)) {
            setError(""); // ✅ clear error automatically if valid
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const emailValue = form.current.email.value.trim();

        // Custom validation
        if (!emailValue) {
            setError("Please enter your email address.");
            return;
        } else if (!validateEmail(emailValue)) {
            setError("Please enter a valid email address.");
            return;
        }

        // If valid → clear error
        setError("");

        // send via EmailJS
        emailjs
            .sendForm(
                "service_krvtb88", // your service ID
                "template_nd92fqi", // your template ID
                form.current,
                "ACFWkn8tsi2tt71D6" // your public key
            )
            .then(
                () => {
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent!",
                        text: "Thanks for connecting. I'll get back to you soon ✅",
                        confirmButtonColor: "#f97316",
                    });
                    form.current.reset();
                },
                () => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong. Please try again ❌",
                        confirmButtonColor: "#ef4444",
                    });
                }
            );
    };

    return (
        <div className="max-w-6xl mx-auto px-8 py-16 text-center">
            <Heading className="!text-center">Let’s Build Something Great Together</Heading>
            <Paragraph className="!mt-5 md:!mb-12 !mb-8">
                Let’s stay connected! Share your email and I’ll get back to you soon.
            </Paragraph>

            <form
                ref={form}
                onSubmit={sendEmail}
                noValidate
                className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4"
            >
                <div className="w-full">
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleInputChange} 
                        className="px-4 py-3 rounded border outline-none border-gray-300 w-full"
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>

                <Cta type="submit" className="!h-[50px]">Contact Me</Cta>
            </form>
        </div>
    );
};

export default Contact;
