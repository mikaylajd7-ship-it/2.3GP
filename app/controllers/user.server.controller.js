// Name: Mikayla Dickerson
// Date: November 26, 2026
// Controller for creating a user document through the REST API.

const User = require('mongoose').model('User');

exports.create = async function (req, res) {
    try {
        const user = new User(req.body);
        const response = await user.save();

        console.log(`Value of response: ${response}`);
        return res.status(200).send('User Added');
    } catch (error) {
        console.error(`Could not save user: ${error.message}`);

        // A duplicate/invalid document or database error should return a useful status.
        return res.status(400).json({
            message: 'Could not add user.',
            error: error.message
        });
    }
};
