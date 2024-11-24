import React, { useState, useEffect } from 'react';

const RandomDog = () => {
    const [dogImage, setDogImage] = useState<string>('');

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => setDogImage(data.message))
            .catch(error => console.error('Error fetching the dog image:', error));
    }, []);

    return (
        <div>
            <h1>Random Dog Image</h1>
            {dogImage ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}
        </div>
    );
};

export default RandomDog;