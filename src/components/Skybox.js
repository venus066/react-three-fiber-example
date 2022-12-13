// Loads the skybox texture and applies it to the scene.
import {CubeTextureLoader} from "three/src/loaders/CubeTextureLoader";
import {useThree} from "@react-three/fiber";

export const SkyBox = () => {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
    const texture = loader.load([
        "/cube/1.jpg",
        "/cube/2.jpg",
        "/cube/3.jpg",
        "/cube/4.jpg",
        "/cube/5.jpg",
        "/cube/6.jpg"
    ]);

    // Set the scene background property to the resulting texture.
    scene.background = texture;
    return null;
}