import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../../hook/useAuthentication";

function NavBar() {
  const navigate = useNavigate();
  const { isLoggedIn, signOut, user } = useAuth();

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/" className="me-lg-5 text-white">
          BookMe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1" className="text-white">
              Marketplace
            </Nav.Link>
            <Nav.Link
              href="https://book-me-app.vercel.app/#about"
              className="px-lg-3 text-white"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="https://book-me-app.vercel.app/#location"
              className="text-white"
            >
              Location
            </Nav.Link>
            <Nav.Link href="/calendar" className="text-white">
              Calendar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <Button
            variant="primary"
            className="btn-primary d-none d-lg-inline-block"
            onClick={() => navigate("/calendar")}
          >
            Book
          </Button>
          {isLoggedIn && (
            <Button variant={"ghost"} onClick={() => signOut(user._id)}>
              <i
                className="fa fa-sign-out"
                aria-hidden="true"
                style={{ color: "white" }}
              ></i>
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;