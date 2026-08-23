import React, { useEffect, useRef, useState } from "react";
import { getToolColor, project, skills } from "../model/model";
import { AiFillProject } from "react-icons/ai";
import Typed from "typed.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  reAnimateLogo,
  reAnimateProjects,
  reAnimateSkills,
  reAnimateStats,
} from "@/recycle/regsap";
import { HeaderHome } from "../../components/HeaderHome";
import { HeroStats } from "../../components/HeroStats";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    gsap.from(".header", {
      y: -100,
      ease: "power3.out",
      duration: 1,
    });

    // Logo dan foto profil
    // reAnimateLogo({target: ".image"});
    reAnimateLogo({ target: "#profile" });

    // Hero stats section (bisa ikon atau angka)
    reAnimateStats({ selector: ".ani-logo" });

    reAnimateProjects({ selector: ".card" });
    reAnimateSkills({ selector: ".card-skill" });
  }, []);

  return (
    <section
      id="header"
      className="bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col font-sans">
      {/* Header */}
      <HeaderHome navOpen={navOpen} setNavOpen={setNavOpen} />

      {/* Hero & Stats */}
      <HeroStats />

      {/* Projects Grid */}
      <section
        id="projects"
        className="px-6 md:px-12 py-16 bg-white bg-opacity-90 backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Featured <span className="text-indigo-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* mulai dari sini */}
          {project.map((i) => (
            <div
              key={i.id}
              className="card bg-white rounded-2xl shadow-xl p-6 flex flex-col items-start hover:scale-[1.02] transition-transform duration-300 border border-transparent hover:border-indigo-600 cursor-pointer">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                <AiFillProject size={32} /> {/* Menggunakan ikon project */}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {i.title}
              </h3>
              <p className="text-gray-700 mb-4 text-base">{i.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {i.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`${getToolColor(
                      tool,
                    )} text-xs font-semibold px-2.5 py-0.5 rounded-full`}>
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href={i.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold hover:underline flex items-center gap-1 mt-auto">
                Lihat Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section (Tambahan) */}
      <section id="skills" className="px-6 md:px-12 py-16 bg-indigo-50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          My <span className="text-indigo-600">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="card-skill bg-white text-indigo-700 font-medium px-4 py-2 rounded-full shadow-md hover:bg-indigo-100 hover:scale-105 transition-all duration-300 select-none">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* About Section (Tambahan) */}
      <section id="about" className="px-6 md:px-12 py-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg md:text-xl leading-relaxed">
          <p className="mb-4">
            Saya adalah seorang pengembang web yang bersemangat dalam membangun
            aplikasi web yang menarik dan efisien. Saya suka mengubah ide
            kompleks menjadi antarmuka pengguna yang intuitif dan menarik.
          </p>
          <p className="mb-4">
            Dengan latar belakang yang kuat di <b>front-end development</b> dan
            minat yang mendalam pada <b>UI/UX design</b> dan{" "}
            <b>back-end development</b>, saya terus berinovasi dan mencari cara
            baru untuk meningkatkan pengalaman pengguna. Saya percaya pada
            kekuatan belajar seumur hidup dan selalu mencari tantangan baru
            untuk mengasah kemampuan.
          </p>
          <p>
            Selain coding, saya suka bermain game, dan mengeksplorasi teknologi
            baru. Mari berkolaborasi dan wujudkan ide-ide brilian Anda!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-6 bg-gray-900 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} RenzWay. All rights reserved.</p>
        <p className="mt-2">
          Built with <span className="text-pink-500">&hearts;</span> and{" "}
          <span className="text-blue-400">Vite + React + TailwindCSS</span>.
        </p>
      </footer>
    </section>
  );
}
