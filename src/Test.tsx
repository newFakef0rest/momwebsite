import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scene } from "../public/Scene.tsx";

export const Model = () => {
  const { scene } = useGLTF("/scene.gltf");
  return <primitive object={scene}></primitive>;
};

export const Test = () => {
  return (
    <Canvas shadows={false} dpr={[1, 2]}>
      <Suspense fallback={null}>
        {/* <color attach={"background"} args={["#101010"]}></color> */}
        {/* <PresentationControls> */}
        {/*   <Stage environment={"sunset"}> */}
        {/*     <directionalLight intensity={1} position={[0, 3, 2]} /> */}
        {/*     /!* <Model></Model> *!/ */}
        {/*   </Stage> */}
        {/* </PresentationControls> */}

        <Stage preset="rembrandt" intensity={1} environment="city">
          <Scene />
        </Stage>
      </Suspense>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  );
};
