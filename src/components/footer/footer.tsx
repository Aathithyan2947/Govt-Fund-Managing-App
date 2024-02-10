import './footer.css/'

function Footer() {
  return (
    <>
    <div className='footerContainer'>
        <div className='d-flex flex-row justify-content-center text-white gap-5 pt-3 w-100'>
            <a>Website Policies</a>
            <a>Help</a>
            <a>Contact Us</a>
            <a>Feedback</a>
        </div>
        <div className='text-white text-center mt-3'>
            <p>Content Owned by State Administration</p>
            <p>Tamil Nadu , Developed and Hosted By  
                <span className='text-primary ms-2'>National Informatics Center </span>
            </p>
            <p className='text-primary ms-2'>Ministry Of Electronics & Information Technolgy , <span className='text-white'>Government of India</span></p>
        </div>
        <div className='mt-4 bottom-img d-flex flex-row justify-content-center'>
            <img className='mx-3' src="src\assets\S3Waas.png" alt="not found" />
            <img className='mx-3' src="src\assets\nicLogo.png" alt="not found" />
            <img className='mx-3' src="src\assets\digitalIndia.png" alt="not found" />
        </div>
    </div>
    </>
  )
}

export default Footer