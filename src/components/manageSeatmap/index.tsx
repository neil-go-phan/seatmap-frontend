import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MapIcon from "./mapIcon";
import {
  CarouselContainer,
  CarouselTitle,
  MapContainer,
  ManageMapContainer,
  CarouselTitleIcon,
  ManageMapTitle,
} from "./style";

export const ResponesiveCRS = {
  desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 6,
      slidesToSlide: 3 
    },
    mimidesk: {
      breakpoint: { max: 1200, min: 1024 },
      items: 5,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 840 },
      items: 4,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 840, min: 0 },
      items: 3,
      slidesToSlide: 1 
    }
}


const ManageSeatmap: React.FC = () => {
  return (
    <ManageMapContainer>
      <ManageMapTitle>
        <h1>Manage maps</h1>
      </ManageMapTitle>
      <CarouselContainer>
        <CarouselTitle>
          <CarouselTitleIcon />
          Maps
        </CarouselTitle>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={ResponesiveCRS}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          customTransition="all 1s"
          transitionDuration={900}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          <MapIcon />
          <MapIcon />
          <MapIcon />
          <MapIcon />
          <MapIcon />
          <MapIcon />
          <MapIcon />
          <MapIcon />
          <MapIcon />
          <MapIcon />
          <MapIcon />

        </Carousel>
      </CarouselContainer>
      <MapContainer>
        {/* Main feature */}
        {/* <Map />  */}
      </MapContainer>
    </ManageMapContainer>
  );
};

export default ManageSeatmap;
