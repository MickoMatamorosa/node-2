module.exports = {
    create:  (req, res, next) => {
      const db = req.app.get('db')
      
      const { userId, content } = req.body
      
      db.posts.data.push({
        id: db.posts.id,
        userId: userId, 
        content: content,
      })
      
      db.posts.id++
 
      res.status(200).json(db)
      next()
    },
    getUserPosts: (req, res) => {
        const db = req.app.get('db')
        const userId = req.params.userId
        
        const id = parseInt(userId)
        let result = db.posts.data.filter(p => p.userId === id)
      
        res.status(200).json(result)
    },
 }