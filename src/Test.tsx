import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Model = () => {
  const { scene } = useGLTF("/scene.gltf");
  return <primitive object={scene}></primitive>;
};

export const Test = () => {
  return (
    <Canvas>
      {/* <color attach={"background"} args={["#101010"]}></color> */}
      <PresentationControls>
        <Stage environment={"sunset"}>
          <directionalLight intensity={1} position={[0, 3, 2]} />
          <Model></Model>
          {/* <Scene /> */}
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};
