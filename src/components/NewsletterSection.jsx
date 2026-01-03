import React from "react";
import toast, { Toaster } from "react-hot-toast";

const NewsletterSection = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully!");
    e.target.reset();
  };

  return (
    <section className="py-16 w-full bg-gray-50">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-6xl  mb-4">
            Join Our <span className="activeNav">Newsletter</span>
          </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Stay updated with the latest tips, articles, and habit-building strategies.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="input input-bordered w-full sm:flex-1"
          />
          <button type="submit" className="btn bg-common text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-lg border-none hover:bg-gray-100 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
