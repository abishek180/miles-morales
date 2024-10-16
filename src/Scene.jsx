import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Billboard,
  Capsule,
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei'
import Dna from './assets/Dna';
import Particles from './assets/Particles';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  HueSaturation,
  SMAA,
  Vignette
} from '@react-three/postprocessing'
import CameraRig from './assets/CameraRig';
import CameraAnimation from './assets/CameraAnimation';

function Scene() {
  const modelRef = useRef();
  return (
    <Canvas camera={{ position: [0, 1, 4] }} gl={{ antialias: false, alpha: false }} dpr={1}>
      <color args={['#191919']} attach="background" />
      <Suspense fallback={null}>
      <Dna ref={modelRef} scale={1.2} position={[-2.15, -1.25, 0]} />
        <CameraRig>
          <Environment preset="city" environmentIntensity={3}>
            <Lightformer form="rect" intensity={1} position={[2, 3, 3]} scale={5} />
            <Lightformer form="rect" intensity={2} position={[-2, 2, -4]} scale={5} />
          </Environment>
          {/* <Particles particlesCount={100} /> */}

          <Billboard>
            <Text
              font="BigShouldersDisplay-Light.ttf"
              rotation={[0, 0, 0]}
              position={[0, -1, -2]}
              fontSize={10}
              color="#fff"
              fillOpacity={0.1}
              letterSpacing={-0.05}>
              MILES
            </Text>
          </Billboard>
        </CameraRig>

        <EffectComposer multisampling={0}>
          <SMAA />
          <Bloom
            mipmapBlur
            intensity={0.8}
            levels={9}
            opacity={0.4}
            luminanceSmoothing={0.1}
            luminanceThreshold={0.7}
          />
          <DepthOfField focusDistance={0.0005} focalLength={0.15} bokehScale={16} />
          <HueSaturation saturation={0.3} hue={0.15} />
          <Vignette offset={0.65} opacity={0.7} />
        </EffectComposer>

        <CameraAnimation />
      </Suspense>
    </Canvas>
  )
}

export default Scene
