const path = require('path');
const {exec} = require('child_process');
const rootDir = path.resolve(__dirname,'../../');
let cmd = "cd "+rootDir+" & mkdir release & node node_modules/react-native/local-cli/cli.js bundle --platform android --dev false --entry-file src/App.js --config node_modules/wchat-app-kit/.moduleserializer.js --bundle-output release/release.bundle --assets-dest release/"
console.log("excute: "+ cmd);
exec(cmd,function(err,stdout) {if(err){console.error(err);return;}console.log(stdout);});