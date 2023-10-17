import React from 'react'

function Footer ()
{
    return (
        <div>

            {/* <!-- ================ footer Section start Here =============== --> */ }
            <div className="footer-section">
                <div className="footer-top">
                    <div className="container">
                        <div className="row g-3 justify-content-center g-lg-0">
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/01.png" alt="Phone-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Phone Number : +91 8597 406 694</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/02.png" alt="email-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Email : contact@dillkhush.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/03.png" alt="location-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Address : Garia, Kolkata - 700152</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle padding-tb" Style={ { background: 'url("assets/images/footer/bg.png")', } }>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>About Dillkhush</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            <p className="mb-4">Energistically coordinate highly efficient procesr
                                                partnerships befor revolutionar growth strategie
                                                improvement viaing awesome</p>
                                            <img src="assets/images/footer/about.jpg" className="footer-abt-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>our Recent news</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            <div className="fm-item-widget lab-item">
                                                <div className="lab-inner">
                                                    <div className="lab-thumb">
                                                        <a href="/#"> <img src="assets/images/footer/01.jpg"
                                                            alt="footer-widget-img" /></a>
                                                    </div>
                                                    <div className="lab-content">
                                                        <h6><a href="blog-single.html">Enable Seamin Matera Forin And Our
                                                            Orthonal Create Vortals.</a></h6>
                                                        <p>July 23, 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fm-item-widget lab-item">
                                                <div className="lab-inner">
                                                    <div className="lab-thumb">
                                                        <a href="/#"><img src="assets/images/footer/02.jpg"
                                                            alt="footer-widget-img" /></a>
                                                    </div>
                                                    <div className="lab-content">
                                                        <h6><a href="blog-single.html">Dynamca Network Otuitive Catays For
                                                            Plagiarize Mindshare After</a></h6>
                                                        <p>July 23, 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fm-item-widget lab-item">
                                                <div className="lab-inner">
                                                    <div className="lab-thumb">
                                                        <a href="/#"><img src="assets/images/footer/03.jpg"
                                                            alt="footer-widget-img" /></a>
                                                    </div>
                                                    <div className="lab-content">
                                                        <h6><a href="blog-single.html">Dynamca Network Otuitive Catays For
                                                            Plagiarize Mindshare After</a></h6>
                                                        <p>July 23, 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item-3 mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>Our Newsletter Signup</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            <p>By subscribing to our mailing list you will always
                                                be update with the latest news from us.</p>
                                            <form>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Enter email" />
                                                </div>
                                                <button type="submit" className="lab-btn">Send Massage <i
                                                    className="icofont-paper-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom-content text-center">
                                    <p>Made with ❤️ by <a href="https://thebengalstudio.com">TBS Dev Team</a> &copy; 2023 <a href="https://dillkhush.com">Dillkhush</a> - All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ================ footer Section end Here =============== --> */ }
        </div>
    )
}

export default Footer