
    // Durstenfeld Shuffle
    export const shuffleImages = (images) => {

        const shuffledArray = [...images]

        for(let i = images.length -1; i >= 0; i-=1){
            const j = Math.floor(Math.random() *  (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], [shuffledArray[i]]]
       
        }

        return shuffledArray
    }


    export const extractUrl = (image) => {
            // Recursively drill down to the URL
            while (Array.isArray(image)) {
                image = image[0];
            }
            return image;
            }