import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">About Us</h1>

      {/* Company Story */}
      <div className="mx-auto mb-16 max-w-3xl">
        <p className="mb-6 text-lg text-gray-600">
          With over 15 years of experience in professional tile setting, Elias
          Homes has established itself as a leader in residential and commercial
          tile installation. Our commitment to quality and attention to detail
          sets us apart in the industry.
        </p>
        <p className="text-lg text-gray-600">
          We take pride in transforming spaces with expert craftsmanship and
          innovative design solutions. Every project is handled with the utmost
          care and precision, ensuring lasting beauty and durability.
        </p>
      </div>

      {/* Stats Section */}
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          { number: "15+", label: "Years Experience" },
          { number: "500+", label: "Projects Completed" },
          { number: "100%", label: "Satisfaction" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg bg-white p-6 text-center shadow-lg"
          >
            <div className="mb-2 text-4xl font-bold text-blue-600">
              {stat.number}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="rounded-xl bg-gray-50 p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Why Choose Us</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            {
              title: "Expert Craftsmanship",
              description:
                "Our team brings years of experience and expertise to every project.",
            },
            {
              title: "Quality Materials",
              description:
                "We use only the highest quality materials and products.",
            },
            {
              title: "Timely Completion",
              description:
                "Projects completed on schedule without compromising quality.",
            },
            {
              title: "Customer Satisfaction",
              description:
                "Your satisfaction is our top priority on every project.",
            },
          ].map((feature) => (
            <div key={feature.title} className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
