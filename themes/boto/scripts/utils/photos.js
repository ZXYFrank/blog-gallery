var fs = require("fs");
var path = require("path");
const base_dir = hexo.base_dir;
hexo.extend.helper.register("get_gallery_photo_names", function () {
  root = path.resolve(base_dir, "source/gallery/imgs");
  console.log("get_all_photos from: " + root);
  var files = fs.readdirSync(root);
  console.log("files: " + files);
  return files;
});
