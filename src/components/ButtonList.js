import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "../components/Button"

const list = ["All", "Gaming", "Songs", "Live", "Cricket", "Football", "News", "Cooking", "Valentine","Recently Uploaded"];
const ButtonList = () => {

  
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

  const settings = {
    className: "slider variable-width",
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: true
  };


  return (
      <div>
        <Slider {...settings}>
        {
          list.map((item, index) => {
              return (
                  <Button key={index} name={item} />
              
              )
          })
        }
        </Slider>
      </div>
      )
  // return  <div>
  //   {
  //     list.map((item) => {
  //         return (
  //         <Button name={item} />
  //         )
  //     })
  //   }
    
  // </div>;
};

export default ButtonList;
