function SectionTitle({title, subtitle}) {

return (

<div className="text-center mb-12">

<h2 className="
text-4xl
font-bold
dark:text-white
">

{title}

</h2>


<p className="
mt-3
text-gray-500
dark:text-gray-400
">

{subtitle}

</p>


</div>

)

}


export default SectionTitle;