import Carousel from "react-bootstrap/Carousel";
import styled from "./CarouselComponent.module.css";
const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className={`d-block w-100 ${styled.heightImg}`}
          src="/public/images/c1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className={`d-block w-100 ${styled.heightImg}`}
          src="/public/images/c2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className={`d-block w-100 ${styled.heightImg}`}
          src="/public/images/c3.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className={`d-block w-100 ${styled.heightImg}`}
          src="/public/images/c4.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
