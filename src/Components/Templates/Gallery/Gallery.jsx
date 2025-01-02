import { createPortal } from "react-dom";
import { gallery } from "../../../fakeData";
import Wrapper from "./Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Modal from "../../Modules/Modal/Modal";
import { Navigation, Pagination } from "swiper/modules";
import GallerySlider from "./GallerySlide";

export default function Gallery() {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Wrapper>
        {gallery.map((image, index) => (
          <div
            onClick={() => {
              setIsImageExpanded(true);
              setSelectedIndex(index);
            }}
            key={image.id}
          >
            <img
              loading="lazy"
              src={`/images/${image.src}`}
              alt={image.title}
            />
            <span>{image.title}</span>
          </div>
        ))}
      </Wrapper>

      {isImageExpanded &&
        createPortal(
          <Modal setIsOpen={setIsImageExpanded}>
            <GallerySlider>
              <Swiper
                initialSlide={selectedIndex}
                pagination={{
                  type: "fraction",
                }}
                navigation
                modules={[Pagination, Navigation]}
              >
                {gallery.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="gallery">
                      <img
                        loading="lazy"
                        src={`/images/${image.src}`}
                        alt={image.title}
                      />
                      <span>{image.title}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </GallerySlider>
          </Modal>,
          document.getElementById("modal")
        )}
    </>
  );
}
