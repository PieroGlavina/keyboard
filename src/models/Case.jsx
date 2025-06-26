import React, {useEffect, useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import scene from '../../public/assets/3D/case.glb'

const Case = ({currentCase, ...props}) => {

    const { nodes, materials } = useGLTF(scene)

    useEffect(() => {
        materials["CaseMaterial"].color.set(currentCase.color);
    }, [currentCase]);

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Case.geometry}
                material={materials.CaseMaterial}
                position={[0, 0.01, 0]}
                rotation={[-0.15, 0, 0]}
                scale={[1, 1, 1]}
            />
        </group>
    )
}

export default Case;