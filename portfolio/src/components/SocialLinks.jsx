import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";


function SocialLinks(){

return (

<div className="
flex
gap-6
mt-8
justify-center
md:justify-start
">


<a
href="https://github.com/"
target="_blank"
className="
text-3xl
hover:text-blue-600
transition
"
>

<FaGithub/>

</a>



<a
href="https://linkedin.com/"
target="_blank"
className="
text-3xl
hover:text-blue-600
transition
"
>

<FaLinkedin/>

</a>




<a
href="mailto:yourmail@gmail.com"
className="
text-3xl
hover:text-blue-600
transition
"
>

<FaEnvelope/>

</a>



</div>

)

}


export default SocialLinks;