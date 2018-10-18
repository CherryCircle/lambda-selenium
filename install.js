'use strict';

const extractZip = require('extract-zip');
const path = require('path');

const binPath = path.join(__dirname, "bin", "lib.zip");
console.log(binPath);

extractZip(path.resolve(binPath), { dir: path.join(__dirname, "bin") }, function (err) {
  if (err) {
    throw(`unzipping failed with error ${err.message}`);
  } else {
    console.log("Files are unpacked successfully");
  }
});

