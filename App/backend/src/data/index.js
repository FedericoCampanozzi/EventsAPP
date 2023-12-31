const utils = require('./utils');
const config = require('../config');
const util = require('util');
const queryAsync = util.promisify(config.sql.query).bind(config.sql);

const queryLauncher = async (queryfile, paramArray = null) => {
    try {
        const sqlQueries = await utils.loadSqlQueries('queries');
        const result = await queryAsync(sqlQueries[queryfile], paramArray);
        const r = result.rows.length == 0 ? [] : result.rows;
        console.log("paramArray = ",paramArray);
        console.log("query = ",sqlQueries[queryfile]);
        console.log("result length = ",result.rows.length);
        return r;
    } catch (err) {
        throw new Error(err.message);
    } 
}

const deleteEvent = async(eventId) => {
    return queryLauncher('delete', [eventId]);
}

const insertEvent = async(data) => {
    return queryLauncher('insert', [data.title, data.idtype, data.datestart, data.dateend]);
}

const getEvents = async() => {
    return queryLauncher('select_all');
}

const updateEvent = async(data) => {
    return queryLauncher('update', [data.title, data.idtype, data.datestart, data.dateend, data.id]);
}

const getEventsType = async() => {
    return queryLauncher('select_all_ev_type');
}

module.exports = {
    deleteEvent, insertEvent, getEvents, updateEvent, getEventsType
}