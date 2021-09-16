import db from '@mira/lib/planetscale'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const [rows] = await db.query(`SELECT SUM(count) as total FROM views`, null)

    const total = rows[0]['total']
    return res.status(200).json({ total })
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
