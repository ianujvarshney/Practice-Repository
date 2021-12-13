import logo from '../images/logo.svg';
import React from 'react';
import backgrou from '../images/backgrou.svg';
import background from '../images/background.svg';
import Help from '../images/Ellipse4.svg';
import Help_1 from '../images/Vector.svg';
import Help_2 from '../images/Vector1.svg';
import '../Pagescss/Page02.css';
function Page02() {
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
                        <button> <a href="#">
                            {"< Back"}</a></button>
                    </div>
                    <div className="col-5 col-items-2">
                        <h1 className="text-center new-1">Create Your Account</h1>
                    </div>
                </div>
                <div className="row row-items-3">
                    <div className="col-3 col-item-a">
                        <img className="img-1" src={Help} />
                        <img className="img-2" src={Help_1} />

                        <img className="img-3" src={Help_2} />
                        <h1 className="heading-1"><a className="col-3-anchor-link" href="#">Add Profile Picture</a></h1>
                    </div>
                    <div className="col-3">
                        <form>
                            <p>Name*</p>
                            <input type="text" />
                            <p>e-Mail Address*</p>
                            <input type="email" />
                            <p>Password*</p>
                            <input type="password" />
                            <p>Confirm Password*</p>
                            <input type="password" />
                        </form>
                        <label>
                            <input className="input-checkbox" type="checkbox" />I agree to the <a className="anchor" href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
                        </label>
                        <button id="submit" type="submit" >Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page02;