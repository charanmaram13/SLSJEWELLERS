import { BRAND_INFO } from '../data/jewellery';

/**
 * Returns a globally accessible URL for an image asset.
 * When on custom domains/Vercel, uses current window.location.origin.
 * When testing on localhost, falls back to the public GitHub Raw CDN
 * so that WhatsApp servers can fetch and generate rich image previews.
 */
export const getPublicImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  if (
    typeof window !== 'undefined' &&
    window.location.hostname &&
    window.location.hostname !== 'localhost' &&
    window.location.hostname !== '127.0.0.1'
  ) {
    return `${window.location.origin}${imagePath}`;
  }

  // Reliable public fallback to repository raw URL
  return `https://raw.githubusercontent.com/charanmaram13/SLSJEWELLERS/main/public${imagePath}`;
};

/**
 * Sends a WhatsApp enquiry with image support.
 * On mobile browsers supporting the Web Share API with files,
 * this directly opens WhatsApp with the actual image file attached!
 * On desktops and other browsers, it opens WhatsApp with the message
 * containing the public image link so WhatsApp renders the rich preview.
 */
export const sendWhatsAppWithImage = async ({
  text,
  imagePath,
  phone = BRAND_INFO.phoneRaw,
  title = 'SLS JEWELLERS Enquiry'
}) => {
  const imageUrl = getPublicImageUrl(imagePath);
  const fullText = `${text}\n\n📸 *Photo Link:* ${imageUrl}`;

  // Check if Web Share API with files is available (Android, iOS Safari/Chrome)
  if (typeof navigator !== 'undefined' && navigator.canShare && imagePath) {
    try {
      const response = await fetch(imagePath);
      if (response.ok) {
        const blob = await response.blob();
        const filename = imagePath.split('/').pop() || 'sls-jewellery.jpg';
        const file = new File([blob], filename, { type: blob.type || 'image/jpeg' });

        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title,
            text: fullText,
            files: [file]
          });
          return;
        }
      }
    } catch (err) {
      console.log('Direct image sharing skipped/unsupported, using direct WhatsApp link:', err);
    }
  }

  // Standard WhatsApp Web/App click-to-chat fallback
  const encodedText = encodeURIComponent(fullText);
  window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
};
