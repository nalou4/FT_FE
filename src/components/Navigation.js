import { Link, useNavigate } from "react-router-dom";

const Navigation = ({ token, setToken, setUser }) => {

    const navigate = useNavigate();
    const logOut = () => {
        setToken("");
        setUser(null);
        navigate("/");
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand" href="#">Fitness Trackr</h1>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item active">
                        <h1 className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li> */}
                    <li className="nav-item">
                        <h1 className="nav-link" href="#">
                        <Link className="nav-link" to="/">Home</Link>
                        </h1>
                    </li>

                    <li className="nav-item">
                        <h1 className="nav-link" href="#">
                            <Link to="/routines"className="nav-link">Routines</Link>
                        </h1>
                    </li>

                    <li className="nav-item">
                        <h1 className="nav-link" href="#">
                            <Link to="/activities"className="nav-link">Activities</Link>
                        </h1>
                    </li>

                    <li className="nav-item">
                        <h1 className="nav-link" href="#">
                        {token ? (
                            <Link to="/users/me" className="nav-link">My routines</Link>
                        ) : (
                            <Link to="/users/signup" className="nav-link"> Sign Up</Link>
                        )}

                        </h1>

                    </li>
                    <li className="nav-item">
                        <h1 className="nav-link" href="#">
                        {token ? (
                            <Link to="/" className="nav-link" onClick={logOut}>Log out</Link>
                        ) : (
                            <Link to="/users/login" className="nav-link">Log in</Link>
                        )}
                            
                        </h1>
                    </li>

                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Routines
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">
                                <Link to="/routines"className="nav-link">All Routines</Link>
                            </a>
                            <a className="dropdown-item" href="#">
                                <Link to="/activities"className="nav-link">All Activities</Link>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Activities
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}

{/* 
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                </ul>
            </div>


            {/* <li className="nav-item active">
                        <a className="nav-link">
                        <Link to="/">Home</Link>
                        </a>
                        
                    </li> */}


            </nav>
        </>
    )
}
export default Navigation

