module.exports = {
    debugger:  (req, res) => {
        res.status(200).json(req.app.get('db'));
    }
}