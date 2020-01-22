const db = require('../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  let page = parseInt (req.query.page) || 1
  const limit = parseInt(req.query.limit) || 9
  if (page < 1) page = 1
  const inr_profiles = await db.query(escape `
    SELECT *
    FROM inr_profiles
    ORDER BY id
    LIMIT ${(page - 1) * limit}, ${limit}
    `)
    const count = await db.query(escape`
      SELECT COUNT(*)
      AS profilesCount
      FROM inr_profiles
      `)
    const { profilesCount } = count[0]
    const pageCount = Math.ceil(profilesCount / limit)
    res.status(200).json({ inr_profiles, pageCount, page })
}
