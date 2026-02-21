 import { useState } from "react";
 import LazyImage from "@/components/LazyImage";
 import lightDutyImage from "@/assets/light-duty-service.jpg";
 import mediumDutyImage from "@/assets/medium-duty-service.jpg";
 import heavyDutyImage from "@/assets/heavy-duty-service.jpg";
 
 const VehicleGallery = () => {
   const [selectedImage, setSelectedImage] = useState<number | null>(null);
 
   const images = [
     {
       src: lightDutyImage,
       alt: "Flatbed tow truck loading sedan in San Francisco",
       caption: "Light Duty - Sedans & Cars",
     },
     {
       src: mediumDutyImage,
       alt: "Medium duty tow truck with box truck",
       caption: "Medium Duty - Box Trucks",
     },
     {
       src: heavyDutyImage,
       alt: "Heavy duty towing equipment",
       caption: "Heavy Duty Recovery",
     },
     {
       src: lightDutyImage,
       alt: "Motorcycle transport on specialized trailer",
       caption: "Motorcycle Transport",
     },
     {
       src: mediumDutyImage,
       alt: "RV motorhome being towed",
       caption: "RV & Motorhome Towing",
     },
     {
       src: heavyDutyImage,
       alt: "Commercial van recovery",
       caption: "Commercial Vehicles",
     },
   ];
 
   return (
     <section className="py-12 md:py-16 bg-background">
       <div className="container mx-auto px-4">
         <div className="text-center mb-10">
           <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
             If You Can Drive It, We Can Tow It
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Our modern fleet handles everything from motorcycles to semi-trucks
           </p>
         </div>
 
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           {images.map((image, index) => (
             <div 
               key={index}
               className="relative group cursor-pointer overflow-hidden rounded-xl"
               onClick={() => setSelectedImage(index)}
             >
               <div className="aspect-[4/3]">
                 <LazyImage
                   src={image.src}
                   alt={image.alt}
                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                 />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="absolute bottom-0 left-0 right-0 p-4">
                   <p className="text-white font-semibold text-sm">{image.caption}</p>
                 </div>
               </div>
             </div>
           ))}
         </div>
 
         {/* Lightbox */}
         {selectedImage !== null && (
           <div 
             className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
             onClick={() => setSelectedImage(null)}
           >
             <div className="max-w-4xl w-full">
               <img
                 src={images[selectedImage].src}
                 alt={images[selectedImage].alt}
                 className="w-full h-auto rounded-lg"
                 loading="lazy"
                 decoding="async"
               />
               <p className="text-white text-center mt-4">{images[selectedImage].caption}</p>
             </div>
           </div>
         )}
       </div>
     </section>
   );
 };
 
 export default VehicleGallery;