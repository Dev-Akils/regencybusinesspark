
interface RoadDotPointsProps {
    hoveredId: number | null;
}
export default function RoadDots({ hoveredId }: RoadDotPointsProps) {
    const RoadDots = [
        // Straight part of the road
        { id: 1, name: "main road", cx: 100, cy: 1225 },
        { id: 2, name: "main road", cx: 200, cy: 1205 },
        { id: 3, name: "main road", cx: 300, cy: 1185 },
        { id: 4, name: "main road", cx: 400, cy: 1165 },
        { id: 5, name: "main road", cx: 525, cy: 1141 },
        { id: 7, name: "main road", cx: 620, cy: 1126 },
        // Curved/irregular part
        { id: 6, name: "main road", cx: 705, cy: 1106 },

        { id: 7, name: "main road", cx: 795, cy: 1090 },

        { id: 8, name: "main road", cx: 885, cy: 1075 },
        { id: 9, name: "main road", cx: 955, cy: 1060 },
        { id: 10, name: "main road", cx: 1090, cy: 1030 },
        { id: 10, name: "main road", cx: 1180, cy: 1015 },

        { id: 12, name: "main road", cx: 1300, cy: 990 },
        { id: 13, name: "main road", cx: 1400, cy: 970 },
        { id: 15, name: "main road", cx: 1500, cy: 950 },
        { id: 16, name: "main road", cx: 1600, cy: 930 },
        { id: 17, name: "main road", cx: 1680, cy: 910 },
        { id: 18, name: "main road", cx: 1750, cy: 896 },

        { id: 19, name: "main road", cx: 1820, cy: 880 },

        { id: 20, name: "main road", cx: 1880, cy: 870 },

        { id: 21, name: "main road", cx: 1955, cy: 850 },


        { id: 22, name: "main road", cx: 2100, cy: 818 },
        { id: 23, name: "main road", cx: 2185, cy: 802 },
        { id: 24, name: "main road", cx: 2190, cy: 750 },
    ];


    const RoadDots1 = [
        // Straight part of the road
        { id: 1, name: "main road", cx: 940, cy: 890 },
        { id: 2, name: "main road", cx: 1080, cy: 1000 },
        { id: 3, name: "main road", cx: 1033, cy: 960 },
        { id: 4, name: "main road", cx: 990, cy: 925 },
        { id: 5, name: "main road", cx: 890, cy: 850 },

    ]

    const length = 25; // line length
    const angle = 30 * (Math.PI / 180); // convert to radians
    return (
        <>
            {/* Road Dots */}
            {(hoveredId === 13) && (


                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 3000 1700">

                    {RoadDots1.map((dot) => (

                        <line
                            x1={dot.cx - (length / 2) * Math.cos(angle)}
                            y1={dot.cy - (length / 2) * Math.sin(angle)}
                            x2={dot.cx + (length / 2) * Math.cos(angle)}
                            y2={dot.cy + (length / 2) * Math.sin(angle)}
                            stroke="white"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray="10,10"
                            className="road-dot pluse-dot"
                        />
                    ))

                    }
                </svg >

            )}

            {/* Road Dots */}
            {(hoveredId === 11 || hoveredId === 12) && (<svg className="absolute inset-0 w-full h-full" viewBox="0 0 3000 1700">

                {RoadDots.map((dot) => (

                    <line
                        key={dot.id}
                        x1={dot.cx - 15}
                        y1={dot.cy + 5}   // move downward
                        x2={dot.cx + 15}
                        y2={dot.cy - 2}   // move upward
                        // stroke="rgba(80, 60, 85)"
                        // stroke="rgba(139, 0, 0, 0.6)"
                        stroke="yellow"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="10,10"
                        className="road-dot pluse-dot"
                    />
                ))

                }
            </svg >)}

        </>
    )
}