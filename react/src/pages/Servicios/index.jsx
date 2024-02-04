import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ServiciosPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-onegtsuperdisplay items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-between md:px-5 w-full" />
        <Img
          className="h-[386px] sm:h-auto max-w-[1440px] mt-1 object-cover w-[1440px] md:w-full"
          src="images/img_subheader_386x1440.png"
          alt="subheader"
        />
        <div className="flex flex-col gap-3 items-start justify-start max-w-[1393px] mt-6 mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-center p-1 w-auto">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 uppercase w-auto"
              size="txtOneGTSuperDisplayMedium48"
            >
              Servicios
            </Text>
          </div>
          <div className="flex flex-col font-ginto gap-1 h-[172px] md:h-auto items-start justify-start max-w-[1393px] w-full">
            <Text
              className="max-w-[1393px] md:max-w-full text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
              size="txtGintoLight24"
            >
              <>
                El Dr. José Aucapiña se especializa en servicios oncológicos,
                que abarcan metodologías de diagnóstico para la identificación
                precisa de cánceres, planes de tratamiento individualizados que
                priorizan el bienestar del paciente, integración de
                intervenciones terapéuticas de vanguardia y sólidos servicios de
                apoyo para ayudar a los pacientes y sus familias.
              </>
            </Text>
            <Text
              className="max-w-[1393px] md:max-w-full text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
              size="txtGintoLight24"
            >
              <>
                Optar por los servicios del Dr. José Aucapiña significa
                seleccionar un colaborador en la formidable batalla contra el
                cáncer: un aliado que armoniza la experiencia con la compasión
                para guiar a las personas en cada faceta de su arduo viaje.
              </>
            </Text>
          </div>
        </div>
        <Footer className="bg-teal-900 flex gap-2 items-center justify-center mt-3 pl-8 pr-4 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default ServiciosPage;
