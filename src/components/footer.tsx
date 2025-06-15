const Footer = () => {
    return (
      <footer className="bg-primary dark:bg-slate-800 text-white py-8 px-6 bottom-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
 
          <div>
            <h2 className="text-2xl font-bold mb-2">LETTERDROP</h2>
            <p className="text-sm text-gray-300">
              A place for your thoughts, stories, and ideas.
            </p>
          </div>
  
     
          <div>
            <h3 className="font-semibold text-lg mb-2">Explore</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Connect</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Email</a></li>
            </ul>
          </div>
        </div>
  
 
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} LETTERDROP. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  