import React from 'react';

const Lights = () => {
    return (
        <>
            {/* Luce ambientale base */}
            <ambientLight intensity={0.25} />

            {/* Luce direzionale con ombre morbide */}
            <directionalLight
                castShadow
                intensity={1}
                position={[0.5, 1, 0.5]}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.01}
                shadow-camera-far={2}
                shadow-camera-left={-0.5}
                shadow-camera-right={0.5}
                shadow-camera-top={0.5}
                shadow-camera-bottom={-0.5}
            />

            {/* Spotlight dall’alto per profondità */}
            <spotLight
                castShadow
                intensity={0.8}
                position={[0, 1, 0]}
                angle={0.4}
                penumbra={0.3}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            {/* Spotlight inclinata da destra */}
            <spotLight
                intensity={0.6}
                position={[0.5, 0.6, 0.5]}
                angle={0.3}
                penumbra={0.4}
                color="#ffffff"
            />

            {/* Luce di riempimento da sinistra per contrasto */}
            <spotLight
                intensity={0.5}
                position={[-0.5, 0.6, 0.5]}
                angle={0.3}
                penumbra={0.4}
                color="#ffffff"
            />
        </>
    );
};

export default Lights;