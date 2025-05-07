<template>
    <div class="flex items-center justify-center bg-white flex-col">
      <div class="w-96 bg-white flex justify-center mt-7">
        <router-link to="/">
          <img class="h-9 w-20 h-20" src="/images/logo.jpg"/>
        </router-link>
      </div>
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold mb-4 text-center">Registro</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block text-gray-700">Correo</label>
            <input v-model="form.email" type="email" class="w-full p-2 border rounded-lg" required />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Contraseña</label>
            <input v-model="form.password" type="password" class="w-full p-2 border rounded-lg" required />
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Ingresar
          </button>
        </form>
        <p class="mt-4 text-center text-sm text-gray-700">
            ¿Aún no estás registrado? <router-link to="/register" class="text-blue-500">Regístrate</router-link>
        </p>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const form = reactive({
  email: '',
  password: '',
})
const error = ref('')
const router = useRouter();
const userStore = useUserStore();

const login = async () => {
  try {
    error.value = ''

    // 1. Obtener token CSRF si usas cookies (Sanctum)
    //await axios.get('/sanctum/csrf-cookie')
    // 2. Enviar solicitud de login
    const { data } = await axios.post('/login', form)
    console.log('Data: ');
    console.log(data);
    userStore.setUser(data.user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    router.push('/dashboard');
  } catch (err) {
    if (axios.isAxiosError(err)) {
      error.value = err.response?.data?.message || 'Login error';
    } else {
      error.value = 'Unexpected error';
      console.error('Unexpected error:', err);
    }
  }
}
</script>