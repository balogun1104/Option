import React from "react";
import DeliveryItem from "./deliveryItem";
import "./deliveryCollections.css";


// import Carousel from "react-grid-carousel";
import Slider from "react-slick";
import PrevArrow from "../../commonCodes/carousel/prevArrow";
import NextArrow from "../../commonCodes/carousel/nextArrow";

const deliveryItems = [
  {
    id: 1,
    title: "Shawarma",
    cover:
      "https://i.pinimg.com/236x/30/fa/46/30fa463a8ac6f02d7128b4441ae89c49.jpg",
  },
  {
    id: 2,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
  },
  {
    id: 3,
    title: "Grilled Fish",
    cover:
      "https://i.pinimg.com/236x/00/e3/f5/00e3f57bec2c2f9af2e6b92361960ab7.jpg",
  },
  {
    id: 4,
    title: "Tandoori Chicken",
    cover:
      "https://i.pinimg.com/236x/30/06/64/300664ec985e322a7e2a7395f059dd8f.jpg",
  },
  {
    id: 5,
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
  },
  {
    id: 6,
    title: "Chaat",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
  },
  {
    id: 7,
    title: "Momos",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
  },
  {
    id: 8,
    title: "Paneer",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
  },
  {
    id: 9,
    title: "Samosa",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
  },
  {
    id: 10,
    title: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/dish_images/49a62bf16f88e7d22994e387626292161632717505.png",
  },
  {
    id: 11,
    title: "Pastry",
    cover:
      "https://b.zmtcdn.com/data/homepage_dish_data/4/f06d9a57b0847677e36f163a7b7fe54a.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryColletions = () => {
  return (
    <div className="delivery-collections">
      <div className="max-width">
        <span className="collection-title">Eat what makes you happy </span>
        <i className="fi fi-rr-smile  happy-icon"></i>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <DeliveryItem item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryColletions;