import useImageGallery from "./images";
// import handleClick //


export default function DisplayImages () {
    
    const {images, loading, error} = useImageGallery()

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>

    return (

        // on each click images state array needs to be updated and rebuilt

        // whether clicked or not needs to be stored
        <>
        <div className="cardsContainer">
        {images.map((url, index) => (
            <div className="card" key={index}>
            <img
             src={url}
             />
            </div>
        ))}
        </div>
        </>
    )
}

