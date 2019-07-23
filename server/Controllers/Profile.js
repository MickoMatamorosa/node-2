module.exports = {
    getID: (req, res) => {
        const db = req.app.get('db')
        const { userId } = req.query
      
        const id = parseInt(userId)
        let result = db.profiles.data.find(p => p.userId === id)
      
        res.status(200).json(result)
    },
    update: (req, res) => {
        const db = req.app.get('db');
        const { fullname, age } = req.body;

        const id = parseInt(req.params.userId)

        const index = db.profiles.data.findIndex(p => 
            p.userId === id
        );

        const updates = { id, fullname, age, };

        if(index >= 0){
            db.profiles.data.splice(index, 1, updates);
        }
        
        res.status(200).json(db);
    }
 }