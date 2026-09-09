<script setup lang="ts">
import type { Sport } from '../types/sport'

const props = defineProps<{
  sports: Sport[],
  selectedSport: string | null
}>()

const emit = defineEmits<{
    select: [sportName: string]
}>()

</script>
<template>
    <section class="sport-list">
        <SportHeader
            v-for="sport in sports"
            :key="sport.name"
            :title="`${sport.name} Dashboard`"
            :sport="sport"
            :selected="sport.name === selectedSport"
        >
            <span>🏆</span>
            <template #actions>
                <button @click="emit('select', sport.name)">
                    Select
                </button>
            </template>
        </SportHeader>
    </section>
</template>

<style scoped>
.sport-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
@media (max-width: 400px) {
    .sport-list {
        grid-template-columns: 1fr;
    }
}
</style>