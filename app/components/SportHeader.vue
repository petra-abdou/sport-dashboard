<script setup lang="ts">
import type { Sport } from '../types/sport'

const props = defineProps<{
  title: string
  sport: Sport
  selected: boolean
}>()
</script>

<template>
  <article
    class="sport-card"
    :class="{ selected: props.selected }"
  >
    <div class="sport-icon">
      🏆
    </div>

    <div class="sport-content">
      <p class="sport-label">
        SPORT
      </p>

      <h3>{{ sport.name }}</h3>

      <p class="matches">
        {{ sport.matches }} matches
      </p>
    </div>

    <div class="actions">
      <slot name="actions" />
    </div>
  </article>
</template>

<style scoped>
.sport-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 1px solid #e2e2e2;
  border-radius: 16px;
  background: white;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.sport-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.sport-card.selected {
  border-color: #171717;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.sport-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #f2f2f2;
  font-size: 22px;
}

.sport-content {
  flex: 1;
}

.sport-label {
  margin: 0 0 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #888;
}

.sport-content h3 {
  margin: 0;
  font-size: 20px;
}

.matches {
  margin: 6px 0 0;
  color: #777;
  font-size: 14px;
}

.actions {
  margin-top: auto;
}

.actions :deep(button) {
  width: 100%;
  padding: 10px 16px;
  border: 0;
  border-radius: 8px;
  background: #171717;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.actions :deep(button:hover) {
  opacity: 0.85;
}
</style>