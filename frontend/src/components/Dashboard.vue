<template>
    <div class="max-w-6xl mx-auto p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Mi Panel</h1>
  
      <!-- Sección de Peinados -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Mis Resultados</h2>
        <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div
            v-for="hairstyle in hairstyles"
            :key="hairstyle.id"
            class="bg-white rounded-2xl shadow p-4 hover:shadow-md transition"
          >
            <img :src="hairstyle.image" alt="Peinado" class="rounded-xl h-48 w-full object-cover mb-3" />
            <h3 class="text-lg font-semibold text-gray-800">{{ hairstyle.name }}</h3>
            <p class="text-sm text-gray-500">{{ hairstyle.date }}</p>
          </div>
        </div>
      </section>
  
      <!-- Sección de Citas -->
      <section>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Citas Agendadas</h2>
        <div class="bg-white rounded-2xl shadow p-4 divide-y">
          <div
            v-for="appointment in appointments"
            :key="appointment.id"
            class="py-4 flex justify-between items-center"
          >
            <div>
              <p class="text-gray-800 font-medium">Servicio: {{ appointment.service }}</p>
              <p class="text-sm text-gray-500">Fecha: {{ appointment.date }} - {{ appointment.time }}</p>
            </div>
            <span class="text-sm px-3 py-1 rounded-full"
                  :class="{
                    'bg-green-100 text-green-700': appointment.status === 'confirmada',
                    'bg-yellow-100 text-yellow-700': appointment.status === 'pendiente',
                    'bg-red-100 text-red-700': appointment.status === 'cancelada',
                  }">
              {{ appointment.status }}
            </span>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useUserStore } from '@/stores/user'

  const router = useRouter()
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)
  console.log('user: ');
  console.log(user)
  
  const hairstyles = ref([])
  const appointments = ref([])
  
  onMounted(async () => {
    try {
      //const { data: hairstyleData } = await axios.get('/api/user/hairstyles')
      //const { data: appointmentData } = await axios.get('/api/user/appointments')
  
      hairstyles.value = [
                            {
                              "id": 1,
                              "name": "Trenzas africanas",
                              "image": "/images/result1.jpg",
                              "date": "2025-04-20"
                            },
                            {
                              "id": 2,
                              "name": "Moño elegante",
                              "image": "/images/result2.jpg",
                              "date": "2025-03-15"
                            }
                          ];//hairstyleData
      appointments.value = [
                            {
                              "id": 1,
                              "service": "Trenzas",
                              "date": "2025-05-05",
                              "time": "14:00",
                              "status": "confirmada"
                            },
                            {
                              "id": 2,
                              "service": "Peinado de fiesta",
                              "date": "2025-05-10",
                              "time": "10:00",
                              "status": "pendiente"
                            }
                          ];//appointmentData
    } catch (error) {
      console.error('Error al cargar datos del dashboard:', error)
    }
  })
  </script>