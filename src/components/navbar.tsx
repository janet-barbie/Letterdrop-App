

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-slate-800 shadow px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-semibold tracking-wide text-primary dark:text-white">
        LETTERDROP Dashboard
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600 dark:text-gray-300">Admin</span>
        <button className="bg-primary text-white px-3 py-1 rounded hover:opacity-90 transition">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
