import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Home from "./pages/Home";


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

duration-500

"


>


<Navbar

darkMode={darkMode}

setDarkMode={setDarkMode}

/>



<Home/>


<Footer/>



</div>


)


}


export default App;