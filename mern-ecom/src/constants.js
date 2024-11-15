
export const productList = ['TV', 'Fridge', 'Laptop', 'Phone', 'PC', 'Microwave', 'Cooker', 'Office Tools', 'Fan', 'Air Conditioner', 'Electrical Plug', 'Electronic Devices', 'Valley', 'Home Kit', 'Things',];

// Import all images from ../public/assets folder
function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
const images = importAll(require.context('../public/assets', false, /\.(png|jpe?g|svg)$/));
export const slides = Object.values(images);