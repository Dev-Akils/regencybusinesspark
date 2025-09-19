import { useState } from "react";
import { Tooltip } from "react-tooltip";
import towersImg from "../assets/Towers/Towers.jpg";
import { floors } from "../data/Building_Data";
import { useNavigate } from "react-router-dom";

export default function ExploreBuildings() {
    // const [hoveredId, setHoveredId] = useState<string | null>(null);
    // const navigate = useNavigate();
     const [hoveredId, setHoveredId] = useState<number | null>(null);
    const navigate = useNavigate();

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[rgba(16,39,63)] overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Towers image */}
                <img
                    src={towersImg}
                    alt="Towers"
                    className="h-[250px] md:h-screen xl:h-full w-auto mx-auto"
                />

                {/* Towers hotspots & tooltips */}
                {Object.values(floors).map((floor) => (
                    <div key={floor.id}>
                        {/* Hotspot */}
                        <div
                            data-tooltip-id={`tooltip-${floor.id}`}
                            onClick={() => navigate(`/floor/${floor.id}`)}
                            className="absolute cursor-pointer"
                            style={{
                                top: floor.top,
                                left: floor.left,
                                height: `${floor.height}px`,
                                width: `${floor.width}px`,
                                transform: "translate(-50%, -50%)",
                                backgroundColor: hoveredId === floor.id ? floor.hoverColor : "transparent",
                            }}
                            onMouseEnter={() => setHoveredId(floor.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        />

                        {/* Tooltip */}
                        <Tooltip
                            id={`tooltip-${floor.id}`}
                            place="top"
                            content={floor.name}
                            className="border-l-4 border-l-orange-700"
                            style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "white" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
