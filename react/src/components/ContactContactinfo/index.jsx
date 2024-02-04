import React from "react";

import { Img, Text } from "components";

const ContactContactinfo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[100px] md:h-auto object-cover w-[100px]"
          alt="schedule"
          src={props?.scheduleimage}
        />
        <div className="flex flex-col gap-4 h-[121px] md:h-auto items-start justify-start w-auto">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
            size="txtOneGTSuperDisplayMedium36Black900"
          >
            {props?.horariodeatenciontext}
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
            size="txtGintoLight24Black900"
          >
            {props?.sabadodomingotext}
          </Text>
          {!!props?.horariotext ? (
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
              size="txtGintoLight24Black900"
            >
              {props?.horariotext}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

ContactContactinfo.defaultProps = {
  scheduleimage: "images/img_schedule_1.png",
  horariodeatenciontext: "Horario de atención",
  sabadodomingotext: "Sábado - Domingo",
};

export default ContactContactinfo;
