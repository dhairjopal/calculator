<template>
  <q-page class="calc-page bg-dark text-white">

    <!-- INPUT -->
    <div class="display">

      <div class="row items-center q-gutter-sm">

        <input
          v-model="func"
          class="graph-input"
          placeholder="Enter function: x*x or Math.sin(x)"
        />

        <button class="btn op" @click="plotGraph">Plot</button>
        <button class="btn danger" @click="clear">Clear</button>

      </div>

    </div>

    <!-- GRAPH -->
    <div class="pad">
      <canvas ref="canvas"></canvas>
    </div>

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const func = ref("")
const canvas = ref(null)
let chart = null

// 📊 PLOT GRAPH
const plotGraph = () => {

  const ctx = canvas.value.getContext('2d')

  const labels = []
  const data = []

  try {

    for (let x = -10; x <= 10; x += 0.5) {
      labels.push(x)

      let expr = func.value.replace(/x/g, `(${x})`)
      let y = eval(expr)

      data.push(y)
    }

    if (chart) chart.destroy()

    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'f(x)',
          data,
          borderColor: '#00e676',
          borderWidth: 2,
          fill: false,
          tension: 0.3
        }]
      }
    })

  } catch (e) {
    alert("Invalid Function")
  }
}

// 🧹 CLEAR
const clear = () => {
  func.value = ""
  if (chart) chart.destroy()
}
</script>

<style>
.calc-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* TOP INPUT */
.display {
  padding: 15px;
  border-bottom: 1px solid #222;
}

.graph-input {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
}

/* PAD */
.pad {
  flex: 1;
  padding: 10px;
}

/* BUTTON */
.btn {
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

.op {
  background: #2c2c2c;
}

.danger {
  background: #d32f2f;
}
</style>
