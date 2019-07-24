module.exports = {
  create:  (req, res, next) => {
    const db = req.app.get('db')
    
    const { postId, comment, userId } = req.body
    
    db.comments.data.push({
      id: db.comments.id,
      postId: postId, 
      comment: comment,
      userId: userId
    })
    
    db.comments.id++

    res.status(200).json(db)
    next()
  },
}