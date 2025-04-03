<script setup>
import { ref, onMounted } from 'vue'

const userName = ref('')
const plate = ref({
  name: "Salade César",
  description: "Une délicieuse salade avec du poulet grillé, des croûtons, du parmesan et une sauce crémeuse à l'ail.",
  image: "https://exemple.com/images/salade-cesar.jpg"
})

onMounted(() => {
  // Récupérer le nom stocké dans le localStorage
  userName.value = localStorage.getItem('userName') || ''
})
</script>

<template>
  <div class="flex flex-col items-center p-8">
    <h1 class="text-2xl font-bold mb-6">Menu du jour</h1>

    <p v-if="userName" class="mb-4 text-lg">
      Bonjour, {{ userName }} !
    </p>

    <!-- Section Carte de plat -->
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              :src="plate.image"
              :alt="plate.name"
              @error="$event.target.src = 'https://via.placeholder.com/150?text=Image+non+disponible'"
          >
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Plat
          </div>
          <h2 class="block mt-1 text-lg leading-tight font-medium text-black">
            {{ plate.name }}
          </h2>
          <p class="mt-2 text-slate-500">
            {{ plate.description }}
          </p>
          <div class="mt-4">
            <button class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
              Commander
            </button>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/" class="mt-6 text-green-500 hover:text-green-600">
      Retour à l'accueil
    </router-link>
  </div>
</template>