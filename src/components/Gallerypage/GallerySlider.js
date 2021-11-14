import React, { Component } from "react";
import {useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galleryimg1 from './galleryimg1.jpg';
import galleryimg2 from './galleryimg2.jpg';
import galleryimg3 from './galleryimg3.jpg';
import galleryimg4 from './galleryimg4.jpg';
import galleryimg5 from './galleryimg5.jpg';
import galleryimg6 from './galleryimg6.jpg';
import galleryimg7 from './galleryimg7.jpg';
import galleryimg8 from './galleryimg8.jpg';
// import vacuum from './vacuum.jpeg';
// import img1 from './img1.jpg';
import './gallerystyle2.css';

// const images=['https://drive.google.com/thumbnail?id=177qn4ZGcQWmT3krS6X-2gGgX-SpZ2-Ua',
//   'https://drive.google.com/thumbnail?id=1FaBnHM-qUpRaXtuXFvmrzd0j93_NQ-c5',
//   'https://drive.google.com/thumbnail?id=1vEdbfOTqqBvs7I_p585w5kIHjgGAP14U',
//   'https://drive.google.com/thumbnail?id=1l6w1cGbslRcvHs-ERxGy05DLlzJaPfr0',
//   'https://drive.google.com/thumbnail?id=1lmfkDkn0X8UIgLeNvFAWq5cm-OAbOFq-',
//   'https://drive.google.com/thumbnail?id=17WFIN-FhuHWP6FySe4sl9MI1pO7QFqne',
//   'https://drive.google.com/thumbnail?id=1GhZqlWCCsX1chhKsmPD3aqH9jfYxOnTb',
//   'https://drive.google.com/thumbnail?id=1VgKkGaYWGrtpFeZmi4_62bECFJuZ5pDH'];

  const images=[
  {imga:galleryimg1, roll:"MUSICBAND" },
  {imga:galleryimg2, roll:"HIPHOP" },
  {imga:galleryimg3, roll:"SF2018" },
  {imga:galleryimg4, roll:"DANCE" },
  {imga:galleryimg5, roll:"PRACTICE" },
  {imga:galleryimg6, roll:"SF2019" },
  {imga:galleryimg7, roll:"MUSIC" },
  {imga:galleryimg8, roll:"DANCE" },

//   galleryimg8
];

  

function GallerySlider()  {
  const[ImageIndex,setImageIndex]=useState(0)

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      lazyLoad:true,
      centerPadding: "15px",
      slidesToShow: 3,
      slidesToScroll:1,
      autoplay: true,
      adaptiveHeight:true,
      speed: 3000,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      useTransforms:false,
      beforeChange:(current,next)=>setImageIndex(next)
    };
    return (
      <section className="gallery">
        <Slider {...settings}>
         {images.map((img,idx)=>{
           return(
          <div className={idx===ImageIndex?"slide-activeSlide":"slide"}>
            <img src={img.imga} />
            {/* <h3 className="gallery-image-name">{img.roll}</h3> */}
          </div>
         )})}
        </Slider>
      </section>
    );
  }
export default GallerySlider
