import RNFetchBlob from 'react-native-fetch-blob';

export function preloadImages(images) {
  images.forEach((image) => {
    saveImage (image[0], image[1]).catch((err) => alert(`Error loading images${err}`))
  });
}

async function saveImage (name, uri) {
  await RNFetchBlob.config({ path: RNFetchBlob.fs.dirs.CacheDir + "/images/" + name }).fetch("GET", uri, {});
}