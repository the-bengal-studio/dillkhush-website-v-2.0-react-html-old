import React from 'react'


import "../../assets/css/animate.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/icofont.min.css";
import "../../assets/css/swiper.min.css";
import "../../assets/css/style.css";

import Common from '../../common/JS/Common';
import Header from '../../common/Component/Header/Header';
import Footer from '../../common/Component/Footer/Footer';


function Home ()
{
    return (
        <div>
            {/* <!-- preloader start here --> */ }
            {/* <div className="preloader">
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div> */}
            {/* <!-- preloader ending here --> */ }


            <Header />



            {/* <!-- ================ Banner Section start Here =============== --> */ }
            <div className="banner-section">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row align-items-end">
                            <div className="col-lg-6">
                                <div className="banner-content">
                                    <div className="intro-form">
                                        <div className="intro-form-inner">
                                            <h3>Introducing Dillkhush</h3>
                                            <p>Serious Dating With <strong>Dillkhush </strong> Your Perfect
                                                Match is Just a Click Away.</p>
                                            <form action="https://labartisan.net/" className="banner-form">
                                                <div className="gender">
                                                    <label for="gender" className="left">I am a </label>
                                                    <div className="custom-select right">
                                                        <select name="gender" id="gender" className="">
                                                            <option value="0">Select Gender</option>
                                                            <option value="1">Male</option>
                                                            <option value="2">Female</option>
                                                            <option value="3">Others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="person">
                                                    <label for="gender-two" className="left">Looking for</label>
                                                    <div className="custom-select right">
                                                        <select name="gender" id="gender-two" className="">
                                                            <option value="0">Select Gender</option>
                                                            <option value="1">Male</option>
                                                            <option value="2">Female</option>
                                                            <option value="3">Others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="age">
                                                    <label for="age" className="left">Age</label>
                                                    <div className="right d-flex justify-content-between">
                                                        <div className="custom-select">
                                                            <select name="age-start" id="age">
                                                                <option value="1">18</option>
                                                                <option value="2">19</option>
                                                                <option value="3">20</option>
                                                                <option value="4">21</option>
                                                                <option value="5">22</option>
                                                                <option value="6">23</option>
                                                                <option value="7">24</option>
                                                                <option value="8">25</option>
                                                                <option value="9">26</option>
                                                                <option value="10">27</option>
                                                                <option value="11">28</option>
                                                                <option value="13">29</option>
                                                                <option value="14">30</option>
                                                            </select>
                                                        </div>

                                                        <div className="custom-select">
                                                            <select name="age-end" id="age-two">
                                                                <option value="1">18+</option>
                                                                <option value="2">19</option>
                                                                <option value="3">20</option>
                                                                <option value="4">21</option>
                                                                <option value="5">22</option>
                                                                <option value="6">23</option>
                                                                <option value="7">24</option>
                                                                <option value="8">25</option>
                                                                <option value="9">26</option>
                                                                <option value="10">27</option>
                                                                <option value="11">28</option>
                                                                <option value="13">29</option>
                                                                <option value="14">30</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="city">
                                                    <label for="city" className="left">City</label>
                                                    <input className="right" type="text" id="city" placeholder="Your City Name.." />
                                                </div>
                                                <button className="">Find Your Partner</button>

                                            </form>
                                            <ul className="social-list">
                                                <li className="google"><a href="/#">
                                                    <img src="assets/images/banner/google.png" alt="img" />
                                                    <span>Continue with google</span>
                                                </a></li>
                                                <li className="facebook"><a href="index-2.html/#">
                                                    <i className="icofont-facebook"></i>
                                                </a></li>
                                                <li className="twitter"><a href="index-2.html/#">
                                                    <i className="icofont-twitter"></i>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-thumb">
                                    <img src="assets/images/banner/01.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-shapes">
                    <img src="./assets/images/banner/banner-shapes/01.png" alt="shape" className="banner-shape shape-1" />
                    <img src="assets/images/banner/banner-shapes/01.png" alt="shape" className="banner-shape shape-1" />
                    <img src="assets/images/banner/banner-shapes/02.png" alt="shape" className="banner-shape shape-2" />
                    <img src="assets/images/banner/banner-shapes/03.png" alt="shape" className="banner-shape shape-3" />
                    <img src="assets/images/banner/banner-shapes/04.png" alt="shape" className="banner-shape shape-4" />
                    <img src="assets/images/banner/banner-shapes/05.png" alt="shape" className="banner-shape shape-5" />
                    <img src="assets/images/banner/banner-shapes/06.png" alt="shape" className="banner-shape shape-6" />
                    <img src="assets/images/banner/banner-shapes/07.png" alt="shape" className="banner-shape shape-7" />
                    <img src="assets/images/banner/banner-shapes/08.png" alt="shape" className="banner-shape shape-8" />
                </div>
            </div>
            {/* <!-- ================ Banner Section end Here =============== --> */ }


            {/* <!-- ================ Member Section Start Here =============== --> */ }
            <div className="member-section padding-tb">
                <div className="container">
                    <div className="section-header">
                        <h4 className="theme-color">Meet New People Today!</h4>
                        <h2>New Members in London</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row justify-content-center g-3 g-md-4">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/01.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Andrea Guido</a> </h6>
                                            <p>Active 1 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/02.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Gihan-Fernando</a></h6>
                                            <p>Active 2 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/03.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Sweet Admin</a></h6>
                                            <p>Active 3 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/04.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Gyan-Baffour</a></h6>
                                            <p>Active 5 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/05.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Teszt Eleking</a></h6>
                                            <p>Active 1 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/06.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Zeahra Guido</a>
                                            </h6>
                                            <p>Active 1 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="member-button-group d-flex flex-wrap justify-content-center">
                            <a href="signup.html" className="lab-btn"><i className="icofont-users"></i> <span>Join Us for
                                Free</span></a>
                            <a href="login.html" className="lab-btn"><i className="icofont-play-alt-1"></i> <span>Our tv
                                commercial</span></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ================ Member Section end Here =============== --> */ }


            {/* <!-- ================ About Section start Here =============== --> */ }
            <div className="about-section padding-tb bg-img">
                <div className="container">
                    <div className="section-header">
                        <h4>About Our Turulav</h4>
                        <h2>It All Starts With A Date</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row justify-content-center g-4">
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="lab-item about-item">
                                    <div className="lab-inner text-center">
                                        <div className="lab-thumb">
                                            <img src="assets/images/about/01.png" alt="img" />
                                        </div>
                                        <div className="lab-content">
                                            <h2 className="counter">29,991</h2>
                                            <p>Members in Total</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="lab-item about-item">
                                    <div className="lab-inner text-center">
                                        <div className="lab-thumb">
                                            <img src="assets/images/about/02.png" alt="img" />
                                        </div>
                                        <div className="lab-content">
                                            <h2 className="counter">29,960</h2>
                                            <p>Members Online</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="lab-item about-item">
                                    <div className="lab-inner text-center">
                                        <div className="lab-thumb">
                                            <img src="assets/images/about/03.png" alt="img" />
                                        </div>
                                        <div className="lab-content">
                                            <h2 className="counter">29,960</h2>
                                            <p>Men Online</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="lab-item about-item">
                                    <div className="lab-inner text-center">
                                        <div className="lab-thumb">
                                            <img src="assets/images/about/04.png" alt="img" />
                                        </div>
                                        <div className="lab-content">
                                            <h2 className="counter">28,960</h2>
                                            <p>Women Online</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ================ About Section end Here =============== --> */ }


            {/* <!-- ================ Work Section start Here =============== --> */ }
            <div className="work-section padding-tb">
                <div className="container">
                    <div className="section-header">
                        <h4 className="theme-color">How Does It Work?</h4>
                        <h2>You’re Just 3 Steps Away From A Great Date</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row justify-content-center g-5">
                            <div className="col-lg-4 col-sm-6 col-12 px-4">
                                <div className="lab-item work-item">
                                    <div className="lab-inner text-center">
                                        <div className="lab-thumb">
                                            <div className="thumb-inner">
                                                <img src="assets/images/work/01.png" alt="work-img" />
                                                <div className="step">
                                                    <span>step</span>
                                                    <p>01</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lab-content">
                                            <h4>Create A Profile</h4>
                                            <p>Continua actualize ailers through robu
                                                and sertively concepze standards compliant
                                                commerce after technica sound.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12 px-4">
                                <div className="lab-item work-item">
                                    <div className="lab-inner text-center">
                                        <div className="lab-thumb">
                                            <div className="thumb-inner">
                                                <img src="assets/images/work/02.png" alt="work-img" />
                                                <div className="step">
                                                    <span>step</span>
                                                    <p>02</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lab-content">
                                            <h4>Find Matches</h4>
                                            <p>Continua actualize ailers through robu
                                                and sertively concepze standards compliant
                                                commerce after technica sound.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12 px-4">
                                <div className="lab-item work-item">
                                    <div className="lab-inner text-center">
                                        <div className="lab-thumb">
                                            <div className="thumb-inner">
                                                <img src="assets/images/work/03.png" alt="work-img" />
                                                <div className="step">
                                                    <span>step</span>
                                                    <p>03</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lab-content">
                                            <h4>Start Dating</h4>
                                            <p>Continua actualize ailers through robu
                                                and sertively concepze standards compliant
                                                commerce after technica sound.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ================ Work Section end Here =============== --> */ }



            {/* <!-- ================ Success Story Section start Here =============== --> */ }
            <div className="story-section padding-tb bg-img">
                <div className=" container">
                    <div className="section-header">
                        <h4>Love in Faith Success Stories</h4>
                        <h2>Sweet Stories From Our Lovers</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row justify-content-center g-4">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="story-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/story/01.jpg" alt="img" />
                                        </div>
                                        <div className="lab-content">
                                            <h4><a href="blog-single.html">Image Post Formate</a></h4>
                                            <p>Seamlesly evolve unique web-readiness with
                                                Collabors atively fabricate best of breed and
                                                apcations through </p>
                                            <a href="blog-single.html" className="lab-btn"><i className="icofont-circled-right"></i>
                                                Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="story-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/story/02.jpg" alt="img" />
                                        </div>
                                        <div className="lab-content">
                                            <h4><a href="blog-single.html">Couple Of Month</a></h4>
                                            <p>Seamlesly evolve unique web-readiness with
                                                Collabors atively fabricate best of breed and
                                                apcations through </p>
                                            <a href="blog-single.html" className="lab-btn"><i className="icofont-circled-right"></i>
                                                Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="story-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/story/03.jpg" alt="img" />
                                        </div>
                                        <div className="lab-content">
                                            <h4><a href="blog-single.html">Media For Blog Article</a></h4>
                                            <p>Seamlesly evolve unique web-readiness with
                                                Collabors atively fabricate best of breed and
                                                apcations through </p>
                                            <a href="blog-single.html" className="lab-btn"><i className="icofont-circled-right"></i>
                                                Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ================ Success Story Section end Here =============== --> */ }


            {/* <!-- ================ Top Member Section start Here =============== --> */ }
            <div className="top-member-section padding-tb">
                <div className="container">
                    <div className="section-header">
                        <h4 className="theme-color">Top Members</h4>
                        <h2>Turulav Members Online Now</h2>
                    </div>
                    <div className="section-wrapper">
                        <ul className="button-group filters-button-group w-100 d-flex flex-wrap justify-content-center">
                            <li className="button is-checked filter-btn" data-filter="*"><i className="icofont-heart-alt"></i> Show all
                            </li>
                            <li className="button filter-btn" data-filter=".girl"><i className="icofont-girl"></i> new girl
                                member</li>
                            <li className="button filter-btn" data-filter=".boy"><i className="icofont-hotel-boy"></i> New
                                Boy Member</li>
                        </ul>



                        <div className="row justify-content-center g-3 g-md-4">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/01.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Andrea Guido</a> </h6>
                                            <p>Active 1 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/02.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Gihan-Fernando</a></h6>
                                            <p>Active 2 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/03.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Sweet Admin</a></h6>
                                            <p>Active 3 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/04.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Gyan-Baffour</a></h6>
                                            <p>Active 5 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/05.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Teszt Eleking</a></h6>
                                            <p>Active 1 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/06.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Zeahra Guido</a>
                                            </h6>
                                            <p>Active 1 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/01.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Andrea Guido</a> </h6>
                                            <p>Active 1 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/02.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Gihan-Fernando</a></h6>
                                            <p>Active 2 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/03.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Sweet Admin</a></h6>
                                            <p>Active 3 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/04.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Gyan-Baffour</a></h6>
                                            <p>Active 5 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/05.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Teszt Eleking</a></h6>
                                            <p>Active 1 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                <div className="lab-item member-item style-1">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/member/06.jpg" alt="member-img" />
                                        </div>
                                        <div className="lab-content">
                                            <h6><a href="profile.html">Zeahra Guido</a>
                                            </h6>
                                            <p>Active 1 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            {/* <!-- ================ Top Member Section end Here =============== --> */ }


            {/* <!-- ================ Active Group Section Start Here =============== --> */ }
            <div className="group-section padding-tb bg-img">
                <div className="container">
                    <div className="section-header">
                        <h4>Recently Active Groups</h4>
                        <h2>Turulav 4 Best Active Group</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4">
                            <div className="col-xl-6 col-12">
                                <div className="group-item lab-item">
                                    <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                                        <div className="lab-thumb me-sm-4 mb-4 mb-sm-0">
                                            <img src="assets/images/group/01.jpg" alt="img" />
                                        </div>
                                        <div className="lab-content">
                                            <h4>Active Group A1</h4>
                                            <p>Colabors atively fabcate best breed and
                                                apcations through visionary value </p>
                                            <ul className="img-stack d-flex">
                                                <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                                <li className="bg-theme">12+</li>
                                            </ul>
                                            <div className="test"> <a href="active-group.html" className="lab-btn"> <i
                                                className="icofont-users-alt-5"></i>View Group</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-12">
                                <div className="group-item lab-item">
                                    <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                                        <div className="lab-thumb me-sm-4 mb-4 mb-sm-0">
                                            <img src="assets/images/group/02.jpg" alt="img" />
                                        </div>
                                        <div className="lab-content">
                                            <h4>Active Group A2</h4>
                                            <p>Colabors atively fabcate best breed and
                                                apcations through visionary value </p>
                                            <ul className="img-stack d-flex">
                                                <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                                <li className="bg-theme">12+</li>
                                            </ul>
                                            <div className="test"> <a href="active-group.html" className="lab-btn"> <i
                                                className="icofont-users-alt-5"></i>View Group</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-12">
                                <div className="group-item lab-item">
                                    <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                                        <div className="lab-thumb me-sm-4 mb-4 mb-sm-0">
                                            <img src="assets/images/group/03.jpg" alt="img" />
                                        </div>
                                        <div className="lab-content">
                                            <h4>Active Group A3</h4>
                                            <p>Colabors atively fabcate best breed and
                                                apcations through visionary value </p>
                                            <ul className="img-stack d-flex">
                                                <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                                <li className="bg-theme">12+</li>
                                            </ul>
                                            <div className="test"> <a href="active-group.html" className="lab-btn"> <i
                                                className="icofont-users-alt-5"></i>View Group</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-12">
                                <div className="group-item lab-item">
                                    <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                                        <div className="lab-thumb me-sm-4 mb-4 mb-sm-0">
                                            <img src="assets/images/group/04.jpg" alt="img" />
                                        </div>
                                        <div className="lab-content">
                                            <h4>Active Group A4</h4>
                                            <p>Colabors atively fabcate best breed and
                                                apcations through visionary value </p>
                                            <ul className="img-stack d-flex">
                                                <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                                <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                                <li className="bg-theme">12+</li>
                                            </ul>
                                            <div className="test"> <a href="active-group.html" className="lab-btn"> <i
                                                className="icofont-users-alt-5"></i>View Group</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ================ Active Group Section end Here =============== --> */ }


            {/* <!-- ================ Review Section start Here =============== --> */ }
            <div className="clints-section padding-tb">
                <div className="container">
                    <div className="section-header">
                        <h4 className="theme-color">What our Customers Say</h4>
                        <h2>Client’s Feed back Latest Reviews
                            From My Clients</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="clients">
                            <div className="client-list">
                                <div className="client-content">
                                    <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                                        Procedur Arramin</p>
                                    <div className="client-info">
                                        <div className="name-desi">
                                            <h6>Marin Chapla</h6>
                                            <span>UI Designer</span>
                                        </div>
                                        <div className="rating">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-thumb">
                                    <img src="assets/images/group/group-mem/02.png" alt="lab-clients" />
                                </div>
                            </div>
                            <div className="client-list">
                                <div className="client-content">
                                    <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                                        Procedur Arramin</p>
                                    <div className="client-info">
                                        <div className="name-desi">
                                            <h6>Nandita Rani</h6>
                                            <span>Digital Marketor</span>
                                        </div>
                                        <div className="rating">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-thumb">
                                    <img src="assets/images/group/group-mem/01.png" alt="lab-clients" />
                                </div>
                            </div>
                            <div className="client-list">
                                <div className="client-content">
                                    <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                                        Procedur Arramin</p>
                                    <div className="client-info">
                                        <div className="name-desi">
                                            <h6>Sunil Borua</h6>
                                            <span>UX Designer</span>
                                        </div>
                                        <div className="rating">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-thumb">
                                    <img src="assets/images/group/group-mem/03.png" alt="lab-clients" />
                                </div>
                            </div>
                            <div className="client-list">
                                <div className="client-content">
                                    <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                                        Procedur Arramin</p>
                                    <div className="client-info">
                                        <div className="name-desi">
                                            <h6>Zinat Zaara</h6>
                                            <span>Web Designer</span>
                                        </div>
                                        <div className="rating">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-thumb">
                                    <img src="assets/images/group/group-mem/04.png" alt="lab-clients" />
                                </div>
                            </div>
                            <div className="client-list">
                                <div className="client-content">
                                    <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                                        Procedur Arramin</p>
                                    <div className="client-info">
                                        <div className="name-desi">
                                            <h6><a href="profile.html">Somrat Islam </a></h6>
                                            <span>UI Designer</span>
                                        </div>
                                        <div className="rating">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-thumb">
                                    <img src="assets/images/group/group-mem/05.png" alt="lab-clients" />
                                </div>
                            </div>
                            <div className="client-list">
                                <div className="client-content">
                                    <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                                        Procedur Arramin</p>
                                    <div className="client-info">
                                        <div className="name-desi">
                                            <h6>Junaid Khan</h6>
                                            <span>Font-End-Devoloper</span>
                                        </div>
                                        <div className="rating">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-thumb">
                                    <img src="assets/images/group/group-mem/06.png" alt="lab-clients" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ================ Review Section end Here =============== --> */ }


            {/* <!-- ================ App Section start Here =============== --> */ }
            <div className="app-section bg-theme">
                <div className="container">
                    <div className="section-wrapper padding-tb">
                        <div className="app-content">
                            <h4>Download App Our Turulav</h4>
                            <h2>Easy Connect to Everyone</h2>
                            <p>You find us, finally, and you are already in love. More than 5.000.000 around
                                the world already shared the same experience andng ares uses our system
                                Joining us today just got easier!</p>
                            <ul className="app-download d-flex flex-wrap">
                                <li><a href="/#" className="d-flex flex-wrap align-items-center">
                                    <div className="app-thumb">
                                        <img src="assets/images/app/apple.png" alt="apple" />
                                    </div>
                                    <div className="app-content">
                                        <p>Available on the</p>
                                        <h4>App Store</h4>
                                    </div>
                                </a></li>
                                <li className="d-inline-block"><a href="/#" className="d-flex flex-wrap align-items-center">
                                    <div className="app-thumb">
                                        <img src="assets/images/app/playstore.png" alt="playstore" />
                                    </div>
                                    <div className="app-content">
                                        <p>Available on the</p>
                                        <h4>Google Play</h4>
                                    </div>
                                </a></li>
                            </ul>

                        </div>
                        <div className="mobile-app">
                            <img src="assets/images/app/mobile-view.png" alt="mbl-view" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ================ App Section end Here =============== --> */ }


            <Footer />

            {/* <Common /> */ }

        </div>
    )
}

export default Home