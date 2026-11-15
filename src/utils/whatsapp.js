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
 * Copies an image directly to the system clipboard (as PNG).
 * Allows the customer to simply press Ctrl+V / Paste in WhatsApp Web/Desktop.
 */
export const copyImageToClipboard = async (imagePath) => {
  try {
    if (typeof window === 'undefined' || !navigator.clipboard || !window.ClipboardItem) {
      return false;
    }
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imagePath;
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    return new Promise((resolve) => {
      canvas.toBlob(async (blob) => {
        if (!blob) return resolve(false);
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          resolve(true);
        } catch (e) {
          console.log('Clipboard write failed:', e);
          resolve(false);
        }
      }, 'image/png');
    });
  } catch (err) {
    console.log('Error copying image to clipboard:', err);
    return false;
  }
};

/**
 * Triggers a direct download of the authentic workshop jewellery photo.
 */
export const downloadImage = (imagePath, filename) => {
  try {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = filename || imagePath.split('/').pop() || 'sls-jewellery.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (e) {
    console.log('Download image error:', e);
  }
};

/**
 * Sends a WhatsApp enquiry with image support.
 * 1. Puts the photo preview link prominently at the TOP of the message so WhatsApp immediately generates the rich media thumbnail card.
 * 2. On mobile devices supporting Web Share API with files, opens native WhatsApp composer with the actual image file attached.
 * 3. Copies the image to clipboard on supported desktop browsers so the customer can also paste it with Ctrl+V.
 */
export const sendWhatsAppWithImage = async ({
  text,
  imagePath,
  phone = BRAND_INFO.phoneRaw,
  title = 'SLS JEWELLERY WORKS Enquiry'
}) => {
  const imageUrl = getPublicImageUrl(imagePath);
  
  // Notice: placing the image URL at the beginning of the WhatsApp message triggers WhatsApp's media preview scraper immediately!
  const fullText = `📸 *JEWELLERY PHOTO PREVIEW:* ${imageUrl}\n\n${text}`;

  // Try copying image to clipboard for easy Ctrl+V pasting into WhatsApp
  copyImageToClipboard(imagePath);

  // Check if Web Share API with files is available (mobile browsers: Android Chrome, iOS Safari)
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

  // Fallback: Open WhatsApp click-to-chat with the direct photo preview at the top
  const encodedText = encodeURIComponent(fullText);
  window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
};
