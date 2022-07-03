var python = require("./python");
var fs = require("fs");
var path = require("path");
const base_dir = hexo.base_dir;
console.log("base_dir: " + base_dir);
hexo.extend.helper.register("getGalleryPhotoNames", function () {
  root = path.resolve(base_dir, "source/gallery/imgs");
  console.log("getGalleryPhotoNames from: " + root);
  var files = fs.readdirSync(root);
  console.log("files: " + files);
  return files;
});

// call python

console.log("theme_dir", hexo.theme_dir);
python.callPython(
  path.resolve(hexo.theme_dir, "scripts/utils/python/thumbnail.py"),
  null,
  function (data) {
    console.log("success!");
    console.log("data: " + JSON.stringify(data));
  },
  (data) => {
    console.log("failed!");
    console.log("data: " + JSON.stringify(data));
  }
);
