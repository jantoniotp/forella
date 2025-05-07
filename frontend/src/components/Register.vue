<template>
    <div class="flex items-center justify-center bg-white flex-col">
      <div class="w-96 bg-white flex justify-center mt-7">
        <router-link to="/">
          <img class="h-9 w-20 h-20" src="/images/logo.jpg"/>
        </router-link>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold mb-4 text-center">Registro</h2>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label class="block text-gray-700">Nombre</label>
            <input v-model="name" type="text" class="w-full p-2 border rounded-lg" required />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Correo</label>
            <input v-model="email" type="email" class="w-full p-2 border rounded-lg" required />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Contraseña</label>
            <input v-model="password" type="password" class="w-full p-2 border rounded-lg" required />
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Registrarse
          </button>
        </form>
        <p class="mt-4 text-center text-sm text-gray-700">
          ¿Ya tienes cuenta? <router-link to="/login" class="text-blue-500">Inicia sesión</router-link>
        </p>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const name = ref('');
const email = ref('');
const password = ref('');

const router = useRouter();
const userStore = useUserStore();

const register = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/register', {
      name: name.value,
      email: email.value,
      password: password.value
    });

    console.log(response);
    userStore.setUser(response.data.user);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    //alert(response.data.message);
    router.push('/dashboard');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data || 'Error desconocido en la respuesta del servidor');
    } else {
      console.error('Error inesperado:', error);
    }
  }
};
</script>