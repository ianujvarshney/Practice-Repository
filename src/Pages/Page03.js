import logo from '../images/logo.svg';
import React from 'react';
import backgrou from '../images/backgrou.svg';
import background from '../images/background.svg';
import '../Pagescss/Page03.css';
import { Link } from "react-router-dom";
function Page03() {
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
                    <div className="text-center">
                        <h1 className="text-center new-1">Verify e-Mail</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="text-center">Please check Your e-mail account for a verification mail <br /> if done already, proceed to log in.</p>
                    </div>
                </div>
                <div className="row row-items-3">
                    <div className="col-12 text-center">
                        <Link id="change" to="/Page04">Go to Log In page</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page03;