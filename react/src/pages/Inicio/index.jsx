import React from "react";

import { Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import InicioCardmessage from "components/InicioCardmessage";
import InicioSubheader from "components/InicioSubheader";

const InicioPage = () => {
  const inicioCardmessagePropList = [
    {},
    {
      username: "Fortaleza",
      userimage: "images/img_imgcard_188x389.png",
      description:
        "En medio de los desafíos, tu fuerza brilla más que cualquier adversidad. Cada día que afrontas con valentía es un triunfo. Abraza el poder que llevas dentro, porque la resiliencia es tu mayor aliado. No estás solo; una comunidad de amor y apoyo te rodea. Sigue luchando, porque la esperanza es tu compañera inquebrantable.",
    },
    {
      username: "Coraje",
      userimage: "images/img_imgcard_1.png",
      description:
        "En medio de la tormenta, tu coraje es un faro de luz. Abraza la fuerza interior, porque supera los desafíos. Cada paso es un testimonio de tu valentía. No te define la enfermedad sino el espíritu indomable que te impulsa hacia adelante. Sigue adelante, guerrero: tú inspiras resiliencia.",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-onegtsuperdisplay items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-between md:px-5 w-full" />
        <InicioSubheader
          className="bg-cover bg-gradient  bg-no-repeat flex flex-row gap-5 h-[481px] items-start justify-between max-w-[1440px] mt-5 sm:px-5 px-6 py-5 w-full"
          style={{
            backgroundImage: "url('images/img_subheader_481x1440.png')",
          }}
        />
        <List
          className="sm:flex-col flex-row md:gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-between max-w-[1440px] mt-5 p-3 w-full"
          orientation="horizontal"
        >
          {inicioCardmessagePropList.map((props, index) => (
            <React.Fragment key={`InicioCardmessage${index}`}>
              <InicioCardmessage
                className="bg-white-A700 flex sm:flex-1 flex-col gap-3 h-[526px] md:h-auto items-center justify-between p-4 md:px-5 rounded-[20px] shadow-bs w-[421px] sm:w-full"
                {...props}
              />
            </React.Fragment>
          ))}
        </List>
        <Footer className="bg-teal-900 flex gap-2 items-center justify-center mt-1 pl-8 pr-4 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default InicioPage;
