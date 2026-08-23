import { useRef, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Typed from "typed.js";

export function HeroStats() {
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
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-6 md:px-12 py-16 md:py-24 gap-12 md:gap-20">
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
              className="ani-logo hover:scale-110 transition-transform duration-300 text-gray-600 hover:text-indigo-600">
              <FaGithub size={32} /> {/* Menggunakan ikon GitHub */}
            </a>
            <a
              href="https://www.linkedin.com/in/narendra-dika-prasoca-33b414313/"
              target="_blank"
              rel="noopener noreferrer"
              className="ani-logo hover:scale-110 transition-transform duration-300 text-gray-600 hover:text-indigo-600">
              <FaLinkedin size={32} /> {/* Menggunakan ikon LinkedIn */}
            </a>
            <a
              href="https://www.instagram.com/renzzz_178/"
              target="_blank"
              rel="noopener noreferrer"
              className="ani-logo hover:scale-110 transition-transform duration-300 text-gray-600 hover:text-indigo-600">
              <FaInstagram size={32} /> {/* Menggunakan ikon Instagram */}
            </a>
          </div>

          <div className="flex sm:justify-center">
            <button
              onClick={() => alert("Fitur belum ditambahkan")}
              className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1">
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
    </>
  );
}
