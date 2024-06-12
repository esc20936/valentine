"use client";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience/Experience";
import { Html } from "@react-three/drei";
import { useRef } from "react";


export default function Home() {

  const noButton = useRef<null | HTMLButtonElement>(null);
  const secretMessage = useRef<null | HTMLDivElement>(null);

  // function to make the no button escape
  const handleClickNoButton = () => {

    if(noButton.current){
      noButton.current.style.position = "absolute";
      noButton.current.style.top = `${Math.random() * 80}%`;
      noButton.current.style.left = `${Math.random() * 80}%`;
    }

    if(secretMessage.current){
      secretMessage.current.style.display = "none";
    }

  }

  // function to make the yes button show the secret message
  const handleClickYesButton = () => {

    if(noButton.current){
      noButton.current.style.position = "relative";
      noButton.current.style.top = "0";
      noButton.current.style.left = "0";
    }

    if(secretMessage.current){
      secretMessage.current.style.display = "flex";
    }


  }


  return (
    <main className="relative flex flex-col h-full w-full">
      <Canvas>
        <color attach="background" args={["#060270"]} />
        <Experience />
        <Html
          fullscreen
        >
          <div className="flex flex-col items-center justify-center h-full w-full text-white">
            <h1 className="text-2xl md:text-6xl font-bold">Te amo a ti y a tus emociones</h1>
            <h2 className="text-lg">Queres ver intensamente conmigo?</h2>

            {/* row buttons */}
            <div className="flex flex-row space-x-4">
              <button
                onClick={handleClickYesButton}
                className="group bg-white hover:scale-110 text-black text-sm font-bold py-2 px-4 rounded mt-4 ease-in-out duration-150">
                Si
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </button>

              <button
                onClick={handleClickNoButton}
                ref={noButton} className="group bg-black hover:scale-110 text-white text-sm font-bold py-2 px-4 rounded mt-4 ease-in-out duration-150">
                No
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </button>

            </div>

            {/* hidden message */}
            <div
            ref={secretMessage}
            className="hidden flex-col items-center justify-center h-auto w-full mt-4">
              <p className="text-xs">Estas invitada este domingo a las 4:25</p>
              <Image
                src="/confirmaciontickets.jpg"
                alt="heart"
                width={200}
                height={200}
              />
            </div>

          </div>
        </Html>
      </Canvas>
    </main>
  );
}
