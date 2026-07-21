function SkillCard({category, items}) {


return (

<div

className="
p-6

rounded-2xl

bg-white

dark:bg-gray-800

shadow-lg

hover:-translate-y-2

transition

duration-300

"


>


<h3

className="
text-2xl

font-bold

text-blue-600

mb-5

"

>

{category}

</h3>



<div

className="
flex

flex-wrap

gap-3

"


>


{

items.map((skill,index)=>(


<span

key={index}

className="
px-4

py-2

rounded-full

bg-blue-100

dark:bg-gray-700

dark:text-white

text-sm

font-medium

"


>

{skill}


</span>


))


}


</div>



</div>

)

}


export default SkillCard;