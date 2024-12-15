import useImageGallery from "./images";
import { useState, useEffect } from "react";
import { shuffleImages, handleImageClick } from "./helpers";

export default function HandleGame() {
    const { images, loading, error } = useImageGallery();
    const [currentImages, setCurrentImages] = useState([]);
    const [clickedImages, setClickedImages] = useState([]);

    useEffect(() => {
        if (images.length > 0) {
            setCurrentImages(shuffleImages(images));
        }
    }, [images]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="cardsContainer">
            {currentImages.map((url, index) => (
                <div 
                    className="card" 
                    key={url} 
                    onClick={() => onImageClick(url)}
                >
                    <img 
                        src={url} 
                        alt={`Game card ${index + 1}`} 
                    />
                </div>
            ))}
        </div>
    );
}