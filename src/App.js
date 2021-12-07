import logo from './logo.svg';
import backgrou from './backgrou.jpg';
import './App.css';
function App() {
  return (
    <>
      <section>
        <div className="box">
          <div className="box-items">
            <img src={backgrou} />
          </div>
          <h1 className="heading"><img src={logo}></img></h1>
          <h1 className="text-center new-1">Sign Up as..</h1>
          <div className="card-group">
            <button> <a href="#"> {"< Back"}</a></button>
            <div className="card card-1">
              <div className="card-item">
                <i className="fas fa-user-tie"></i>
                <h1 className="heading-1">Coach</h1>
              </div>
            </div>
            <div className="card card-2">
              <div className="card-item">
                <i className="fas fa-user-tie"></i>
                <h1 className="heading-1">Client</h1>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
