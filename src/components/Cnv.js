import React from 'react'

import { Canvas} from '@react-three/fiber'

import Camera from './Camera';
import flower from '../Assets/blue-flower-animated/source/Blue_end.glb';
import Model from './Model';
function Cnv() {
 
    return (
        <Canvas  style={{width: `100%`, height: `100vh`, position: `relative` }}>
          <Camera/>
          <Model path={flower} scale={40} position={[0,-2,0] }/>
      </Canvas>
  )
}

export default Cnv
