import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="mb-4 text-5xl font-bold">
              Transform Your Space with Expert Tile Setting
            </h1>
            <p className="mb-8 text-xl">
              Professional tile installation services for your home and business
            </p>
            <button className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {["Residential Tiling", "Commercial Projects", "Custom Design"].map(
              (service) => (
                <div
                  key={service}
                  className="rounded-lg bg-white p-6 shadow-lg"
                >
                  <h3 className="mb-4 text-xl font-semibold">{service}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-lg bg-gray-200"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-4xl font-bold">About Us</h2>
            <p className="mb-6 text-gray-600">
              With over 15 years of experience, we've established ourselves as
              leaders in professional tile setting. Our commitment to quality
              and attention to detail sets us apart.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl">
            <h2 className="mb-12 text-center text-4xl font-bold">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border px-4 py-2"
                />
              </div>
              <div>
                <label className="mb-2 block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border px-4 py-2"
                />
              </div>
              <div>
                <label className="mb-2 block text-gray-700">Message</label>
                <textarea className="h-32 w-full rounded-lg border px-4 py-2"></textarea>
              </div>
              <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
