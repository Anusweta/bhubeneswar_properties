import { Link } from 'react-router-dom';
 
 
 const Footer = () => {
    return(
        <>
             <footer className="footer" >
            <div className="footer-inner">
              <div className="footer-inner-wrap">
                <div className="top-footer">
                  <div className="logo-footer">
                    <Link to="index.html">
                      <img
                        id="logo-footer"
                        src="/images/logo/bhubaneswarproperty-logo.png"
                        alt=""
                        style={{
    width: '220px', // Set the desired width
    height: 'auto', // Maintain the aspect ratio
    }}/>
                    </Link>
                  </div>
                  <div className="wg-social">
                    <span>Follow Us</span>
                    <ul className="list-social">
                      <li>
                        <Link to="#">
                          <i className="icon-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icon-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icon-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icon-linkedin2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="center-footer">
                  <div className="footer-cl-1">
                    <div className="ft-title">Subscribe</div>
                    <form className="form-subscribe style-line-bottom">
                      <fieldset className="email">
                        <input
                          type="email"
                          placeholder="Your e-mail"
                          className="style-1"
                          name="email"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required=""
                        />
                      </fieldset>
                      <div className="button-submit style-absolute-right">
                        <button className="tf-button-bg" type="submit">
                          Send <i className="icon-arrow-right-add" />
                        </button>
                      </div>
                    </form>
                    <div className="text">
                      Subscribe to our newsletter to receive our weekly feed.
                    </div>
                  </div>
                  <div className="footer-cl-2">
                    <div className="ft-title">Discover</div>
                    <ul className="navigation-menu-footer">
                      <li>
                        <Link to="property-map-v1.html">Miami</Link>
                      </li>
                      <li>
                        <Link to="property-map-v1.html">New York</Link>
                      </li>
                      <li>
                        <Link to="property-map-v1.html">Chicago</Link>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="footer-cl-3">
                    <div className="ft-title">Quick Links</div>
                    <ul className="navigation-menu-footer">
                      <li>
                      <Link to="/home">Home</Link>
                      </li>
                      <li>
                      <Link to="/PropertyList">Property</Link>
                      </li>
                      <li>
                        <Link to="contact">Contact Us</Link>
                      </li>
                      {/*
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li> */}
                    </ul>
                  </div>
                  <div className="footer-cl-4">
                    <div className="ft-title">Contact Us</div>
                    <ul className="navigation-menu-footer">
                      <li>
                        <div className="text">info@
                        bhubaneswarproperty.in 9090212121</div>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-cl-5">
                    <div className="ft-title">Our Address</div>
                    <ul className="navigation-menu-footer">
                      <li>
                        <div className="text">
                          Jaydev  Vihar, Bhubaneswar, Odisha
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-cl-6">
                    <div className="ft-title">Get the app</div>
                    <ul className="ft-download">
                      <li>
                        <Link to="#">
                          <div className="icon">
                            <i className="icon-appleinc" />
                          </div>
                          <div className="app">
                            <div>Download on the</div>
                            <div>Apple Store</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <div className="icon">
                            <i className="icon-ch-play" />
                          </div>
                          <div className="app">
                            <div>Get in on</div>
                            <div>Google Play</div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bottom-footer">
                  <div className="text">Copyright © 2024. JustHome</div>
                </div>
              </div>
            </div>
          </footer>
         
        </>
    );
 }

 export default Footer;