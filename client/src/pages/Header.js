import { Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CountDown from "../components/functions/CountDown";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();
  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    <div className="loading position-relative">
      <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'absolute', top: 0 }}
        >
          <AnimationTitles title="BARITO MiniSoccer" />
          <p className="gray-90 mt-3 fs-5">
            Lapangan Mini Soccer di Tengah Kota Semarang
          </p>
          <Button
            className="m-0 my-3 px-5 py-2 fs-5 fw-bold"
            onClick={() => navigate("/calendar")}
          >
            Book Now
          </Button>
          {/* <div
            style={{ color: "white" }}
            className="d-none d-md-flex justify-content-between align-items-center my-4"
          >
            <div>
              <h5 className="fw-bold fs-1">12K+</h5>
              <span className="gray-100">properties</span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">10K+</h5>
              <span className="gray-100">auction</span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">12K+</h5>
              <span className="gray-100">developers</span>
            </div>
          </div> */}
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-100 my-5"
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card className="bg-black-100" style={{ height: '100%', width: 'fit-content'}}>
            <Card.Body className="p-2">
              <div className="rounded overflow-hidden position-relative" style={{ height: '100%' }}>
                <Card.Img
                  variant="top"
                  alt="img"
                  src={require("../images/properties/poster.png")}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </Card.Body>
          </Card>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ color: "white" }}
          className="d-md-none d-flex justify-content-between align-items-center my-4 features"
        >
          <div>
            <h5 className="fw-bold fs-1">12K+</h5>
            <span className="gray-100">properties</span>
          </div>
          <div>
            <h5 className="fw-bold fs-1">10K+</h5>
            <span className="gray-100">auction</span>
          </div>
          <div>
            <h5 className="fw-bold fs-1">12K+</h5>
            <span className="gray-100">developers</span>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Loading;
