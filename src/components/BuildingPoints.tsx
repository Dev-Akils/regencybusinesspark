import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";



interface BuildingPointsProps {
    setHoveredId: (id: number | null) => void; // function, not number
    hoveredId: number | null;                  // can be number or null
}

export default function BuildingPoints({ setHoveredId, hoveredId }: BuildingPointsProps) {

    const [selectedId, setSelectedId] = useState<number | null>(null);

    console.log(selectedId)
    const Towers = [
        {
            id: 1,
            name: "Building 1",

            polyconPoints: "1491,733,1491,659,1787,603,1909,656,1594,709",
            // hoveredColor: "rgba(160, 175, 125, 0.5)" // pastel olive-green
            popuptext1: "Area : 2.5 million sq.ft.",
            popuptext2: "Zone : SEZ",
            top: "30%",
            left: "45%",

            hoveredColor: "rgba(80, 90, 60, 0.5)", // very dark olive green
        },
        {
            id: 2,
            name: "Building 2",
            top: "30%",
            left: "45%",
            polyconPoints: "982,852,980,720,1247,656,1364,725,1070,778,1075,881",
            popuptext1: "Area : 1.8 million sq.ft.",
            popuptext2: "Zone : Non-SEZ",
            // hoveredColor: "rgba(210, 190, 160, 0.5)" // sandy beige
            hoveredColor: "rgba(110, 90, 70, 0.5)", // very dark sandy beige
        },
        {
            id: 3,
            name: "Building 3",
            top: "30%",
            left: "45%",
            popuptext1: "Area : 3.1 million sq.ft.",
            popuptext2: "Zone : SEZ",
            polyconPoints: "1088,924,1086,786,1374,738,1472,786,1472,918,1295,958,1168,974",
            // hoveredColor: "rgba(145, 180, 200, 0.5)" // pastel teal-blue
            hoveredColor: "rgba(50, 80, 95, 0.5)", // very dark teal-blue
        },
        {
            id: 4,
            name: "Building 4",
            top: "30%",
            left: "45%",
            popuptext1: "Area : 1.8 million sq.ft.",
            popuptext2: "Zone : Non-SEZ",
            polyconPoints: "1432,741,1753,683,1787,733,1787,850,1493,918,1496,799",
            // hoveredColor: "rgba(190, 160, 185, 0.5)" // soft mauve/purple
            hoveredColor: "rgba(80, 60, 85, 0.5)", // very dark mauve/purple
        },
        {
            id: 5,
            name: "Building 5",
            top: "30%",
            left: "45%",
            popuptext1: "Area: 2.7 million sq.ft.",
            popuptext2: "Zone: SEZ",
            polyconPoints: "1756,688,1930,651,2020,680,2015,799,1793,850,1787,744",
            hoveredColor: "rgba(100, 40, 50, 0.5)",
        },
        {
            id: 6,
            name: "Hiranandani Estate",
            top: "35%",
            left: "10%",
            popuptext1: "Residential Township",
            popuptext2: "Premium gated community",
            polyconPoints: "2,466,254,458,511,453,712,514,799,758,895,898,871,988,460,1033,8,1139",
            hoveredColor: "",
        },
        {
            id: 7,
            name: "Entry",
            top: "1/4",
            left: "40%",
            popuptext1: "Secondary Gate-2",
            popuptext2: "For deliveries & logistics",
            polyconPoints: "866,805,940,783,988,842,914,858",
            hoveredColor: "",
        },
        {
            id: 8,
            name: "Entry",
            top: "1/4",
            left: "40%",
            popuptext1: "Secondary Gate-1",
            popuptext2: "For deliveries & logistics",
            // popuptext1: "Main Gate",
            // popuptext2: "Visitor & Staff Entry",

            polyconPoints: "1761,570,1798,533,1848,562,1819,605,1785,597",
            hoveredColor: "",
        },
        {
            id: 9,
            name: "Entry+Exit",
            top: "1/4",
            left: "40%",
            popuptext1: "Main Gate",
            popuptext2: "Visitor & Staff Entry",
            // popuptext1: "Two-way Access",
            // popuptext2: "For employees and staff",
            polyconPoints: "2002,814,2057,790,2100,825,2036,856",
            hoveredColor: "",
        },
        {
            id: 10,
            name: "Entry+Exit",
            top: "1/4",
            left: "40%",
            popuptext1: "Two-way Access",
            popuptext2: "For employees and staff",
            // popuptext1: "Parking Access",
            // popuptext2: "For basement & open lots",
            polyconPoints: "1062,899,1019,915,1064,944,1102,925",
            hoveredColor: "",
        },
        {
            id: 11,
            name: "Forest Ave Road",
            top: "56%",
            left: "20%",
            popuptext1: "Internal Road",
            popuptext2: "Surrounded by greenery",
            polyconPoints: "3,1223,11,1268,1030,1050,1244,1011,1430,974,1628,934,1832,886,1957,862,1933,838,1816,862,1663,897,1533,923,1417,950,1319,966,1226,995,1131,1003,1019,1021,895,1050,802,1064,710,1085,620,1106",
            hoveredColor: "",
        },
        {
            id: 12,
            name: "Forest Ave Road",
            top: "30%",
            left: "76%",
            popuptext1: "Service Road",
            popuptext2: "Connects buildings & villas",
            polyconPoints: "2150,714,2425,781,2142,820,2126,794",
            hoveredColor: "",
        },
        {
            id: 13,
            name: "Villa Grand Road",
            top: "37%",
            left: "34%",
            popuptext1: "Luxury Villas",
            popuptext2: "Private residential zone",
            polyconPoints: "876,844,892,836,1080,982,1038,1003",
            hoveredColor: "",
        },

    ];


    const tower = Towers.find((t) => t.id === selectedId);
    return (<>
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
                    onClick={() => setSelectedId(tower.id)}
                />
            ))}
        </svg>

        {selectedId && tower && (
            <div
                className="absolute bg-black/40 text-white p-8 rounded shadow-lg
               transition-all duration-300 ease-out
                "
                style={{
                    top: tower.top,
                    left: tower.left,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <p
                    className="absolute bg-white rounded-full text-black right-1 top-1 cursor-pointer"
                    onClick={() => setSelectedId(null)}
                >
                    <IoMdCloseCircle />
                </p>
                <p>{tower.popuptext1}</p>
                <p>{tower.popuptext2}</p>
            </div>
        )}
    </>)
}