import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";


import useTheme from "./hooks/useTheme";



function App(){


const {
darkMode,
setDarkMode

}=useTheme();



return (

<div

className="
bg-white
dark:bg-gray-900
transition

"

>


<Navbar

darkMode={darkMode}

setDarkMode={setDarkMode}

/>


<Home/>


<About/>


<Footer/>



</div>

)


}


export default App;