// src/pages/AFrameViewer.tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { VscDebugStepBack } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import { masterPlan } from "../data/MasterPlan_Data";

interface AFrameViewerProps {
  onBack?: () => void;
}

const Panorama: React.FC<{ image: string }> = ({ image }) => {
  const texture = useTexture(image);

  return (
    <mesh>
      {/* A giant sphere around the camera */}
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={1} /> {/* side=1 → BackSide */}
    </mesh>
  );
};

const AFrameViewer: React.FC<AFrameViewerProps> = ({ onBack }) => {
  const { floorId } = useParams<{ floorId?: string }>();
  const [floorIdStr, vedio3DIdStr] = (floorId ?? "").split("-");

  const floorIdNum = Number(floorIdStr);
  const vedioIdNum = Number(vedio3DIdStr);

  const floorData = masterPlan.find((item) => item.id === floorIdNum);
  const Video3DData = floorData?.vedio3D.find((e) => e.id === vedioIdNum);

  if (!floorData || !Video3DData) {
    return (
      <div className="flex items-center justify-center h-screen bg-blue-950/50 text-white">
        ❌ No 360° view found for floor {floorIdNum} and video {vedioIdNum}
      </div>
    );
  }

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Back Button */}
      <div
        onClick={onBack ? onBack : () => window.history.back()}
        className="absolute bottom-6 right-4 z-40"
      >
        <div className="flex flex-col items-center cursor-pointer bg-black/60 w-20 h-20 text-center justify-center rounded-full text-white opacity-80 zoom-bounce">
          <span className="text-3xl">
            <VscDebugStepBack />
          </span>
        </div>
      </div>

      {/* React Three Fiber Scene */}
      <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
        <Panorama image={Video3DData.image} />
        <OrbitControls enableZoom enablePan={false} autoRotate autoRotateSpeed={-1} />
      </Canvas>
    </div>
  );
};

export default AFrameViewer;
