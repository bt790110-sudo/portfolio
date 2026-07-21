function ProjectCard({

title,

description,

image,

technologies,

github,

demo

}){


return (

<div

className="

bg-white

dark:bg-gray-800

rounded-3xl

overflow-hidden

shadow-lg

hover:-translate-y-2

transition

duration-300

"

>


<img

src={image}

alt={title}

className="

w-full

h-52

object-cover

"

/>



<div

className="

p-6

"

>


<h3

className="

text-2xl

font-bold

dark:text-white

"

>

{title}

</h3>



<p

className="

mt-4

text-gray-600

dark:text-gray-300

"

>

{description}

</p>




<div

className="

flex

flex-wrap

gap-2

mt-5

"

>


{

technologies.map((tech,index)=>(


<span

key={index}

className="

px-3

py-1

bg-blue-100

text-blue-700

rounded-full

text-sm

dark:bg-gray-700

dark:text-white

"

>

{tech}

</span>


))


}


</div>




<div

className="

flex

gap-4

mt-6

"

>


<a

href={github}

target="_blank"

className="

px-5

py-2

rounded-full

bg-black

text-white

"

>

GitHub

</a>



<a

href={demo}

target="_blank"

className="

px-5

py-2

rounded-full

bg-blue-600

text-white

"

>

Demo

</a>



</div>



</div>


</div>


)


}


export default ProjectCard;