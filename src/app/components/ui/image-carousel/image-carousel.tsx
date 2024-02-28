"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import the CSS for the carousel
import Link from 'next/link';

//TODO: images should be passed as parameter
const images = [
  { url:'/ad-banner.jpg', adLink:'#1' },
  { url:'/ad-banner2.jpg', adLink:'#2' },
  { url:'/ad-banner.jpg', adLink:'#3' },
];

const ImageCarousel = () => {
    //TODO: some settings should be passed from parent
    return (
    <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        width={'100%'}
        showIndicators={true}
        className=''
        stopOnHover={false}
    >
        {images.map((image, index) => (
        <Link href={image.adLink}>
            <div className='w-screen h-screen' key={index}>
                <Image src={image.url} alt={`Image ${index + 1}`} style={{objectFit:"cover"}} fill={true}/>
            </div>
        </Link>
        ))}
    </Carousel>
    );
};

export default ImageCarousel;
