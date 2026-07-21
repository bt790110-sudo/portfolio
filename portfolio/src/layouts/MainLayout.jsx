import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useTheme from "../hooks/useTheme";

function MainLayout({ children }) {

  const { darkMode, setDarkMode } = useTheme();

  return (

    <div className="bg-white dark:bg-gray-900 min-h-screen transition">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {children}

      <Footer />

    </div>

  );

}

export default MainLayout;