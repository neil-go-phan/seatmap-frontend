import styled from "styled-components";

export const CarouselImg = styled.div`
  background-image: linear-gradient(
      rgb(200, 193, 7, 0.55),
      rgba(45, 95, 93, 0.85)
    ),
    url(https://img.freepik.com/free-vector/coworking-space-interior-empty-office-business-center-with-computer-desks_107791-3948.jpg?w=2000);
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;
  border-radius: 5px;
`;

export const IntroductionParagraph = styled.div`
  margin-top: 10px;
  padding-left: 70px;
  padding-top: 70px;
`;

export const IntroductionContent = styled.h1`
  text-transform: uppercase;
  font-size: 300%;
  font-weight: 500;
  letter-spacing: 10px;
  word-spacing: 5px;
  color: white;
  line-height: 135%;
  margin-bottom: 50px;
`;
