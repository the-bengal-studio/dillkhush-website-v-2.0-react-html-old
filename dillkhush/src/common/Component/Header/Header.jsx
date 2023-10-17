import React from 'react'

function Header ()
{
    return (
        <div>
            {/* <!-- ==========Header Section Starts Here========== --> */ }
            <div className="header-section">
                <div className="header-top">
                    <div className="container">
                        <div className="header-top-area">
                            <ul className="left">
                                <li>
                                    <i className="icofont-ui-call"></i> <span>+91 8597 406 694</span>
                                </li>
                                <li>
                                    <i className="icofont-location-pin"></i>Garia, Kolkata - 721101
                                </li>
                            </ul>
                            <ul className="social-icons d-flex align-items-center">
                                <li>
                                    <p>
                                        Find us on :
                                    </p>
                                </li>
                                <li>
                                    <a href="/#" className="fb"><i className="icofont-facebook-messenger"></i></a>
                                </li>
                                <li>
                                    <a href="/#" className="twitter"><i className="icofont-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="/#" className="vimeo"><i className="icofont-vimeo"></i></a>
                                </li>
                                <li>
                                    <a href="/#" className="skype"><i className="icofont-skype"></i></a>
                                </li>
                                <li>
                                    <a href="/#" className="rss"><i className="icofont-rss-feed"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo-name.png" alt="logo" />
                                </a>
                            </div>
                            <div className="menu-area">
                                <ul className="menu">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>

                                    <li>
                                        <a href="#0">Features</a>
                                        <ul className="submenu">
                                            <li><a href="members.html">All Members</a></li>
                                            <li><a href="profile.html">Member Profile</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="signup.html">Sign Up</a></li>
                                            <li><a href="pricing-plan.html">Pricing Plan</a></li>
                                            <li><a href="404.html">404 Page</a></li>

                                        </ul>
                                    </li>
                                    <li>
                                        <a href="active-group.html">Community</a>
                                    </li>
                                    <li>
                                        <a href="#0">Blog</a>
                                        <ul className="submenu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                                <a href="login.html" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </a>
                                <a href="signup.html" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span> </a>

                                {/* <!-- toggle icons --> */ }
                                <div className="header-bar d-lg-none">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="ellepsis-bar d-lg-none">
                                    <i className="icofont-info-square"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ==========Header Section Ends Here========== --> */ }

        </div>
    )
}

export default Header