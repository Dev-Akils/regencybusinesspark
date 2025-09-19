import { useState } from "react";
import bgImage from "../assets/Aerial for location.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  // const [hoveredExit, setHoveredExit] = useState<number | null>(null);

  const Towers = [
    {
      id: 1,
      name: "Building 1",
      polyconPoints: "1491,733,1491,659,1787,603,1909,656,1594,709",
      // hoveredColor: "rgba(160, 175, 125, 0.5)" // pastel olive-green
      hoveredColor: "rgba(80, 90, 60, 0.5)", // very dark olive green
    },
    {
      id: 2,
      name: "Building 2",
      polyconPoints: "982,852,980,720,1247,656,1364,725,1070,778,1075,881",
      // hoveredColor: "rgba(210, 190, 160, 0.5)" // sandy beige
      hoveredColor: "rgba(110, 90, 70, 0.5)", // very dark sandy beige
    },
    {
      id: 3,
      name: "Building 3",
      polyconPoints: "1088,924,1086,786,1374,738,1472,786,1472,918,1295,958,1168,974",
      // hoveredColor: "rgba(145, 180, 200, 0.5)" // pastel teal-blue
      hoveredColor: "rgba(50, 80, 95, 0.5)", // very dark teal-blue
    },
    {
      id: 4,
      name: "Building 4",
      polyconPoints: "1432,741,1753,683,1787,733,1787,850,1493,918,1496,799",
      // hoveredColor: "rgba(190, 160, 185, 0.5)" // soft mauve/purple
      hoveredColor: "rgba(80, 60, 85, 0.5)", // very dark mauve/purple
    },
    {
      id: 5,
      name: "Building 5",
      polyconPoints: "1756,688,1930,651,2020,680,2015,799,1793,850,1787,744",
      // hoveredColor: "rgba(200, 150, 160, 0.5)" // muted pink/red
      hoveredColor: "rgba(100, 40, 50, 0.5)", // very dark muted red/pink
    },
    { id: 6, name: "Nighbourhood-estate", polyconPoints: "16,599,37,641,85,649,162,655,225,636,302,615,360,591,344,538,302,506,156,541", hoveredColor: "" },
    { id: 7, name: "Entry", polyconPoints: "866,805,940,783,988,842,914,858", hoveredColor: "" },
    { id: 8, name: "Entry", polyconPoints: "1761,570,1798,533,1848,562,1819,605,1785,597", hoveredColor: "" },
    { id: 9, name: "Entry+Exit", polyconPoints: "2002,814,2057,790,2100,825,2036,856", hoveredColor: "" },
    { id: 10, name: "Entry+Exit", polyconPoints: "1062,899,1019,915,1064,944,1102,925", hoveredColor: "" },
    { id: 11, name: "main road", polyconPoints: "34,1221,1099,1011,1120,1038,61,1247", hoveredColor: "" },
    { id: 12, name: "main road", polyconPoints: "1311,966,1986,818,1996,855,1332,995", hoveredColor: "" },
    { id: 13, name: "main road", polyconPoints: "2150,714,2425,781,2142,820,2126,794", hoveredColor: "" },
    { id: 14, name: "sub road", polyconPoints: "948,912,980,896,1096,992,1041,1002", hoveredColor: "" },
  ];



  const RoadDots = [
    // Straight part of the road
    // { id: 1, name: "main road", cx: 100, cy: 1225 },
    // { id: 2, name: "main road", cx: 200, cy: 1205 },
    // { id: 3, name: "main road", cx: 300, cy: 1185 },
    // { id: 4, name: "main road", cx: 400, cy: 1165 },
    // { id: 5, name: "main road", cx: 525, cy: 1141 },

    // Curved/irregular part
    // { id: 6, name: "main road", cx: 705, cy: 1106 },
    // { id: 7, name: "main road", cx: 795, cy: 1090 },
    // { id: 8, name: "main road", cx: 885, cy: 1075 },
    // { id: 9, name: "main road", cx: 955, cy: 1060 },
    // { id: 10, name: "main road", cx: 1090, cy: 1030 },
    { id: 1, name: "main road", cx: 1800, cy: 600 },
    { id: 2, name: "main road", cx: 950, cy: 830 },
    { id: 3, name: "main road", cx: 1065, cy: 910 },
    // { id: 12, name: "main road", cx: 1300, cy: 990 },
    // { id: 13, name: "main road", cx: 1400, cy: 970 },
    // { id: 14, name: "main road", cx: 1500, cy: 950 },
    { id: 4, name: "main road", cx: 2030, cy: 830 },
  ];



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

            {/* Road Dots */}
            {/* <svg className="absolute inset-0 w-full h-full" viewBox="0 0 3000 1700">
              {RoadDots.map((dot) => (
                <circle
                  key={dot.id}
                  cx={dot.cx}
                  cy={dot.cy}
                  r="9"
                  fill="rgba(255, 165, 0, 0.9)"

                  className="road-dot pluse-dot"
                />
              ))}

            </svg> */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 3000 1700">
              {RoadDots.map((dot) => (
                <g key={dot.id}>

                  <circle
                    cx={dot.cx}
                    cy={dot.cy}
                    r="9"
                    fill="rgba(255, 165, 0, 0.9)"
                    className="road-dot"
                  />

                  <circle
                    cx={dot.cx}
                    cy={dot.cy}
                    r="15" // starting radius for pulse
                    fill="rgba(220, 20, 60, 0.3)"
                    className="pulse-dot"
                  />
                </g>
              ))}
            </svg>





            {/* Towers */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 3000 1700"
              preserveAspectRatio="xMidYMid meet"
            >
              {Towers.map((tower) => (
                <polygon
                  key={tower.id}
                  points={tower.polyconPoints}
                  fill={hoveredId === tower.id && tower.hoveredColor ? tower.hoveredColor : "transparent"}
                  onMouseEnter={() => setHoveredId(tower.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  data-tooltip-id="tower-tooltip"
                  data-tooltip-content={tower.name}
                  style={{ cursor: "pointer", transition: "fill 0.3s ease" }}
                />
              ))}
            </svg>

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
