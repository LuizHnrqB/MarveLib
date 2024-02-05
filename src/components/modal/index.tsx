import React, { useState } from "react";
import * as styles from "./styles";
import { imgs, ratingPaths } from "../../data/imagePaths";
import closeIcon from "../../assets/img/closeIcon.png";
import dPlus from "../../assets/img/d+.png";
import amzn from "../../assets/img/amazon.png";
import amrcn from "../../assets/img/americanas.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: any;
  selectedIndex: number;
}
export const DetailsModal: React.FC<DetailsModalProps> = ({
  isOpen,
  onClose,
  selectedItem,
}) => {
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
              {selectedItem?.tipo === "2" ? (
                <styles.AvaibleContainer>
                  <styles.Avaible>Disponível para Streaming</styles.Avaible>
                  <a href="https://disneyplus.com">
                    <styles.AvaibleLinks src={dPlus}></styles.AvaibleLinks>
                  </a>
                </styles.AvaibleContainer>
              ) : (
                <styles.AvaibleContainer>
                  <styles.Avaible>Disponível para Compra</styles.Avaible>
                  <a href="https://www.amazon.com.br/">
                    <styles.AvaibleLinks src={amzn}></styles.AvaibleLinks>
                  </a>
                  <a href="https://www.americanas.com.br/">
                    <styles.AvaibleLinks src={amrcn}></styles.AvaibleLinks>
                  </a>
                </styles.AvaibleContainer>
              )}
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
          <styles.CloseIcon src={closeIcon} alt="fechar" />
        </styles.CloseButton>
      </styles.ModalContent>
    </styles.ModalWrapper>
  );
};
