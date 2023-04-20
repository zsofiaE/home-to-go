import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const PrivacyCookiePolicies = () => {
  return (
    <>
    <div className="section-box">

        <div className="text-container">
                  <h1>Generic Cookie Policy </h1>
                  
<p>Cookie policy template by WebsitePolicies.com

Please read this cookie policy (“cookie policy”, "policy") carefully before using [website] website
(“website”, "service") operated by [name] ("us", 'we", "our").<br/>
<h5>What are cookies?</h5>
Cookies are simple text files that are stored on your computer or mobile device by a website’s
server. Each cookie is unique to your web browser. It will contain some anonymous information
such as a unique identifier, website's domain name, and some digits and numbers.<br/>

<h5>What types of cookies do we use?</h5>
<h6>Necessary cookies</h6>
Necessary cookies allow us to offer you the best possible experience when accessing and
navigating through our website and using its features. For example, these cookies let us
recognize that you have created an account and have logged into that account.<br/>
<h6>Functionality cookies</h6>
Functionality cookies let us operate the site in accordance with the choices you make. For
example, we will recognize your username and remember how you customized the site during
future visits.<br/>
<h6>Analytical cookies</h6>
These cookies enable us and third-party services to collect aggregated data for statistical
purposes on how our visitors use the website. These cookies do not contain personal
information such as names and email addresses and are used to help us improve your user
experience of the website.<br/>
<h5>How to delete cookies?</h5>
If you want to restrict or block the cookies that are set by our website, you can do so through
your browser setting. Alternatively, you can visit www.internetcookies.com, which contains
comprehensive information on how to do this on a wide variety of browsers and devices. You
will find general information about cookies and details on how to delete cookies from your
device.<br/>

<h5>Contacting us</h5>
If you have any questions about this policy or our use of cookies, please contact us.
Save your time and take the guesswork out of the legal jargon with our smart generators.
Create a cookie policy and a cookie consent banner personalized to your needs in minutes.
</p>
<br/>
<div style={{textAlign:"center"}}>
<p >Cookie policy template by <span>WebsitePolicies.com</span></p>
        </div>
        </div>
      </div>
      <Link to={"/"} style={{ color: "black", textAlign: "center" }}>
        {" "}
        <h4><FontAwesomeIcon icon={faChevronLeft}  /> Back to Home</h4>
        </Link>
      </>

  )
}

export default PrivacyCookiePolicies