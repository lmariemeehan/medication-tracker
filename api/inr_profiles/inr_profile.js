const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const [inr_profile] = await db.query(escape `
    SELECT *
    FROM inr_profiles
    WHERE id = ${req.query.id}
    `)
    res.status(200).json({ inr_profile })
}
