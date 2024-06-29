import Link from "next/link";
import logo from "@public/images/logos/xplorer_logo.svg";
import slackIcon from "@public/images/logos/slack.svg";
import linkedinIcon from "@public/images/logos/linkedin.svg";
import githubIcon from "@public/images/logos/github.svg";

export const Footer = () => {
    return (
        <footer className="bg-blue-300 text-white py-4 flex flex-col sm:flex-row justify-between items-center px-4">
            {/* Logo container */}
            <div className="flex items-center">
                <img src={logo.src} alt="Xplorers Logo" className="w-20 h-20 mr-4" /> {/* Adjust width and height as needed */}
            </div>

            {/* Copyright information */}
            <p className="text-sm">© Xplorers. All rights reserved.</p>

            {/* Social media links (replace with actual links) */}
            <nav className="flex gap-4">
                <Link href="/about-us">About Us</Link>
                <Link href="/home">Contact</Link>
            </nav>

            {/* Social media icons */}
            <div className="flex gap-2 sm:hidden"> {/* Adjust gap for desired spacing */}
                <a href="https://slack.com">
                    <img src={slackIcon.src} alt="Slack" className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com">
                    <img src={linkedinIcon.src} alt="LinkedIn" className="w-4 h-4" />
                </a>
                <a href="https://github.com">
                    <img src={githubIcon.src} alt="GitHub" className="w-4 h-4" />
                </a>
            </div>
        </footer>
    );
};
