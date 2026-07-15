import React from 'react'

const ContactPage = () => {
  return (
    <div>
        <form action="/submit" method="POST">
        <input type="text" name="name" placeholder="Your Name" required /> <br/>
        <input type="email" name="email" placeholder="Your Email" required /> <br/>
        <textarea name="message" placeholder="Your Message" required></textarea> <br/>
        <button type="submit">Submit</button>
        

        </form>
    </div>
  )
}

export default ContactPage