import React, { useState } from "react";
import people from './data';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const checkNumber = (number) => {
        if(number > people.length - 1) {
            return 0;
        }

        if(number < 0) {
            return people.length - 1;
        }

        return number;
    }

    const nextItem = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }

    const prevItem = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    }

    return <article className="review">
        <img src={image} alt={name}/>
        <h2 className="name">{name}</h2>
        <p className="title">{job}</p>
        <p className="desc">{text}</p>

        <div className="navigation">
            <button className="nav-prev" onClick={prevItem}><FaChevronCircleLeft/></button>
            <button className="nav-next" onClick={nextItem}><FaChevronCircleRight/></button>
        </div>
    </article>
}   

export default Review;