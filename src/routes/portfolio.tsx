import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Our Portfolio</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="aspect-square overflow-hidden rounded-lg bg-gray-200"
          >
            <div className="flex h-full w-full items-center justify-center text-gray-400">
              Project {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
