
export const productList = ['TV', 'Fridge', 'Laptop', 'Phone', 'PC', 'Microwave', 'Cooker', 'Office Tools', 'Fan', 'Air Conditioner', 'Electrical Plug', 'Electronic Devices', 'Valley', 'Home Kit', 'Things',];

// Import all images from ../public/assets folder
function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
const sliderImages = importAll(require.context('../public/assets/slider-images', false, /\.(png|jpe?g|svg)$/));
const productImages = importAll(require.context('../public/assets/product-images', false, /\.(png|jpe?g|svg)$/));
export const slides = Object.values(sliderImages);
export const products = Object.values(productImages);