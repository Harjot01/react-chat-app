import React from "react";
import clsx from "clsx";

const Message = ({ own }) => {
  return (
    <div
      className={clsx(
        "flex",
        { "flex-row-reverse": own, "gap-x-2": own },
        "space-x-2",
        "justify-start",
        "items-end"
      )}
    >
      <div className="w-8 h-8 rounded-full">
        <img
          className="w-8 h-8 rounded-full"
          src="https://www.biospectrumindia.com/uploads/articles/xpgonn0x_400x400-15957.jpg"
          alt=""
        />
      </div>
      <div
        className={clsx(
          "w-48",
          "text-white",
          "p-2",
          { "rounded-br-none": own, "rounded-bl-xl": own, "bg-[#6495ED]": own },
          "rounded-bl-none",
          "rounded-2xl",
          "bg-blue-500"
        )}
      >
        <p className="text-sm">Hi, are you available tomorrow?</p>
      </div>
    </div>
  );
};

export default Message;
