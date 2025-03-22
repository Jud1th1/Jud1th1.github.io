

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif">
      {/* Navbar */}
      <nav className="bg-purple-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-sans">Judith Jean-Francois</h1>
        <ul className="flex gap-6 font-light">
          <li><a href="#about" className="hover:text-purple-300">About</a></li>
          <li><a href="#projects" className="hover:text-purple-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-300">Contact</a></li>
        </ul>
      </nav>

      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center bg-[#2c1244] text-white px-6">
      <h1 className="text-5xl font-bold font-sans mb-4">Judith Jean-Francois</h1>
      <p className="text-xl font-light max-w-xl">
        Front-End Developer crafting elegant, accessible, and joyful web experiences 💜
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block bg-[#7e61ae] hover:bg-[#a6a0dc] text-white py-2 px-6 rounded-full transition duration-300"
      >
        View My Work
      </a>
    </section>

    {/* Main Content */}
    <main className="px-6 py-12 max-w-4xl mx-auto">

    {/* About Me */}
    <section id="about" className="bg-[#dec8e2] text-[#2c1244] px-6 py-16">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold font-sans mb-6">About Me</h2>
      <p className="text-lg font-serif leading-relaxed">
        Hi there! I'm Judith Jean-Francois — a proud Haitian-American from the vibrant city of Naples, Florida. I'm a front-end developer with a creative soul, combining technology and art to build digital experiences that are both beautiful and meaningful.
      <br /><br />
      My journey into tech began with an A.S. degree in Digital Media/Multimedia Technology, where I originally pursued instructional design. But it was through this creative foundation that I found a deep love for development — turning ideas into responsive, accessible, and interactive experiences using code.
      <br /><br />
      After completing a Front-End Development program with Computer Coach, I’ve built a versatile toolkit that includes HTML, CSS, JavaScript, React, and responsive design principles. I thrive on creating user-friendly interfaces and solving visual challenges with elegant solutions.
      <br /><br />
      But my work is about more than just pixels and code. It’s about **empowerment** — creating accessible experiences for all users and encouraging others from underrepresented communities to break into tech. Every line of code is a step toward that mission.
      <br /><br />
      Thanks for stopping by! I hope my work inspires you to build, explore, and connect.
        </p>
      </div>
    </section>

    <section id="beyond" className="bg-[#f5f2f7] text-[#2c1244] px-6 py-16">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    <div className="w-full md:w-1/3">
      <img
        src="/img/me6.jpg"
        alt="Judith smiling or relaxing"
        className="rounded-xl shadow-lg w-full object-cover"
      />
    </div>

    <div className="w-full md:w-2/3 text-lg font-serif leading-relaxed">
      <h2 className="text-4xl font-bold font-sans mb-4">Life Outside Code</h2>
      <p className="italic mb-4">
        Beyond the glow of my computer screen, you'll find me immersed in a world of creativity.
      </p>
      <p>
        I love drawing, painting, and taking on random DIY projects around the house—anything that sparks my imagination.
        I'm also an avid reader who gets lost in captivating stories, and I always have something playing on Hulu in the background.
        <br /><br />
        Coffee is an essential part of my vibe. You’ll often find me at <strong>The Bean Bar Co.</strong> sipping something special.
        But the best moments? They're spent with my family and my two sweet cats.
        <br /><br />
        Whether I’m crafting digital experiences or cozying up with a good book, creativity is always at the heart of everything I do.
      </p>
    </div>
  </div>
</section>

       

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">Featured Projects</h2>
          <p>[Projects will go here]</p>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">Get in Touch</h2>
          <p>[Contact form or links go here]</p>
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
