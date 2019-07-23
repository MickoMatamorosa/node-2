module.exports = {
   create:  (req, res, next) => {
     const db = req.app.get('db')
     
     const { password, email } = req.body
     
     db.users.data.push({
       id: db.users.id, 
       password, 
       email
     })
     
     db.profiles.data.push({ 
       userId: db.users.id, 
       fullname: '', 
       age: '' 
     })
     
     db.users.id++

     res.status(200).json(db)
     next()
   }
}