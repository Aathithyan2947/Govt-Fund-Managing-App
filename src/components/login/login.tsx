import App_navbar from '../navbar/App_navbar'
import './login.css'

function Login() {
  return (
    <>
    <App_navbar />
        <div className='d-flex flex-row'>
            <div className='background-img'>

            </div>
            <div className='second-side d-flex flex-column justify-content-center align-items-center'>
            <div className ="loginContainer p-5">
            <form>
                <div className="userpass">
                    <h2 className='text-center mb-4'>Login</h2>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="pass mt-4">
                        <input type="password" className="form-control" placeholder="password" />
                    </div>
                    <div className="but text-center mt-4">
                        <button className="btn btn-warning text-white">Login</button>
                    </div>
                </div> 
            </form>
            </div>
            </div>
        </div>
    </>
  )
}

export default Login