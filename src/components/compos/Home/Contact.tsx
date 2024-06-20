import Link from "next/link";
import React from "react";

export const Contact = () => {
  return (
    <section className="py-16 px-8 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 dark:text-green-500 mb-4">
          Get in Touch with Us
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
          We would love to hear from you! Whether you have a question, feedback, or just want to say hello, our team is here to listen and assist you.
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-400 mb-8">
          Feel free to reach out using the form on our contact page. We're committed to providing you with the best support and answering all your queries promptly.
        </p>
        <Link href="/contact">
          <button className="inline-block px-8 py-3 text-lg font-semibold text-white bg-green-700 dark:bg-green-500 rounded-full shadow-md hover:bg-green-600 dark:hover:bg-green-400 transition-colors duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
