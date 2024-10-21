import { useState } from "react";

interface MovieProps {
    title: string;
    director: string;
    description: string;
}

const Movie = ({ title, director, description }: MovieProps) => {
    const [descriptionPrinted, setDescriptionPrinted] = useState(false);

    return (
        <header onClick={() => setDescriptionPrinted(!descriptionPrinted)}>
            <h3 className="animate__animated animate__fadeIn">
                {title}
            </h3>
            <p><strong>Director:</strong> {director}</p>
            {descriptionPrinted && <p>{description}</p>}
        </header>
    );
};

export default Movie;
