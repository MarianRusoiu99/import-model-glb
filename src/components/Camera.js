import {useEffect} from 'react'
import React from 'react';
import { OrbitControls } from "@react-three/drei";
import { useThree } from '@react-three/fiber'
import {MathUtils} from "three"
const Camera = (props) => {
    const { camera, gl } = useThree();


    const fov = 50;
    const planeAspectRatio = 16 / 9;

    window.addEventListener('resize', () => {	
        camera.aspect = window.innerWidth / window.innerHeight;
        
        if (camera.aspect > planeAspectRatio) {
            // window too large
            camera.fov = fov;
        } else {
            // window too narrow
            const cameraHeight = Math.tan(MathUtils.degToRad(fov / 2));
            const ratio = camera.aspect / planeAspectRatio;
            const newCameraHeight = cameraHeight / ratio;
            camera.fov = MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
        }
    })





    return null;
  };
export default Camera