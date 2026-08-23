import { skills } from "../script/model/model";

export function Skills() {
  return (
    <>
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
    </>
  );
}
