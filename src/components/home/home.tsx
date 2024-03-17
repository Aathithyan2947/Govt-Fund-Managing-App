import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import App_navbar from "../navbar/App_navbar";
import './home.css'

function Home_app() {
    const navigate = useNavigate();
  return (
    <>
        <div className="MainBackground">
            <App_navbar />
            <div className="mainContainer">
                <div className="mainContent w3-animate-top">
                    <div>
                        <h1 style={{fontWeight:"bold",fontSize:'50px'}}>Physically Challenged <br/>
                            people related schemes                    
                        </h1>
                        <button className="button" onClick={()=>navigate('/info_table')}>
                            show more 
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        <div className="scroll-marquee d-flex flex-row justify-content-evenly">
            <p className="m-3" style={{fontWeight:'bold'}}> RPWD Act, 2016, UDID card can be issued by home district hospital as well as the hospital where the PWD is taking medical treatment </p>
        </div>
        {/* Mid section*/}  
        <div className="mid-section-container d-flex flex-row">
            <div className="mid-section-content">
                <div className="mid-section-img">
                    <h1 className="text-center d-flex flex-column justify-content-center vh-100">
                    Empower abilities,<br /> eliminate disabilities,<br /> foster progress.
                    </h1>
                </div>
            </div>
            <div className="img-sec">

            </div>
        </div>     
        <Footer/>
    </>    
  );
}

export default Home_app
