import {useState} from "react";

function ContactForm(){

const [form,setForm]=useState({

name:"",
email:"",
subject:"",
message:""

});

function handleChange(e){

setForm({

...form,

[e.target.name]:e.target.value

});

}

function handleSubmit(e){

e.preventDefault();

console.log(form);

alert("Message Submitted!");

}

return(

<form
onSubmit={handleSubmit}
className="space-y-5"
>

<input

name="name"

placeholder="Your Name"

value={form.name}

onChange={handleChange}

className="w-full p-3 border rounded"

/>

<input

name="email"

placeholder="Your Email"

value={form.email}

onChange={handleChange}

className="w-full p-3 border rounded"

/>

<input

name="subject"

placeholder="Subject"

value={form.subject}

onChange={handleChange}

className="w-full p-3 border rounded"

/>

<textarea

rows="6"

name="message"

placeholder="Message"

value={form.message}

onChange={handleChange}

className="w-full p-3 border rounded"

/>

<button

className="bg-blue-600 text-white px-6 py-3 rounded"

>

Send Message

</button>

</form>

)

}

export default ContactForm;