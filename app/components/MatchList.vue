<script setup lang="ts">
import type { Match } from '../types/match'

const props = defineProps<{
  matches: Match[]
}>()

const formatDate = (date: string) => {
  const matchDate = new Date(date);

  return matchDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatStatus = (status: Match['status']) => {
  switch (status) {
    case 'upcoming':
      return 'Upcoming'
    case 'live':
      return 'Live'
    case 'finished':
      return 'Finished'
  }
}
</script>

<template>
  <section class="matches">
    <div
      v-if="props.matches.length === 0"
      class="empty-state"
    >
      <p>No matches available.</p>
    </div>

    <div
      v-else
      class="match-list"
    >
      <article
        v-for="match in props.matches"
        :key="match.id"
        class="match-card"
      >
        <div class="team">
          <span>{{ match.homeTeam }}</span>
        </div>

        <div class="match-info">
          <span class="vs">VS</span>

          <span class="match-date">
            {{ formatDate(match.date) }}
          </span>

          <span
            class="match-status"
            :class="match.status"
          >
            <span
              v-if="match.status === 'live'"
              class="live-dot"
            ></span>

            {{ formatStatus(match.status) }}
          </span>
        </div>

        <div class="team team-away">
          <span>{{ match.awayTeam }}</span>
        </div>
    </article>
  </div>
</section>
</template>
<style scoped>
.match-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.match-card {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
  padding: 20px 24px;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  background: white;
}

.team {
  font-size: 16px;
  font-weight: 600;
}

.team-away {
  text-align: right;
}

.match-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.match-date {
  font-size: 13px;
  color: #666;
  white-space: nowrap;
}

.vs {
  font-size: 12px;
  font-weight: 700;
  color: #888;
}

.empty-state {
  padding: 40px;
  border: 1px dashed #ccc;
  border-radius: 12px;
  text-align: center;
  color: #777;
}

.match-status {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.match-status.upcoming {
  color: #2563eb;
}

.match-status.live {
  color: #16a34a;
}

.match-status.finished {
  color: #888;
}

.live-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 5px;
  border-radius: 50%;
  background: #16a34a;
}

@media (max-width: 500px) {
  .match-card {
    gap: 12px;
    padding: 16px;
  }

  .team {
    font-size: 14px;
  }
}
</style>