import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { contactFormAction } from "../server/contact";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // 'loading', 'success', 'error'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await contactFormAction({
        data: { name, email, message },
      });

      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        console.error("Form submission error:", result.error);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>
      <div className="mx-auto max-w-xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-brand-gray mb-2 block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg border px-4 py-2"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-brand-gray mb-2 block" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border px-4 py-2"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-brand-gray mb-2 block" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="h-32 w-full rounded-lg border px-4 py-2"
              placeholder="How can we help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-accent hover:bg-opacity-90 w-full rounded-lg py-3 font-semibold text-white transition-colors"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500">
              Failed to send message. Please try again later.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
