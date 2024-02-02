import React, { useState } from "react";
import * as styles from "./styles";
import { imgs, ratingPaths } from "../../data/imagePaths";
import closeIcon from "../../assets/img/closeIcon.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ReactSlickModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: any;
  selectedIndex: number;
}
export const ReactSlickModal: React.FC<ReactSlickModalProps> = ({
  isOpen,
  onClose,
  selectedItem,
  selectedIndex,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (index: number) => {
    setCurrentSlide(index);
  };
  const imgIndex = imgs.findIndex((img) => img.includes(selectedItem?.foto));
  const ratingIndex = Object.keys(ratingPaths).findIndex((rating) =>
    rating.includes(selectedItem?.rating)
  );
  return (
    <styles.ModalWrapper isOpen={isOpen}>
      <styles.ModalContent>
        {selectedItem?.tipo === "1" ? (
          <styles.Column>
            <styles.ModalTitle>{selectedItem?.nome}</styles.ModalTitle>
            <ul>
              <styles.Avaliacao>Aparições</styles.Avaliacao>
              {selectedItem?.aparicoes?.map(
                (aparicao: string, index: number) => (
                  <styles.MovieList key={index}>{aparicao}</styles.MovieList>
                )
              )}
            </ul>
            <styles.Avaliacao>Avaliação dos Fãs</styles.Avaliacao>

            <styles.Rating
              src={
                ratingIndex !== -1
                  ? ratingPaths[
                      Object.keys(ratingPaths)[
                        ratingIndex
                      ] as keyof typeof ratingPaths
                    ]
                  : ""
              }
              alt={selectedItem?.rating}
            />
          </styles.Column>
        ) : (
          <styles.Column>
            <styles.ModalTitle>{selectedItem?.nome}</styles.ModalTitle>
            <ul>
              <styles.Avaliacao>Sinópse</styles.Avaliacao>

              <styles.MovieList>{selectedItem?.about}</styles.MovieList>
              <styles.Avaliacao>Crítica </styles.Avaliacao>
              <styles.Rating
                src={
                  ratingIndex !== -1
                    ? ratingPaths[
                        Object.keys(ratingPaths)[
                          ratingIndex
                        ] as keyof typeof ratingPaths
                      ]
                    : ""
                }
                alt={selectedItem?.rating}
              />
            </ul>
          </styles.Column>
        )}
        <styles.DetailImageContainer>
          <styles.DetailImage
            src={imgIndex !== -1 ? imgs[imgIndex] : ""}
            alt={selectedItem?.nome}
          />
        </styles.DetailImageContainer>

        <styles.CloseButton onClick={onClose}>
          <styles.CloseIcon src={closeIcon} alt="Close" />
        </styles.CloseButton>
      </styles.ModalContent>
    </styles.ModalWrapper>
  );
};
