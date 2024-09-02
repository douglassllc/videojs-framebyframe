videojs-framebyframe
====================

[![npm version](https://img.shields.io/npm/v/@douglassllc/videojs-framebyframe.svg?style=flat)](https://www.npmjs.com/package/@douglassllc/videojs-framebyframe)
[![License](https://img.shields.io/npm/l/@douglassllc/videojs-framebyframe.svg)](LICENSE)


Allows users to step frame-by-frame through a video.

This has to make an unfortunate assumption about framerate, but it should be
"ok" for general use. If you can run framerate detection on the server side,
this plugin works perfectly for you.

## Updates included in this Fork

- Updated code causing warnings for deprecated methods .plugin -> .registerPlugin
- Appends buttons after playToggle
- Added .css to package
- Updated code to migrate from v7 to v8 of videojs. Replace extend() call. (https://videojs.com/guides/videojs-7-to-8/)

## Installation

```console
$ npm install @douglassllc/videojs-framebyframe
```

## Usage

```
import 'videojs-framebyframe/videojs.framebyframe.js'
import 'videojs-framebyframe/videojs.framebyframe.css'

let options: {
  plugins: {
    framebyframe: {
      fps: 30,
      steps: [
        { text: '< 1f', step: -1 },
        { text: '1f >', step: 1 }
      ]
    }
  }
}

let player = videojs('my-video', options)
```

## Framerate Issues

We have no easy way to calculate framerate in Javascript, so we make a guess.
If you're serving the video yourself or otherwise can calculate the FPS value,
then you should use that and supply it to your videojs instance.

- http://stackoverflow.com/questions/20336955/how-to-step-one-frame-forward-and-one-frame-backward-in-video-playback
- http://stackoverflow.com/questions/4298084/html5-frame-by-frame-viewing-frame-seeking
- https://github.com/videojs/video.js/issues/692

## Original Contributors

- Helena Rasche (@erasche)
- Miguel Grinberg (@miguelgrinberg)

## License

Licensed under MIT
