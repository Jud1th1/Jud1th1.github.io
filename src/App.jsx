

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif">
     
      {/* Navbar */}
      <nav className="w-full fixed top-0 bg-purple-900 text-white px-6 py-4 flex items-center justify-between z-50 shadow-md">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="assets/images/logo1.png" className="h-10 w-auto mr-4" />
        </div>


        {/* Center: Nav Links */}
        <ul className="flex gap-6 font-light">
          <li><a href="#about" className="hover:text-purple-300">About</a></li>
          <li><a href="#projects" className="hover:text-purple-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-300">Contact</a></li>
        </ul>

        {/* Right: (Optional for spacing symmetry) */}
        <div className="w-1/3"></div>
      </nav>

      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center bg-[#2c1244] text-white px-6">
        <h1 className="text-5xl font-bold font-sans mb-4">Judith Jean-Francois</h1>
        <p className="text-xl font-light max-w-xl">Front-End Developer crafting elegant, accessible, and joyful web experiences 💜</p>
        <a href="#projects" className="mt-6 inline-block bg-[#7e61ae] hover:bg-[#a6a0dc] text-white py-2 px-6 rounded-full transition duration-300">View My Work</a>
      </section>

    {/* Main Content */}
    <main className="px-6 py-12 max-w-4xl mx-auto">

    {/* About Me */}
    <section id="about" className="bg-[#dec8e2] text-[#2c1244] px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-sans mb-6">About Me</h2>
        <p className="text-lg font-serif leading-relaxed"> Hi there! I'm Judith Jean-Francois — a proud Haitian-American from the vibrant city of Naples, Florida. I'm a front-end developer with a creative soul, combining technology and art to build digital experiences that are both beautiful and meaningful.
        <br /><br /> My journey into tech began with an A.S. degree in Digital Media/Multimedia Technology, where I originally pursued instructional design. But it was through this creative foundation that I found a deep love for development — turning ideas into responsive, accessible, and interactive experiences using code.
        <br /><br /> After completing a Front-End Development program with Computer Coach, I’ve built a versatile toolkit that includes HTML, CSS, JavaScript, React, and responsive design principles. I thrive on creating user-friendly interfaces and solving visual challenges with elegant solutions.
        <br /><br /> But my work is about more than just pixels and code. It’s about **empowerment** — creating accessible experiences for all users and encouraging others from underrepresented communities to break into tech. Every line of code is a step toward that mission.
        <br /><br /> Thanks for stopping by! I hope my work inspires you to build, explore, and connect.
        </p>
      </div>
    </section>

    <section id="beyond" className="bg-[#f5f2f7] text-[#2c1244] px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/3">
        <img
          src=""
          alt="Judith smiling or relaxing"
          className="rounded-xl shadow-lg w-full object-cover"/>
      </div>

      <div className="w-full md:w-2/3 text-lg font-serif leading-relaxed">
        <h2 className="text-4xl font-bold font-sans mb-4">Life Outside Code</h2>
        <p className="italic mb-4"> Beyond the glow of my computer screen, you'll find me immersed in a world of creativity.</p>
        <p> I love drawing, painting, and taking on random DIY projects around the house—anything that sparks my imagination. I'm also an avid reader who gets lost in captivating stories, and I always have something playing on Hulu in the background.
        <br /><br /> Coffee is an essential part of my vibe. You’ll often find me at <strong>The Bean Bar Co.</strong> sipping something special. But the best moments? They're spent with my family and my two sweet cats.
        <br /><br /> Whether I’m crafting digital experiences or cozying up with a good book, creativity is always at the heart of everything I do.
        </p>
      </div>
      </div>
    </section>

    {/* */}
        <section id="projects" className="bg-white px-6 py-16 text-[#2c1244]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-sans mb-12">Featured Projects</h2>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
               {/* Project 1 */}
               <div className="bg-[#dec8e2] rounded-lg shadow-md p-6 text-left">
                <h3 className="text-2xl font-bold mb-2">Project Name</h3>
                <p className="text-sm mb-4 font-serif">A short description of what this project does, what tools were used, or what makes it special.</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-white bg-[#7e61ae] hover:bg-[#a6a0dc] px-4 py-2 rounded transition duration-300">
                  View Project
                  </a>
            </div>

            {/* Project 2 */}
              <div className="bg-[#dec8e2] rounded-lg shadow-md p-6 text-left">
                <h3 className="text-2xl font-bold mb-2">Another Project</h3>
                <p className="text-sm mb-4 font-serif">Another little blurb. Keep it simple, 2–3 sentences max. You can link to GitHub or live site.</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-white bg-[#7e61ae] hover:bg-[#a6a0dc] px-4 py-2 rounded transition duration-300">
                  View Project
                </a>
              </div>

            </div>
          </div>
        </section>

    {/* Contact */}
    <section id="contact" className="bg-[#f5f2f7] text-[#2c1244] px-6 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-sans mb-6">Get in Touch</h2>
        <p className="mb-8 text-lg font-serif">Have a project idea, collaboration, or just want to say hi? I’d love to hear from you.</p>

        <form action="https://formsubmit.co/jf.jud1th1@gmail.com" method="POST" className="grid gap-4 text-left">
          <input type="text" name="name" required placeholder="Your Name" className="w-full p-3 rounded border border-[#7e61ae] focus:outline-none focus:ring-2 focus:ring-[#7e61ae]"/>
          <input type="email" name="email" required placeholder="Your Email" className="w-full p-3 rounded border border-[#7e61ae] focus:outline-none focus:ring-2 focus:ring-[#7e61ae]"/>
          <textarea name="message" rows="5" required placeholder="Your Message" className="w-full p-3 rounded border border-[#7e61ae] focus:outline-none focus:ring-2 focus:ring-[#7e61ae]"></textarea>
          <button type="submit" className="mt-2 bg-[#7e61ae] text-white py-3 px-6 rounded hover:bg-[#a6a0dc] transition duration-300"> Send Message </button>
        </form>
      </div>
    </section>
    </main>

    {/* Footer */}
    <footer className="bg-purple-900 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Judith Jean-Francois. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;
