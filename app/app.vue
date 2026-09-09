<script setup lang="ts">
import { computed, ref } from 'vue'
import { sports } from './data/sports'
import { matches } from './data/matches'

const selectedSport = ref('Football')

const selectedSportData = computed( () => {
  return sports.find( sport => sport.name === selectedSport.value);
})

const filteredMatches = computed( () => {
  return matches.filter(match => match.sport === selectedSport.value);
})

const handleSelect = (sportName:string) => {
  selectedSport.value = sportName;
}
</script>
<template>
  <div v-if="selectedSportData">
    <p>Selected Sport: {{ selectedSportData.name }}</p>
    <p>{{ selectedSportData.matches }} matches</p>

    <p v-if="selectedSportData.active">
      Active
    </p>
    <p v-else>
      Not active
    </p>
  </div>
  <main>
    <label for="sport">Choose a sport:</label>

    <select id="sport" v-model="selectedSport">
      <option
        v-for="sport in sports"
        :key="sport.name"
        :value="sport.name"
      >
        {{ sport.name }}
      </option>
    </select>

    <SportList
      :sports="sports"
      :selected-sport="selectedSport"
      @select="handleSelect"
    />
    <MatchList :matches="filteredMatches" />
    <p>Welcome to my sports dashboard!</p>
  </main>
</template>
