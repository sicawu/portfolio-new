import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

function ContactForm() {
    const [name, setName] = useState(null)
    const [mail, setMail] = useState(null)
    const [message, setMessage] = useState(null)
    const [recaptcha, setRecaptcha] = useState(null)

    const recaptchaRef = React.createRef();

    const handleName = (e) => setName(e.target.value)
    const handleMail = (e) => setMail(e.target.value)
    const handleMessage = (e) => setMessage(e.target.value)
    const handleRecaptcha = (value) => setRecaptcha(value)

    const handleSubmit = (e) => {
        e.prevent.Default()

        if (!recaptcha) {
            alert("Verify that you are human :)");
            return
        }

        const newLoveletter = {
            name: name,
            mail: mail,
            message: message,
            recaptcha: recaptcha
        }

        //axios.post
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Your name"
                        onChange={handleName}
                    />
                </label>
                <label>
                    <input
                        type="email"
                        name="mail"
                        value={mail}
                        placeholder="Your email"
                        onChange={handleMail}
                    />
                </label>
                <label>
                    <textarea
                        type="text"
                        name="message"
                        value={message}
                        placeholder="Tell me more"
                        onChange={handleMessage}
                    />
                </label>

                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="your-site-key"
                    onChange={handleRecaptcha}
                />

                <button
                    type="submit">Send A Message
                </button>
            </form>
        </>
    )
}

export default ContactForm