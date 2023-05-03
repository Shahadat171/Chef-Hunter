import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';



const Navbar = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Rajmohol Restora</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className='nav-link active' to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active">Search</a>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            {
                                user && <p>{user.displayName}</p>
                            }
                            {
                                user ? <button type="button" className="btn btn-dark"> Log Out</button>
                                : <Link className='text-light' to='login'> <button type="button" className="btn btn-dark"> Login </button>  </Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;