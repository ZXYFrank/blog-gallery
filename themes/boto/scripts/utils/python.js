function runPy(python_file) {
  var runPy = new Promise(function (sucFunc, failFunc) {
    var spawn = require("child_process").spawn;
    const pyprog = spawn("python", [python_file]);

    pyprog.stdout.on("data", function (data) {
      sucFunc(data);
    });

    pyprog.stderr.on("data", (data) => {
      failFunc(data);
    });
  });
  return runPy;
}
// https://www.geeksforgeeks.org/run-python-script-using-pythonshell-from-node-js/
// https://www.geeksforgeeks.org/run-python-script-node-js-using-child-process-spawn-method/
function _resolve(data) {
  console.log("success!");
  console.log("========stdout========");
  console.log(data.toString());
  console.log("========stdout========");
}
function _reject(error) {
  console.log("error: ", error.toString());
}
function callPython(
  python_file,
  _argsArray,
  resolve = _resolve,
  reject = _reject
) {
  // runPy(python_file).then(sucFunc, failFunc);
  console.log("call python " + python_file);
  var spawn = require("child_process").spawn;
  argsArray = [python_file].concat(_argsArray);
  const python = spawn("python", argsArray);
  python.stdout.on("data", resolve);
  python.stderr.on("data", reject);
  python.on("error", reject);
  python.on("close", (code) => {
    console.log("child process exited with code ", code);
  });
}
module.exports = {
  callPython,
  runPy,
};
