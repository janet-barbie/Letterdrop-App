const Navbar = () => {
    return (
      <nav className="bg-primary dark:bg-slate-700 text-white py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          LETTERDROP
        </div>
  
        {/* Actions */}
        <div className="space-x-4">
          <button className="bg-transparent border border-white text-white px-4 py-1 rounded hover:bg-white hover:text-primary transition">
            Login
          </button>
          <button className="bg-white text-primary px-4 py-1 rounded hover:bg-opacity-90 transition">
            Sign Up
          </button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  