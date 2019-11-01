const path = require('path');

module.exports = {
    entry: './src/index.js',  // dependency graph creation starts from index.js
    output: {
        filename: 'main.js',            // name of the bundled file(output) would be main.js
        path: path.resolve(__dirname, 'dist')     // folder to save bundled file would be dist in project root folder 
    }
}