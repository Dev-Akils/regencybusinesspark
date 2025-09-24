import { useState } from "react";
import bgImage from "../assets/Aerial for location.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import EntryExitPoints from "../components/EntryExitPoints";
import RoadDots from "../components/RoadDots";
import BuildingPoints from "../components/BuildingPoints";
import { MdPinch } from "react-icons/md";

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (

    <section className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-gray-900">
      <TransformWrapper initialScale={1} minScale={1} maxScale={4} centerOnInit>
        <TransformComponent>
          <div className="relative w-full h-full">
            {/* Background image */}
            <img
              src={bgImage}
              alt="Master Plan"
              className="w-full h-full object-contain aspect-[3000/1700]"
            />

            <div className="absolute bottom-40 right-10 pointer-events-none">
              <div className="flex flex-col items-center bg-black/60 w-24 h-24 text-center justify-center rounded-full text-white opacity-80 zoom-bounce">
                <span className="text-3xl"><MdPinch /></span>
                <p className="text-sm mt-2">Pinch to zoom</p>
              </div>
            </div>


            {/* Road -- */}
            <RoadDots hoveredId={hoveredId} />

            {/* Entry and Exit points */}
            <EntryExitPoints />


            {/* Towers */}
            <BuildingPoints hoveredId={hoveredId} setHoveredId={setHoveredId} />

            {/* Tooltips */}
            <Tooltip
              id="exits-tooltip"
              place="top"
              className="!bg-black !text-white px-2 py-1 rounded-md text-sm "
              // effect="float"
              delayShow={100}
            />
            <Tooltip
              id="tower-tooltip"
              place="top"
              className="!bg-black !text-white px-2 py-1 rounded-md text-sm"

              // effect="float"
              delayShow={100}
            />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </section>

  );
}
