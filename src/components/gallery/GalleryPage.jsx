// import { useState } from 'react'
import './GalleryPage.css'
import AnimatedGallery from "./AnimatedGallery";
import ParticlesBackground from "./ParticlesBackground";


function GalleryPage() {

  return (
    <>
     {/* <h1>Anantya 2k24</h1> */}
      <div className="GalleryPage">
      <ParticlesBackground />
        <h1 className="text-3xl font-bold"> Anantya 2k24</h1><pre> </pre><pre> </pre>
        <AnimatedGallery />
      </div>
    </>
  )
}

export default GalleryPage
