import "./FormStyles.css"
import react from "react"
import {useState} from "react"

const Form= ()=>{
    const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (e) => {
    const emailValue = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmail(emailValue);
    setIsValid(emailRegex.test(emailValue));
  };
    return(
        <div className="form">
            Contact me
            <form>
                <label>Your Name</label>
                <input type="text" placeholder="Your name"></input>

                <label>Email</label>
                <input
                type="text"
                value={email}
                onChange={validateEmail}
                placeholder="Enter your email"
                style={{ borderColor: isValid ? 'black' : 'red' }}
                required={true}
                emailRegex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
            />
            
                <label>Subject</label>
                <input type="text" placeholder="Please write subject"></input>

                <label>Message</label>
                <textarea row="6" placeholder="Type your message here"/>

                <button className="btn">Submit</button>
            </form>
        </div>
    )

}

export default Form