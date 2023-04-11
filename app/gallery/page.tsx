import React from "react";
import Slider from "../components/Slider";

function GalleryPage() {
  return (
    <div id="gallery" className="space-y-6 mx-4 text-base leading-7">
      <h1 className="pt-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
        Pokémons Gallery
      </h1>

      <Slider />
    </div>
  );
}

export default GalleryPage;
