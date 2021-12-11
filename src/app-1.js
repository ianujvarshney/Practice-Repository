import logo from './images/logo.svg';
import React from 'react';
import backgrou from './images/backgrou.svg';
import background from './images/background.svg';
import Help from './images/Help (1).svg';
import Help_1 from './images/Help.svg';
import './App.css';
function App() {
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
                        <h1 className="text-center new-1">Sign Up as..</h1>
                    </div>
                </div>
                <div className="row row-items-3">
                    <div className="col-3 col-items-3 one">
                        <img src={Help} />
                        <h1 className="heading-1">Coach</h1>
                    </div>
                    <div className="col-3 col-items-4 one">
                        <img src={Help_1} />
                        <h1 className="heading-1">Client</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
