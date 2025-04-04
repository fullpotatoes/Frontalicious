<script setup>
import { ref, onMounted } from 'vue'

const userName = ref('')
const plats = ref([]) // Pour stocker la liste des plats

async function fetchPlats() {
  try {
    const response = await fetch('http://127.0.0.1:8000/Plats')
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des plats')
    }
    const data = await response.json()
    plats.value = data // Stocker les données reçues
  } catch (error) {
    console.error('Erreur:', error)
  }
}

onMounted(() => {
  // Appeler l'API au montage du composant
  fetchPlats()
})
</script>

<template>
  <div class="flex flex-col items-center p-8">
    <h1 class="text-2xl font-bold mb-6">Nos Plats</h1>

    <p v-if="userName" class="mb-4 text-lg">
      Bonjour, {{ userName }} !
    </p>

    <!-- Section Liste des plats -->
    <ul v-if="plats.length > 0">
      <li
          v-for="plat in plats"
          :key="plat.id"
          class="mb-4 p-4 border rounded-md shadow-md"
      >
        <h2 class="text-lg font-semibold">{{ plat.name }}</h2>
        <p class="text-gray-600">{{ plat.description }}</p>
        <img
            v-if="plat.image"
            :src="plat.image"
            alt="Image du plat"
            class="mt-2 h-32"
        />
      </li>
    </ul>

    <p v-else class="text-red-500">Aucun plat disponible pour l'instant.</p>
  </div>
</template>