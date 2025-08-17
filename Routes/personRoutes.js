const express = require('express');
const router = express.Router();
const Person = require('../Person');

// POST route to save a person
router.post('/', async (req, res) => {
    try {
        const data = req.body;

        // Create a new Person document using the Mongoose model
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('Data saved');
        res.status(200).json(response);

    } catch (err) {
        console.error('Error saving person:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET route to fetch all persons
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();   // ✅ Corrected
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);   // ✅ Corrected
        res.status(500).json({ error: 'Internal Server Error' });   // ✅ Corrected
    }
});

router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;

    // Allow only certain work types
    if (workType === 'chef' || workType === 'manager' || workType === 'waiter') {
      
      const response = await Person.find({ work: workType });
      console.log('Response fetched');
      
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: 'Invalid work type' });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});    

// ➤ UPDATE person by ID
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatePersonData = req.body;  // whatever fields you send in request body

    // findByIdAndUpdate(id, update, options)
    const response = await Person.findByIdAndUpdate(
      personId,
      updatePersonData,
      { new: true, runValidators: true } // new:true => return updated doc
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
console.log('data update')
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
// ➤ DELETE person by ID
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("Person deleted");
    res.status(200).json({ message: "Person deleted successfully", deletedPerson: response });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports=router