import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";

// const { Container } = require("react-bootstrap");

function Join() {
  return (
    <div className="join">
      <Container>
        <Swiper
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            998: {
              slidesPerView: 3,
            },
            1198: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">1</h4>
            <img src={require("../images/illustration/01.webp")} alt="img" />
            <AnimationTitles
              title="Tengah Kota"
              className="text-white mb-4 mt-5 h4"
            />
            <p className="gray-50">
              Lokasi yang strategis di tengah kota, <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}> hanya 10 menit</span> dari Simpang Lima.
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">2</h4>
            <img src={require("../images/illustration/02.webp")} alt="img" />
            <AnimationTitles
              title="Rumput Terbaru"
              className="text-white mb-4 mt-5 h4"
            />
            <p className="gray-50">
              Menggunakan rumput Synthetic Grass Mac - Eco memberikan permukaan yang konsisten untuk bermain, 
              dan memberikan tingkat keamanan yang tinggi bagi para pemain melalui penyerapan guncangan yang baik, 
              sehingga mengurangi risiko cedera.
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">3</h4>
            <img src={require("../images/illustration/03.webp")} alt="img" />
            <AnimationTitles
              title="Registration"
              className="text-white mb-4 mt-5 h4"
            />
            <p className="gray-50">
              Absolute data security and maximum transparency of all
              blockchain-based transactions
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">4</h4>
            <img src={require("../images/illustration/04.webp")} alt="img" />
            <AnimationTitles
              title="Create Solutions"
              className="text-white mb-4 mt-5 h4"
            />
            <p className="gray-50">
              Decentralized community-ran platform for fundraising
            </p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default Join;
