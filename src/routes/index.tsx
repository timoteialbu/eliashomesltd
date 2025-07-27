import { createFileRoute } from "@tanstack/react-router";
import AnimatedHeroBackground from "../components/AnimatedHeroBackground";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-brand-off-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary relative h-[80vh]">
        <AnimatedHeroBackground />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto flex h-full items-center px-4">
          <div className="relative z-10 max-w-2xl text-white">
            <h1 className="mb-4 text-5xl font-bold">
              Transform Your Space with Expert Tile Setting
            </h1>
            <p className="mb-8 text-xl">
              Professional tile installation services for your home and business
            </p>
            <button className="bg-accent hover:bg-opacity-90 rounded-lg px-8 py-3 text-lg font-semibold text-white transition-colors">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-brand-off-white py-20">
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
                  <p className="text-brand-gray">
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
      <section className="bg-brand-off-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-4xl font-bold">About Us</h2>
            <p className="text-brand-gray mb-6">
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
                  <div className="text-accent text-3xl font-bold">
                    {stat.number}
                  </div>
                  <div className="text-brand-gray">{stat.label}</div>
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
                <label className="text-brand-gray mb-2 block">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border px-4 py-2"
                />
              </div>
              <div>
                <label className="text-brand-gray mb-2 block">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border px-4 py-2"
                />
              </div>
              <div>
                <label className="text-brand-gray mb-2 block">Message</label>
                <textarea className="h-32 w-full rounded-lg border px-4 py-2"></textarea>
              </div>
              <button className="bg-accent hover:bg-opacity-90 w-full rounded-lg py-3 font-semibold text-white transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
