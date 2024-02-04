import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-onegtsuperdisplay items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-between md:px-5 w-full" />
        <Img
          className="h-[581px] sm:h-auto max-w-[1440px] mt-1 object-cover w-[1440px] md:w-full"
          src="images/img_subheader.png"
          alt="subheader"
        />
        <div className="flex flex-col gap-3 h-[487px] md:h-auto items-start justify-between max-w-[1400px] mt-[29px] mx-auto md:px-5 w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 uppercase w-auto"
            size="txtOneGTSuperDisplayMedium48"
          >
            Dr. Jose Aucapiña
          </Text>
          <div className="flex flex-col font-ginto gap-1 h-[417px] md:h-auto items-start justify-start w-full">
            <Text
              className="max-w-[1384px] md:max-w-full text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
              size="txtGintoLight24"
            >
              <>
                Distinguido por una amplia trayectoria profesional y dedicación
                a sus pacientes, el Dr. José Aucapiña ha logrado reconocimiento
                en el campo de la oncología. Su trayectoria profesional se
                caracteriza por el compromiso de brindar el más alto nivel de
                atención, es reconocido por su competencia clínica, asegurando
                que cada paciente reciba atención y apoyo personalizados durante
                todo su recorrido oncológico.
              </>
            </Text>
            <Text
              className="max-w-[1384px] md:max-w-full text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
              size="txtGintoLight24"
            >
              <>
                Actualmente, el Dr. Aucapiña ejerce en el Hospital SOLCA de
                Ambato, conocido por su atención integral del cáncer. El
                compromiso del hospital con la excelencia se alinea con su
                visión, asegurando la provisión de modalidades de tratamiento de
                vanguardia.
              </>
            </Text>
            <Text
              className="max-w-[1384px] md:max-w-full text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
              size="txtGintoLight24"
            >
              <>
                El Dr. Aucapiña está comprometido a cultivar un ambiente
                caracterizado por la confianza, la empatía y la comprensión.
                Desde el encuentro inicial hasta la culminación del régimen de
                tratamiento, los pacientes pueden anticipar un apoyo firme y
                atención individualizada.
              </>
            </Text>
            <Text
              className="max-w-[1384px] md:max-w-full text-2xl md:text-[22px] text-justify text-teal-900 sm:text-xl"
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
        <Footer className="bg-teal-900 flex gap-2 items-center justify-center mt-[7px] pl-8 pr-4 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default AboutPage;
