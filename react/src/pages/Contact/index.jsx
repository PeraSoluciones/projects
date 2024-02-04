import React from "react";

import { Img, List, Text } from "components";
import ContactContactinfo from "components/ContactContactinfo";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactPage = () => {
  return (
    <>
      <div className="bg-gradient1  flex flex-col font-onegtsuperdisplay items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-between md:px-5 w-full" />
        <div className="flex flex-col gap-8 items-center justify-center max-w-7xl mt-[51px] mx-auto md:px-5 w-full">
          <div className="sm:h-[122px] h-[272px] md:h-[283px] px-5 relative w-[1280px] md:w-full">
            <div className="absolute flex flex-col h-full inset-[0] items-start justify-end m-auto max-w-7xl px-5 rounded-[20px] shadow-bs w-full">
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[342px] grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <ContactContactinfo
                  className="flex flex-row gap-8 items-end justify-start w-auto"
                  scheduleimage="images/img_schedule.png"
                  horariodeatenciontext="Whatsapp"
                  sabadodomingotext="0984102118"
                />
                <ContactContactinfo
                  className="flex sm:flex-col flex-row gap-8 items-end justify-start w-auto sm:w-full"
                  scheduleimage="images/img_schedule_100x100.png"
                  horariodeatenciontext="Email"
                  sabadodomingotext="pepinho_2784@hotmail.com"
                />
              </List>
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[188px] inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
              <ContactContactinfo
                className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-end justify-start w-auto sm:w-full"
                horariotext="9:00 - 13:00"
              />
              <ContactContactinfo
                className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-end justify-start w-auto sm:w-full"
                scheduleimage="images/img_schedule_2.png"
                horariodeatenciontext="Ubicación"
                sabadodomingotext="Alfredo Coloma y Rodrigo Vasconez"
                horariotext="Ambato - Ecuador"
              />
            </div>
          </div>
          <div className="h-[600px] relative w-full">
            <Img
              className="h-[600px] m-auto object-cover w-full"
              src="images/img_basemapimage.png"
              alt="basemapimage"
            />
            <Img
              className="absolute h-5 inset-x-[0] mx-auto top-[26%]"
              src="images/img_frame.svg"
              alt="frame"
            />
          </div>
        </div>
        <Footer className="bg-teal-900 flex gap-2 items-center justify-center mt-2 pl-8 pr-4 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
