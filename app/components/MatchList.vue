<script setup lang="ts">
import type { Match } from '../types/match'

const props = defineProps<{
  matches: Match[]
}>()
</script>
<template>
    <section>
      <h2>Matches</h2>
  
      <ul>
        <li
          v-for="match in matches"
          :key="match.id"
        >
          {{ match.homeTeam }} vs {{ match.awayTeam }}
        </li>
      </ul>
    </section>
  </template>