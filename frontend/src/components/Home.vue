<script setup lang="ts">
  import { useUserStore } from '@/stores/user'
  import { storeToRefs } from 'pinia'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)
  console.log(user)

  const handleLogout = async () => {
    await userStore.logout()
    router.push('/')
  }
</script>

<template>
<div>
  <div>
    <div>
      <section x-data="{ mobileNavOpen: false, dropdown: false }" style="background: url('/interlock-assets/gradients/gradient-header.jpg'); background-size: cover;">
        <nav class="relative px-12 py-5">
          <div class="flex items-center justify-between">
            <a class="relative z-10 pr-4 lg:pr-0 flex items-center space-x-2" href="#">
              <img class="h-9" src="/images/logo.jpg"/>
              <strong class="text-white">Forella</strong>
            </a>
            <ul class="hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2 xl:flex lg:justify-center gap-14">
              <li><a class="text-lg text-white hover:text-gray-300 font-medium transition duration-200" href="about.html" x-on:mousemove="dropdown = false">Nosotros</a></li>
              <li><a class="text-lg text-white hover:text-gray-300 font-medium transition duration-200" href="pricing.html" x-on:mousemove="dropdown = false">Resultados</a></li>
              <li><a class="text-lg text-white hover:text-gray-300 font-medium transition duration-200" href="blog.html" x-on:mousemove="dropdown = false">Precios</a></li>
              <li><a class="text-lg text-white hover:text-gray-300 font-medium transition duration-200" href="contact.html" x-on:mousemove="dropdown = false">Contacto</a></li>
            </ul>
            <template v-if="!user">
              <div class="hidden xl:flex items-center gap-2">
                <router-link to="/login">
                  <button class="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-black focus:text-black bg-transparent hover:bg-gray-50 focus:bg-gray-50 border border-gray-100 rounded-full focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50 transition duration-200" href="login.html">
                    Iniciar sesion
                  </button>
                </router-link>
                <router-link to="/register">
                  <button class="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200">
                    Registrate
                  </button>
                </router-link>
              </div>
            </template>
            <template v-else>
              <div class="hidden xl:flex items-center gap-2">
                <span class="text-white mr-4 font-bold">Hola {{ user.name }}</span>
                <button
                  @click="handleLogout"
                  class="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 rounded-full focus:ring-4 focus:ring-red-200 transition duration-200">
                  Cerrar sesión
                </button>
              </div>
            </template>
            <a class="flex items-center justify-center h-12 p-5 text-white border border-gray-300 xl:hidden rounded-full" href="#">
                <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.75 6.75003H1.25C0.559648 6.75003 0 7.30968 0 8.00003C0 8.69038 0.559648 9.25003 1.25 9.25003H18.75C19.4404 9.25003 20 8.69038 20 8.00003C20 7.30968 19.4404 6.75003 18.75 6.75003Z" fill="currentColor"></path>
                  <path d="M1.25 3.41669H18.75C19.4404 3.41669 20 2.85704 20 2.16669C20 1.47634 19.4404 0.916687 18.75 0.916687H1.25C0.559648 0.916687 0 1.47634 0 2.16669C0 2.85704 0.559648 3.41669 1.25 3.41669Z" fill="currentColor"></path>
                  <path d="M18.75 12.5834H1.25C0.559648 12.5834 0 13.143 0 13.8334C0 14.5237 0.559648 15.0834 1.25 15.0834H18.75C19.4404 15.0834 20 14.5237 20 13.8334C20 13.143 19.4404 12.5834 18.75 12.5834Z" fill="currentColor"></path>
                </svg>
            </a>
          </div>
        </nav>
        <div class="hidden absolute w-full z-40 px-8 lg:px-20 2xl:px-40">
          <div>
            <div class="bg-white rounded-3xl">
              <div class="flex flex-wrap divide-x divide-gray-100">
                <div class="w-7/12 py-20">
                  <div class="flex px-16 -m-8">
                    <div class="w-1-2 p-8">
                      <h3 class="mb-10 font-heading text-2xl font-bold">By industry</h3><a class="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium" href="#">Creative & Marketing agencies</a><a class="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium" href="#">Software & Engineering firms</a><a class="mb-6 block max- w-max text-lg hover:text-gray-700 font-medium" href="#">Architecture firms</a><a class="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium" href="#">Consulting businesses</a><a class="block max-w-max text-lg hover:text-gray-700 font-medium" href="#">Educational institutions</a>
                    </div>
                    <div class="w-1/2 p-8">
                      <h3 class="mb-10 font-heading text-2xl font-bold">By role</h3><a class="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium" href="#">For business owners</a>
                      <p class="text-sm mb-6 text-gray-500 font-medium">Nullam bibendum mollis enim, sed tempus lacus tempus nec. Etiam cursus nec neque at tempor.</p><a class="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium" href="#">For project managers</a>
                      <p class="text-sm mb-6 text-gray-500 font-medium">Nam ut neque nisi. Vestibulum volutpat feugiat libero, tempus ligula. Nullam ut diam sit amet turpis pretium.</p><a class="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium" href="#">For employees</a>
                      <p class="text-sm mb-6 text-gray-500 font-medium">Vivamus sapien enim, consequat ac volutpat a, ultrices quis enim. Cras scelerisque vel eros in consequat.</p>
                    </div>
                  </div>
                </div>
                <div class="flex-1 py-20">
                  <div class="px-16">
                    <h3 class="mb-10 font-heading text-2xl font-bold">Recommended articles</h3>
                    <div class="mb-6">
                      <div class="flex flex-wrap items-center -m-4">
                        <div class="w-auto p-4">
                          <div class="overflow-hidden rounded-3xl" style="width: 130px;height: 130px;"><img class="w-full h-full object-cover" src="/interlock-assets/navigations/article.png" alt=""/></div>
                        </div>
                        <div class="flex-1 p-4">
                          <h3 class="mb-6 text-xl font-medium leading-snug">2023 Remote Work: A Comprehensive Guide</h3><a class="flex flex-wrap items-center text-blue-500 hover:text-blue-600" href="#"><span class="mr-2 font-semibold transition duration-200">Read more</span>
                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor"></path>
                            </svg></a>
                        </div>
                      </div>
                    </div>
                    <div class="mb-6">
                      <div class="flex flex-wrap items-center -m-4">
                        <div class="w-auto p-4">
                          <div class="overflow-hidden rounded-3xl" style="width: 130px;height: 130px;"><img class="w-full h-full object-cover" src="/interlock-assets/navigations/article2.png" alt=""/></div>
                        </div>
                        <div class="flex-1 p-4">
                          <h3 class="mb-6 text-xl font-medium leading-snug">Mastering the Art of Project Management Success</h3><a class="flex flex-wrap items-center text-blue-500 hover:text-blue-600" href="#"><span class="mr-2 font-semibold transition duration-200">Read more</span>
                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor"></path>
                            </svg></a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="flex flex-wrap items-center -m-4">
                        <div class="w-auto p-4">
                          <div class="overflow-hidden rounded-3xl" style="width: 130px;height: 130px;"><img class="w-full h-full object-cover" src="/interlock-assets/navigations/article3.png" alt=""/></div>
                        </div>
                        <div class="flex-1 p-4">
                          <h3 class="mb-6 text-xl font-medium leading-snug">Optimal Work Management Software for Firms</h3><a class="flex flex-wrap items-center text-blue-500 hover:text-blue-600" href="#"><span class="mr-2 font-semibold transition duration-200">Read more</span>
                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor"></path>
                            </svg></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
          <div class="fixed inset-0 bg-black opacity-20"></div>
          <nav class="relative p-8 w-full h-full bg-white overflow-y-auto">
            <div class="flex flex-col justify-between h-full">
              <div class="flex items-center justify-between mb-8"><a class="pr-4" href="#"><img class="h-8" src="/images/logo-dark.svg" alt=""/></a><a href="#">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#252E4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></a></div>
              <ul class="flex flex-col gap-8 py-16">
                <li><a class="text-lg text-black hover:text-gray-700 font-medium transition duration-200" href="about.html">About Us</a></li>
                <li><a class="text-lg text-black hover:text-gray-700 font-medium transition duration-200" href="picing.html">Pricing</a></li>
                <li><a class="text-lg text-black hover:text-gray-700 font-medium transition duration-200" href="blog.html">Blog</a></li>
                <li><a class="text-lg text-black hover:text-gray-700 font-medium transition duration-200" href="contact.html">Contact Us</a></li>
              </ul>
              <div class="flex flex-col items-center gap-2"><a class="inline-flex justify-center items-center text-center w-full h-12 p-5 px-6 font-semibold text-black hover:text-black focus:text-black bg-transparent hover:bg-white focus:bg-white border border-gray-100 rounded-full focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-200" href="login.html">Login</a><a class="inline-flex justify-center items-center text-center w-full h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200" href="register.html">Get started</a></div>
            </div>
          </nav>
        </div>
        <div class="relative">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2">
              <div class="py-20 xl:pt-40 xl:pb-64 px-12 md:pr-0">
                <div class="relative z-10 max-w-3xl mx-auto">
                  <h1 class="mb-12 font-heading text-4xl md:text-5xl xl:text-6xl text-white font-bold"><span>Alaciado con Keratina (japonesa)</span></h1>
                  <lu>
                    <li class="text-xl text-white font-medium leading-relaxed text-left">Elimina el frizz.</li>
                    <li class="text-xl text-white font-medium leading-relaxed text-left">Estimula el crecimineto.</li>
                    <li class="text-xl text-white font-medium leading-relaxed text-left">Obtén brillo y sedosidad natural.</li>
                    <li class="text-xl text-white font-medium leading-relaxed text-left">No más herramientas térmicas.</li>
                    <li class="text-xl text-white font-medium leading-relaxed text-left">Hidrata y reestructura.</li>
                    <li class="text-xl text-white font-medium leading-relaxed text-left">Cabello lacio hasta por 5 meses.</li>
                  </lu>
                </div>
              </div>
            </div>
          </div>
          <div class="px-12 md:px-0 pb-20 md:pb-0 md:max-w-5xl md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2">
            <div class="flex flex-wrap items-end xl:justify-end -m-2 mb-2">
              <div class="hidden 2xl:block w-full 2xl:w-auto p-2 mr-6"><img class="object-cover mx-auto rounded-3xl" style="height: 465px;" src="/images/straightening.jpg" alt=""/></div>
            </div>
            <div class="hidden xl:flex flex-wrap xl:justify-end xl:pr-6 -m-2">
              <div class="w-full xl:w-auto p-2"><img class="object-cover mx-auto rounded-3xl" style="height: 222px;" src="/images/techniques.jpg" alt=""/></div>
              <div class="w-full xl:w-auto p-2">
                <div class="overflow-hidden rounded-3xl"><img class="object-cover mx-auto rounded-3xl transform hover:scale-105 transiiton duration-500" style="height: 280px;" src="/images/appointments.jpeg" alt=""/></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="mb-5 font-heading text-4xl md:text-5xl text-center font-bold text-black">Nuestros Resultados</h2>
      <h1 class="mb-10 text-lg font-bold text-black">Ultimos trabajos</h1>
      <div class="flex flex-wrap -m-5">
        <div class="w-full md:w-1/2 lg:w-1/3 p-5">
          <div class="px-10 py-16 h-full text-center bg-white rounded-3xl">
            <div class="flex items-center justify-center mb-6 mx-auto bg-orange-500 rounded-xl"><img class="h-[288px]" src="/images/result1.jpg" alt=""/></div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-5">
          <div class="px-10 py-16 h-full text-center bg-white rounded-3xl">
            <div class="flex items-center justify-center mb-6 mx-auto bg-blue-500 rounded-xl"><img class="h-[288px]" src="/images/result2.jpg" alt=""/></div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-5">
          <div class="px-10 py-16 h-full text-center bg-white rounded-3xl">
            <div class="flex items-center justify-center mb-6 mx-auto bg-purple-500 rounded-xl"><img class="h-[288px]" src="/images/result3.jpg" alt=""/></div>
          </div>
        </div>
      </div>
      <div class="text-right mr-10">
        <a class="text-lg text-white bg-purple-400 border border-purple-400 rounded-full px-4 py-2" href="#">Ver más</a>
      </div>
    </div>
  </section>
  <section class="relative py-24 md:py-36 bg-black"><img class="absolute top-0 left-0 w-full h-full object-cover select-none" src="/interlock-assets/gradients/gradient-how-it-work.png" alt=""/>
    <div class="relative container mx-auto px-4">
      <h3 class="mb-20 font-heading text-4xl xl:text-5xl text-white text-center font-bold">How it works</h3>
      <div class="max-w-5xl mx-auto">
        <div class="p-12 lg:p-24 bg-white bg-opacity-5 rounded-3xl">
          <div class="flex flex-wrap -m-6 mb-14">
            <div class="w-full md:w-auto p-6">
              <div class="relative flex items-center justify-center w-18 h-18 bg-blue-500 rounded-full">
                <div class="hidden md:block absolute -bottom-28 -mb-3 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 h-24 rounded-xl" style="width: 3px;"></div><span class="text-3xl text-white font-medium">1</span>
              </div>
            </div>
            <div class="w-full md:flex-1 p-6">
              <h3 class="mb-8 font-heading text-3xl md:text-4xl text-white font-medium">Streamlined Efficiency</h3>
              <p class="text-xl text-white font-light leading-normal">Experience a platform designed for maximum efficiency, ensuring a smooth and straightforward user journey from start to finish.</p>
            </div>
          </div>
          <div class="flex flex-wrap -m-6 mb-14">
            <div class="w-full md:w-auto p-6">
              <div class="relative flex items-center justify-center w-18 h-18 bg-pink-500 rounded-full">
                <div class="hidden md:block absolute -bottom-28 -mb-3 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 h-24 rounded-xl" style="width: 3px;"></div><span class="text-3xl text-white font-medium">2</span>
              </div>
            </div>
            <div class="w-full md:flex-1 p-6">
              <h3 class="mb-8 font-heading text-3xl md:text-4xl text-white font-medium">Intuitive Navigation</h3>
              <p class="text-xl text-white font-light leading-normal">Navigate effortlessly through our user-friendly interface, allowing you to easily access and manage all features with just a few clicks.</p>
            </div>
          </div>
          <div class="flex flex-wrap -m-6">
            <div class="w-full md:w-auto p-6">
              <div class="flex items-center justify-center w-18 h-18 bg-orange-500 rounded-full"><span class="text-3xl text-white font-medium">3</span></div>
            </div>
            <div class="w-full md:flex-1 p-6">
              <h3 class="mb-8 font-heading text-3xl md:text-4xl text-white font-medium">Seamless Integration</h3>
              <p class="text-xl text-white font-light leading-normal">Enjoy the convenience of seamless integration with other tools, providing a cohesive and comprehensive solution for your workflow needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-gray-100 py-12 px-6">
  <div class="max-w-2xl mx-auto text-center">
    <h2 class="mb-5 font-heading text-4xl md:text-5xl text-center font-bold text-black">Contáctanos</h2>
    <p class="text-gray-700 mb-8 text-lg">Puedes agendar tu cita por WhatsApp o correo electrónico.</p>

    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <!-- Botón de WhatsApp -->
      <a href="https://wa.me/2222074919" target="_blank"
        class="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-600 hover:text-black transition">
        📱 WhatsApp
      </a>

      <!-- Botón de Correo -->
      <a href="mailto:mtp2829@gmail.com"
        class="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-black transition">
        ✉️ Enviar Correo
      </a>
    </div>
  </div>
</section>
  <div>
    <section class="pt-20">
      <div class="container mx-auto px-4">
        <div class="max-w-xl pb-20 mx-auto text-center">
          <h2 class="mb-10 font-heading text-4xl font-medium">Suscríbete para recibir noticias</h2>
          <div class="relative p-1.5 bg-gray-50 rounded-2xl focus-within:ring-4 focus-within:ring-blue-200 sm:rounded-full transition duration-200">
            <div class="relative">
              <input class="py-4 px-6 sm:pr-40 w-full text-black placeholder-black font-semibold text-center sm:text-left bg-transparent outline-none" id="footers-input-04-1" type="text" placeholder="Escribe tu correo electrónico"/><a class="sm:absolute sm:top-0 sm:right-0 inline-flex justify-center items-center text-center w-full sm:w-auto h-14 sm:h-full py-2 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-2xl sm:rounded-full transition duration-200" href="#">Enviar</a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black">
        <div class="container mx-auto px-4">
          <div class="py-6">
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="w-auto p-2">
                <p class="text-white font-medium">Visita nuestras redes sociales</p>
              </div>
              <div class="w-auto p-2">
                <ul class="flex flex-wrap gap-2">
                  <li><a class="flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full transition duration-200" href="#">
                      <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3731 1.20056H14.7039L9.61187 7.02038L15.6022 14.9398H10.9118L7.23814 10.1367L3.03463 14.9398H0.702494L6.14886 8.71489L0.402344 1.20056H5.21177L8.53245 5.59079L12.3731 1.20056ZM11.5551 13.5448H12.8466L4.51001 2.52235H3.12411L11.5551 13.5448Z" fill="#060918"></path>
                      </svg></a></li>
                  <li><a class="flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full transition duration-200" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewbox="0 0 17 17" fill="none">
                        <g clip-path="url(#clip0_323_395)">
                          <path d="M0.25 1.89813C0.25 1.35919 0.438632 0.914572 0.815878 0.564277C1.19313 0.213966 1.68356 0.0388184 2.28716 0.0388184C2.87999 0.0388184 3.35963 0.211266 3.72611 0.556193C4.10336 0.911888 4.29199 1.37536 4.29199 1.94664C4.29199 2.46401 4.10876 2.89515 3.74228 3.24007C3.36503 3.59577 2.86921 3.77362 2.25483 3.77362H2.23866C1.64583 3.77362 1.16619 3.59577 0.79971 3.24007C0.433231 2.88438 0.25 2.43706 0.25 1.89813ZM0.460183 16.0451V5.2449H4.04947V16.0451H0.460183ZM6.03813 16.0451H9.62741V10.0144C9.62741 9.63718 9.67053 9.34616 9.75676 9.14138C9.90765 8.7749 10.1367 8.46501 10.4439 8.21172C10.7511 7.95842 11.1364 7.83177 11.5999 7.83177C12.8071 7.83177 13.4107 8.64555 13.4107 10.2731V16.0451H17V9.85277C17 8.25752 16.6228 7.04763 15.8682 6.22306C15.1137 5.3985 14.1167 4.98621 12.8772 4.98621C11.4867 4.98621 10.4035 5.58443 9.62741 6.78086V6.81319H9.61125L9.62741 6.78086V5.2449H6.03813C6.05968 5.58981 6.07046 6.66228 6.07046 8.46232C6.07046 10.2623 6.05968 12.7899 6.03813 16.0451Z" fill="#060918"></path>
                        </g>
                        <defs>
                          <clippath id="clip0_323_395">
                            <rect width="16.75" height="16.0063" fill="white" transform="translate(0.25 0.0388184)"></rect>
                          </clippath>
                        </defs>
                      </svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>