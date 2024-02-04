import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1392px] w-full">
            <ul className="flex md:flex-1 flex-col gap-3 items-start justify-start py-5 w-[567px] md:w-full common-column-list">
              <li>
                <Text
                  className="common-pointer sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtOneGTSuperDisplayMedium28"
                  onClick={() => navigate("/")}
                >
                  Inicio
                </Text>
              </li>
              <li>
                <Text
                  className="common-pointer sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtOneGTSuperDisplayMedium28"
                  onClick={() => navigate("/about")}
                >
                  Acerca de
                </Text>
              </li>
              <li>
                <Text
                  className="common-pointer sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtOneGTSuperDisplayMedium28"
                  onClick={() => navigate("/servicios")}
                >
                  Servicios
                </Text>
              </li>
              <li>
                <Text
                  className="common-pointer sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtOneGTSuperDisplayMedium28"
                  onClick={() => navigate("/contact")}
                >
                  Contactos
                </Text>
              </li>
            </ul>
            <div className="flex flex-row gap-6 items-center justify-end w-[336px]">
              <Img
                className="h-12 w-12"
                src="images/img_antdesigntwitteroutlined.svg"
                alt="antdesigntwitte"
              />
              <Img
                className="h-12 w-12"
                src="images/img_rifacebookfill.svg"
                alt="rifacebookfill"
              />
              <Img
                className="h-12 w-12"
                src="images/img_rilinkedinfill.svg"
                alt="rilinkedinfill"
              />
              <Img
                className="h-12 w-12"
                src="images/img_riinstagramfill.svg"
                alt="riinstagramfill"
              />
              <Img
                className="h-12 w-12"
                src="images/img_fluentlocation48filled.svg"
                alt="fluentlocationFour"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-1 w-full">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
              size="txtGintoLight24WhiteA700"
            >
              ©2024 Oncocare | Diseñado por perasoluciones
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
