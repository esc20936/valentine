import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Clouds, Cloud, CameraControls, Sky as SkyImpl, StatsGl, Float } from "@react-three/drei"

export default function Experience() {

    const ref = useRef<THREE.Group>(null!)

    useFrame((state) => {
        if (ref.current) ref.current.rotation.y += 0.0015;
    })

    return (
        <>
            <group ref={ref}>
                <Float speed={0.5} >
                    <Clouds material={THREE.MeshLambertMaterial} limit={200}>
                        <Cloud concentrate="inside" color="#FF8DEC" growth={200} opacity={1.25} seed={0.3} bounds={200} volume={150} />
                    </Clouds>
                </Float>
            </group>

            <CameraControls />
            <ambientLight intensity={4.5} color={"#FFF7FE"} />
            <pointLight position={[10, 10, 10]} />
        </>
    )
}