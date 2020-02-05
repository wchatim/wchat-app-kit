const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const chalk = require('chalk');
const {execSync} = require('child_process');
const UUID = require('uuid');
const rootDir = path.resolve(__dirname,'../../');
const watchFolder = path.resolve(rootDir,'.');
let filesToBuild = new Map();
fs.accessSync(watchFolder,fs.F_OK);
console.log("watching "+watchFolder);
let buildversion = UUID.v1();
console.log("buildversion = "+buildversion);
const express = require('express');
const app = express();
app.get('/check', (req, res) => {
    res.send(buildversion);
});
app.use(express.static(rootDir+"/.build"));
app.listen(8890,()=>console.log('listening on port 8890!'));

chokidar.watch(path.resolve(rootDir,'src'),{ignoreInitial:true}).on('all',(event,filename)=>{
    if ((event === 'add' || event === 'change')) {
        console.log(chalk.green('->'), `${event}: ${filename}`);
        filesToBuild.set(filename, true);
    }
});

filesToBuild.set("/", true);
setInterval(() => {
    const files = Array.from(filesToBuild.keys());
    if (files.length) {
        filesToBuild = new Map();
        try {
            let cmd = "cd "+rootDir+" & mkdir .build & node node_modules/react-native/local-cli/cli.js bundle --platform android --dev true --entry-file src/App.js --config node_modules/wchat-app-kit/.moduleserializer.js --bundle-output .build/dev.bundle --assets-dest .build/"
            let buffer = execSync(cmd);
            console.log(buffer.toString("utf-8"));
            buildversion = UUID.v1();
            console.log(chalk.green('->'),"buildversion = "+buildversion);
        } catch (e) {}
    }
},100);