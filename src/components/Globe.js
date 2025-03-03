import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import earthTexture from "../assets/earth.jpg";
import "../styles.css";

const locations = [
  { name: "New Delhi", coords: [1.5, 0.8, 1.2], details: "📍 New Delhi, India\n✉️ delhi@tourism.com\n📞 +91 98765 43210" },
  { name: "Mumbai", coords: [-1.2, 1.1, -1.5], details: "📍 Mumbai, Maharashtra\n✉️ mumbai@tourism.com\n📞 +91 91234 56789" },
  { name: "Bangalore", coords: [-1.8, -1, 1.2], details: "📍 Bangalore, Karnataka\n✉️ bangalore@tourism.com\n📞 +91 98222 33445" },
  { name: "Chennai", coords: [1.2, -1.5, -1.2], details: "📍 Chennai, Tamil Nadu\n✉️ chennai@tourism.com\n📞 +91 95555 67890" },
  { name: "Kolkata", coords: [-1.5, 1.3, -1], details: "📍 Kolkata, West Bengal\n✉️ kolkata@tourism.com\n📞 +91 98765 12345" },
  { name: "Jaipur", coords: [1.0, -1.0, 1.5], details: "📍 Jaipur, Rajasthan\n✉️ jaipur@tourism.com\n📞 +91 97654 32109" }
];

const Globe = ({ onSelectLocation }) => {
  const globeRef = useRef();

  // Rotate the globe inside Canvas
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} intensity={1} />
      
      {/* Earth Sphere */}
      <Sphere ref={globeRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial map={new THREE.TextureLoader().load(earthTexture)} />
      </Sphere>

      {/* Contact Points */}
      {locations.map((loc, index) => (
        <mesh key={index} position={loc.coords} onClick={() => onSelectLocation(loc.details)}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="red" />
        </mesh>
      ))}
    </>
  );
};

const RotatingGlobe = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div style={{ height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <Globe onSelectLocation={setSelectedLocation} />
      </Canvas>

      {/* Display Contact Info */}
      {selectedLocation && (
        <div className="contact-info">
          <p>{selectedLocation}</p>
          <button onClick={() => setSelectedLocation(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default RotatingGlobe;