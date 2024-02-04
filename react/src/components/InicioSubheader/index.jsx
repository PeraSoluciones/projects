import React from "react";

import { Img, Text } from "components";

const InicioSubheader = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_subheader_481x1440.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <div className="flex flex-1 flex-col gap-5 items-start justify-center w-full">
            <Text
              className="max-w-[1052px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
              size="txtOneGTSuperDisplayMedium36"
            >
              {props?.text1}
            </Text>
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
              size="txtOneGTSuperDisplayMedium28"
            >
              {props?.text2}
            </Text>
          </div>
          <Img
            className="md:flex-1 h-[441px] sm:h-auto object-cover w-[340px] md:w-full"
            src="images/img_joseremovebgpreview.png"
            alt="joseremovebgpre"
          />
        </div>
      </div>
    </>
  );
};

InicioSubheader.defaultProps = {
  text1:
    "Revelando la esperanza: tu viaje hacia la fortaleza y la curación comienza aquí",
  text2: "Guiándote con compasión y experiencia",
};

export default InicioSubheader;
