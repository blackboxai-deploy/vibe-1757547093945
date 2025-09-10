import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-300">
      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-20 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-8xl lg:text-9xl">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Hello
              </span>
            </h1>
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-8xl lg:text-9xl mt-4">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                World
              </span>
            </h1>
          </div>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            Welcome to a beautiful, modern web application built with Next.js and Tailwind CSS. 
            This is where great things begin.
          </p>
          
          <div className="mt-12 flex items-center justify-center gap-6">
            <button className="group relative overflow-hidden rounded-full bg-indigo-600 dark:bg-indigo-500 px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:shadow-xl hover:scale-105">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
            
            <button className="rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 py-4 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-300 hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
              Why Choose Our App?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with modern technologies and best practices for an exceptional user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group text-center p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-300 dark:hover:border-indigo-500">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold transition-transform duration-300 group-hover:rotate-12">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built with Next.js for optimal performance and lightning-fast page loads.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="group text-center p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-300 dark:hover:border-indigo-500">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold transition-transform duration-300 group-hover:rotate-12">
                📱
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Responsive Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Perfectly optimized for all devices, from mobile phones to desktop computers.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="group text-center p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-indigo-300 dark:hover:border-indigo-500">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold transition-transform duration-300 group-hover:rotate-12">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Beautiful UI</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Modern, clean design with smooth animations and delightful interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-500 dark:via-purple-500 dark:to-cyan-500 px-8 py-16 shadow-2xl">
            <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100 dark:text-indigo-200 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already discovered the power of our modern web application.
            </p>
            <button className="bg-white dark:bg-gray-100 text-indigo-600 dark:text-indigo-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-200">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Built with ❤️ using Next.js, Tailwind CSS, and modern web technologies.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            © 2024 Hello World App. Making the web more beautiful, one page at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}