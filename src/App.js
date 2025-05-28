import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
      {/* Header */}
      <header className="bg-black bg-opacity-90 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/t1logo.jpg" alt="Tier 1 Las Vegas" className="h-10" />
            <h1 className="text-xl font-bold tracking-wide text-white uppercase">
              Tier 1 Las Vegas
            </h1>
          </div>
          <nav className="space-x-6 text-sm font-semibold text-gray-300 hidden md:flex">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Shop
            </a>
            <a href="#" className="hover:text-white">
              Events
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-silver-100">
          Your Premier Trading Card Destination
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Discover the top-tier experience in buying, selling, and collecting
          trading cards in the heart of Las Vegas.
        </p>
        <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition">
          Explore Our Collection
        </button>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          Featured Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["One Piece", "Magic: The Gathering", "Yu-Gi-Oh!"].map(
            (category) => (
              <div
                key={category}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:shadow-xl hover:border-white transition"
              >
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {category}
                </h4>
                <p className="text-sm text-gray-400">
                  Explore our curated inventory of {category} singles, sets, and
                  more.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6 border-t border-gray-700">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Tier 1 Las Vegas. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
