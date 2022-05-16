const express = requires('express');
const Customer = required('../models/customer')
const router = express.Router();

router.post('/login', async(req, res) => {
    try {
        const Customer = await Customer.login(req.body.username, req.body.password);
        res.send({...customers, password, undefined} );
    } catch (error) {
        res.status(401).send({messages:error.message});
    }
});
router.post('/register', async(req, res) => {
    try {
        const Customer = await Customer.register(req.body);
        res.send({...customers, password, undefined} );
    } catch (error) {
        res.status(401).send({messages:error.message});
    }
});


module.exports = router;