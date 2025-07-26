import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-brand-off-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary relative h-[80vh]">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl text-white">
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

// return (
//   <div className="bg-brand-off-white text-brand-gray min-h-screen font-sans">
//     {/* Navigation Bar */}
//     <nav className="sticky top-0 z-10 bg-white shadow-sm">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           <div className="flex-shrink-0">
//             <a href="#" className="text-primary text-2xl font-bold">
//               Elias Homes Ltd.
//             </a>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <a
//                 href="#"
//                 className="text-primary hover:bg-brand-off-white rounded-md px-3 py-2 text-sm font-medium"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="text-brand-gray hover:bg-brand-off-white hover:text-primary rounded-md px-3 py-2 text-sm font-medium"
//               >
//                 Listings
//               </a>
//               <a
//                 href="#"
//                 className="text-brand-gray hover:bg-brand-off-white hover:text-primary rounded-md px-3 py-2 text-sm font-medium"
//               >
//                 About
//               </a>
//               <a
//                 href="#"
//                 className="text-brand-gray hover:bg-brand-off-white hover:text-primary rounded-md px-3 py-2 text-sm font-medium"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <button className="bg-accent hover:bg-opacity-90 rounded-md px-4 py-2 text-sm font-medium text-white transition">
//               Get in Touch
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>

//     {/* Hero Section */}
//     <header className="bg-white">
//       <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
//         <h1 className="text-primary text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
//           Building Your <span className="text-accent">Dream Home</span>
//         </h1>
//         <p className="text-brand-gray mx-auto mt-6 max-w-2xl text-xl">
//           Experience the perfect blend of modern design, quality
//           craftsmanship, and timeless elegance with Elias Homes.
//         </p>
//         <div className="mt-8 flex justify-center gap-x-4">
//           <a
//             href="#"
//             className="bg-primary hover:bg-opacity-90 inline-block rounded-md border border-transparent px-8 py-3 text-base font-medium text-white"
//           >
//             Explore Properties
//           </a>
//           <a
//             href="#"
//             className="border-accent text-accent hover:bg-accent/10 inline-block rounded-md border bg-transparent px-8 py-3 text-base font-medium"
//           >
//             Learn More
//           </a>
//         </div>
//       </div>
//     </header>

//     {/* Feature Section */}
//     <main className="bg-brand-off-white py-12">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-accent text-base font-semibold tracking-wide uppercase">
//             Our Commitment
//           </h2>
//           <p className="text-primary mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
//             Quality in Every Detail
//           </p>
//           <p className="text-brand-gray mx-auto mt-4 max-w-2xl text-lg">
//             We believe a home is more than just a structure. It's a sanctuary
//             built with passion, precision, and the finest materials.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           <div className="rounded-lg bg-white p-6 shadow">
//             <h3 className="text-primary text-lg font-medium">
//               Modern Architecture
//             </h3>
//             <p className="text-brand-gray mt-2 text-base">
//               Clean lines, open spaces, and sustainable materials define our
//               architectural approach.
//             </p>
//           </div>
//           <div className="rounded-lg bg-white p-6 shadow">
//             <h3 className="text-primary text-lg font-medium">
//               Premium Locations
//             </h3>
//             <p className="text-brand-gray mt-2 text-base">
//               Our properties are situated in prime, sought-after neighborhoods
//               with excellent amenities.
//             </p>
//           </div>
//           <div className="rounded-lg bg-white p-6 shadow">
//             <h3 className="text-primary text-lg font-medium">
//               Unmatched Craftsmanship
//             </h3>
//             <p className="text-brand-gray mt-2 text-base">
//               With decades of experience, our team ensures every home is built
//               to the highest standards.
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>

//     {/* Footer */}
//     <footer className="bg-primary text-white">
//       <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
//         <p>
//           &copy; {new Date().getFullYear()} Elias Homes Ltd. All rights
//           reserved.
//         </p>
//       </div>
//     </footer>
//   </div>
// );
