function StatCard({number,title}) {


return (

<div

className="
p-6

rounded-2xl

bg-white

dark:bg-gray-800

shadow-lg

text-center

hover:scale-105

transition

"


>


<h3

className="
text-4xl

font-bold

text-blue-600

"

>

{number}

</h3>



<p

className="
mt-2

text-gray-600

dark:text-gray-300

"

>

{title}

</p>



</div>

)


}


export default StatCard;