export const project = [
    {
        id: 1,
        title: "Mahasiswa Center",
        description: `Mahasiswa Center adalah aplikasi web modern yang dirancang untuk membantu mahasiswa mengelola kehidupan akademik mereka dengan lebih efisien. Dilengkapi dengan fitur penjadwalan tugas, manajemen catatan, dan dashboard personal — semua dalam satu tempat.`,
        tools: ["Nextjs", "Tailwindcss"],
        link: "https://mahasiswa-center.vercel.app/",
    },
    {
        id: 2,
        title: "TodoApp",
        description: `Web pertama dan untuk mencatat segala sesuatu yang berkaitan dengan jadwalmu`,
        tools: ["Javascript", "HTML", "CSS"],
        link: "https://renzway.github.io/Todo/",
    },
    {
        id: 3,
        title: "Webpack Starter",
        description: `Template starter untuk membuat web memakai webpack, tinggal pakai`,
        tools: ["Javascript", "HTML", "CSS", "Webpack", "Babel"],
        link: "https://renzway.github.io/webpack-starter/",
    },
    {
        id: 4,
        title: "Clock Vanilla",
        description: `Website menampilkan jam analog berbasis vanilla`,
        tools: ["Javascript", "HTML", "CSS"],
        link: "https://renzway.github.io/clock-vanilla/",
    },
    {
        id: 5,
        title: "GoNote",
        description: "Website Todolist versi lite dari mahasiswa center",
        tools: ["React", "Webpack", "Babel", "SCSS", "Tailwindcss"],
        link: "https://gonote-center.vercel.app/",
    },
    {
        id: 6,
        title: "Web Component",
        description: "Web component bootstrap + react",
        tools: ["React", "Webpack", "Babel", "SCSS", "Bootstrap"],
        link: "https://renzway.github.io/web-components/",
    },
    {
        id: 7,
        title: "Mood Swing",
        description: "WepApp untuk mencatat mood anda hari ini",
        tools: ["Vue", "Javascript", "Tailwindcss"],
        link: "https://mood-swing-979ba.web.app/",
    },
    {
        id: 8,
        title: "Currentay",
        description: "Web current tracker",
        tools: ["Vite", "Javascript", "Bootstrap"],
        link: "https://currentay.vercel.app/",
    },
];

export const skills = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Python",
    "Figma",
    "UI/UX Design",
    "Git",
    "HTML",
    "CSS",
    "Java",
    "Webpack",
    "Vite",
    "Vue",
];

// Fungsi untuk menentukan warna badge tools
export function getToolColor(tool) {
    switch (tool.toLowerCase()) {
        case "react":
        case "reactjs":
            return "bg-blue-100 text-blue-600";
        case "nextjs":
            return "bg-gray-900 text-white";
        case "vue":
        case "vuejs":
            return "bg-green-100 text-green-600"; // Warna khas Vue
        case "tailwindcss":
            return "bg-sky-100 text-sky-500";
        case "bootstrap":
            return "bg-violet-500 text-violet-200";
        case "nodejs":
        case "node":
            return "bg-green-100 text-green-600";
        case "javascript":
            return "bg-yellow-100 text-yellow-700";
        case "typescript":
            return "bg-blue-100 text-blue-800";
        case "html":
            return "bg-red-100 text-rose-500";
        case "css":
            return "bg-sky-100 text-blue-500";
        case "webpack":
            return "bg-[#8DD6F9] text-[#222222]";
        case "babel":
            return "bg-yellow-200 text-yellow-800";
        case "vite":
            return "bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 text-white";
        case "eslint":
            return "bg-purple-100 text-purple-700";
        case "prettier":
            return "bg-orange-100 text-orange-700";
        case "redux":
            return "bg-purple-200 text-purple-800";
        case "express":
            return "bg-gray-300 text-gray-800";
        case "sass":
            return "bg-pink-100 text-pink-700";
        case "graphql":
            return "bg-pink-200 text-pink-800";
        case "docker":
            return "bg-blue-200 text-blue-800";
        case "git":
            return "bg-orange-200 text-orange-800";
        case "mongodb":
            return "bg-green-200 text-green-800";
        default:
            return "bg-gray-200 text-gray-700";
    }
}
