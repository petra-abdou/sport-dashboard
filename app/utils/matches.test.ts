import { describe, expect, it } from 'vitest';
import { filterMatchesBySport, formatMatchStatus, formatMatchDate } from './matches';

describe('filterMatchesBySport', () => {
    it('returns only matches for the selected sport', () => {
        const testMatches = [
            {
                id: 1,
                sport: 'Football',
                homeTeam: 'Barcelona',
                awayTeam: 'Real Madrid',
                date: '2026-09-10T20:00:00',
                status: 'upcoming' as const
            },
            {
                id: 2,
                sport: 'Basketball',
                homeTeam: 'Lakers',
                awayTeam: 'Celtics',
                date: '2026-09-11T21:00:00',
                status: 'upcoming' as const
            }
        ]

        const result = filterMatchesBySport(testMatches, 'Football');

        expect(result).toHaveLength(1);
        expect(result[0]?.sport).toBe('Football')
    })

    it('returns only matches for Basketball', () => {
        const testMatches = [
            {
                id: 1,
                sport: 'Football',
                homeTeam: 'Barcelona',
                awayTeam: 'Real Madrid',
                date: '2026-09-10T20:00:00',
                status: 'upcoming' as const
            },
            {
                id: 2,
                sport: 'Basketball',
                homeTeam: 'Lakers',
                awayTeam: 'Celtics',
                date: '2026-09-11T21:00:00',
                status: 'upcoming' as const
            }
        ]
        const result = filterMatchesBySport(testMatches, 'Basketball');

        expect(result).toHaveLength(1)
        expect(result[0]?.sport).toBe('Basketball')
    })

    it('returns an empty array when there are no matches for the sport', () => {
        const testMatches = [
            {
                id: 1,
                sport: 'Football',
                homeTeam: 'Barcelona',
                awayTeam: 'Real Madrid',
                date: '2026-09-10T20:00:00',
                status: 'upcoming' as const
            }
        ]

        const result = filterMatchesBySport(testMatches, 'Tennis');

        expect(result).toHaveLength(0);
    })

    it('formats match status correctly', () => {
        expect(formatMatchStatus('upcoming')).toBe('Upcoming')
        expect(formatMatchStatus('live')).toBe('Live')
        expect(formatMatchStatus('finished')).toBe('Finished')
    })

    it('formats match dates coreectly', () => {
        const result = formatMatchDate('2026-09-10T20:00:00');

        expect(result).toContain('10 Sep')
        expect(result).toContain('2026')
        expect(result).toContain('20:00')
    })
})