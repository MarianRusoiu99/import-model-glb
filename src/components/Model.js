import React from 'react'
import { useLoader,useFrame } from '@react-three/fiber'
import { GLTFLoader }  from 'three/examples/jsm/loaders/GLTFLoader'
function Model(props) {
       const myMesh = React.useRef()
        const gltf = useLoader(GLTFLoader, props.path);
        useFrame(({ clock }) => {
              myMesh.current.rotation.y = clock.getElapsedTime()
            })
  return (
              <><mesh ref={myMesh}>
         <primitive object={gltf.scene} scale={props.scale} position={props.position} />
         <meshBasicMaterial/>
         </mesh>
              </>
  )    
}

export default Model