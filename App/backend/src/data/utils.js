'use strict';

const fs = require('fs-extra');
const {join} = require('path');

const loadSqlQueries = async (folderName) => {
    const filePath = join(process.cwd(), 'src', 'data', folderName);
    const files = await fs.readdir(filePath);
    const queries = {};

    for (const i in files){
        let sqlFile = files[i];
        const query = await fs.readFileSync(join(filePath, sqlFile), {encoding: "UTF-8"});
        queries[sqlFile.replace(".sql","")] = query
    }

    return queries;
}

module.exports = {
    loadSqlQueries
}