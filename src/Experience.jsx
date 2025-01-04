import {OrbitControls} from '@react-three/drei';
import Lights from './Lights.jsx';
import {Level} from "./Level.js";
import {Physics} from "@react-three/rapier";
import Player from "./Player.js";

export default function Experience() {
    return (
        <>
            <OrbitControls makeDefault/>
            <Physics debug>
                <Lights/>
                <Level/>
                <Player/>
            </Physics>
        </>
    )
}