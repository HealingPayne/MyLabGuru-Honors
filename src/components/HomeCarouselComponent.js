import React from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from "reactstrap";
import { useState } from "react";
const items = [
    {
        id: 1,
        src: '/assets/images/aloneortogether-1024x480.jpg',
        altText: "Slide 1",
        caption: "Compliments any Reference book..."
    },
    {
        id: 2,
        src: '/assets/images/detailed-illustrations-1024x480.jpg',
        altText: "Slide 2",
        caption: "Detailed and Easy to follow..."
    },
    {
        id: 3,
        src: '/assets/images/simple-complex-1024x480.jpg',
        altText: "Slide 3",
        caption: "Beginning to Advanced..."
    }
];
export default function HomeCarousel() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    const slides = items.map(item => {
        return (
            <CarouselItem
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}>

                <img src={item.src} alt={item.altText} style={{maxHeight:'350px',width:'100%'}} />
                <CarouselCaption
                    className="carousel-text mb-3"
                    captionText={item.caption}
                    // captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });
    return (
        <div style={{width:'100%',maxWidth:'500px',margin:'0 auto'}}>
            <Carousel className='m-3  mx-auto' ride='carousel' activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
}