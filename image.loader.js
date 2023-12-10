export default function myImageLoader({ src, width, quality }) {
    return `https://villers.github.io/santa-gift/${src}?w=${width}&q=${quality || 75}`
}