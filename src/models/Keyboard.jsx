
import { useGLTF } from "@react-three/drei";
import scene from '../../public/assets/3D/keyboard.glb'
import {useRef} from "react";


const Keyboard = ({...props}) => {
    const { nodes, materials } = useGLTF(scene);

    return (
        <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Case.geometry}
                    material={materials.CaseMaterial}
                    position={[0.007, 0.013, -0.021]}
                    rotation={[-0.112, 0, 0]}
                    scale={[0.997, 1, 1]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[-0.123, 0.032, -0.061]}

                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap001.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.104, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap002.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.085, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap003.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.066, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap004.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.047, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap005.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.028, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap006.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.009, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap007.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.01, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap008.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.029, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap009.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.048, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap010.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.067, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap011.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.086, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap012.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.105, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap013.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[0.131, 0.032, -0.06]}
                />
                <group position={[-0.004, 0.032, 0.016]} scale={[1, 0.97, 1]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane016.geometry}
                            material={materials.SpecialKeyCapsMaterial}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane016_1.geometry}
                            material={materials.LetteringMaterial}
                        />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap015.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.094, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap016.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.075, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap017.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.056, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap018.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.037, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap019.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.018, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap020.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.001, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap021.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.02, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap022.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.039, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap023.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.058, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap024.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.077, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap025.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.096, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap026.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.115, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap027.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[0.136, 0.032, -0.041]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap014.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[-0.118, 0.032, -0.041]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap028.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.091, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap029.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.072, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap030.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.053, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap031.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.034, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap032.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.015, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap033.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.004, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap034.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.023, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap035.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.042, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap036.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.061, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap037.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.08, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap038.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.099, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap040.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[0.128, 0.032, -0.022]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap041.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[-0.117, 0.032, -0.022]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap039.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.082, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap042.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.063, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap043.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.044, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap044.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.025, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap045.geometry}
                    material={materials.LetteringMaterial}
                    position={[-0.006, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap046.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.013, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap047.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.032, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap048.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.051, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap049.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.07, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap050.geometry}
                    material={materials.LetteringMaterial}
                    position={[0.089, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap052.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[0.123, 0.032, -0.003]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap053.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[-0.112, 0.032, -0.003]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap051.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[-0.121, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap054.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[-0.097, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap055.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[-0.074, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap056.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[0.089, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap057.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[0.113, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap058.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[0.136, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap059.geometry}
                    material={materials.SpecialKeyCapsMaterial}
                    position={[0.066, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap060.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[-0.123, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap061.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.104, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap062.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.085, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap063.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.066, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap064.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.047, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap065.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.028, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap066.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.009, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap067.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.01, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap068.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.029, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap069.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.048, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap070.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.067, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap071.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.086, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap072.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.105, 0.032, -0.061]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap073.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[0.131, 0.032, -0.06]}
                />
                <group position={[-0.004, 0.032, 0.016]} scale={[1, 0.97, 1]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane139.geometry}
                            material={materials.SpecialKeysMaterial}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane139_1.geometry}
                            material={materials.LetteringMaterial}
                        />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap074.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.094, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap075.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.075, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap076.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.056, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap077.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.037, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap078.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.018, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap079.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.001, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap080.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.02, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap081.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.039, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap082.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.058, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap083.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.077, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap084.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.096, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap085.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.115, 0.032, -0.042]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap086.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[0.136, 0.032, -0.041]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap087.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[-0.118, 0.032, -0.041]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap088.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.091, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap089.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.072, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap090.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.053, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap091.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.034, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap092.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.015, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap093.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.004, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap094.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.023, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap095.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.042, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap096.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.061, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap097.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.08, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap098.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.099, 0.032, -0.023]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap099.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[0.128, 0.032, -0.022]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap100.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[-0.117, 0.032, -0.022]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap101.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.082, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap102.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.063, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap103.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.044, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap104.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.025, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap105.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[-0.006, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap106.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.013, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap107.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.032, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap108.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.051, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap109.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.07, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap110.geometry}
                    material={materials.BaseKeyCapMaterial}
                    position={[0.089, 0.032, -0.004]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap111.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[0.123, 0.032, -0.003]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap112.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[-0.112, 0.032, -0.003]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap113.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[-0.121, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap114.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[-0.097, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap115.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[-0.074, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap116.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[0.089, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap117.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[0.113, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap118.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[0.136, 0.032, 0.016]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyCap119.geometry}
                    material={materials.SpecialKeysMaterial}
                    position={[0.066, 0.032, 0.016]}
                />
        </group>
    )
}

export default Keyboard;