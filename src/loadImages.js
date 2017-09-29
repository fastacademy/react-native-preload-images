import RNFetchBlob from 'react-native-fetch-blob';

export default function loadImages(images) {
  if (images && images.length > 0)
    images.forEach(saveImage);
}

async function saveImage ({name, uri}) {
  const path = `${RNFetchBlob.fs.dirs.CacheDir}/images/${name}`;

  if (!await RNFetchBlob.fs.exists(path))
    await RNFetchBlob.config({ path }).fetch("GET", uri, {});
}