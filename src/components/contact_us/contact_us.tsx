import Footer from '../footer/footer'
import App_navbar from '../navbar/App_navbar'
import './contact_us.css'

function ContactUs() {
    const voice =()=>{
       const utterance = new SpeechSynthesisUtterance('thanks aswin, your form has been submitted successfully .');
       speechSynthesis.speak(utterance);
    }
  return (
    <>
        <div className='contactBackground'>
            <App_navbar />
            <div className='contactBackground d-flex flex-row justify-content-center align-items-center gap-5'>
            <div className='w3-animate-left p-5 contact-form gap-2 d-flex flex-column justify-content-center'>
                <h4 className='text-white text-center'>Contact Us</h4>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="input-group mb-3">
                <input type="textarea" className="form-control" placeholder="Message" />
            </div>
            <button className='btn btn-warning' onClick={voice}>Submit</button>
            </div>
            <div className='w3-animate-right text-white gap-3 contactCard text-center p-4'>
                    <h4>Contact Information</h4>
                    <h5>Director</h5>
                    <p>Department of Empowerment of Persons with Disabilities, Ministry of Social Justice & Empowerment</p>
                    <p>Room No. 517, B-II Block, Antyodaya Bhawan, CGO Complex, Lodhi Road, New Delhi - 110003 (India)</p>
                    <div className='d-flex flex-row gap-2 align-items-center'>
                        <img style={{height:'20px'}} src='src/assets/whatsapp.png'/>
                        <p className='mt-3'>91-93549-39703</p>
                    </div>
                    <div className='d-flex flex-row gap-2'>
                        <img style={{height:'20px'}} src='src/assets/telephone.png'/>
                        <p>91-93549-39703</p>
                    </div>
                    <div className='d-flex flex-row gap-2'>
                        <img style={{height:'20px'}} src='src/assets/mail.png'/>
                        <p>disability-udid@gov.in</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default ContactUs