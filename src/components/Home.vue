<script setup>
import { ref } from 'vue'

// Pour la page d'accueil
const enteredName = ref('')
const displayName = ref('')

function onInput(e) {
  enteredName.value = e.target.value
}

function handleSubmit() {
  displayName.value = enteredName.value
  // Stocker le nom dans le localStorage pour le récupérer sur l'autre page
  localStorage.setItem('userName', displayName.value)
  // Redirection vers la page du plat
  if (displayName.value) {
    router.push('/plat')
  }
}
</script>

<template>
  <!-- Section Homepage -->
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <!-- Titre -->
    <h1>
      🥦
    </h1>

    <h1>
      Bienvenue sur Adalicious
    </h1>

    <p>Pour commencer, peux-tu me donner ton prénom:</p>

    <div class="flex space-x-2 mt-2">
      <input
          :value="enteredName"
          @input="onInput"
          placeholder=""
          class="px-4 py-2 border rounded-md"
      >

      <button
          @click="handleSubmit"
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
      >
        Valider
      </button>
    </div>

    <p v-if="displayName" class="mt-4">
      Bonjour, {{ displayName }} !
      <router-link to="/plat" class="text-green-500 hover:text-green-600 ml-2">
        Voir le plat du jour
      </router-link>
    </p>
  </div>
</template>