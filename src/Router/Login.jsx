import React from "react";
import  './Login.css'

const Login = () =>{
    return(
        <>
        
        <div className="div">
        <h1>Login</h1>
            <form action="">
                <label htmlFor="Name">First Name:-</label>
                <input type="text" placeholder="Enter Your First Name" className="hello"/><br />

                <label htmlFor="Name">Last Name:-</label>
                <input type="text" placeholder="Enter Your Last Name" className="hello"/><br />

                <label htmlFor="Name">Email:-</label>
                <input type="email" placeholder="Enter Your email" className="hello"/><br />

                <label htmlFor="Name">Password:-</label>
                <input type="password" pattern="[A-Za-z0-9@#!]{6,8}" placeholder="Enter Your Password" className="hello" /><br />

                <label htmlFor="Name">Age:-</label>
                <input type="Num" placeholder="Enter Your Age" className="hello" /><br />

                <label htmlFor="Name">Phone.No:-</label>
                <input type="tel" pattern="[0-9]{10}" placeholder="Enter Your email" className="hello"/><br />

                <label htmlFor="Name">Gender:-</label>
                Male<input type="radio" name="gender" id="male" className="hi"/>
                Female<input type="radio" name="gender" id="female" className="hi"/><br />
                
                <button>Submit</button>

                {/* <input type="submit" value="Submit" /> */}
                
            </form>
        </div>
        
        </>
    )
}

export default Login;