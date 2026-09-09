<script setup lang="ts">
import type { Sport } from '../types/sport'

const props = defineProps<{
  sports: Sport[]
  selectedSport: string | null
}>()

const emit = defineEmits<{
  select: [sportName: string]
}>()
</script>

<template>
  <section class="sport-list">
    <SportHeader
      v-for="sport in props.sports"
      :key="sport.name"
      :title="`${sport.name} Dashboard`"
      :sport="sport"
      :selected="sport.name === props.selectedSport"
    >
      <template #actions>
        <button
          :class="{ selected: sport.name === props.selectedSport }"
          @click="emit('select', sport.name)"
        >
          {{ sport.name === props.selectedSport ? 'Selected ✓' : 'Select' }}
        </button>
      </template>
    </SportHeader>
  </section>
</template>

<style scoped>
.sport-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

button {
  width: 100%;
  padding: 10px 16px;
  border: 0;
  border-radius: 8px;
  background: #171717;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

button:hover {
  opacity: 0.85;
}

button.selected {
  background: #555;
}

@media (max-width: 800px) {
  .sport-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .sport-list {
    grid-template-columns: 1fr;
  }
}
</style>