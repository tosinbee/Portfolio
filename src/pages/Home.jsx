import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import  Sky  from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";


 

const Home = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  
const adjustIslandForScreenSize = () =>{
  let screenScale = null;
  let screenPosition =[0, -6.5, -43];
  let rotation = [0.1, 4.7, 0]

  if (window.innerWidth < 768){
    screenScale = [0.9, 0.9, 0.9];
  }else{
    screenScale = [1, 1, 1];
  }
  return [screenScale, screenPosition];
}

const adjustPlaneForScreenSize = () =>{
  let screenScale, screenPosition;

  if (window.innerWidth < 768){
    screenScale = [1.5, 1.5, 1.5];
    screenPosition = [0, -1.5, 0]
  }else{
    screenScale = [3, 3, 3];
    screenPosition = [0, -4, -4]
  }
  return [screenScale, screenPosition];
}

const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
const [planeScale, planePosition] = adjustPlaneForScreenSize();

  // Function to handle stage changes
  const handleStageChange = () => {
    setCurrentStage(prevStage => (prevStage + 1) % 5);  // Cycles through 0-4
  };

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center">
      {currentStage !== null && <HomeInfo currentStage={currentStage} />}
      </div>
     <Canvas 
     className={`w-full h-screen bg-transparent ${isRotating ?
    'cursor-grabbing' : 'cursor-grab'
    }`}
     camera={{near: 0.1, far: 1000, }}
     >
       <Suspense fallback={<Loader/>}> 
        <directionalLight position={[1, 1, 10]} intensity={2}/>
        <ambientLight intensity={0.5}/>
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
        
        <Bird
         isRotating={isRotating}
        />
        <Sky
        isRotating={isRotating}
        />
        <Island
        position={islandPosition}
        scale={islandScale}
        rotation={islandRotation}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
        onStageChange={handleStageChange}
        />

        <Plane
        position={planePosition}
       scale={planeScale}
        isRotating={isRotating}
        rotation={[0, 20, 0]}
        />
      </Suspense>
     </Canvas>
    </section>
  )
}

export default Home;