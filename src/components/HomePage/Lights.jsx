import React from 'react'

const Lights = () => {
    return (
        <>
            <ambientLight intensity={1.2}/>

            <directionalLight
                position={[2, 4, 2]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.1}
                shadow-camera-far={10}
                shadow-camera-left={-2}
                shadow-camera-right={2}
                shadow-camera-top={2}
                shadow-camera-bottom={-2}
            />

            <directionalLight
                position={[-3, 2, -2]}
                intensity={0.5}
                color="lightblue"
            />
        </>
    )
}
export default Lights
