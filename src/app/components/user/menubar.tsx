"use client"

import {CircleCheck,MessageSquareText,PanelsTopLeft,Settings,Star} from "lucide-react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function Menubar() {
  return (
    <>
      <div className="
          fixed bottom-0 w-full h-16 bg-zinc-950 flex justify-around items-center
          md:relative md:bottom-auto md:left-0 md:top-0 md:h-full md:w-1/5 md:flex-col md:items-center md:justify-start
      ">
        <div className="order-6 md:order-1 mt-0 md:mt-6 mb-0 md:mb-8 flex flex-col justify-center items-center">
          <div className="w-10 h-10 md:w-10 md:h-10 md:mx-4 lg:w-15 lg:h-15 lg:mx-4 rounded-full border-4 border-red-500 overflow-hidden">
            <img
              src="https://i.pravatar.cc/150"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="hidden md:block mt-2 text-sm font-medium">name</p>
        </div>

        <button
          data-tooltip-id="main-tooltip"
          data-tooltip-content="Dashboard"
          className="order-1 md:order-2 text-white flex flex-col items-center gap-1 md:mt-8"
        >
          <PanelsTopLeft className="md:w-8 md:h-8 text-slate-600" />
        </button>

        <button
          data-tooltip-id="main-tooltip"
          data-tooltip-content="Messages"
          className="order-2 md:order-3 text-white flex flex-col items-center gap-1 md:mt-8"
        >
          <MessageSquareText className="md:w-8 md:h-8 text-slate-600" />
        </button>

        <button
          data-tooltip-id="main-tooltip"
          data-tooltip-content="Tasks"
          className="order-3 md:order-4 text-white flex flex-col items-center gap-1 md:mt-8"
        >
          <CircleCheck className="md:w-8 md:h-8 text-slate-600" />
        </button>

        <button
          data-tooltip-id="main-tooltip"
          data-tooltip-content="Favorites"
          className="hidden md:block order-4 md:order-5 text-white flex-col items-center gap-1 md:mt-8"
        >
          <Star className="md:w-8 md:h-8 text-slate-600" />
        </button>

        <button
          data-tooltip-id="main-tooltip"
          data-tooltip-content="Settings"
          className="hidden md:block order-5 md:order-6 text-white flex-col items-center gap-1 mt-0 md:mt-auto md:mb-5"
        >
          <Settings className="md:w-8 md:h-8 text-slate-600" />
        </button>
      </div>

      <Tooltip
        id="main-tooltip"
        place="top"
      />
    </>
  );
}
