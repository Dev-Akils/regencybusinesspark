import { useState } from "react";
import { Button, Tooltip, Modal, Box, IconButton } from "@mui/material";
import { MdOutlineSwipeDown } from "react-icons/md";
import CloseIcon from "@mui/icons-material/Close";

import masterVideo from "../assets/MasterPlan/Masterplan 1.mp4";
import { masterPlan } from "../data/MasterPlan_Data";
import { useNavigate } from "react-router-dom";

export default function MasterPlanPage() {
    const navigate=useNavigate();
    const [zoomOpen, setZoomOpen] = useState(false);
    const [selectedFloor, setSelectedFloor] = useState<number | null>(null);
    const [hoveredFloor, setHoveredFloor] = useState<number | null>(null);
    const [hoveredLink,setHoveredLink]=useState<number | null>(null);

    // Track which masterPlan is active
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentFloor = masterPlan[currentIndex];

    // Handle image click -> go to next plan
    const handleImageClick = () => {
        setCurrentIndex((prev) => (prev + 1) % masterPlan.length);
        setSelectedFloor(null); // reset selection
    };

    return (
        <div className="flex gap-6 flex-col md:flex-row p-5 w-full h-auto bg-[rgb(16,39,63)]">
            {/* Sidebar */}
            <div className="md:w-[20%] w-full flex flex-col items-center justify-center border-r p-4">
                <h3 className="text-xl font-semibold mb-4 text-white">BUILDINGS</h3>
                {currentFloor.units.map((unit) => (
                    <Button
                        key={unit.id}
                        fullWidth
                        variant="contained"
                        sx={{
                            mb: 2,
                            backgroundColor:
                                hoveredFloor === unit.id || selectedFloor === unit.id
                                    ? "black"
                                    : "white",
                            color:
                                hoveredFloor === unit.id || selectedFloor === unit.id
                                    ? "white"
                                    : "black",
                            "&:hover": { backgroundColor: "rgb(243,174,94)", color: "white", fontWeight: "Bold" }, // 🔥 golden hover
                            transition: "0.3s",
                        }}
                        onMouseEnter={() => setHoveredFloor(unit.id)}
                        onMouseLeave={() => setHoveredFloor(null)}
                        onClick={() => setSelectedFloor(unit.id)}
                    >
                        {unit.name}
                    </Button>

                ))}
                <Button
                    className="w-full"
                    onClick={() => setZoomOpen(true)}
                    variant="outlined"
                    sx={{
                        borderColor: "#5d5c61",
                        color: "#b68534",
                        "&:hover": { borderColor: "#d4a373", color: "#d4a373" },
                    }}
                >
                    {/* Explore Buildings */}
                    CIRCULATION
                </Button>
            </div>

            {/* Floor Plan */}
            <div className="relative w-full md:h-screen flex items-center justify-center">
                <svg
                    viewBox={currentFloor.imageSettings.svgSize}
                    className="w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"



                >
                    {/* Background image */}
                    <image
                        href={currentFloor.image}
                        width={currentFloor.imageSettings.imageWidth}
                        height={currentFloor.imageSettings.imageHeight}
                    />


                    {/* 🏠 Units polygons */}
                    <g>
                        {currentFloor.units.map((unit) => (
                            <Tooltip
                                key={unit.id}
                                title={unit.name}
                                arrow
                                placement="top"
                                componentsProps={{
                                    tooltip: {
                                        sx: {
                                            bgcolor: "#ff7043",
                                            color: "white",
                                            fontSize: "0.85rem",
                                            padding: "5px 8px",
                                        },
                                    },
                                    arrow: { sx: { color: "#ff7043" } },
                                }}
                            >
                                <polygon
                                    transform="translate(0, 155)"
                                    points={unit.polygonPoints}
                                    fill={
                                        selectedFloor === unit.id
                                            ? "rgba(255,112,67,0.5)"
                                            : hoveredFloor === unit.id
                                                ? unit.hoveredColor
                                                : "transparent"
                                    }
                                    strokeWidth={2}
                                    style={{ cursor: "grabbing", pointerEvents: "auto" }}
                                    onMouseEnter={() => setHoveredFloor(unit.id)}
                                    onMouseLeave={() => setHoveredFloor(null)}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedFloor(unit.id);
                                    }}
                                />
                            </Tooltip>
                        ))}
                    </g>


                    {/* 🔗 vedio3D links */}
                    <g>
                        {currentFloor.vedio3D.map((e) => (
                            <polygon

                                key={e.id}
                                points={e.polygonPoints}
                                // fill="transparent"
                               
                                // fillOpacity={0}     // invisible but still clickable
                                transform="translate(0, 155)"
                                fill={
                                    selectedFloor === e.id ? "rgba(255,112,67,0.5)" : hoveredLink === e.id ? "rgba(255,140,0,0.5)" : "transparent"
                                }
                                onMouseEnter={() => setHoveredLink(e.id)}
                                onMouseLeave={() => setHoveredLink(null)}

                                pointerEvents="auto"          // ensure it receives pointer events
                                tabIndex={0}                  // makes it keyboard-focusable
                                role="link"                   // accessibility
                                style={{ cursor: "pointer",outline:"none" }}
                                // onClick={(evt) => {
                                //     evt.stopPropagation();                  // prevent parent handlers
                                //     window.open(e.link, "_blank", "noopener,noreferrer");
                                // }}
                                // onKeyDown={(evt) => {
                                //     if (evt.key === "Enter" || evt.key === " ") {
                                //         window.open(e.link, "_blank", "noopener,noreferrer");
                                //     }
                                // }}
                                 onClick={()=>navigate(`/explore360deg/${currentFloor.id}-${e.id}`)}
                            />
                        ))}
                    </g>
                </svg>

                {/* Swipe icon overlay */}
                <div
                    className="absolute bottom-10 right-4 flex items-center justify-center text-white bg-black/50 p-8 rounded-full cursor-pointer"
                    onClick={handleImageClick}
                >
                    <MdOutlineSwipeDown size={28} />
                </div>
            </div>


            {/* Zoom Modal */}
            <Modal open={zoomOpen} onClose={() => setZoomOpen(false)}>
                <Box
                    className="flex items-center justify-center h-screen w-screen bg-black/80"
                    sx={{ outline: "none" }}
                >
                    <IconButton
                        onClick={() => setZoomOpen(false)}
                        sx={{
                            position: "absolute",
                            top: 20,
                            right: 20,
                            color: "white",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" },
                        }}
                    >
                        <CloseIcon sx={{
                            backgroundColor: "white", borderRadius: "100%",
                            color: "rgba(0,0,0,0.6)",
                        }} />
                    </IconButton>
                    <video
                        src={masterVideo}
                        controls
                        autoPlay
                        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
                    />
                </Box>
            </Modal>
        </div>
    );
}
