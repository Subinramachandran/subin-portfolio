import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // ✅ SweetAlert2 import

const Contact = () => {
    const form = useRef();
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2tky60n', 'template_hr8do8g', form.current, 'azl8f1biOmOm4xPX7')
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccess(true);
                    form.current.reset();

                    // ✅ SweetAlert2 success popup
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        text: 'Thank you for contacting me.',
                        confirmButtonColor: '#8b5cf6' // Tailwind purple-500
                    });
                },
                (error) => {
                    console.log(error.text);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong. Please try again later.',
                        confirmButtonColor: '#ef4444' // Tailwind red-500
                    });
                }
            );
    };

    return (
        <section id="contact" className="w-full py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 md:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 dark:text-white mb-6">
                    Contact Me
                </h2>

                <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
                    >
                        Send Message
                    </button>

                    {success && (
                        <p className="text-green-600 text-sm text-center mt-2">
                            Message sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
