<script setup lang="ts">
import { computed, ref } from 'vue'

import { sports } from './data/sports'
import { matches } from './data/matches'

import { filterMatchesBySport } from './utils/matches'

const selectedSport = ref('Football')

const selectedSportData = computed(() => {
  return sports.find((sport) => sport.name === selectedSport.value)
})

const filteredMatches = computed(() => {
  return filterMatchesBySport(matches, selectedSport.value)
})

const handleSelect = (sportName: string) => {
  selectedSport.value = sportName
}
</script>

<template>
  <main class="dashboard">
    <header class="dashboard-header">
      <div>
        <p class="eyebrow">SPORTS</p>
        <h1>Sports Dashboard</h1>
        <p class="subtitle">
          Follow upcoming matches across your favourite sports.
        </p>
      </div>
    </header>

    <section class="sports-section">
      <div class="section-header">
        <h2>Sports</h2>

        <p v-if="selectedSportData">
          {{ selectedSportData.matches }} matches
        </p>
      </div>

      <SportList
        :sports="sports"
        :selected-sport="selectedSport"
        @select="handleSelect"
      />
    </section>

    <section class="matches-section">
      <div class="section-header">
        <h2>{{ selectedSport }} matches</h2>

        <span class="match-count">
          {{ filteredMatches.length }}
        </span>
      </div>

      <MatchList :matches="filteredMatches" />
    </section>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f6f7f9;
  color: #171717;
}

.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

.dashboard-header {
  margin-bottom: 48px;
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.dashboard-header h1 {
  margin: 0;
  font-size: 42px;
}

.subtitle {
  margin-top: 12px;
  color: #666;
  font-size: 17px;
}

.sports-section,
.matches-section {
  margin-bottom: 48px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.section-header h2 {
  margin: 0;
  font-size: 24px;
}

.section-header p {
  margin: 0;
  color: #666;
}

.match-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 10px;
  border-radius: 999px;
  background: #e9e9e9;
  font-size: 14px;
  font-weight: 700;
}

@media (max-width: 700px) {
  .dashboard {
    padding: 32px 16px;
  }

  .dashboard-header h1 {
    font-size: 32px;
  }
}
</style>