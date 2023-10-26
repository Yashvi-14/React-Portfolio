import "./FormStyle.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
    <form>
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="6" required></textarea>

        <button className="btn" >Submit</button>
    </form>
    </div>
  )
}

export default Form