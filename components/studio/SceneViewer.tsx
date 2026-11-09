"use client";
import { Component, Suspense, useRef, useState } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import { RotateCcw, RotateCw } from "lucide-react";
import type { OrbitControls as OrbitControlsType } from "three-stdlib";

function Model() {
  const { scene } = useGLTF("/studio3d/backend-node.glb");
  return <Center><primitive object={scene} /></Center>;
}
class SceneBoundary extends Component<{ children: React.ReactNode; onClose: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <div className="scene-error"><p>The 3D view isn&apos;t available on this device.</p><button className="text-link" onClick={this.props.onClose}>Return to the rendered view</button></div> : this.props.children; }
}
export default function SceneViewer({ onClose }: { onClose: () => void }) {
  const controls = useRef<OrbitControlsType>(null);
  const [supportsWebGL] = useState(() => {
    try {
      const context = document.createElement("canvas").getContext("webgl2");
      if (!context) return false;
      context.getExtension("WEBGL_lose_context")?.loseContext();
      return true;
    } catch { return false; }
  });
  const reducedMotion = useReducedMotion();
  const [autoRotate, setAutoRotate] = useState(false);
  const rotate = (amount: number) => {
    if (controls.current) {
      const angle = controls.current.getAzimuthalAngle();
      controls.current.setAzimuthalAngle(angle + amount);
      controls.current.update();
    }
  };
  if (!supportsWebGL) return <div className="scene-fallback"><Image src="/studio3d/backend-hero-wide.webp" alt="Rendered API, server, and database architecture" fill sizes="(max-width: 760px) 100vw, 53vw" className="hero-object" /><p className="scene-fallback-note">3D rotation isn’t supported here. The Blender render is shown instead.</p></div>;
  return <SceneBoundary onClose={onClose}><div className="scene-canvas" role="img" aria-label="Interactive model of the API, server, and database architecture. Drag to rotate or use the rotation buttons."><Canvas dpr={[1, 1.5]} camera={{ position: [5, 4, 6], fov: 38 }} gl={{ antialias: true, alpha: true }} frameloop={autoRotate && !reducedMotion ? "always" : "demand"} fallback={<div className="scene-error"><p>This device does not support WebGL.</p><button className="text-link" onClick={onClose}>Return to the rendered view</button></div>}><ambientLight intensity={1.6} /><directionalLight position={[5, 8, 5]} intensity={3.5} /><directionalLight position={[-5, 2, 3]} intensity={1.5} /><Suspense fallback={null}><Model /></Suspense><OrbitControls ref={controls} enablePan={false} enableZoom={false} autoRotate={autoRotate && !reducedMotion} autoRotateSpeed={0.65} minPolarAngle={0.3} maxPolarAngle={Math.PI / 2.2} /></Canvas></div><div className="scene-controls"><button aria-label="Rotate object left" onClick={() => rotate(-Math.PI / 8)}><RotateCcw size={15} /></button><p className="mono">DRAG TO ROTATE</p><button aria-label="Rotate object right" onClick={() => rotate(Math.PI / 8)}><RotateCw size={15} /></button>{!reducedMotion && <button className="mono" aria-pressed={autoRotate} onClick={() => setAutoRotate(!autoRotate)}>{autoRotate ? "Pause" : "Auto"}</button>}</div></SceneBoundary>;
}
