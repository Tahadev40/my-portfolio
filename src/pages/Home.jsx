import React, { useState } from "react";
import { href } from "react-router-dom";

const Home = () => {
  const projects = [
    {
      id: "01",
      image: "./assets/images/ject1.webp",
      name: "Personal Portfolio",
      year: "2025",
      client: "Taha Ali",
      role: "Front-End Developer",
      studio: "Not foe studio",
      description:
        "A modern, clean-styled portfolio showcasing work with simplicity and elegance, built to focus on clarity, speed, and professional UI/UX.",
    },
    {
      id: "02",
      image: "./assets/images/ject2.webp",
      name: "Sneakers Store",
      year: "2025",
      client: "Arezon",
      role: "MERN",
      studio: "Arezonic",
      description:
        "A modern sneaker store built with a product-first approach, offering users sleek UI, smooth cart flow, and a mobile-friendly responsive shopping experience.",
    },
    {
      id: "03",
      image: "./assets/images/ject3.webp",
      name: "Portfolio",
      year: "2024",
      client: "Taha Ali",
      role: "Full-Stack",
      studio: "Not for studio",
      description:
        "A dynamic, animation-driven portfolio site built to engage users with smooth page transitions and scroll-based motion for an immersive experience.",
    },
    {
      id: "04",
      image: "./assets/images/ject4.webp",
      name: "Cykle",
      year: "2025",
      client: "Gaint",
      role: "Webflow-designer",
      studio: "Gaint-bikes",
      description:
        "A modern and responsive cycling website designed to explore various cycle categories, featuring CMS filtering, detailed product views, and a clean user experience for all riders.",
    },
    {
      id: "05",
      image: "./assets/images/ject5.webp",
      name: "Bmw",
      year: "2025",
      client: "Personal project",
      role: "Webflow-designer",
      studio: "Not for studio",
      description:
        "A premium BMW showcase website crafted to reflect luxury and performance, highlighting car models with sleek visuals, smooth navigation, and an immersive brand experience.",
    },
    {
      id: "06",
      image: "./assets/images/ject6.webp",
      name: "Car-Booking",
      year: "2022",
      client: "Adrian",
      role: "Frontend-developer",
      studio: "Fastic",
      description:
        "A streamlined car booking platform built for smooth scheduling, real-time availability, and a user-friendly interface tailored for quick vehicle reservations.",
    },
    {
      id: "07",
      image: "./assets/images/ject7.webp",
      name: "SunDown Studio",
      year: "2023",
      client: "Sundown",
      role: "Frontend-developer",
      studio: "Sundown-st",
      description:
        "A creative studio site for Sundown, designed to highlight their visual work, brand tone, and project showcase through bold layouts and design precision.",
    },
    {
      id: "08",
      image: "./assets/images/ject8.webp",
      name: "Raybon",
      year: "2023",
      client: "Sartakh",
      role: "website-designer",
      studio: "Sheriyans",
      description:
        "A stylish and sleek Rayban product website focused on premium eyewear display, product filtering, and an elegant user experience with modern aesthetics.",
    },
    {
      id: "09",
      image: "./assets/images/ject9.webp",
      name: "Tripjapan",
      year: "2024",
      client: "zuck",
      role: "Frontend-developer",
      studio: "tripjapan",
      description:
        "A visually rich and informative travel website designed for exploring Japan, featuring curated destinations, booking options, and a clean navigation flow.",
    },
    {
      id: "10",
      image: "./assets/images/ject10.webp",
      name: "Tomato",
      year: "202",
      client: "Personal Project",
      role: "MERN",
      studio: "Not for studio",
      description:
        "A fast and user-friendly food delivery app offering real-time order tracking and a smooth checkout experience.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="scroll-smooth">
        <div className="h-screen bg-[#54625A] font-neue  text-[#0B1014] flex flex-col justify-between p-6 md:p-8">
          {/* Top Main Heading */}
          <div className="py-20">
            <div>
              <h1 className="text-[3.5rem] md:text-[6.4rem] tracking-tight leading-tight  leading-none font-neue">
                Swiss Creative
                <br />
                Website-Developer
              </h1>
            </div>
          </div>

          {/* Bottom Information Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm md:text-base text-[#0B1014] mb-6">
            <div className="col-span-2 md:col-span-1">
              <p className="text-[2.2rem]">Folio:05</p>
            </div>
            <div>
              <p className="text-[#0B1014] font-medium">Availability:</p>
              <p>Full Time</p>
            </div>
            <div>
              <p className="text-[#0B1014] font-medium">Contact:</p>
              <p>tahanawazkhan555@gmail.com</p>
            </div>
            <div>
              <p className="text-[#0B1014] font-medium">Current location:</p>
              <p>Pakistan hydrabad</p>
            </div>
            <div>
              <p className="text-[#0B1014] font-medium">Copyright:</p>
              <p>©2025 Taha Ali</p>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Projects Grid */}
          <section className="bg-[#0B1014] text-[#54625A] px-6 md:px-16 py-16 font-neue">
            <div className="mb-24">
              <p className="uppercase text-sm tracking-wide">
                Featured projects: 10
              </p>
              <h2 className="text-xl md:text-4xl font-light leading-tight mt-2">
                Selection of projects highlighting{" "}
                <br className="hidden md:block" />
                diverse skills in development <br className="hidden md:block" />
                and design.
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="relative group overflow-hidden h-48 sm:h-52 md:h-56 lg:h-64 bg-gray-800 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`Project ${project.id}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                  <span className="absolute top-2 left-2 text-sm text-white/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Detail View (Slide-In) */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-[#FCF6E8] z-50 transform transition-transform duration-500 ease-in-out ${
              selectedProject ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {selectedProject && (
              <div className="font-neue px-6 md:px-8 py-8 md:py-8 h-full flex flex-col justify-between  overflow-y-auto scrollbar-hide">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <h1 className="text-[#0B1014] text-[1.6rem] font-medium">
                    Taha Ali
                  </h1>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-[#0B1014] hover:text-[#3E4945] text-[1.4rem] transition duration-300"
                  >
                    Close
                  </button>
                </div>
                {/* Main Content */}
                <div className="space-y-8 max-w-7xl">
                  <h2 className="text-[#001E62] text-[2.5rem] md:text-[4.5rem] font-bold leading-tight">
                    {selectedProject.name}
                  </h2>
                  <p className="text-[#0B1014] text-base md:text-lg max-w-xl">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-10 text-[#0B1014] text-sm md:text-base">
                    <div>
                      <p className="font-medium">Year:</p>
                      <p>{selectedProject.year}</p>
                    </div>
                    <div>
                      <p className="font-medium">Client:</p>
                      <p>{selectedProject.client}</p>
                    </div>
                    <div>
                      <p className="font-medium">Role:</p>
                      <p>{selectedProject.role}</p>
                    </div>
                    <div>
                      <p className="font-medium">Studio:</p>
                      <p>{selectedProject.studio}</p>
                    </div>
                  </div>

                  <div className="mt-20 mb-6">
                    <p className="text-[#0B1014] hover:text-[#3E4945] transition duration-300 text-[#0B1014] text-2xl md:text-3xl font-semibold cursor-pointer">
                      Explore →
                    </p>
                  </div>

                  {/* Full-width Image */}
                  <div className="w-full">
                    <img
                      src={selectedProject.image}
                      alt="Project Visual"
                      loading="lazy"
                      className="w-full h-[90vh] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
