import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./testimonials.css";

export default function TestimonialCard({
    testimony,
    image,
    name,
    work,
    ...rest
}) {
    return (
        <div className="testimonial-card" {...rest}>
            <div className="testimonial-body">
                <FontAwesomeIcon icon={faQuoteLeft} size='3x' style={{ padding: '10px' }} />
                {testimony}
                <FontAwesomeIcon icon={faQuoteRight} size='3x' style={{ padding: '10px', verticalAlign: 'top' }} />
            </div>
            <div className="testimonial-image">
                <img src={image} alt="testimonial" />
                <div className="testimonial-details">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    );
}
