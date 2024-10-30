import React from "react";
import clsx from "clsx";
import { format } from "timeago.js";
import { useUserStore } from "../../stores/useUserStore";
import { useFriendStore } from "../../stores/useFriendStore";

const Message = ({ own, messageText, timeAgo }) => {
  const { userProfile } = useUserStore();
  const { friendProfile } = useFriendStore();
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
          src={own ? userProfile.profileImg : friendProfile.profileImg}
          alt=""
        />
      </div>
      <div
        className={clsx(
          "w-48",
          "text-white",
          "p-2",
          "rounded-2xl",
          own
            ? "rounded-br-none rounded-bl-xl bg-blue-500"
            : "rounded-bl-none bg-gray-400"
        )}
      >
        <p className="text-sm">{messageText}</p>
        <p className="text-xs text-end -mt-3">{format(timeAgo)}</p>
      </div>
    </div>
  );
};

export default Message;
