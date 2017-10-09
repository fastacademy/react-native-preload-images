import RNFetchBlob from 'react-native-fetch-blob';

export default async function loadImages(images) {
  if (images && images.length > 0)
    return await Promise.all(images.map(saveImage)).then(() => true).catch(() => false);
}

async function saveImage ({name, uri}) {
  if (name && uri) {
    const path = `${RNFetchBlob.fs.dirs.CacheDir}/images/${name}`;

    if (!await RNFetchBlob.fs.exists(path))
      await RNFetchBlob.config({ path }).fetch("GET", uri, {});
  }
}