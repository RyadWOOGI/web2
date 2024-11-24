import React, { useState, useEffect } from "react";

const RandomDog = () => {
  const [dogImage, setDogImage] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const fetchDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const dogo = await response.json();
      setDogImage(dogo.message);
    } catch (error) {
      console.error("Failed to fetch dog image:", error);
    }
  };

  useEffect(() => {
    fetchDog();

    const intervalId = setInterval(() => {
      if (!isHovered) {
        fetchDog();
      }
    }, 5000);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [isHovered]);

  return (
    <div>
      <h1>Random Dog Image</h1>
      {dogImage ? (
        <img
          src={dogImage}
          alt="A Random Dog"
          style={{ maxHeight: 300 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomDog;
