import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <section className="py-20">
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <Link href="/">
                            <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                                <img className="h-12" src="/assets/imgs/logos/logo_easypallet.png" alt="EasyPallet" />
                            </a>
                        </Link>
                        <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                            <a className="inline-block px-2" href="https://www.facebook.com/easypalletbr/">
                                <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                            </a>
                            <a className="inline-block px-2" href="https://www.linkedin.com/company/easypallet/">
                                <img src="/assets/imgs/icons/linkedin.svg" alt="Monst" />
                            </a>
                            <a className="inline-block px-2" href="https://www.instagram.com/easypallet/">
                                <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                            </a>
                        </div>
                            
                        <p className="order-first lg:flex-row -mx-2 mb-4 lg:mb-0">
                            &copy; 2022. All rights reserved. Designed by{" "}
                            <a className="text-red-500" target="_blank">
                                EasyPallet
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
