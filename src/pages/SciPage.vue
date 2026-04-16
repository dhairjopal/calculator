<template>
  <q-page class="calc-page bg-dark text-white">

    <!-- DISPLAY -->
    <div class="display">
      <div class="input">{{ input || '0' }}</div>
      <div class="result">{{ result }}</div>
    </div>

    <!-- BUTTONS -->
    <div class="pad">
      <div class="grid">

        <!-- BASIC CONTROL -->
        <button class="btn danger" @click="clear">C</button>
        <button class="btn danger" @click="back">⌫</button>
        <button class="btn op" @click="press('(')">(</button>
        <button class="btn op" @click="press(')')">)</button>

        <!-- SCIENTIFIC ROW 1 -->
        <button class="btn sci" @click="press('Math.sin(')">sin</button>
        <button class="btn sci" @click="press('Math.cos(')">cos</button>
        <button class="btn sci" @click="press('Math.tan(')">tan</button>
        <button class="btn op" @click="press('/')">÷</button>

        <!-- SCIENTIFIC ROW 2 -->
        <button class="btn sci" @click="press('Math.sqrt(')">√</button>
        <button class="btn sci" @click="press('Math.log10(')">log</button>
        <button class="btn sci" @click="press('Math.log(')">ln</button>
        <button class="btn op" @click="press('*')">×</button>

        <!-- NUMBERS -->
        <button class="btn" @click="press('7')">7</button>
        <button class="btn" @click="press('8')">8</button>
        <button class="btn" @click="press('9')">9</button>
        <button class="btn op" @click="press('-')">−</button>

        <button class="btn" @click="press('4')">4</button>
        <button class="btn" @click="press('5')">5</button>
        <button class="btn" @click="press('6')">6</button>
        <button class="btn op" @click="press('+')">+</button>

        <button class="btn" @click="press('1')">1</button>
        <button class="btn" @click="press('2')">2</button>
        <button class="btn" @click="press('3')">3</button>
        <button class="btn equal" @click="calculate">=</button>

        <button class="btn sci" @click="press('Math.PI')">π</button>
        <button class="btn sci" @click="press('Math.E')">e</button>
        <button class="btn" @click="press('0')">0</button>
        <button class="btn" @click="press('.')">.</button>

      </div>
    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const input = ref("")
const result = ref("")

const press = (val) => {
  input.value += val
}

const clear = () => {
  input.value = ""
  result.value = ""
}

const back = () => {
  input.value = input.value.slice(0, -1)
}

const calculate = () => {
  try {
    let exp = input.value.replace(/\^/g, '**')
    result.value = eval(exp)
  } catch {
    result.value = "Error"
  }
}
</script>

<style>
.calc-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* DISPLAY */
.display {
  padding: 20px;
  text-align: right;
  border-bottom: 1px solid #222;
}

.input {
  font-size: 18px;
  color: #aaa;
}

.result {
  font-size: 34px;
  font-weight: bold;
  color: #00e676;
}

/* GRID */
.pad {
  flex: 1;
  padding: 12px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

/* BUTTON */
.btn {
  height: 60px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  background: #1e1e1e;
  color: white;
}

.btn:active {
  transform: scale(0.95);
}

/* COLORS */
.op {
  background: #2c2c2c;
  color: #ffb74d;
}

.danger {
  background: #d32f2f;
}

.equal {
  background: #0bcf12;
}

.sci {
  background: #263238;
  color: #4dd0e1;
}
/* Mobile */
@media (max-width: 600px) {
  button {
    padding: 12px;
    font-size: 13px;
  }
}
</style>
