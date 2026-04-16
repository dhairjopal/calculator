<template>
  <q-page class="q-pa-md bg-dark text-white">

    <!-- Header -->
    <div class="row items-center justify-between q-mb-md">
      <h5>📜 Calculation History</h5>

      <q-btn
        color="red"
        icon="delete"
        label="Clear All"
        dense
        @click="clearHistory"
      />
    </div>

    <!-- History List -->
    <q-card class="bg-grey-10 text-white q-pa-sm">

      <div v-if="history.length === 0" class="text-grey-5 text-center q-pa-md">
        No history yet 😴
      </div>

      <div v-for="(item, i) in history" :key="i" class="history-item">

        <div class="row justify-between items-center">

          <div>
            <div class="text-weight-bold">
              {{ item.expression }}
            </div>
            <div class="text-green-4">
              = {{ item.result }}
            </div>
            <div class="text-grey-6 text-caption">
              {{ item.type }}
            </div>
          </div>

        </div>

        <q-separator dark spaced />

      </div>

    </q-card>

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const history = ref([])

// Load history
onMounted(() => {
  const saved = localStorage.getItem('calc-history')
  if (saved) {
    history.value = JSON.parse(saved)
  }
})

// Clear all history
const clearHistory = () => {
  history.value = []
  localStorage.removeItem('calc-history')
}
</script>

<style>
.history-item {
  padding: 10px;
}
</style>
