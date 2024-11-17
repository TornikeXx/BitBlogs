import { cn } from "../../lib/utils";
import React, { PropsWithChildren } from "react";

interface CardFrameProps extends PropsWithChildren {
    className?: string;
  }

const CardFrame: React.FC<CardFrameProps> = ({ children,className }) => {
    return (
        <div
      className={cn(
        "p-6 bg-[#fafafa] rounded-xl border-2 border-gray-200 cursor-pointer",
        className 
      )}
    >
      {children}
    </div>
  );
};

export default CardFrame;
