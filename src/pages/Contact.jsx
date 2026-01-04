import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent successfully!");
    e.target.reset();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="mb-8 w-full max-w-lg text-center">
        <h1 className="text-5xl">
          Contact <span className="activeNav">Us</span>
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Have a question or feedback? We’d love to hear from you.
        </p>
      </div>

      {/* Form */}
      <div className="card w-full max-w-lg rounded-xl bg-white shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">Your Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">Your Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="label">Subject</label>
              <input
                type="text"
                placeholder="How can we help you?"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="label">Message</label>
              <textarea
                placeholder="Write your message here..."
                className="textarea textarea-bordered h-40 w-full"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn bg-common text-white w-full mt-6"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
