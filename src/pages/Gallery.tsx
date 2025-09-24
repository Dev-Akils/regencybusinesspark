import { motion } from "framer-motion";
import { useState } from "react";

// Import your images
import image0 from "../assets/Gallery/Amenities.jpg";
import image1 from "../assets/Gallery/Cam 01.jpg";
import image2 from "../assets/Gallery/Cam 02 OP-1.jpg";
import image3 from "../assets/Gallery/Cam 02 OP-2.jpg";
import image4 from "../assets/Gallery/Cam 04.jpg";
import image5 from "../assets/Gallery/Cam 05.png";
import image6 from "../assets/Gallery/Cam 06.jpg";
import image7 from "../assets/Gallery/Lift Lobby.jpg";
import image8 from "../assets/Gallery/Md Room.jpg";
import image9 from "../assets/Gallery/Reception.jpg";

const images: { src: string; label: string }[] = [
    { src: image0, label: "Amenities" },
    { src: image1, label: "Regency Tower" },
    { src: image2, label: "Green Terrace" },
    { src: image3, label: "Swimming Pool" },
    { src: image4, label: "Modern Interiors" },
    { src: image5, label: "Sky View" },
    { src: image6, label: "Luxury Lobby" },
    { src: image7, label: "Lift Lobby" },
    { src: image8, label: "MD Room" },
    { src: image9, label: "Reception" },
];

// Variants for stagger animation
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function Gallery() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="p-6 mt-5">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg"
                        onClick={() => setSelected(img.src)}
                    >
                        <img
                            src={img.src}
                            alt={`Gallery ${i}`}
                            className="w-full h-52 object-cover"
                            loading="lazy"
                        />

                        {/* Absolute overlay text */}
                        <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-2 text-sm md:text-base">
                            {img.label}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Fullscreen Modal */}
            {selected && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelected(null)}
                >
                    <motion.img
                        src={selected}
                        alt="Selected"
                        className="max-h-[80%] max-w-[90%] rounded-xl shadow-2xl"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 120 }}
                    />
                </motion.div>
            )}
        </div>
    );
}
