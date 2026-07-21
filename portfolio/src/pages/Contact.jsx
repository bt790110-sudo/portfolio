import SectionTitle from "../components/SectionTitle";

import ContactForm from "../components/ContactForm";

import ContactInfo from "../components/ContactInfo";

function Contact(){

return(

<section

id="contact"

className="py-20 px-6"

>

<div className="max-w-6xl mx-auto">

<SectionTitle

title="Contact Me"

subtitle="Let's build something amazing together."

/>

<div

className="grid md:grid-cols-2 gap-10"

>

<ContactForm/>

<ContactInfo/>

</div>

</div>

</section>

)

}

export default Contact;


<iframe

title="location"

src="YOUR_GOOGLE_MAP_EMBED_LINK"

className="w-full h-96 rounded-2xl mt-16"

loading="lazy"

/>