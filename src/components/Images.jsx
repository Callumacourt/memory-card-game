import { useState, useEffect } from "react";

const apikey = 'zuD3fEZOY5mI9S52DPYcyuU44zXuV4LW';

const gifIds = [
  'wr7oA0rSjnWuiLJOY5',
  'NfzERYyiWcXU4',
  'nR4L10XlJcSeQ',
  'XmFXNCKrHcPw4',
  '3xz2BHFXxvFDYwnA9W',
  '8vQSQ3cNXuDGo',
  'BK1EfIsdkKZMY',
  'jTnGaiuxvvDNK',
  '11fucLQCTOdvBS',
  'a2QeuU12G0Zpsk0GkO',
  'yFQ0ywscgobJK',
  'hzBc3HCFc0icM'
];

const useImageGallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const promises = gifIds.map(async (id) => {
                    const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${apikey}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch GIF with id ${id}`);
                    }
                    const result = await response.json();
                    return result.data.images.original.url;
                });
                const fetchedImages = await Promise.all(promises);
                setImages(fetchedImages);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, [] );

    return { images, loading, error };
};

export default useImageGallery;
