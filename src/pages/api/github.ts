import type { NextApiRequest, NextApiResponse } from 'next'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const userResponse = await fetch('https://api.github.com/users/miraklasiaf')
  const userReposResponse = await fetch('https://api.github.com/users/miraklasiaf/repos')

  const user = await userResponse.json()
  const repositories = await userReposResponse.json()

  const mine = repositories.filter((repo) => !repo.fork)
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository['stargazers_count']
  }, 0)

  return res.status(200).json({
    followers: user.followers,
    stars
  })
}
