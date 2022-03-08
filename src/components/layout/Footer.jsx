import { AiOutlineTwitter } from "react-icons/ai";
import {
  FaDiscord,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaTelegram,
  FaMediumM,
  FaReddit,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="pt-3 footer" id="footer">
      <div className="container footer">
        <div className="row text-center">
          <div className="col-lg-12">
            <p className="font-weight-light text-center">
              &copy; 2022 site.com
              <br />
              <ul className="list-unstyled ">
                <li>
                  <a target="_BLANK" href="">
                    <FaMediumM />
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <FaTelegram />
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <FaDiscord />
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <FaReddit />
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <FaFacebook />
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
