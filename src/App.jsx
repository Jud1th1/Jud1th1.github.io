

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

      {/* Main Content */}
      <main className="px-6 py-12 max-w-4xl mx-auto">
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">About Me</h2>
          <p>
            Hello! I'm Judith, a passionate front-end developer who loves creating clean, elegant, and accessible web experiences.
          </p>
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
