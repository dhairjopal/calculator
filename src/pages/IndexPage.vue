<template>
  <div class="calc">

    <!-- Display -->
    <div class="display">
      {{ input || '0' }}
    </div>

    <!-- Buttons -->
    <div class="grid">

      <button @click="clear">C</button>
      <button @click="del">⌫</button>
      <button @click="append('%')">%</button>
      <button @click="append('/')">÷</button>

      <button @click="append('7')">7</button>
      <button @click="append('8')">8</button>
      <button @click="append('9')">9</button>
      <button @click="append('*')">×</button>

      <button @click="append('4')">4</button>
      <button @click="append('5')">5</button>
      <button @click="append('6')">6</button>
      <button @click="append('-')">−</button>

      <button @click="append('1')">1</button>
      <button @click="append('2')">2</button>
      <button @click="append('3')">3</button>
      <button @click="append('+')">+</button>

      <button @click="append('0')" class="zero">0</button>
      <button @click="append('.')">.</button>
      <button @click="calculate" class="eq">=</button>


    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const input = ref("")

const append = (val) => {
  input.value += val
}

const clear = () => {
  input.value = ""
}

const del = () => {
  input.value = input.value.slice(0, -1)
}

// power fix (^) → JS compatible
const calculate = () => {
  try {
    let exp = input.value.replace(/\^/g, "**")
    input.value = eval(exp).toString()
  } catch (e) {
    input.value = "Error"
  }
}
</script>

<style>
.calc {
  max-width: 350px;
  margin: 20px auto;
  background: #111827;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.display {
  background: black;
  color: #00ffcc;
  font-size: 1.8rem;
  padding: 20px;
  text-align: right;
  min-height: 60px;
  word-break: break-all;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

button {
  padding: 15px;
  font-size: 14px;
  border: none;
  background: #1f2937;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #514337;
}

.eq {
  background: #20c13b;
}

.zero {
  grid-column: span 2;
}

/* Mobile */
@media (max-width: 600px) {
  button {
    padding: 12px;
    font-size: 13px;
  }
}
</style>
