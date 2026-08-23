export function HeaderHome({navOpen,setNavOpen}){
    return(
              <header className="header flex items-center justify-between px-6 md:px-12 py-4 md:py-6 bg-white bg-opacity-90 backdrop-blur-sm shadow-lg z-10 sticky top-0 cursor-pointer">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-indigo-400 object-cover image"
          />
          <a
            href="#header"
            className="text-2xl md:text-3xl font-bold text-gray-900">
            RenzWay
          </a>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-4 md:gap-8">
          <a
            href="#projects"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 relative group">
            Projects
            {/* Underline effect on hover */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 relative group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        {/* Hamburger Button */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setNavOpen((prev) => !prev)}
          aria-label="Open navigation menu">
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${
              navOpen ? "rotate-45 translate-y-2" : ""
            }`}></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-300 ${
              navOpen ? "opacity-0" : ""
            }`}></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              navOpen ? "-rotate-45 -translate-y-2" : ""
            }`}></span>
        </button>
        {/* Mobile Nav */}
        {navOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 gap-4 sm:hidden z-50 animate-fade-in">
            <a
              href="#projects"
              className="text-gray-700 hover:text-indigo-600 font-medium"
              onClick={() => setNavOpen(false)}>
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-indigo-600 font-medium"
              onClick={() => setNavOpen(false)}>
              Skills
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-indigo-600 font-medium"
              onClick={() => setNavOpen(false)}>
              About
            </a>
          </nav>
        )}
      </header>
    )
}