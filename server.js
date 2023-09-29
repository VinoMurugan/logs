//Add dotenv
require('dotenv').config()

const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const logsController = require('./controllers/logs'); 

// connect to Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const logs = require ('./models/logs.js')
// const Log = require('./models/logs.js') // Import your Log model


app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}))

app.use(methodOverride('_method'))

app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})



app.use('/logs', logsController);


// Start the server and listen on the specified port
  app.listen(3000, () => {
    //   console.log(`Server is running on port ${port}`);
    console.log('listening');
    });
    




// // Index Route - All the logs
// app.get('/logs', async (req, res) => {
//     try {
//         // Retrieve all logs from the database
//         const logs = await Log.find();

//         // Render the 'logs/Index' view and pass the logs data
//         res.render('Index', { logs });
//     } catch (error) {
//         console.error(error);
//         // Handle errors here (e.g., render an error page)
//     }
// });
  

// // New Route
// app.get('/logs/new', (req, res) => {
//     res.render('New'); // Render the 'New' view
//   });

// //DELETE
// // Delete Route - Delete a log entry
// app.delete('/logs/:id', async (req, res) => {
//     try {
//         // Find the log entry by ID and remove it
//         await Log.findByIdAndRemove(req.params.id);

//         // Redirect back to the index page after deletion
//         res.redirect('/logs');
//     } catch (error) {
//         console.error(error);
//         // Handle errors here (e.g., render an error page)
//     }
// });


// //UPDATE
// // Update Route - Update a log entry
// app.put('/logs/:id', async (req, res) => {
//     try {
//       // Check if the shipIsBroken checkbox is checked
//       if (req.body.shipIsBroken === "on") {
//         req.body.shipIsBroken = true; // If checked, set to true
//       } else {
//         req.body.shipIsBroken = false; // If not checked, set to false
//       }
  
//       // Use findByIdAndUpdate to update the log entry by ID
//       await Log.findByIdAndUpdate(req.params.id, req.body);
  
//       // Redirect to the index page (or another appropriate page)
//       res.redirect('/logs');
//     } catch (error) {
//       console.error(error);
//       // Handle errors here (e.g., render an error page)
//     }
//   });


// //CREATE
// // Create Route for Captain's Log
// app.post('/logs', async (req, res) => {
//     try {
//       // Check if the shipIsBroken checkbox is checked
//       if (req.body.shipIsBroken === "on") {
//         req.body.shipIsBroken = true; // If checked, set to true
//       } else {
//         req.body.shipIsBroken = false; // If not checked, set to false
//       }
  
//       // Create a new log entry in the MongoDB database
//       await Log.create(req.body);
  
//       // Redirect to the index page (or another appropriate page)
//       res.redirect('/logs');
//     } catch (error) {
//       console.error(error);
//       // Handle errors here (e.g., render an error page)
//     }
//   });
  



// //EDIT
// // Edit Route - Display the edit form for a log entry
// app.get('/logs/:id/edit', async (req, res) => {
//     try {
//         // Find the log entry by ID
//         const log = await Log.findById(req.params.id);

//         // Render the 'Edit' view and pass the log data
//         res.render('Edit', { log });
//     } catch (error) {
//         console.error(error);
//         // Handle errors here (e.g., render an error page)
//     }
// });




// //SHOW
// // Show Route - Display a single log entry
// app.get('/logs/:id', async (req, res) => {
//     try {
//         // Retrieve a single log entry by its ID from the database
//         const log = await Log.findById(req.params.id);

//         // Render the 'logs/Show' view and pass the log data
//         res.render('Show', { log });
//     } catch (error) {
//         console.error(error);
//         // Handle errors here (e.g., render an error page)
//     }
// });


