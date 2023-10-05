'use strict';

const express = require('express');
const eController = require('../controllers/eventController');
const router = express.Router();

const { deleteEvent, putEvent, updateEvent, getEvents, getEventsType } = eController

router.get('/event/delete', deleteEvent);
router.post('/event/insert', putEvent);
router.get('/event/get', getEvents);
router.post('/event/update', updateEvent);
router.get('/event-type/get', getEventsType);

module.exports = {
    routers: router
}