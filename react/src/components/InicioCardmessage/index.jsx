import React from "react";

import { Img, Text } from "components";

const InicioCardmessage = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[188px] sm:h-auto object-cover w-full"
          alt="imgcard"
          src={props?.userimage}
        />
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-full"
          size="txtOneGTSuperDisplayMedium36Black900"
        >
          {props?.username}
        </Text>
        <Text
          className="max-w-[389px] md:max-w-full text-2xl md:text-[22px] text-justify text-teal-700 sm:text-xl"
          size="txtGintoLight24Teal700"
        >
          {props?.description}
        </Text>
      </div>
    </>
  );
};

InicioCardmessage.defaultProps = {
  userimage: "images/img_imgcard.png",
  username: "Esperanza",
  description:
    "En los momentos más oscuros, la esperanza florece como una flor resistente. Cada tratamiento, cada amanecer, encierra la promesa de nuevos comienzos. Tu viaje es un testimonio del poder de la esperanza: deja que te guíe y arroje luz en el camino hacia la curación. Acepta las posibilidades que te esperan, alma valiente.",
};

export default InicioCardmessage;
