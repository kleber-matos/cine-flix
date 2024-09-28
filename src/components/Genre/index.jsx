// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styled from "styled-components";

const Div = styled.div`
  border: solid;
  width: 50vw;
  height: 50vh;
  max-width: 300px;

  img {
    width: 100%;
  }

  @media (max-width: 700px) {
    /* width: 90vw; */
  }
`;

export default function index({ image }) {
  return (
    <Div>
      <img src={image} alt="" />
    </Div>
  );
}
