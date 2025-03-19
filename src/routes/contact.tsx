import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>
      <div className="mx-auto max-w-xl">
        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg border px-4 py-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border px-4 py-2"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="h-32 w-full rounded-lg border px-4 py-2"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
