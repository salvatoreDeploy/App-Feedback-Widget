import { useState } from "react";
import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
  return (
    <div className="absolute bottom-4 right-4">
      <button className="button group">
        <ChatTeardropDots className="chatTeardDropsDots" />

        <span className="spanFeedBack group-hover">
          <span>FeedBack</span>
        </span>
      </button>
    </div>
  );
}
