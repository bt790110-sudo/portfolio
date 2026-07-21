import SectionTitle from "../components/SectionTitle";

import StatCard from "../components/StatCard";

import Timeline from "../components/Timeline";



function About(){


return (

<section

id="about"

className="
min-h-screen
px-6
py-20
"

>



<div

className="
max-w-6xl

mx-auto

"



>


<SectionTitle

title="About Me"

subtitle="My journey as a developer"

/>




<div

className="
grid

md:grid-cols-2

gap-10

items-center

"

>


{/* Description */}


<div>


<p

className="
text-lg

leading-relaxed

text-gray-600

dark:text-gray-300

"

>


I am a software developer passionate about
building modern applications and solving
real-world problems using technology.


</p>



<p

className="
mt-5

text-lg

leading-relaxed

text-gray-600

dark:text-gray-300

"

>


My interests include React development,
backend engineering with FastAPI,
mobile development using Flutter,
and cybersecurity.


</p>



<p

className="
mt-5

text-lg

leading-relaxed

text-gray-600

dark:text-gray-300

"

>


I enjoy learning new technologies,
building projects and improving my
software engineering skills.


</p>


</div>




{/* Stats */}


<div

className="
grid

grid-cols-2

gap-5

"

>


<StatCard

number="5+"

title="Projects"

/>



<StatCard

number="10+"

title="Technologies"

/>



<StatCard

number="3+"

title="Years Learning"

/>



<StatCard

number="100%"

title="Passion"

/>



</div>



</div>





{/* Timeline */}



<div className="mt-20">


<SectionTitle

title="My Journey"

subtitle="Education and experience"

/>



<Timeline/>


</div>




</div>


</section>


)


}



export default About;