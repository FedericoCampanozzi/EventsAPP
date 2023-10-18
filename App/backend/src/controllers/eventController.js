'use strict';

const eventData = require('../data');

const deleteEvent = async (req, res, next) => {
    try {
        const eventId = req.query.id;
        const result = await eventData.deleteEvent(eventId);
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const insertEvent = async (req, res, next) => {
    try {
        const result = await eventData.insertEvent(req.body);
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEvents = async (req, res, next) => {
    try {
        const result = await eventData.getEvents();
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEvent = async (req, res, next) => {
    try {
        const result = await eventData.updateEvent(req.body);
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEventsType = async (req, res, next) => {
    try {
        const result = await eventData.getEventsType();
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    deleteEvent, insertEvent, updateEvent, getEvents, getEventsType
}