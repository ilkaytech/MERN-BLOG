import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsInstagram,
  BsYoutube,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8  border-teal-500">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                ilkaytech's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                  Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ilkaytech's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="http://www.github.com/ilkaytech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="http://www.ilkaytech.com"
            by="İlkaytech's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://github.com/ilkaytech" icon={BsGithub} />
            <Footer.Icon
              href="https://linkedin.com/in/ilkaytech"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://www.instagram.com/ilkaytech"
              icon={BsInstagram}
            />
            <Footer.Icon href="mailto:ilkaytech@gmail.com" icon={BsDribbble} />
            <Footer.Icon
              href="https://www.youtube.com/@ilkaytech"
              icon={BsYoutube}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
