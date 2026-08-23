import { getToolColor,project } from "../script/model/model";
import { AiFillProject } from "react-icons/ai";

export function ProjectGrid() {
  return (
    <>
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
    </>
  );
}
