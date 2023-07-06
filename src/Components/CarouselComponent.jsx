import Carousel from "react-bootstrap/Carousel";
import styled from "./CarouselComponent.module.css";
import c1 from "/public/images/c1.png";
import c2 from "/public/images/c2.png";
import c3 from "/public/images/c3.png";
import c4 from "/public/images/c4.png";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className={`d-block w-100 ${styled.heightImg}`}
          src={c1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className={`d-block w-100 ${styled.heightImg}`}
          src={c2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className={`d-block w-100 ${styled.heightImg}`}
          src={c3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className={`d-block w-100 ${styled.heightImg}`}
          src={c4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
