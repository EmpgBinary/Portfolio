// import React, { useState } from 'react'
// import emailjs from '@emailjs/browser';

// const EmailForm = () => {
 
//     const [name, setName]= useState ("");
//     const [email, setEmail]= useState ("");
//     const [message, setMessage] = useState ("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(name, email, message);

//         const serviceId = "service_q1bjv14"
//         const templateId = "template_w0qpr3i"
//         const publicKey    = "sGpU21wpkEvM5hoJJ"

//             from_email: "Empg Binary",
//             message: message,
//         };

//         emailjs.send(serviceId,templateId, templateParams, publicKey)
//         .then ((response)=>{
//             console.log('Email sent succesfully', response);
//             setName("");
//             setEmail("");
//             setMessage("");
//         })
//         .catch((err)=>{
//             console.log('Email not sent', err);
//         });
//     }

   

   

//   return (
//    <form onSubmit={handleSubmit} className='emailForm'>
//    <input 
//    type='text'
//    placeholder='Your Name'
//    value={name}
//    onChange={(e)=>setName(e.target.value)}

//    />
//     <input 
//    type='text'
//    placeholder='Your Name'
//    value={name}
//    onChange={(e)=>setName(e.target.value)}

//    />
//    <textarea
//    cols="30"
//    rows="20"
//    value={message}
//    onChange={(e)=>setMessage(e.target.value)}
//    >
//    </textarea>
//     <button type='submit'>
//         Send Email
//     </button>
   

//    </form>
//   )
// }

// export default EmailForm