import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./styles";
import { DetailsModal } from "../modal";

import { imgs } from "../../data/imagePaths";
import { NavBar } from "../navBar";

export function ItemsCarousel({ data }: { data: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const openModal = (item: any, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const getBackgroundImage = (foto: string) => {
    const imgIndex = imgs.findIndex((img) => img.includes(foto));
    return imgIndex !== -1 ? imgs[imgIndex] : "";
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <NavBar />
      <Slider {...settings}>
        {data.map((item: any, index: number) => (
          <styles.Container key={index}>
            <styles.Image src={getBackgroundImage(item.foto)} alt={item.nome} />
            <styles.InnerDiv>
              <styles.InnerTitle>{item.nome}</styles.InnerTitle>
              <styles.paragraph>{item.about}</styles.paragraph>
              <styles.Button onClick={() => openModal(item, index)}>
                Ver detalhes
              </styles.Button>
            </styles.InnerDiv>
          </styles.Container>
        ))}
      </Slider>
      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedItem={selectedItem}
        selectedIndex={selectedIndex}
      />
    </>
  );
}
