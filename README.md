## react-native-preload-images
Download and save images for offline use, in react-native.

## Installation

    npm install react-native-preload-images --save
    - or -
    yarn add react-native-preload-images

This package is dependent on [`react-native-fetch-blob`](https://github.com/wkh237/react-native-fetch-blob#installation) for interacting with the file system. Please follow their instructions for linking the native modules if you do not have this package already installed.

## Basic usage

    import { preloadImages, PreloadedImage } from 'react-native-preload-images'

    //Use the same images array names to display with PreloadedImage.
    const images = [
        {name: 'pic1.png', uri: 'https://mypics.com/pic1.png'},
        {name: 'pic2.png', uri: 'https://mypics.com/pic2.png'}    
    ];
    
    //Only needs to be done once
    preloadImages(images);

    //Same props as react-native's Image 
    //except use name instead of source
    <PreloadedImage
        style={{height: 100, width: 100}}
        name={images[0].name}/>
