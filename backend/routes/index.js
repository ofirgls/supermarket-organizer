const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({
        massage:'hello index.js',
    })
})

module.exports = router;