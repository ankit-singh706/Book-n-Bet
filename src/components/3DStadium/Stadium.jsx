
import React, { Suspense,useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from '../../../public/Stadium_final';
import './stadium.css';


const Stadium = () =>{

    return(
        <>
        <div className="container">
            <div>
                <div>
                <Canvas camera={{ position: [30,12, -8.5], fov: 55 }}>
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Suspense fallback={null}>
                        <Model className="model"/>
                        <OrbitControls />
                    </Suspense>
                    </Canvas>
                </div>
            </div>

        </div>
        </>
    )
}

export default Stadium;