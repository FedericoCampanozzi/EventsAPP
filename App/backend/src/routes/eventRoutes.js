const express = require('express');
const eController = require('../controllers/eventController');
const router = express.Router();

const { deleteEvent, insertEvent, updateEvent, getEvents, getEventsType } = eController

/**
 * @openapi
 * /api/event/delete/{id}:
 *   get:
 *     description: Delete the event with id equals to {id}.
 *     tags:
 *          - Event
 *     responses:
 *       200:
 *         description: nothing.
 */
router.get('/event/delete', deleteEvent);
/**
 * @openapi
 * /api/event/insert:
 *   post:
 *     description: Insert a new event.
 *     tags:
 *          - Event
 *     responses:
 *       200:
 *         description: nothing.
 */
router.post('/event/insert', insertEvent);
/**
 * @openapi
 * /api/event/get:
 *   get:
 *     description: Get all events.
 *     tags:
 *          - Event
 *     responses:
 *       200:
 *         description: Returns an array of events.
 */
router.get('/event/get', getEvents);
/**
 * @openapi
 * /api/event/update:
 *   post:
 *     description: Update an event.
 *     tags:
 *          - Event
 *     responses:
 *       200:
 *         description: nothing.
 */
router.post('/event/update', updateEvent);
/**
 * @openapi
 * /api/event-type/get:
 *   get:
 *     description: Get all events type.
 *     tags:
 *          - Event Type
 *     responses:
 *       200:
 *         description: Return an array of event type.
 */
router.get('/event-type/get', getEventsType);

module.exports = {
    routers: router
}