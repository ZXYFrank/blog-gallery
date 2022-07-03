var python = require("./python");
var fs = require("fs");
var path = require("path");
const base_dir = hexo.base_dir;
console.log("base_dir: " + base_dir);
hexo.extend.helper.register("getGalleryPhotoNames", function () {
  var root = path.resolve(base_dir, "source/gallery/imgs");
  console.log("getGalleryPhotoNames from: " + root);
  var files = fs.readdirSync(root);
  console.log("files: " + files);
  return files;
});

// call python

var galleryDir = path.resolve(hexo.base_dir, "source/gallery/");
python.callPython(
  path.resolve(hexo.theme_dir, "scripts/utils/python/thumbnail.py"),
  [galleryDir]
);
