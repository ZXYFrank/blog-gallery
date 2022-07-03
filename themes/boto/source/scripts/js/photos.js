function gallery_thumbnail(){
    function runpythoncode(){
        return new Promise(resolve => {
          PythonShell.run('public/python/dag.py', null, function (err,result) {
            if (err) throw err;
            console.log(result);
            resolve();
          })
        })
      };
    await runpythoncode();
    console.log('amit');
}