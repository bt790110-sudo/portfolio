import SectionTitle from "../components/SectionTitle";

import SkillCard from "../components/SkillCard";

import skills from "../data/skills";



function Skills(){


return (

<section

id="skills"

className="
py-20

px-6

bg-gray-50

dark:bg-gray-900

"


>


<div

className="
max-w-6xl

mx-auto

"


>


<SectionTitle

title="My Skills"

subtitle="Technologies and tools I work with"

/>



<div

className="
grid

md:grid-cols-2

gap-8

"


>


{

skills.map((skill,index)=>(


<SkillCard

key={index}

category={skill.category}

items={skill.items}

/>


))


}


</div>


</div>


</section>


)


}


export default Skills;
