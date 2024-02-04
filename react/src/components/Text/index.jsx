import React from "react";

const sizeClasses = {
  txtGintoLight24Black900: "font-ginto font-light",
  txtGintoLight24Teal700: "font-ginto font-light",
  txtOneGTSuperDisplayMedium28: "font-medium font-onegtsuperdisplay",
  txtOneGTSuperDisplayMedium28Teal900: "font-medium font-onegtsuperdisplay",
  txtGintoLight24: "font-ginto font-light",
  txtOneGTSuperDisplayMedium48: "font-medium font-onegtsuperdisplay",
  txtOneGTSuperDisplayMedium36: "font-medium font-onegtsuperdisplay",
  txtGintoLight24WhiteA700: "font-ginto font-light",
  txtOneGTSuperDisplayMedium36Black900: "font-medium font-onegtsuperdisplay",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
