import React from 'react';

const Footer = () => {
    return (
        <div>
            <div>
            <footer className='my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; 2023 Example Company. All rights reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-inline text-md-right">
                                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                                <li className="list-inline-item"><a href="#">Terms of Use</a></li>
                                <li className="list-inline-item"><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
        </div>
    );
};

export default Footer;