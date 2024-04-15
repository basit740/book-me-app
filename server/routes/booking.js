const express = require("express");
const bookingController = require("../controllers/bookings");
const router = express.Router(); // create a router

router.get("/get_admin", bookingController.getAdmin);
router.get("/get_bookings"); // GET /booking/bookings will be handled right now
router.post("add_booking"); //POST add booking will be handled
router.put("/approve_booking"); //PUT approve added booking will be handled
router.put("/reject_booking"); // PUT reject added booking will be handled
router.get("/unavailable_dates"); //GET get unavailable dates will be handled
module.exports = router; // export the router
