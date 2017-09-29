import PreloadedImage from './src/PreloadedImage';
import loadImages from './src/loadImages';

module.exports = {
  get PreloadedImage () {
    return PreloadedImage;
  },

  get preloadImages() {
    return loadImages;
  }
};