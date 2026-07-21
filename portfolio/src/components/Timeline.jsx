function Timeline(){


const data=[


{
year:"2022 - Present",
title:"Bachelor in Computer Science",
description:
"Studying software engineering, networking and cybersecurity."
},


{
year:"2025",
title:"Development Tracker Project",
description:
"Built backend systems using FastAPI and PostgreSQL."
},


{
year:"2026",
title:"Cyber Surakshya",
description:
"Working on cybersecurity monitoring and SOC dashboard."
}


];



return (

<div className="
space-y-8
mt-10
">


{
data.map((item,index)=>(


<div

key={index}

className="
border-l-4

border-blue-600

pl-6

"


>


<p

className="
text-blue-600

font-bold

"

>

{item.year}

</p>



<h3

className="
text-xl

font-semibold

dark:text-white

"

>

{item.title}

</h3>



<p

className="
text-gray-500

dark:text-gray-400

"

>

{item.description}

</p>



</div>


))

}


</div>

)


}


export default Timeline;