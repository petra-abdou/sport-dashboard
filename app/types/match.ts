export type Match = {
  id: number
  sport: string
  homeTeam: string
  awayTeam: string
  date: string
  status: 'upcoming' | 'live' | 'finished'
}