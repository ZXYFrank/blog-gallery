function runPy(python_file, args) {
  var runPy = new Promise(function (sucFunc, failFunc) {
    var spawn = require("child_process").spawn;
    const pyprog = spawn("python", [python_file, args]);

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
function callPython(python_file, args, sucFunc, failFunc) {
  runPy(python_file, args).then(sucFunc, failFunc);
  console.log("call python " + python_file);
}
module.exports = {
  callPython,
  runPy,
};
