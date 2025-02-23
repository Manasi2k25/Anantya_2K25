
import { motion } from "framer-motion";

const images = [
  "/ab1.png", "/ab2.jpg", "/ab.png","/demo1.jpg", "/action.jpg", "/ar.jpg",
  "/ar1.jpg", "/bme.jpg", "/codigo11.jpg", "/ipla.jpg", "/iplauction.png","/iplauction11.jpg",
  "/byte.png",  "/cat11.jpg","/pp.png", "/cat22.png", "/catt.png",
  "/cc1.png", "/cc11.png",  "/codigo12.png", "/mindmatrix.png", "/crono.png", "/flashm.png",  "/funmania1.png", 
  "/mindmatrix1.png", "/pp2.png","/iplauction.png","/mindmatrix2.png", "/iplauction11.jpg","/mm1.png",
  "/pp.png", "/sher2.png", "/sherlock.png","/sherlock3.png"
];

const titles = [
  "AlphaByte", "AlphaByte", "AlphaByte", "Anantya2k24", "Action Replay",
  "Action Replay", "Action Replay", "Byte Me", "Codigo", "IPL Auction",
  "IPL Auction", "IPL Auction", "Byte Me", "CAT", "Poster Presentation",
  "CAT", "CAT " , "ChronoClash", "ChronoClash", "Codigo", "MindMatrix", "ChronoClash", "Flashmob", "FunMania", 
   "MindMatrix", "Poster Presentation", "IPL Auction", "MindMatrix", "MindMatrix", "Poster Presentation",
   "SherLock", "SherLock","SherLock"
];

// Define varying grid sizes for each image
const gridSizes = [
  "col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-1 row-span-1",
  "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-2 row-span-2",
  "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-3 row-span-1", "col-span-3 row-span-2", "col-span-3 row-span-2",
  "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-2 row-span-2", 
  "col-span-2 row-span-3", "col-span-2 row-span-2",  

];

export default function AnimatedGallery() {
  return (
    <div className="relative p-8">
      <div className="grid grid-cols-6 auto-rows-[250px] gap-4">
        {images.map((src, i) => (
             
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-lg overflow-hidden shadow-lg ${gridSizes[i % gridSizes.length]}`}
          >
            <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover"/>
            <motion.div 
              className="absolute inset-0 bg-black opacity-0 flex items-center justify-center text-white text-lg font-bold"
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              {titles[i % titles.length]}
            </motion.div>
          </motion.div>
        
        ))}
      </div>
    </div>
  );
}
