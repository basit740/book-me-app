import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="d-flex justify-content-between flex-column flex-md-row flex-wrap pt-5 pb-4">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={require("../images/logo/logo.png")}
              alt="logo"
              className="mb-3"
            />
            <p className="gray-100">
              Please contact us if you have any specific <br /> idea or request.
            </p>
            <Link className="link-primary link-underline-opacity-0" to={""}>
              info@revend.group
            </Link>
          </motion.div>
          <span className="d-block d-md-none"></span>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex"
          >
            <div className="me-5">
              <h6 className="gray-100 text-uppercase mb-2 fw-normal">
                Company
              </h6>
              <ul className="p-0">
                <li>
                  <HashLink to={"/#about"} className="text-white">
                    About Us
                  </HashLink>
                </li>
                <li>
                  <HashLink to={"/#location"} className="text-white">
                    Location
                  </HashLink>
                </li>
                <li>
                  <HashLink to={"/calendar#"} className="text-white">
                    Calendar
                  </HashLink>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="gray-100 text-uppercase mb-2 fw-normal">
                Contact
              </h6>
              <p className="text-white fw-light">info@revend.group</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="d-flex justify-content-between flex-column flex-md-row flex-wrap gray-100 pt-3"
        >
          <p>© 2023 ProHouse. All rights reserved</p>
          <p>
            Design by{" "}
            <Link className="link-primary link-underline-opacity-0" to={""}>
              Revend
            </Link>
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;