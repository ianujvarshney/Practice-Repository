import logo from '../images/logo.svg';
import React from 'react';
import backgrou from '../images/backgrou.svg';
import background from '../images/background.svg';
import { Link } from "react-router-dom";
import '../Pagescss/Page04.css';
function Page04() {
    return (
        <>
            <div className="container-fluid">
                <div className="row row-Block-1">
                    <div className="col-12 Box">
                        <img src={background} />
                        <h1 className="icon"><img src={logo} /></h1>
                        <h1 className="icon-2"><img src={backgrou} /></h1>
                    </div>
                </div>
                <div className="row Box-2">
                    <div className="col-2 col-items-1">
                        <button> <Link to="/Page03">{"< Back"}</Link></button>
                    </div>
                    <div className="col-5 col-items-2">
                        <h1 className="text-center new-1">Log In to Your Account</h1>
                    </div>
                </div>
                <div className="row row-items-3">
                    <div className="col-3 new">
                        <form>
                            <p>e-Mail Address*</p>
                            <input type="email" />
                            <p>Password*</p>
                            <input type="password" />
                        </form>
                        <label>
                            <input className="input-checkbox" type="checkbox" />I agree to the <a className="anchor" href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <button id="submit" type="submit" >Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page04;