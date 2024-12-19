import useImageGallery from "./images";
import { useState, useEffect } from "react";
import { shuffleImages, extractUrl } from "./helpers";

export default function HandleGame({onScoreChange}) {
    const { images, loading, error } = useImageGallery();
    const [currentImages, setCurrentImages] = useState([]);
    const [clickedImages, setClickedImages] = useState(new Set());


    useEffect(() => {
        if (images.length > 0) {
            setCurrentImages(shuffleImages(images));
            // Reset clicked images when new images are loaded
            setClickedImages(new Set());
        }
    }, [images]);

    const onImageClick = (image) => {
        // Extract the actual URL from the nested structure
        const url = extractUrl(image);

        // Check if the image has already been clicked
        if (clickedImages.has(url)) {
            onScoreChange(true); // Game over
            setClickedImages(new Set()); // Reset clicked images
            return;
        }

        // Create a new Set to track clicked images
        const newClickedImages = new Set(clickedImages);
        newClickedImages.add(url);
        setClickedImages(newClickedImages);

        onScoreChange(false); // Continue game
        setCurrentImages(shuffleImages(currentImages));
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="cardsContainer">
            {currentImages.map((image, index) => (
                <div 
                    className="card" 
                    key={extractUrl(image)} 
                    onClick={() => onImageClick(image)}
                >
                    <img 
                        src={extractUrl(image)} 
                        alt={`Game card ${index + 1}`} 
                    />
                </div>
            ))}
        </div>
    );
}