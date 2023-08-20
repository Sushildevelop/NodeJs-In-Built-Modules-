const path = require("path");

// console.log(path.sep);

// console.log(process.env.PATH);
// console.log(path.delimiter);

const currentFilePath = __filename;
console.log(currentFilePath);
console.log(__dirname);

let basename = path.basename(currentFilePath);
console.log(basename);

let basenameWithoutExt = path.basename(currentFilePath, '.js')
console.log(basenameWithoutExt);

let dirname = path.dirname(currentFilePath)
console.log(dirname);

console.log('ext1 > ', path.extname(currentFilePath));

let pathToFile = path.format({
    dir: '/public_html/home',
    base: 'index.htm' // 'base' is optional and defaults to the filename of `path`

})
console.log(pathToFile);

console.log("IsAbsolute ", path.isAbsolute(currentFilePath));
console.log("IsAbsolute ", path.isAbsolute('/index.js'));
console.log("IsAbsolute ", path.isAbsolute('./index.js'));

let pathToDir = path.join('/home', 'js', 'dist', 'index.js');
console.log(pathToDir);

console.log(path.parse(currentFilePath));

console.log(path.relative('/home/user/config', '/home/user/js/'));

console.log('resolve >', path.resolve());
console.log(path.normalize('//home//user//js'));