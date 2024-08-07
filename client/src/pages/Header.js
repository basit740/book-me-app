import { Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    <div className="loading position-relative">
      <Container className="d-flex justify-content-between align-items-start gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="BARITO MiniSoccer" />
          <p className="gray-90 mt-3 fs-5">
            Lapangan Mini Soccer Terbaru di Tengah Kota Semarang
          </p>
          <p className="text-white fw-normal mt-3">
            Phone: <a href="https://wa.me/6287711569168" className="text-white">0877-1156-9168</a>
          </p>
          <div className="promo bg-danger text-white p-3 rounded mt-2 d-flex justify-content-center align-items-center" style={{ height: '60px' }}>
            <motion.p
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1], opacity: [1, 0.9, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="m-0 fs-4 fw-bold text-center"
            >
              10% Off Sampai December!
            </motion.p>
          </div>
          <br/>
          <Button
            className="m-0 my-3 px-5 py-2 fs-5 fw-bold"
            onClick={() => navigate("/calendar")}
          >
            Book Now
          </Button>
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-100"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <div>
            <Card className="bg-black-100" style={{ height: '100%', width: 'fit-content'}}>
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative" style={{ height: '100%' }}>
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../images/properties/poster.png")}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="img-fluid"
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Loading;