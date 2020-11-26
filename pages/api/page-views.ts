import db from '@/lib/db-admin'

export default (req, res) => {
  if (!req.query.id) {
    return db.ref('views').once('value', (snapshot) => {
      const { blog } = snapshot.val()
      const allViews = Object.values(blog).reduce((total: number, value: number) => total + value)

      return res.status(200).json({
        total: allViews
      })
    })
  }

  const ref = db.ref('views').child(req.query.id)

  return ref.once('value', (snapshot) => {
    res.status(200).json({
      total: snapshot.val()
    })
  })
}
