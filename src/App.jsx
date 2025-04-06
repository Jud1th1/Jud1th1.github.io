

function App() {
  return (
    <div className="min-h-screen w-full font-serif text-white overflow-x-hidden">
     
  {/* Navbar */}
  <nav className="bg-white bg-opacity-90 backdrop-blur-sm text-[#2c1244] px-8 py-4 shadow-md fixed w-full z-50 flex justify-between items-center">

  {/* Logo Left */}
  <div className="flex items-center gap-2">
    <img src="/assets/images/Logo.blk.png" alt="Judith logo" className="h-12 w-auto object-contain" />
  </div>

  {/* Center Nav Links */}
  <ul className="flex gap-12 text-lg font-medium">
    <li><a href="#home" className="hover-underline">//Home</a></li>
    <li><a href="#about" className="hover-underline">//About</a></li>
    <li><a href="#projects" className="hover-underline">//Projects</a></li>
    <li><a href="#contact" className="hover-underline">//Contact</a></li>
  </ul>


  {/* Dark Mode Toggle (placeholder) */}
  <div className="ml-4">
    <button className="text-xl">🌙</button>
  </div>
</nav>


  {/* Hero Section */}
  <section
    id="home"
    className="relative h-screen bg-fixed bg-center bg-cover flex flex-col justify-center items-center text-center text-white px-6"
    style={{
      backgroundImage: "#"
    }}
  >

  {/* Overlay tint */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-2xl">
    <h1 className="text-5xl font-bold font-heading mb-4">Judith Jean-François</h1>
    <p className="text-xl font-light font-body mb-6">
      Front-End Developer crafting elegant, accessible, and joyful web experiences 💜
    </p>
    <a
      href="#projects"
      className="inline-block bg-accent1 hover:bg-[#a6a0dc] text-white py-2 px-6 rounded-full transition-all duration-300 shadow-md"
    >
      View My Work
    </a>
  </div>

  {/* 🖱️ Scroll Indicator */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
  <div className="w-[28px] h-[48px] border-2 border-purple-300 shadow-[0_0_10px_#7e61ae] rounded-full flex justify-center items-start p-1 relative">
    <div className="w-[4px] h-[8px] bg-white rounded-full animate-scrollPulse"></div>
  </div>
</div>
</section>


  {/* Main Content */}
  <main className="relative z-10 mx-auto max-w-7xl px-4 md:px-10 py-20">


  {/* About Me */}
   <section id="about" 
    className="bg-dark/80 backdrop-blur-sm text-white px-6 py-16">
    <div className="max-w-5xl mx-auto text-center animate-fadeInUp delay-[500ms]">
      <h2 className="text-4xl font-bold font-heading mb-6">About Me</h2>
      <p className="text-lg font-body leading-relaxed">Hi there! I'm Judith Jean-Francois — a proud Haitian-American from the vibrant city of Naples, Florida. I'm a front-end developer with a creative soul, combining technology and art to build digital experiences that are both beautiful and meaningful.
        <br /><br /> My journey into tech began with an A.S. degree in Digital Media/Multimedia Technology, where I originally pursued instructional design. But it was through this creative foundation that I found a deep love for development — turning ideas into responsive, accessible, and interactive experiences using code.
        <br /><br /> After completing a Front-End Development program with Computer Coach, I’ve built a versatile toolkit that includes HTML, CSS, JavaScript, React, and responsive design principles. I thrive on creating user-friendly interfaces and solving visual challenges with elegant solutions.
        <br /><br /> But my work is about more than just pixels and code. It’s about **empowerment** — creating accessible experiences for all users and encouraging others from underrepresented communities to break into tech. Every line of code is a step toward that mission.
        <br /><br /> Thanks for stopping by! I hope my work inspires you to build, explore, and connect.
        </p>
      </div>
    </section>


    <section id="beyond" 
    className="bg-[#1e1e1e] text-white px-6 py-16">
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
