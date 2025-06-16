const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-800 text-center text-xs py-4 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      &copy; {new Date().getFullYear()} LETTERDROP Dashboard. All rights reserved.
    </footer>
  );
};

export default Footer;