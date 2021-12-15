import { FaDiscord } from "react-icons/fa";
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
                    <i className="fa fa-medium"></i>
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <i className="fa fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a target="_BLANK" href="" >
                    <FaDiscord />
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
