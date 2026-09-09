import type { Match } from '@/types/match';

export const matches: Match[] = [
  {
    id: 1,
    sport: 'Football',
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    date: '2026-09-10T20:00:00',
    status: 'live'
  },
  {
    id: 2,
    sport: 'Football',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    date: '2026-08-10T18:30:00',
    status: 'finished'
  },
  {
    id: 3,
    sport: 'Basketball',
    homeTeam: 'Lakers',
    awayTeam: 'Celtics',
    date: '2026-09-11T21:00:00',
    status: 'upcoming'
  },
  {
    id: 4,
    sport: 'Basketball',
    homeTeam: 'Bulls',
    awayTeam: 'Heat',
    date: '2026-09-11T19:30:00',
    status: 'upcoming'
  },
  {
    id: 5,
    sport: 'Tennis',
    homeTeam: 'Alcaraz',
    awayTeam: 'Sinner',
    date: '2026-09-12T16:00:00',
    status: 'upcoming'
  }
]