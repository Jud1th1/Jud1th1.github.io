function App() {
  return (
    <div className="bg-white text-dark font-body">

      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm text-primary shadow-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/assets/images/Logo.blk.png" alt="Judith logo" className="h-12 w-auto object-contain" />
        </div>

        <ul className="flex gap-6 text-xl font-medium">
          <li><a href="#projects" className="hover:text-accent1">//Projects</a></li>
          <li><a href="#about" className="hover:text-accent1">//About</a></li>
          <li><a href="#skills" className="hover:text-accent1">//Skills</a></li>
          <li><a href="#contact" className="hover:text-accent1">//Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#A08B9D] to-[#D2B4AB] text-white pt-28">
        <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-4">Hi, I'm Judith — Front-End Developer & Creative Technologist</h1>
        <p className="text-xl font-body max-w-xl mx-auto mb-6">I build beautiful, accessible web experiences that blend code, creativity, and intention. Let’s create something meaningful together.</p>
      </section>

      {/* Floating Profile Image */}
      <div className="relative z-20 -mt-20 mb-12 flex justify-center">
        <img
          src="/assets/images/Judithsmiling.jpg"
          alt="Judith smiling"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white shadow-judith object-cover"
        />
      </div>

      {/* 🖱️ Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-[28px] h-[48px] border-2 border-purple-300 shadow-[0_0_10px_#7e61ae] rounded-full flex justify-center items-start p-1 relative">
        <div className="w-[4px] h-[8px] bg-white rounded-full animate-scrollPulse"></div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="bg-[#fdfaf9] text-dark px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-heading mb-12">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {/* Project Card */}
          {[1, 2, 3, 4].map((project) => (
            <div
              key={project}
              className="bg-white border border-[#dec8e2] rounded-lg shadow-md p-6 text-left transition hover:shadow-xl"
            >
              <img
                src="/assets/images/project-thumb-placeholder.png"
                alt="Temporary Thumbnail"
                className="rounded w-full h-48 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Project Title</h3>
              <p className="text-sm font-body text-gray-700 mb-4">
                Brief description of the project—tools used, what it does, and why it matters.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-accent1 hover:bg-[#a6a0dc] px-4 py-2 rounded transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* About Section */}
      <section id="about" className="bg-[#10002B] text-[#ffffff] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"> 
        <div className="w-full">
          <h2 className="text-4xl font-heading font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg font-body leading-relaxed mb-4 text-center">
            "Hello! I'm Judith, a Front-End Developer and UX Designer with a passion for creating beautiful and inclusive digital experiences. 
            With a background in front-end development, I bring designs to life, ensuring they're both aesthetically pleasing and user-friendly.
            My work revolves around making designs intuitive, accessible, and impactful. 
            Beyond design, I love art, coffee, and spending time with my cats, bringing a unique blend of creativity and technical expertise to every project."
          </p>
        </div>
      </div>
    </section>


      {/* Skills Section */}
      <section id="skills" className="bg-[#10002B] text-[#ffffff] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold mb-10">Skills & Tools</h2>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          {/* Languages */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Languages</h3>
            <ul className="space-y-2">
              <li>HTML5</li>
              <li>CSS3 / SCSS</li>
              <li>JavaScript (ES6+)</li>
            </ul>
        </div>

        {/* Frameworks */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Frameworks & Libraries</h3>
          <ul className="space-y-2">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>jQuery</li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Tools & Workflows</h3>
          <ul className="space-y-2">
            <li>Git & GitHub</li>
            <li>Figma</li>
            <li>VS Code</li>
            <li>Netlify / Vite / NPM</li>
          </ul>
        </div>
      </div>
    </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="bg-[#f5f2f7] text-dark px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-heading mb-6">Get in Touch</h2>
          <p className="text-lg font-body mb-6">Have a project in mind or just want to say hi? I’d love to hear from you!</p>
          <form action="https://formsubmit.co/jf.jud1th1@gmail.com" method="POST" className="grid gap-4 text-left">
            <input type="text" name="name" required placeholder="Your Name" className="w-full p-3 rounded border border-accent1" />
            <input type="email" name="email" required placeholder="Your Email" className="w-full p-3 rounded border border-accent1" />
            <textarea name="message" rows="5" required placeholder="Your Message" className="w-full p-3 rounded border border-accent1"></textarea>
            <button type="submit" className="bg-accent1 hover:bg-[#a6a0dc] text-white py-3 px-6 rounded transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c1244] text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Judith Jean-Francois. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
