import { cn } from "../../lib/utils";
import React, { PropsWithChildren } from "react";

interface CardFrameProps extends PropsWithChildren {
  className?: string;
}

const CardFrame: React.FC<CardFrameProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "p-6 bg-[#fafafa] rounded-xl border-[1px] border-gray-200 cursor-pointer dark:bg-[#05060C]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CardFrame;
