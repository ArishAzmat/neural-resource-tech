import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import TestimonialCard from "./TestimonialCard";
import "./testimonials.css";

const items = [
    <TestimonialCard
        testimony="Neural resource provides best staff solution for bussiness."
        image="https://randomuser.me/api/portraits/men/32.jpg"
        name="John Doe"
        data-value="1"
    />,
    <TestimonialCard
        testimony="Cum, consequa! Aspernatur id fuga lam ad eveniet, volupt repud magnam tempore quae qui inventore!"
        image="https://randomuser.me/api/portraits/men/42.jpg"
        name="Wen Will"
        data-value="2"
    />,
    <TestimonialCard
        testimony="Nihil quasi voluptatibus aperiam est quos laborum earum iure! Et odio corporis laborum blanditiis soluta!"
        image="https://randomuser.me/api/portraits/women/32.jpg"
        name="San Mary"
        data-value="3"
    />,
    <TestimonialCard
        testimony="Voluptatum fuga dolores asperiores cupiditate ab vero, fugit nulla quo perspiciatis at, maxime eos soqu!"
        image="https://randomuser.me/api/portraits/women/76.jpg"
        name="Doe Lisa"
    />,
    <TestimonialCard
        testimony="Voluptatum fuga dolores asperiores cupiditate ab vero, fugit nulla quo perspiciatis at, maxime eos soqu!"
        image="https://randomuser.me/api/portraits/men/51.jpg"
        name="Doe Den"
    />
];

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1000: { items: 3 }
};

export default function Testimonilas() {
    return (
        <>
            <div className="testimonial-container">
                <div className="text-center mb-sm-5 mb-4">
                    <label className="sub-title mb-2">Testimonials</label>
                    <h3 className="title-big">
                        What Clients Says </h3>
                </div>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    autoPlay
                    infinite
                    autoPlayInterval={3000}
                // animationDuration={1000}
                />
            </div>
        </>
    );
}
