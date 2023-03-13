import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
export const ManageMapContainer = styled.div`
  // width: 100%;
  // background-color: #89C4E1;
  // height: auto;
`;
export const ManageMapTitle = styled.div`
  width: 100%;
  min-height: 10vh;
  display: table;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  background-color: #fbc252;
  padding: 0.3rem 0;
`;

export const CarouselTitle = styled.div`
  background-color: #a3bb98;
  padding: 0.5rem;
  font-weight: bold;
  border-top: 1px solid #bfeaf5;
  border-bottom: 1px solid #bfeaf5;
`;

export const CarouselTitleIcon = styled(FaMapMarkerAlt)`
  margin-right: 0.5rem;
`;

export const MapIconContainer = styled.div`
  background-color: #6a6d9e;
  margin: 20px;
  width: 100px;
  height: 100px;
  display: inline-block;
  cursor: pointer;
  border: 4px solid #16194f;
  border-radius: 10px;
  transition: all 0.3s;
  padding: 5px 5px;
  &:hover {
    transform: scale(1.05);
    background-color: #2C2F6A;
  }
`;

export const MapIconImage = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Article Cover",
}))`
  width: 100%;
`;

export const MapIconName = styled.div`
position: relative;
top: -20px;
`;

export const MapIconDeleteBtn = styled(RiCloseCircleFill)`
position: relative;
top: -115px;
right: -80px;
color: white;
font-size: 22px;
transition: all 0.3s;
`;

export const MapContainer = styled.div`
  height: 50px;
  width: 50px;
  background-color: #bfeaf5;
`;
