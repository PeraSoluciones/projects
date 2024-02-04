import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] px-5 py-8 w-full">
          <div className="header-row my-3">
            <Img className="h-12 w-12" src="images/img_user.svg" alt="user" />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[567px] sm:w-full common-row-list">
            <li>
              <Text
                className="common-pointer sm:text-2xl md:text-[26px] text-[28px] text-teal-900"
                size="txtOneGTSuperDisplayMedium28Teal900"
                onClick={() => navigate("/")}
              >
                Inicio
              </Text>
            </li>
            <li>
              <Text
                className="common-pointer sm:text-2xl md:text-[26px] text-[28px] text-teal-900"
                size="txtOneGTSuperDisplayMedium28Teal900"
                onClick={() => navigate("/about")}
              >
                Acerca de
              </Text>
            </li>
            <li>
              <Text
                className="common-pointer sm:text-2xl md:text-[26px] text-[28px] text-teal-900"
                size="txtOneGTSuperDisplayMedium28Teal900"
                onClick={() => navigate("/servicios")}
              >
                Servicios
              </Text>
            </li>
            <li>
              <Text
                className="common-pointer sm:text-2xl md:text-[26px] text-[28px] text-teal-900"
                size="txtOneGTSuperDisplayMedium28Teal900"
                onClick={() => navigate("/contact")}
              >
                Contactos
              </Text>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
