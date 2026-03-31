import * as React from "react";

interface Props {
  icon: React.ElementType;
  title: string;
  text: string;
  className?: string;
  size?: "default" | "small" | "medium" | "xl" | "sm" | "base" | "lg";
  index?: number;
}

export const Card = ({
  icon: Icon,
  title,
  text,
  className,
  size = "default",
  index,
}: Props) => {
  const iconBox = size === "small" ? "w-[58px] h-[48px]" : "w-[64px] h-[64px]";

  const iconSize = size === "small" ? "w-[24px] h-[24px]" : "w-[32px] h-[32px]";

  const titleSize = size === "small" ? "text-[14px]" : "text-lg";

  const textSize = size === "small" ? "text-sm" : "text-sm";

  const medium = size === "medium" ? "mt-2" : "";
  return (
    <div
      className={`${className}   rounded-[16px] border ${size === "medium" ? "mt-8 ml-16" : size === "xl" ? "" : size === "sm" ? "" : "group hover:border-custom-secondary"}  border-custom-dark-grey/30 group transition-colors duration-300`}
    >
      <div
        className={`rounded-[10px] ${size === "small" ? "ml-13 mt-4 w-[48px] h-[48px] bg-custom-secondary/20 group-hover:bg-custom-secondary" : size === "xl" ? ` w-[56px] h-[56px]  ${index == 1 ? "ml-30 mt-8 group-hover:bg-custom-primary group-hover:text-custom-white bg-custom-dark-grey/20" : index == 2 ? "ml-20 mt-4 bg-custom-primary text-custom-white " : "bg-custom-secondary/10"}` : size === "base" ? "" : size === "lg" ? " ml-28 mt-4 group-hover:bg-custom-primary bg-custom-dark-grey/20" : "ml-4 mt-4 group-hover:bg-custom-secondary bg-custom-secondary/20  "} flex items-center justify-center transition-colors  duration-300   ${size === "medium" ? "w-[48px] h-[48px] group-hover:bg-custom-secondary" : iconBox}`}
      >
        {Icon && (
          <Icon
            className={`${iconSize}  ${size === "medium" ? "text-custom-secondary" : size === "xl" ? (index == 1 ? "text-custom-dark-grey/90 group-hover:text-custom-white" : "") : size === "lg" ? "text-custom-primary group-hover:text-custom-white" : " text-custom-secondary group-hover:text-custom-white"} group-hover:text-custom-white transition-colors duration-300`}
          />
        )}
      </div>

      <p
        className={`font-semibold ${size === "small" ? "text-center mt-2" : size === "medium" ? "mt-4 group-hover:text-custom-secondary" : size === "xl" ? "text-center mt-4" : size === "lg" ? "text-center mt-2" : "mt-4"} leading-normal  text-custom-dark-grey/90 px-4 ${titleSize}`}
      >
        {title}
      </p>

      <p
        className={`leading-normal  ${size === "small" ? "text-[12px] text-center" : size === "medium" ? "mt-2 group-hover:text-custom-dark-grey" : size === "xl" ? "text-center mt-2" : size === "lg" ? "text-center mt-2" : "text-sm mt-4"} text-custom-dark-grey/60 px-4 ${textSize}`}
      >
        {text}
      </p>
    </div>
  );
};

export default Card;
