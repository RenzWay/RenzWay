import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  reAnimateLogo,
  reAnimateProjects,
  reAnimateSkills,
  reAnimateStats,
} from "@/recycle/regsap";
import { HeroStats } from "../../components/HeroStats";
import { HeaderHome } from "../../components/HeaderHome";
import { ProjectGrid } from "../../components/ProjectGrid";
import { Skills } from "../../components/Skills";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
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
      <HeaderHome />

      {/* Hero & Stats */}
      <HeroStats />

      {/* Projects Grid */}
      <ProjectGrid />

      {/* Skills Section (Tambahan) */}
      <Skills />

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
