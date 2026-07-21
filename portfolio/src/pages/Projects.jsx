import SectionTitle from "../components/SectionTitle";

import ProjectCard from "../components/ProjectCard";

import projects from "../data/projects";



function Projects(){


return (

<section

id="projects"

className="

py-20

px-6

"

>


<div

className="

max-w-6xl

mx-auto

"

>


<SectionTitle

title="My Projects"

subtitle="Some things I have built"

/>



<div

className="

grid

md:grid-cols-2

gap-10

"

>


{

projects.map((project,index)=>(


<ProjectCard

key={index}

{...project}

/>


))


}



</div>


</div>


</section>


)


}



export default Projects;