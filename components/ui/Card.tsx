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
  const iconBox = size === "small" || "medium" ? "w-12 h-10 sm:w-[58px] sm:h-[48px]" : "w-[64px] h-[64px]";

  const iconSize = size === "small" ? "w-5 sm:w-[24px] h-5 sm:h-[24px]" : "w-6 h-6";

  const titleSize = size === "small" ? "text-[14px]" : "text-lg";

  const textSize = size === "small" ? "text-sm" : "text-sm";

  const medium = size === "medium" ? "mt-2" : "";
  return (
    <div
      className={`${className}   rounded-[16px] border ${size === "medium" ? "mt-3 sm:mt-8 bg-custom-white hover:border-none" : size == "xl" ? index == 1?"  hover:border hover:border-[#07233B] hover:border-[1px]":"" : size === "sm" ? "" : "group hover:border-custom-secondary"}  border-custom-dark-grey/10 group `}
    >
      <div
        className={`rounded-lg  ${size === "small" ? "ml-8 sm:ml-13 mt-3 sm:mt-4 w-6 h-6 sm:w-12 h-10 sm:h-12 bg-custom-secondary/10 group-hover:bg-custom-secondary" : size === "xl" ? `ml-28 sm:ml-32 mt-2 sm:mt-4 w-12 sm:w-[56px] h-12 sm:h-[56px]  ${index == 1 ? "ml-30 mt-2 sm:mt-8 group-hover:bg-custom-primary group-hover:text-custom-white bg-custom-dark-grey/20" : index == 2 ? "ml-20 mt-4 bg-custom-primary text-custom-white " : "bg-custom-secondary/10"} ` : size === "base" ? "" : size === "lg" ? "ml-20 sm:ml-28 mt-2 sm:mt-4 group-hover:bg-custom-primary bg-custom-dark-grey/20" : "ml-4 mt-4 group-hover:bg-custom-secondary bg-custom-secondary/20  "} flex items-center justify-center  ${size === "medium" ? "w-12 h-4 sm:w-12 h-12 group-hover:bg-custom-secondary" : iconBox}`}
      >
        {Icon && (
          <Icon
            className={`${iconSize}  ${size === "medium" ? "text-custom-secondary" : size === "xl" ? (index == 1 ? "text-custom-dark-grey/90 group-hover:text-custom-white" : "") : size === "lg" ? "text-custom-primary group-hover:text-custom-white" : " text-custom-secondary group-hover:text-custom-white"} group-hover:text-custom-white transition-colors duration-300`}
          />
        )}
      </div>

      <p
        className={`font-semibold ${size === "small" ? "text-[10px] sm:text-sm text-center mt-2" : size === "medium" ? "mt-2 text-sm sm:mt-4 group-hover:text-custom-secondary" : size === "xl" ? "text-sm text-center sm:mt-4" : size === "lg" ? "text-sm sm:text-base text-center mt-2" : "mt-4"} leading-normal  text-custom-dark-grey/90 px-4 `}
      >
        {title}
      </p>

      <p
        className={`leading-normal  ${size === "small" ? "text-[10px] sm:text-sm text-center" : size === "medium" ? "sm:mt-2 text-[10px] group-hover:text-custom-dark-grey" : size === "xl" ? "text-sm text-center sm:mt-2" : size === "lg" ? "text-[10px] sm:text-base text-center sm:mt-2" : "text-sm mt-4"} text-custom-dark-grey/60 px-4 ${textSize}`}
      >
        {text}
      </p>
    </div>
  );
};

export default Card;
