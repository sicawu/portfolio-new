import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import axios from "axios"

function ContactForm() {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")
    const [recaptcha, setRecaptcha] = useState(null)

    const recaptchaRef = React.createRef()
    //const recaptchaRef = useRef<ReCAPTCHA>()

    const handleName = (e) => setName(e.target.value)
    const handleMail = (e) => setMail(e.target.value)
    const handleMessage = (e) => setMessage(e.target.value)
    const handleRecaptcha = (value) => setRecaptcha(value)


    const handleSubmit = (e) => {
        e.preventDefault()

        const newLoveletter = {
            name: name,
            mail: mail,
            message: message,
            recaptcha: recaptcha
        }

        axios.post("/submit-form", newLoveletter)
            .then((response) => {
                console.log(response.data)
                setName(() => "")
                setMail(() => "")
                setMessage(() => "")
                setRecaptcha(() => null)
            })
            .catch((e) => {
                console.log(e)
            })
    }


    return (
        <>
            <div className="flex justify-center p-20 bg-beige">
                <div>
                <h2 className="text-2xl text-green mb-5 font-gilda">Leave Me A Message</h2>
                    <form onSubmit={handleSubmit}>
                        <label className="text-xs text-green mb-5 font-gilda"
                        >Name
                            <input
                                className="w-full p-2 text-gray-900 border border-gray-300 rounded bg-gray-50 text-xs focus:ring-black focus:border-black"
                                type="text"
                                name="name"
                                value={name}
                                placeholder="What's your name?"
                                onChange={handleName}
                            />
                        </label>
                        <label className="text-xs text-green mb-5 font-gilda"
                        >Email
                            <input
                                className="w-full p-2 text-gray-900 border border-gray-300 rounded bg-gray-50 text-xs focus:ring-black focus:border-black"
                                type="email"
                                name="mail"
                                value={mail}
                                placeholder="How can I reach you?"
                                onChange={handleMail}
                            />
                        </label>
                        <label className="text-xs text-green mb-5 font-gilda"
                        >Tell Me More
                            <textarea
                                className="w-full p-2 text-gray-900 border border-gray-300 rounded bg-gray-50 text-xs focus:ring-black focus:border-black"
                                type="text"
                                name="message"
                                value={message}
                                placeholder="What are your ideas, thoughts and projects?"
                                onChange={handleMessage}
                            />
                        </label>
                        <ReCAPTCHA
                        className="flex justify-center pt-5"
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            onChange={handleRecaptcha}
                        />

                        <button
                        className="inline-flex items-center justify-center h-9 mt-5 p-3 gap-3 text-beige bg-green border-2 border-green rounded-lg focus:outline-none hover:bg-darkgreen shadow"
                            disabled={!recaptcha}
                            type="submit">Send A Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm