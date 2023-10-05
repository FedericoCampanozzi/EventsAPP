'use strict';

const utils = require('./utils');
const config = require('../config');
const sql = require('mssql');

const deleteEvent = async(eventId) => {
    try{
        let pool = await sql.connect(config.sql);   
        const sqlQueries = await utils.loadSqlQueries('queries');     
        const r = await pool.request()
            .input('ID', sql.Int, eventId)
            .query(sqlQueries['delete']);
        return r.recordset;
    } catch(error){
        return error.message;
    }
}

const insertEvent = async(data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('queries');
        const r = await pool.request()
            .input('Title',sql.NVarChar,data.Title)
            .input('ID_Type',sql.Int,data.ID_Type)
            .input('DateStart',sql.DateTime,data.DateStart)
            .input('DateEnd',sql.DateTime,data.DateEnd)
            .query(sqlQueries['insert']);
        return r.recordset;
    } catch(error){
        return error.message;
    }
}

const getEvents = async() => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('queries');
        const r = await pool.request().query(sqlQueries['select_all']);
        return r.recordset;
    } catch(error){
        return error.message;
    }
}

const updateEvent = async(data) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('queries');
        const r = await pool.request()
            .input('ID',sql.Int,data.ID)
            .input('Title',sql.NVarChar,data.Title)
            .input('ID_Type',sql.Int,data.ID_Type)
            .input('DateStart',sql.DateTime,data.DateStart)
            .input('DateEnd',sql.DateTime,data.DateEnd)
            .query(sqlQueries['update']);
        return r.recordset;
    } catch(error){
        return error.message;
    }
}

const getEventsType = async() => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('queries');
        const r = await pool.request().query(sqlQueries['select_all_ev_type']);
        return r.recordset;
    } catch(error){
        return error.message;
    }
}

module.exports = {
    deleteEvent, insertEvent, getEvents, updateEvent, getEventsType
}