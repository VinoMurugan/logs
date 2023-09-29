const express = require('express');
const router = express.Router();
const Log = require('../models/logs');

// Index Route - All the logs
router.get('/', async (req, res) => {
    try {
        // Retrieve all logs from the database
        const logs = await Log.find();

        // Render the 'logs/Index' view and pass the logs data
        res.render('Index', { logs });
    } catch (error) {
        console.error(error);
        // Handle errors here (e.g., render an error page)
    }
});

// New Route
router.get('/new', (req, res) => {
    res.render('New'); // Render the 'New' view
  });

  //DELETE
// Delete Route - Delete a log entry
router.delete('/:id', async (req, res) => {
    try {
        // Find the log entry by ID and remove it
        await Log.findByIdAndRemove(req.params.id);

        // Redirect back to the index page after deletion
        res.redirect('/logs');
    } catch (error) {
        console.error(error);
        // Handle errors here (e.g., render an error page)
    }
});


//UPDATE
// Update Route - Update a log entry
router.put('/:id', async (req, res) => {
    try {
      // Check if the shipIsBroken checkbox is checked
      if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true; // If checked, set to true
      } else {
        req.body.shipIsBroken = false; // If not checked, set to false
      }
  
      // Use findByIdAndUpdate to update the log entry by ID
      await Log.findByIdAndUpdate(req.params.id, req.body);
  
      // Redirect to the index page (or another appropriate page)
      res.redirect('/logs');
    } catch (error) {
      console.error(error);
      // Handle errors here (e.g., render an error page)
    }
  });


//CREATE
// Create Route for Captain's Log
router.post('/', async (req, res) => {
    try {
      // Check if the shipIsBroken checkbox is checked
      if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true; // If checked, set to true
      } else {
        req.body.shipIsBroken = false; // If not checked, set to false
      }
  
      // Create a new log entry in the MongoDB database
      await Log.create(req.body);
  
      // Redirect to the index page (or another appropriate page)
      res.redirect('/logs');
    } catch (error) {
      console.error(error);
      // Handle errors here (e.g., render an error page)
    }
  });
  



//EDIT
// Edit Route - Display the edit form for a log entry
router.get('/:id/edit', async (req, res) => {
    try {
        // Find the log entry by ID
        const log = await Log.findById(req.params.id);

        // Render the 'Edit' view and pass the log data
        res.render('Edit', { log });
    } catch (error) {
        console.error(error);
        // Handle errors here (e.g., render an error page)
    }
});




//SHOW
// Show Route - Display a single log entry
router.get('/:id', async (req, res) => {
    try {
        // Retrieve a single log entry by its ID from the database
        const log = await Log.findById(req.params.id);

        // Render the 'logs/Show' view and pass the log data
        res.render('Show', { log });
    } catch (error) {
        console.error(error);
        // Handle errors here (e.g., render an error page)
    }
});


module.exports = router;