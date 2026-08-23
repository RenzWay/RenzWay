import React, {useEffect, useRef, useState} from "react";
import {getToolColor, project, skills} from "../model/model";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {AiFillProject} from "react-icons/ai";
import Typed from "typed.js";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {reAnimateLogo, reAnimateProjects, reAnimateSkills, reAnimateStats} from "@/recycle/regsap";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
    const [navOpen, setNavOpen] = useState(false);
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                `passionate about building <b>beautiful</b> and <b>functional</b>\n        
        web apps. Always learning, always creating.`,
            ],
            typeSpeed: 10,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        gsap.from(".header", {
            y: -100,
            ease: "power3.out",
            duration: 1
        })

        // Logo dan foto profil
        // reAnimateLogo({target: ".image"});
        reAnimateLogo({target: "#profile"});

        // Hero stats section (bisa ikon atau angka)
        reAnimateStats({selector: ".ani-logo"});

        reAnimateProjects({selector: ".card"})
        reAnimateSkills({selector: ".card-skill"})
    }, [])

    return (
        <section
            id="header"
            className="bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col font-sans"
        >
            {/* Header */}
            <header
                className="header flex items-center justify-between px-6 md:px-12 py-4 md:py-6 bg-white bg-opacity-90 backdrop-blur-sm shadow-lg z-10 sticky top-0 cursor-pointer">
                <div className="flex items-center gap-3">
                    <img
                        src="https://i.pravatar.cc/40?img=3"
                        alt="Logo"
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-indigo-400 object-cover image"
                    />
                    <a
                        href="#header"
                        className="text-2xl md:text-3xl font-bold text-gray-900"
                    >
                        RenzWay
                    </a>
                </div>
                {/* Desktop Nav */}
                <nav className="hidden sm:flex gap-4 md:gap-8">
                    <a
                        href="#projects"
                        className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 relative group"
                    >
                        Projects
                        {/* Underline effect on hover */}
                        <span
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#skills"
                        className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 relative group"
                    >
                        Skills
                        <span
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#about"
                        className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 relative group"
                    >
                        About
                        <span
                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </nav>
                {/* Hamburger Button */}
                <button
                    className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                    onClick={() => setNavOpen((prev) => !prev)}
                    aria-label="Open navigation menu"
                >
          <span
              className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${
                  navOpen ? "rotate-45 translate-y-2" : ""
              }`}
          ></span>
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${
                            navOpen ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                            navOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    ></span>
                </button>
                {/* Mobile Nav */}
                {navOpen && (
                    <nav
                        className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 gap-4 sm:hidden z-50 animate-fade-in">
                        <a
                            href="#projects"
                            className="text-gray-700 hover:text-indigo-600 font-medium"
                            onClick={() => setNavOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="#skills"
                            className="text-gray-700 hover:text-indigo-600 font-medium"
                            onClick={() => setNavOpen(false)}
                        >
                            Skills
                        </a>
                        <a
                            href="#about"
                            className="text-gray-700 hover:text-indigo-600 font-medium"
                            onClick={() => setNavOpen(false)}
                        >
                            About
                        </a>
                    </nav>
                )}
            </header>

            {/* Hero & Stats */}
            <div
                className="flex flex-col md:flex-row items-center justify-center flex-1 px-6 md:px-12 py-16 md:py-24 gap-12 md:gap-20">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="hero-intro text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                        Hi, I'm <span className="text-indigo-600">RenzWay</span> 👋
                    </h1>
                    <p className="hero-intro text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                        <span className="font-bold text-sky-400">
                          Web Developer & UI Designer
                        </span>{" "}
                        <span ref={el} id="introdution"></span>
                    </p>

                    <div className="flex gap-6 mb-6 sm:justify-center sm:items-center">
                        {/* Ikon Sosial Media dari React Icons */}
                        <a
                            href="https://github.com/RenzWay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ani-logo hover:scale-110 transition-transform duration-300 text-gray-600 hover:text-indigo-600"
                        >
                            <FaGithub size={32}/> {/* Menggunakan ikon GitHub */}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/narendra-dika-prasoca-33b414313/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ani-logo hover:scale-110 transition-transform duration-300 text-gray-600 hover:text-indigo-600"
                        >
                            <FaLinkedin size={32}/> {/* Menggunakan ikon LinkedIn */}
                        </a>
                        <a
                            href="https://www.instagram.com/renzzz_178/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ani-logo hover:scale-110 transition-transform duration-300 text-gray-600 hover:text-indigo-600"
                        >
                            <FaInstagram size={32}/> {/* Menggunakan ikon Instagram */}
                        </a>
                    </div>

                    <div className="flex sm:justify-center">
                        <button
                            onClick={() => alert("Fitur belum ditambahkan")}
                            className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Download CV
                        </button>
                    </div>
                </div>
                <img
                    src="https://i.pravatar.cc/300?img=3"
                    alt="Profile"
                    className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-indigo-400 transform hover:scale-105 transition-transform duration-300 "
                    id="profile"
                />
            </div>

            {/* Projects Grid */}
            <section
                id="projects"
                className="px-6 md:px-12 py-16 bg-white bg-opacity-90 backdrop-blur-sm"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
                    Featured <span className="text-indigo-600">Projects</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {/* mulai dari sini */}
                    {project.map((i) => (
                        <div
                            key={i.id}
                            className="card bg-white rounded-2xl shadow-xl p-6 flex flex-col items-start hover:scale-[1.02] transition-transform duration-300 border border-transparent hover:border-indigo-600 cursor-pointer"
                        >
                            <div
                                className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                                <AiFillProject size={32}/> {/* Menggunakan ikon project */}
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
                                            tool
                                        )} text-xs font-semibold px-2.5 py-0.5 rounded-full`}
                                    >
                    {tool}
                  </span>
                                ))}
                            </div>
                            <a
                                href={i.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 font-semibold hover:underline flex items-center gap-1 mt-auto"
                            >
                                Lihat Project
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
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
                            className="card-skill bg-white text-indigo-700 font-medium px-4 py-2 rounded-full shadow-md hover:bg-indigo-100 hover:scale-105 transition-all duration-300 select-none"
                        >
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
