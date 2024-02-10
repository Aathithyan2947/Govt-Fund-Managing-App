import Footer from '../footer/footer'
import App_navbar from '../navbar/App_navbar'
import './about_us.css'

function AboutUs() {
  return (
    <>
        <div className="about_background">
            <App_navbar/>
            <div className='mt-5 gap-5 d-flex flex-row justify-content-center align-items-center'>
                <div className='w3-animate-left text-white gap-3 sideCard text-center p-4'>
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
                <div className='content w3-animate-right'>
                    <h3>About Department of Empowerment of Persons with Disabilities</h3>
                    <p>
                    In the year 1985-86, the erstwhile Ministry of Welfare was bifurcated into the Department of Women and Child Development and the Department of Welfare. Simultaneously, the Scheduled Castes Development Division, Tribal Development Division and the Minorities and Backward Classes Welfare Division were moved from the Ministry of Home Affairs and also the Wakf Division from the Ministry of Law to form the then Ministry of Welfare.Subsequently, the name of the Ministry was changed to the Ministry of Social Justice & Empowerment in May, 1998. Further, in October, 1999, the Tribal Development Division had moved out to form a separate Ministry of Tribal Affairs. In January, 2007, the Minorities Division along with Wakf Unit have been moved out of the Ministry and formed as a separate Ministry and the Child Development Division has gone to the Ministry of Women & Child Development.Though the subject of "Disability" figures in the State List in the Seventh Schedule of the Constitution, The Government of India has always been proactive in the disability sector. It is not only running seven National Institutes (NIs) dealing with various types on disabilities and seven Composite Regional Centers (CRCs), which provide rehabilitation services to PwDs and run courses for rehabilitation professional but also funds a large number of NGOs for similar services and also a National Handicapped Finance & Development Corporation (NHFDC) which provides loans at concessional rates of interest to PwDs for self-employment. Besides, the Union Government is a party to Proclamation on the Full Participation and Equality of People with Disabilities in the Asian and the Pacific Region - adopted at Beijing in December, 1992, and The UN Convention on the Rights of Persons with Disabilities (UNCRPD), which came into effect in May, 2008.The subject has received attention in various States Governments in varying degrees. At the Central level also disability being one of the several responsibilities of the M/o SJ&E, and being looked after by just one bureau, has resulted in inadequate attention, as most of its time and energy is spent only on implementing Ministry's own schemes, meeting their expenditure and physical targets, and organizing annual time-bound activities like the National Awards for empowerment of PwDs. In the above background, it was stated in the 11th Five Year Plan that "The 'Disability Division' of the Ministry of Social Justice & Empowerment will be strengthened by converting it into a separate Department, so that it can liaise effectively with all the other concerned Ministries/Departments and fulfill its responsibilities towards the disabled". Looking to the specialized nature of the subject on "Disability", the wide ranging work to be done in the light of the UNCRPT, and the inadequacy of existing implementation structure, the time has now come to upgrade the existing Disability Bureau in the M/o SJ&E. The decision to create a separate Department of Disability Affairs within the M/o SJ&E was taken up by the Government, in principle on 3rd January, 2012. This was also announced by the President before both houses of Parliament on 12th March, 2012.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default AboutUs