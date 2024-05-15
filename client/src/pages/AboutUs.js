import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function AboutUs() {
  return (
    <div id={"about"} className="about" style={{paddingTop:"50px"}}>
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="Barito Mini Soccer" className="title" />
          <p className="gray-50 mb-5">
            Selamat datang di Barito MiniSoccer! Kami adalah destinasi terkemuka untuk penyewaan lapangan mini 
            soccer di tengah kota. Dengan lokasi yang strategis dan fasilitas yang lengkap, kami menyediakan 
            pengalaman bermain sepak bola yang menyenangkan dan nyaman bagi para penggemar olahraga 
            dari segala usia. Dengan lapangan berkualitas tinggi dan suasana yang ramah, kami menjadi pilihan 
            utama bagi individu, kelompok, dan tim yang mencari tempat yang ideal untuk berolahraga, 
            bersosialisasi, dan meningkatkan keterampilan sepak bola mereka. Rasakan kegembiraan bermain
             di Barito MiniSoccer dan buat momen-momen tak terlupakan bersama teman dan keluarga Anda.
          </p>
          {/* <Button variant="primary ms-0">Read More</Button> */}
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column"
        >
          <div className="d-flex">
            <div>
              <img
                src={require("..//images/bohdan-d-fh6o-XkVQG8-unsplash.webp")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("..//images/john-o-nolan-6f_ANCcbj3o-unsplash.webp")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src={require("..//images/julia-solonina-ci19YINguoc-unsplash.webp")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("..//images/theater-amazonas-manaus.webp")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutUs;
