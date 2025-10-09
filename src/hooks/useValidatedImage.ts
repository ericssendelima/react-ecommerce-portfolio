import { useState, useEffect } from 'react';

// The size in bytes of a known invalid or placeholder image.
const IMPOSTOR_SIZE_BYTES = 503;

/**
 * A hook that validates an image and returns a safe source.
 * It checks the image's content length to ensure it's not a specific placeholder/invalid image.
 * @param imageUrl The URL of the image to display.
 * @param fallbackSrc The safe image to display while checking, or in case of failure.
 * @returns The final and safe image URL to be used in an <img> tag.
 */
export const useValidatedImage = (imageUrl: string, fallbackSrc: string) => {
  // Start with the fallback source.
  const [imageSrc, setImageSrc] = useState(fallbackSrc);

  useEffect(() => {
    // Reset to the fallback source whenever the imageUrl changes.
    setImageSrc(fallbackSrc); 

    const validateImage = async () => {
      // If there's no imageUrl, do nothing.
      if (!imageUrl) return;

      try {
        const response = await fetch(imageUrl, { method: 'HEAD' });

        if (response.ok && response.headers.has('Content-Length')) {
          const size = parseInt(response.headers.get('Content-Length')!, 10);

          if (size !== IMPOSTOR_SIZE_BYTES) {
            // The image is valid. Use the real image URL.
            setImageSrc(imageUrl);
          }
        }
      } catch (error) {
        // In case of any error, the safe fallback is already set.
        console.error("Error validating image:", imageUrl, error);
      }
    };

    validateImage();
  }, [imageUrl, fallbackSrc]); // Rerun the effect if the image or fallback source changes.

  // Return the final, safe image source.
  return imageSrc;
};