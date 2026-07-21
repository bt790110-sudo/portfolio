import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaPhone,
FaLocationDot,
FaFilePdf
} from "react-icons/fa6";

import contact from "../data/contact";

function ContactInfo(){

return(

<div className="space-y-6">

<h2 className="text-3xl font-bold">

Contact Information

</h2>

<div>

<FaEnvelope/>

<p>{contact.email}</p>

</div>

<div>

<FaPhone/>

<p>{contact.phone}</p>

</div>

<div>

<FaLocationDot/>

<p>{contact.location}</p>

</div>

<a
href={contact.github}
target="_blank"
rel="noopener noreferrer"
>

<FaGithub/>

GitHub

</a>

<a
href={contact.linkedin}
target="_blank"
rel="noopener noreferrer"
>

<FaLinkedin/>

LinkedIn

</a>

<a
href={contact.resume}
target="_blank"
rel="noopener noreferrer"
>

<FaFilePdf/>

Resume

</a>

</div>

)

}

export default ContactInfo;