import Wrapper from "./Wrapper";
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import Count from "./Count";
import Container from "../../../Shared/Container";
import { TbMenuDeep } from "react-icons/tb";

import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BasketButton from "../BasketButton/BasketButton";
import IconBox from "../../../Shared/IconButton";

export default function Header() {
  const isMobile = window.innerWidth <= 992;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log("is menu open", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      <Container as={Wrapper} className="container">
        <div className="logo-container">
          <img src="/images/logo.webp" alt="logo" />
        </div>

        {!isMobile && <Navbar />}
        <div className="right-container">
          {!isMobile && (
            <>
              <IconBox className="user">
                <FaRegUser />
              </IconBox>
              <IconBox className="favorite">
                <Count>0</Count>
                <GrFavorite />
              </IconBox>
              <div className="search-container">
                <div className="left">
                  <button>
                    <FiSearch />
                  </button>
                  <input type="text" placeholder="search ..." />
                </div>
                <BasketButton classes="right" />
              </div>
            </>
          )}
          {isMobile && (
            <IconBox
              onClick={() => setIsMenuOpen(true)}
              className="burger-menu"
            >
              <TbMenuDeep />
            </IconBox>
          )}
        </div>
      </Container>
      {isMenuOpen &&
        createPortal(
          <Navbar isMobile={isMobile} setIsMenuOpen={setIsMenuOpen} />,
          document.getElementById("modal")
        )}
    </>
  );
}
