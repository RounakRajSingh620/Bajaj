const express = require('express');
const router = express.Router();

// Function to process the data
const processData = (data) => {
    if (!data || !Array.isArray(data)) {
        return { numbers: [], alphabets: [], highest_alphabet: [] };
    }

    const numbers = data.filter(item => !isNaN(Number(item))).map(item => Number(item));
    const alphabets = data.filter(item => isNaN(Number(item)));
   
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const sortedAlphabets = alphabets.slice().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    const highestAlphabet = sortedAlphabets.length > 0
        ? [sortedAlphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0]]
        : [];

    return { numbers: sortedNumbers, alphabets: sortedAlphabets, highest_alphabet: highestAlphabet };
};

// POST 
router.post('/', (req, res) => {
    const { data } = req.body;
    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            user_id: "RounakRajSingh_09082003",
            email: "rs7059@srmist.edu.in",
            roll_number: "RA2111003020213",
            numbers: [],
            alphabets: [],
            highest_alphabet: []
        });
    }

    const { numbers, alphabets, highest_alphabet } = processData(data);

    res.json({
        is_success: true,
        user_id: "RounakRajSingh_09082003",
        email: "rs7059@srmist.edu.in",
        roll_number: "RA2111003020213",
        numbers,
        alphabets,
        highest_alphabet
    });
});

// GET 
router.get('/', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

module.exports = router;
