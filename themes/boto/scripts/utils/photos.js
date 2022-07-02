var fs = require("fs");
var path = require("path");
var listFiles = function (root) {
  // 异步执行
  new Promise(function (resolve, reject) {
    var count = 0;
    fs.readdirSync(root).forEach(function (filename) {
      var fullpath = path.join(root, filename);
      fs.stat(fullpath, function (err, fileStat) {
        if (fileStat.isFile()) {
          console.log(filename + " -> FILE");
          count++;
          // files.push(filename);
        } else if (fileStat.isDirectory()) {
          console.log(filename + " -> DIR");
        }
      });
    });
    resolve(count);
  })
    .then(
      // https://javascript.info/promise-error-handling
      // resolve
      function (files) {
        console.log("files loaded: ", files);
        return files;
      }
    )
    // reject
    .catch(() => {
      console.log("files rejected");
    });
};
const base_dir = hexo.base_dir;
hexo.extend.helper.register("get_all_photos", function () {
  root = path.resolve(base_dir, "source/gallery/imgs");
  console.log("get_all_photos from: " + root);
  files = listFiles(root);
  return files;
});
