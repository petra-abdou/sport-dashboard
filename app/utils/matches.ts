import type { Match } from '../types/match';

export const filterMatchesBySport = (
    matches: Match[],
    sport: string
) => {
    return matches.filter((match) => match.sport === sport);
}

export const formatMatchStatus = (
    status: Match['status']
) => {
    if ( status === 'upcoming') {
        return 'Upcoming'
    }

    if ( status === 'live') {
        return 'Live'
    }

    if ( status === 'finished') {
        return 'Finished'
    }
}

export const formatMatchDate = (date: string) => {
    const matchDate = new Date(date);

    return matchDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}