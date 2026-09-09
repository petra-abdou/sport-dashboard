<script setup lang="ts">
import type { Sport } from '../types/sport'

const props =defineProps<{
  title: string,
  sport: Sport,
  selected: boolean
}>()

</script>
<template>
    <article class="sport-card" :class="{ selected: props.selected }">
        <header>
            <h1>{{ title }}</h1>
            <p>{{ sport.name }} - {{ sport.matches }}</p>
        </header>
        
        <slot />

        <div class="actions">
            <slot name="actions"/>
        </div>
    </article>
</template>

<style scoped>
.sport-card {
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 12px;
  margin-bottom: 16px;
}

.sport-card.selected {
    background-color: #f0f0f0;
}

.actions {
  margin-top: 16px;
}
</style>