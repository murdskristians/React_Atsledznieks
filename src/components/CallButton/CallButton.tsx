"use client";
// import SVG from "react-inlinesvg";
import { Button, IProps } from "@/components/Button";
import { FORMATED_PHONE_NUMBER, PHONE_NUMBER } from "@/constants/general";

export const CallButton = (props: IProps) => {
  const onClick = () => {
    window.open(`tel:+${PHONE_NUMBER}`);
  };

  return (
    <Button
      invert
      {...props}
      size="lg"
      onClick={onClick}
      className="drop-shadow-2xl flex justify-center"
      // startIcon={<SVG src="/static/images/icons/call.svg" />}
    >
      {FORMATED_PHONE_NUMBER}
    </Button>
  );
};
