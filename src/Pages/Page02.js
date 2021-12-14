import logo from '../images/logo.svg';
import React from 'react';
import backgrou from '../images/backgrou.svg';
import background from '../images/background.svg';
import Help from '../images/Ellipse4.svg';
import Help_1 from '../images/Vector.svg';
import Help_2 from '../images/Vector1.svg';
import { Link } from "react-router-dom";
import '../Pagescss/Page02.css';
function Page02() {
    return (
        <>
            <div id="main" className="container-fluid">
                <div className="row row-Block-1">
                    <div className="col-12 Box">
                        <img src={background} alt="" />
                        <h1 className="icon"><Link to="/" ><img src={logo} /></Link></h1>
                        <h1 className="icon-2"><img src={backgrou} alt="" /></h1>
                    </div>
                </div>
                <div className="row Box-2">
                    <div className="col-2 col-items-1">
                        <button> <Link to="/Page03">{"< Back"}</Link></button>
                    </div>
                    <div className="col-5 col-items-2">
                        <h1 className="text-center new-1">Create Your Account</h1>
                    </div>
                </div>
                <div className="row row-items-3">

                    <div className="col-3 col-item-a">
                        <img className="img-1" src={Help} alt="" />
                        <img className="img-2" src={Help_1} alt="" />

                        <label for="upa"><img className="img-3" src={Help_2} alt="" /></label>
                        <input id="upa" type="file" />
                        <h1 className="heading-1"><a className="col-3-anchor-link" href="#">Add Profile Picture</a></h1>
                    </div>
                    <div className="col-3">
                        <form>
                            <p>Name*</p>
                            <input type="text" alt="" required />
                            <p>e-Mail Address*</p>
                            <input type="email" alt="" required />
                            <p>Password*</p>
                            <input type="password" alt="" required />
                            <p>Confirm Password*</p>
                            <input type="password" alt="" required />
                        </form>
                        <label>
                            <input className="input-checkbox" type="checkbox" />I agree to the <a className="anchor" href="src/Main Pages/Term_condition.html">Terms and Conditions</a> and <a href="src/Main Pages/Term_condition.html">Privacy Policy</a>
                        </label>
                        <button id="submit" type="submit" >Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page02;