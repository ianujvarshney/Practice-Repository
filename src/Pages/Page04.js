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
                        <h1 className="icon"><Link to="/" ><img src={logo} /></Link></h1>
                        <h1 className="icon-2"><img src={backgrou} /></h1>
                    </div>
                </div>
                <div className="row Box-2">
                    <div className="col-2 col-items-1">
                        <button> <Link to="/Page03">{"< Back"}</Link></button>
                    </div>
                    <div className="col-5 col-items-2" id="h1weight">
                        <h1 className="text-center new-1">Log In to Your Account</h1>
                    </div>
                </div>
                <div className="row row-items-3">
                    <div className="col-3 new">
                        <form>
                            <p>e-Mail Address*</p>
                            <input type="email" alt="" required />
                            <p>Password*</p>
                            <input type="password" alt="" required />
                        </form>
                    </div>
                    <div className="row" id="coldata">
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