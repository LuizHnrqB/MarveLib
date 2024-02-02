import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./styles";
import { ReactSlickModal } from "../modal";
import { imgs } from "../../data/imagePaths";

export function ItemsCarousel({ data }: { data: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const openModal = (item: any, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "red", fontSize: "220px" }}
        onClick={onClick}
      ></div>
    );
  }

  const getBackgroundImage = (foto: string) => {
    const imgIndex = imgs.findIndex((img) => img.includes(foto));
    return imgIndex !== -1 ? imgs[imgIndex] : "";
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((item: any, index: number) => (
          <styles.Container key={index}>
            <styles.Image src={getBackgroundImage(item.foto)} alt={item.nome} />
            <styles.InnerDiv>
              <styles.InnerTitle>{item.nome}</styles.InnerTitle>
              <styles.paragraph>{item.about}</styles.paragraph>
              <styles.button onClick={() => openModal(item, index)}>
                Ver detalhes
              </styles.button>
            </styles.InnerDiv>
          </styles.Container>
        ))}
      </Slider>
      <ReactSlickModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedItem={selectedItem}
        selectedIndex={selectedIndex}
      />
    </>
  );
}
