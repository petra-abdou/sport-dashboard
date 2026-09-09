import type { Match } from '../types/match';

export const filterMatchesBySport = (
    matches: Match[],
    sport: string
) => {
    return matches.filter((match) => match.sport === sport);
}