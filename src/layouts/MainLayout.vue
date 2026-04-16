<template>
  <q-layout view="lHh Lpr lFf">
    <!-- 🔝 HEADER -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="row items-center">
          <q-icon name="calculate" size="28px" />
          <span class="q-ml-sm">Calculator</span>
        </q-toolbar-title>




<!-- MODE SWITCH -->
<q-btn-toggle
  v-model="mode"
  dense
  unelevated
  toggle-color="green"
  color="white"
  text-color="primary"
  :options="[
    { label: 'Basic', value: 'basic', to: '/home' },
    { label: 'Sci', value: 'sci', to: '/scientific' },
    { label: 'Graph', value: 'graph', to: '/logo' }
  ]"


        />
      </q-toolbar>
    </q-header>

    <!-- 📂 DRAWER -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> ⚙️ Settings </q-item-label>
        <q-item clickable v-ripple to="/history">
          <q-item-section avatar><q-icon name="history" /></q-item-section>
          <q-item-section>History</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/about">
          <q-item-section avatar><q-icon name="info" /></q-item-section>
          <q-item-section>About App</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- PAGE -->
    <q-page-container>
      <router-view :mode="mode" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const mode = ref("basic");

    return {
      leftDrawerOpen,
      mode,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
