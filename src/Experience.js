import Lights from './Lights.js';
import {Level} from "./Level.js";
import {Physics} from "@react-three/rapier";
import Player from "./Player.js";
import useGame from "./stores/useGame.js";

export default function Experience() {
    const blocksCount = useGame((state) => state.blocksCount);
    const blocksSeed = useGame((state) => state.blocksSeed);

    return (
        <>
            <color args={['#bdedfc']} attach="background"/>
            <Physics debug={false}>
                <Lights/>
                <Level count={blocksCount} seed={blocksSeed}/>
                <Player/>
            </Physics>
        </>
    )
}