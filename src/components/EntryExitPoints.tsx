
export default function EntryExitPoints() {
    const entryExit = [
        { id: 1, name: "main road", cx: 1800, cy: 600 },
        { id: 2, name: "main road", cx: 950, cy: 830 },
        { id: 3, name: "main road", cx: 1065, cy: 910 },
        { id: 4, name: "main road", cx: 2030, cy: 830 },

    ]
    return (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 3000 1700">
            {entryExit.map((dot) => (
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
    )
}