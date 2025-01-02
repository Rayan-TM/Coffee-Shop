import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { latestProducts } from "../../../fakeData";
import Off from "../../../Shared/Off";
import Star from "../Star/Star";
import ProductDetails from "../ProductDetails/ProductDetails";
import { IoMdCloseCircleOutline } from "react-icons/io";
import IconBox from "../../../Shared/IconButton";
import { FaRegUser } from "react-icons/fa";
import Count from "../Header/Count";
import { GrFavorite } from "react-icons/gr";
import BasketButton from "../BasketButton/BasketButton";
import { FiSearch } from "react-icons/fi";

export default function Navbar({ isMobile, setIsMenuOpen, children }) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [hasMegaMenuAnimation, setHasMegaMenuAnimation] = useState(false);

  useEffect(() => {
    setHasMegaMenuAnimation(isMegaMenuOpen);
  }, [isMegaMenuOpen]);

  return (
    <Wrapper>
      <ul className="menu">
        {isMobile && (
          <>
            <div className="search-box">
              <button>
                <FiSearch />
              </button>
              <input type="text" placeholder="search ..." />
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="close">
              <IoMdCloseCircleOutline />
            </button>
          </>
        )}
        <li className="menu-item">Home</li>
        <li className="menu-item">
          <div
            className="mega-menu-item"
            onClick={() =>
              !isMobile && setIsMegaMenuOpen((prevState) => !prevState)
            }
          >
            Shop
          </div>
          {isMegaMenuOpen && (
            <div
              className={`mega-menu ${hasMegaMenuAnimation ? "active" : ""}`}
            >
              <div className="mega-column">
                <h4>Coffee</h4>
                <ul>
                  <li>Espresso</li>
                  <li>Latte</li>
                  <li>Cappuccino</li>
                  <li>Cold Brew</li>
                </ul>
              </div>
              <div className="mega-column">
                <h4>Tea</h4>
                <ul>
                  <li>Green Tea</li>
                  <li>Black Tea</li>
                  <li>Herbal Tea</li>
                  <li>Iced Tea</li>
                </ul>
              </div>
              <div className="mega-column">
                <h4>Accessories</h4>
                <ul>
                  <li>Coffee Mugs</li>
                  <li>Teapots</li>
                  <li>Filters</li>
                  <li>Grinders</li>
                </ul>
              </div>
              <div className="mega-column">
                <h4>Special Offers</h4>
                <ul>
                  <li>Gift Cards</li>
                  <li>Bundles</li>
                  <li>Limited Edition</li>
                  <li>Seasonal</li>
                </ul>
              </div>

              <div className="mega-column">
                <h4>The best sellers</h4>
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  loop
                  autoplay={{
                    delay: 2500,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="products"
                >
                  {latestProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                      <div className="product">
                        <div className="img-container">
                          {product.off !== 0 && <Off>{product.off}%</Off>}
                          <img
                            loading="lazy"
                            src={`/images/${product.img}`}
                            alt={product.name}
                          />
                        </div>
                        <div className="details">
                          <div className="rating">
                            <Star rate={product.rate} />({product.rate})
                          </div>
                          <h5>{product.name}</h5>
                          <ProductDetails {...product} />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )}
        </li>
        <li className="menu-item">Blog</li>
        <li className="menu-item">Gallery</li>
        <li className="menu-item">About Us</li>
        <li className="menu-item">Contact Us</li>
        {isMobile && (
          <div className="options">
            <IconBox className="user">
              <FaRegUser />
            </IconBox>
            <IconBox className="favorite">
              <Count>0</Count>
              <GrFavorite />
            </IconBox>
            <BasketButton elem={IconBox} />
          </div>
        )}
      </ul>
    </Wrapper>
  );
}
