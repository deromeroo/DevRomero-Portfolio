import Link from "next/link";
import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="Contact" id="contact">
        {/* <h5>Contact</h5> */}

        <div className="Contact-cover">
            <h6>Interested ?</h6>
            <p>Let's Talk</p>

            <Link href={"mailto:deromero707@gmail.com"} target="__blank">
            <div class="letter-image">
                <div class="animated-mail">
                <div class="back-fold"></div>
                <div class="letter">
                    <div class="letter-border"></div>
                    <div class="letter-title">
                    <p>Send an Email.</p>
                    </div>
                    <div class="letter-context">
                    <p>Click the Envelope!</p>
                    </div>
                    <div class="letter-stamp">
                    <div class="letter-stamp-inner"></div>
                    </div>
                </div>
                <div class="top-fold"></div>
                <div class="body"></div>
                <div class="left-fold"></div>
                </div>
                <div class="shadow"></div>
            </div>
            </Link>
        </div>

        <div className="Contact-controls">

            <div className="Social">
            <Link href={"https://github.com/deromeroo"}  target='__blank'>
                <i className="bi bi-github"></i>
            </Link>
            <Link href={"https://twitter.com/DevRomeroo"}  target='__blank'>
                <i className="bi bi-twitter"></i>
            </Link>
            <Link href={"https://www.linkedin.com/in/deromeroo/"}  target='__blank'>
                <i className="bi bi-linkedin"></i>
            </Link>
            </div>

            <div className="Top-button">
                <span>Back to top</span>
                <button
                    onClick={ () => {
                        window.scrollTo(0 , 0)
                    }}
                >
                    <i class="bi bi-arrow-up-square" />
                </button>
            </div>
        </div>

    </section>
  );
}
