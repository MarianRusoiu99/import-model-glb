import React from 'react'

import { Canvas} from '@react-three/fiber'

import { OrbitControls, ScrollControls } from "@react-three/drei";
import Camera from './Camera';
import flower from '../Assets/statuette_de_femme_antique.glb';
import Model from './Model';
function Cnv() {
 
 
  
    return (
        <Canvas  style={{width: `100%`, height: `100vh`, position: `relative` }}>
          <OrbitControls enableZoom={false} />
          <Camera />
          <ScrollControls pages={1} damping={0.25}>
          <Model path={flower} scale={40} position={[5,-10,-40]} />
          </ScrollControls>
      </Canvas>
  )
}

export default Cnv
