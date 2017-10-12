const fs = require('fs');
const yargs = require('yargs').argv;
const production = !yargs.production || false;
const jadeRegExp = new RegExp('- var production = ' + !production + ';', 'gi');
const jsRegExp = new RegExp('let production = ' + !production + ';', 'g');
const basePath = `./app/jade/`;
const jsPath = `./app/js/es6/tables.es6`;
const headPath = `./app/jade/partials/page-components/head.jade`;


/* Replace production variable for JS file */
fs.readFile(jsPath, 'utf8', (err, data) => {
    const result = data.replace(data.match(jsRegExp)[0], "let production = " + production + ";");
    console.log(result);
    fs.writeFile(jsPath, result, 'utf8', (error) => {
        if (error) {
            throw error;
        }
    });
});

/* Replace production variable for all jade files */
fs.readdir(basePath, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }

    const filteredData = data.filter(file => file !== "partials");
    filteredData.map(file => {
        fs.readFile(basePath + file, 'utf8', (err, content) => {
            if (err) {
                throw err;
            }
            const result = content.replace(content.match(jadeRegExp)[0], "- var production = " + production + ";");
            fs.writeFile(basePath + file, result, 'utf8', (error) => {
                if (error) {
                    throw error;
                }
            });
        });
    });
});

/* Replace production variable in head.jade */
fs.readFile(headPath, 'utf8', (err, content) => {
    if (err) {
        throw err;
    }
    const result = content.replace(content.match(jadeRegExp)[0], "- var production = " + production + ";");
    fs.writeFile(headPath, result, 'utf8', (error) => {
        if (error) {
            throw error;
        }
    });
});
