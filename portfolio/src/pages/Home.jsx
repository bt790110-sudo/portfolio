import Button from "../components/Button";

import SocialLinks from "../components/SocialLinks";

import profile from "../assets/profile.png";


import {TypeAnimation} from "react-type-animation";



function Home(){


return(

<section

className="
min-h-screen

flex
items-center

px-6

bg-gradient-to-br

from-blue-50

via-white

to-purple-100

dark:from-gray-900

dark:via-gray-800

dark:to-black

"


>


<div

className="
max-w-6xl
mx-auto

grid

md:grid-cols-2

gap-12

items-center

"


>


{/* LEFT SIDE */}



<div

className="
bg-white/30

dark:bg-white/10

backdrop-blur-lg

p-8

rounded-3xl

shadow-xl

border

border-white/20

"


>


<h1

className="
text-5xl

md:text-7xl

font-bold

dark:text-white

"


>


Hi, I'm

<span

className="
text-blue-600

"

>

 Bikram

</span>


</h1>




<h2

className="
text-2xl

mt-5

font-semibold

dark:text-gray-200

"


>


<TypeAnimation


sequence={[

"Software Developer",

2000,

"React Developer",

2000,

"Cybersecurity Enthusiast",

2000,

"Backend Developer",

2000

]}


speed={50}


repeat={Infinity}


/>


</h2>




<p

className="
mt-6

text-gray-600

dark:text-gray-300

leading-relaxed

"


>


I build modern web applications,
APIs and cybersecurity solutions using
React, FastAPI, Flutter and security technologies.


</p>




<div

className="
mt-8

flex

gap-5

flex-wrap

"

>


<Button text="View Projects"/>

<Button text="Download Resume"/>


</div>



<SocialLinks/>




</div>





{/* RIGHT IMAGE */}



<div

className="
flex

justify-center

"


>


<div

className="
relative

"


>


<div

className="
absolute

inset-0

bg-blue-500

rounded-full

blur-3xl

opacity-30

"

>


</div>




<img


src={profile}


alt="profile"


className="

relative

w-72

h-72

object-cover

rounded-full

border-4

border-blue-500

shadow-2xl

hover:scale-105

transition

duration-500

"


/>



</div>



</div>



</div>



</section>


)


}


export default Home;