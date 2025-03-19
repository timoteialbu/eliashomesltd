import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Our Services</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Residential Tiling",
            description:
              "Expert tile installation for your home, including bathrooms, kitchens, and living spaces.",
          },
          {
            title: "Commercial Projects",
            description:
              "Professional tiling solutions for businesses, restaurants, and retail spaces.",
          },
          {
            title: "Custom Design",
            description:
              "Unique tile patterns and designs to match your specific style and preferences.",
          },
          {
            title: "Bathroom Remodeling",
            description:
              "Complete bathroom renovation and waterproofing services.",
          },
          {
            title: "Kitchen Backsplashes",
            description:
              "Beautiful and functional kitchen backsplash installation.",
          },
          {
            title: "Repair & Maintenance",
            description:
              "Tile repair, grout cleaning, and maintenance services.",
          },
        ].map((service) => (
          <div
            key={service.title}
            className="rounded-lg bg-white p-6 shadow-lg"
          >
            <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
