import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tooltip, Button, Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { floors } from "../data/Building_Data";

export default function Floors() {
    const { id } = useParams<{ id: string }>();
    const floor = id ? floors[Number(id)] : null;

    const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
    const [selectedBtn, setSelectedBtn] = useState<string | null>(null);
    const [zoomOpen, setZoomOpen] = useState(false);

    const navigate = useNavigate();

    if (!floor) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-[#5d5c61] text-center p-6">
                <div className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md mb-4">
                    Floor data not found.
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="px-5 py-2 rounded-lg border border-white/70 text-white hover:bg-white hover:text-[#5d5c61] transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col md:flex-row h-screen w-full p-5 gap-6">
            {/* Left Sidebar: Buttons by unique btnname */}
            <div className="md:w-[20%] w-full mt-14 flex flex-col items-center justify-start border-r p-4 overflow-y-auto">
                <h3 className="text-xl font-semibold mb-4">{floor.name}</h3>

                {Array.from(new Set(floor.units.map((unit) => unit.btnname))).map((name) => (
                    <Button
                        key={name}
                        fullWidth
                        variant="contained"
                        sx={{
                            mb: 2,
                            backgroundColor: selectedBtn === name ? "black" : "#5d5c61",
                            "&:hover": { backgroundColor: "black" },
                            transition: "0.3s",
                        }}
                        onMouseEnter={() => setHoveredBtn(name)}
                        onMouseLeave={() => setHoveredBtn(null)}
                        onClick={() => setSelectedBtn(name)}
                    >
                        {name}
                    </Button>
                ))}
            </div>

            {/* Floor Plan SVG */}
            <div className="relative w-full md:h-screen flex items-center justify-center">
                <svg
                    viewBox={floor.imageSettings.svgSize}
                    className="w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/* Floor image */}
                    <image
                        href={floor.towerImage}
                        width={floor.imageSettings.imageWidth}
                        height={floor.imageSettings.imageHeight}
                    />
                    {/* Units polygons */}
                    {floor.units.map((unit) => (
                        <Tooltip
                            key={unit.id}
                            title={unit.name}
                            arrow
                            placement="top"
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: "#ff7043",
                                        fontSize: "0.85rem",
                                        padding: "5px 8px",
                                    },
                                },
                            }}
                        >
                            <polygon
                                points={unit.polygon}
                                fill={
                                    hoveredBtn === unit.btnname || selectedBtn === unit.btnname
                                        ? unit.hoverColor
                                        : "transparent"
                                }
                                stroke="black"
                                style={{ cursor: "pointer" }}
                                onMouseEnter={() => setHoveredBtn(unit.btnname)}
                                onMouseLeave={() => setHoveredBtn(null)}
                                onClick={() => setSelectedBtn(unit.btnname)}
                            />
                        </Tooltip>
                    ))}
                </svg>
            </div>

            {/* Right Sidebar */}
            <div className="md:w-[20%] w-full flex flex-col items-center justify-center border-r p-4">
                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => navigate(-1)}
                    sx={{
                        mb: 2,
                        backgroundColor: "#5d5c61",
                        "&:hover": { backgroundColor: "black" },
                        transition: "0.3s",
                    }}
                >
                    Go Back
                </Button>

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
                    Zoom Image
                </Button>
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
                        <CloseIcon />
                    </IconButton>

                    <img
                        src={floor.towerImage}
                        alt="Zoomed Floor Plan"
                        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
                    />
                </Box>
            </Modal>
        </div>
    );
}
