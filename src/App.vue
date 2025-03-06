
<template>
  <main>
    <!-- Left sidebar -->
    <div class="w-full h-full absolute left-0 top-0 bg-[rgba(0,0,0,0.4)]" v-if="showmenu"></div>
    <div
      class="h-[100vh] w-[72px] top-0 bg-white border-r border-gray-200 fixed"
      :class="{ 'border-none': showmenu }"
    >
      <RouterLink
        to="/"
        class="w-[50px] h-[50px] flex items-center justify-center mt-[25px] ml-[10px] hover:bg-gray-200 hover:rounded-[50%] cursor-pointer"
      >
        <img class="w-[20px] h-[20px]" src="/public/pinterest.png" alt="pinterrest" />
      </RouterLink>
      <RouterLink
        to="/"
        class="w-[50px] h-[50px] flex items-center justify-center mt-[25px] ml-[10px] hover:bg-gray-200 hover:rounded-[10px] cursor-pointer"
      >
        <i class="fa-solid fa-house text-[20px]"></i>
      </RouterLink>
      <div
        class="w-[50px] h-[50px] flex items-center justify-center mt-[25px] ml-[10px] hover:bg-gray-200 hover:rounded-[10px] cursor-pointer"
      >
        <i class="fa-regular fa-square-plus text-[20px]"></i>
      </div>
      <div
        class="w-[50px] h-[50px] flex items-center justify-center mt-[25px] ml-[10px] hover:bg-gray-200 hover:rounded-[10px] cursor-pointer"
      >
        <i class="fa-regular fa-bell text-[20px]"></i>
      </div>
      <div
        class="w-[50px] h-[50px] flex items-center justify-center mt-[25px] ml-[10px] hover:bg-gray-200 hover:rounded-[10px] cursor-pointer"
      >
        <i class="fa-regular fa-comment-dots text-[20px]"></i>
      </div>
      <!-- Bottom -->
      <div class="absolute bottom-7">
        <div
          class="w-[50px] h-[50px] flex items-center justify-center mt-[150px] ml-[10px] hover:bg-gray-200 hover:rounded-[10px] cursor-pointer"
        >
          <img class="w-[20px] h-[20px" src="/public/setting.png" alt="" />
        </div>
      </div>
      <!-- Bottom -->
    </div>
    <!-- Left sidebar -->
    <div class="w-[96%] fixed top-0 left-[72px] p-[15px] z-20 bg-white">
      <!-- Top search -->
      <div class="flex items-center justify-between w-full">
        <!-- mini x -->
        <div
          class="w-[42px] h-[42px] absolute right-[110px] top-[19px] hover:bg-gray-300 hover:rounded-[50%] cursor-pointer hidden justify-center items-center"
          @click="showmenu = false"
          :class="{ '!flex': showmenu }"
        >
          <i class="fa-solid fa-circle-xmark text-[22px]"></i>
        </div>
        <!-- mini x -->
        <form class="w-full">
          <RouterLink
            to="/search"
            class="w-full h-[50px] bg-gray-100 flex items-center rounded-[13px] hover:bg-gray-200 p-[10px]"
            :class="{ '!border-[4px] !border-solid !border-blue-300 ': showmenu }"
          >
            <i class="fa-solid fa-magnifying-glass text-[16px] text-gray-500 ml-[8px]" :class="{ '!hidden ': showmenu }"></i>
            <input
              class="w-full h-[42px] border bg-gray-100 hover:bg-gray-200 rounded-[10px] outline-none border-none p-[10px]"
              type="search"
              placeholder="Search"
              @focus="showmenu = true"
              @focusout="showmenu = false"
            />
          </RouterLink>
        </form>
        <div class="flex items-center">
          <RouterLink to="/accaunt"
            class="flex items-center justify-center w-[50px] h-[50px] hover:bg-gray-200 hover:rounded-[10px] ml-[10px] cursor-pointer"
          >
            <img
              class="w-[32px] h-[32px] rounded-[50%] hover:bg-gray-200"
              src="/public/photo cat.jpg"
              alt="photo cat"
            />
          </RouterLink>
          <div
            class="w-[25px] h-[25px] flex items-center justify-center mr-[7px] hover:bg-gray-200 hover:rounded-[50%] cursor-pointer"
          >
            <i class="fa-solid fa-chevron-down text-gray-500"></i>
          </div>
        </div>
      </div>
      <!-- Top search -->
      <!-- Menu -->
      <div
        class="w-full h-[500px] bg-white fixed top-15 left-[72px] z-20 rounded-br-[10px] rounded-bl-[10px] py-[10px] px-[40px] overflow-scroll scrool hidden"
        :class="{ '!block': showmenu }"
      >
        <p class="font-semibold mt-[20px]">Идеи для вас</p>
        <!-- top -->
        <div class="w-full h-[140px] flex items-center justify-between">
          <!-- 1 -->
          <div
            class="w-[343px] h-[132px] flex items-center justify-center rounded-[15px] bg-gray-100 mt-[10px] cursor-pointer hover:bg-gray-300"
          >
            <img
              class="w-[132px] h-[132px] rounded-tl-[15px] rounded-bl-[15px]"
              src="/public/menu_img-1.jpg"
              alt=""
            />
            <div class="w-full h-[132px] flex items-center justify-start ml-[15px]">
              <p class="font-semibold">Лого игры</p>
            </div>
          </div>
          <!-- 1 -->
          <!-- 2 -->
          <div
            class="w-[343px] h-[132px] flex items-center justify-center rounded-[15px] bg-gray-100 mt-[10px] cursor-pointer hover:bg-gray-300"
          >
            <img
              class="w-[132px] h-[132px] rounded-tl-[15px] rounded-bl-[15px]"
              src="/public/menu_img-2.jpg"
              alt=""
            />
            <div class="w-full h-[132px] flex items-center justify-start ml-[15px]">
              <p class="font-semibold">Темное аниме</p>
            </div>
          </div>
          <!-- 2 -->
          <!-- 3 -->
          <div
            class="w-[343px] h-[132px] flex items-center justify-center rounded-[15px] bg-gray-100 mt-[10px] cursor-pointer hover:bg-gray-300"
          >
            <img
              class="w-[132px] h-[132px] rounded-tl-[15px] rounded-bl-[15px]"
              src="/public/menu_img-3.jpg"
              alt=""
            />
            <div class="w-full h-[132px] flex items-center justify-start ml-[15px]">
              <p class="font-semibold">Смешные мемы</p>
            </div>
          </div>
          <!-- 3 -->
        </div>
        <!-- top 2-->
        <!-- bottom -->
        <div class="w-full h-[140px] flex items-center justify-between">
          <!-- 1 -->
          <div
            class="w-[343px] h-[132px] flex items-center justify-center rounded-[15px] bg-gray-100 mt-[10px] cursor-pointer hover:bg-gray-300"
          >
            <img
              class="w-[132px] h-[132px] rounded-tl-[15px] rounded-bl-[15px] object-cover"
              src="/public/menu_img-4.jpg"
              alt=""
            />
            <div class="w-full h-[132px] flex items-center justify-start ml-[15px]">
              <p class="font-semibold">Смешной футбол</p>
            </div>
          </div>
          <!-- 1 -->
          <!-- 2 -->
          <div
            class="w-[343px] h-[132px] flex items-center justify-center rounded-[15px] bg-gray-100 mt-[10px] cursor-pointer hover:bg-gray-300"
          >
            <img
              class="w-[132px] h-[132px] rounded-tl-[15px] rounded-bl-[15px]"
              src="/public/menu_img-5.jpg"
              alt=""
            />
            <div class="w-full h-[132px] flex items-center justify-start ml-[15px]">
              <p class="font-semibold">Эскизы открыток</p>
            </div>
          </div>
          <!-- 2 -->
          <!-- 3 -->
          <div
            class="w-[343px] h-[132px] flex items-center justify-center rounded-[15px] bg-gray-100 mt-[10px] cursor-pointer hover:bg-gray-300"
          >
            <img
              class="w-[132px] h-[132px] rounded-tl-[15px] rounded-bl-[15px]"
              src="/public/menu_img-6.jpg"
              alt=""
            />
            <div class="w-full h-[132px] flex items-center justify-start ml-[15px]">
              <p class="font-semibold">Изображения неба</p>
            </div>
          </div>
          <!-- 3 -->
        </div>
        <!-- bottom -->
        <p class="font-semibold mt-[20px]">Популярно в Pinterest</p>
        <!-- top -->
        <div class="w-full h-[140px] flex items-center justify-between">
          <!-- 1 -->
          <div
            class="w-[343px] h-[132px] flex items-center justify-center rounded-[15px] bg-gray-100 mt-[10px] cursor-pointer hover:bg-gray-300"
          >
            <img
              class="w-[132px] h-[132px] rounded-tl-[15px] rounded-bl-[15px]"
              src="/public/bmw_m5_f90.jpg"
              alt=""
            />
            <div class="w-full h-[132px] flex items-center justify-start ml-[15px]">
              <p class="font-semibold">Бмв м5 ф90</p>
            </div>
          </div>
          <!-- 1 -->
          <!-- 2 -->
          <div
            class="w-[343px] h-[132px] flex items-center justify-center rounded-[15px] bg-gray-100 mt-[10px] cursor-pointer hover:bg-gray-300"
          >
            <img
              class="w-[132px] h-[132px] rounded-tl-[15px] rounded-bl-[15px]"
              src="/public/bmw_m5_f90.jpg"
              alt=""
            />
            <div class="w-full h-[132px] flex items-center justify-start ml-[15px]">
              <p class="font-semibold">Бмв м5 ф90</p>
            </div>
          </div>
          <!-- 2 -->
          <!-- 3 -->
          <div
            class="w-[343px] h-[132px] flex items-center justify-center rounded-[15px] bg-gray-100 mt-[10px] cursor-pointer hover:bg-gray-300"
          >
            <img
              class="w-[132px] h-[132px] rounded-tl-[15px] rounded-bl-[15px]"
              src="/public/bmw_m5_f90.jpg"
              alt=""
            />
            <div class="w-full h-[132px] flex items-center justify-start ml-[15px]">
              <p class="font-semibold">Бмв м5 ф90</p>
            </div>
          </div>
          <!-- 3 -->
        </div>
        <!-- top 2-->
      </div>
      <!-- Menu -->
      <!-- mini question -->
      <div
        class="w-[56px] h-[56px] bg-white fixed bottom-6 right-6 z-10 rounded-[50%] flex items-center justify-center cursor-pointer shadow-lg border-[1px] border-black-100"
      >
        <i class="fa-solid fa-question text-[28px] font-bold"></i>
      </div>
      <!-- mini question -->
    </div>
  </main>
  <RouterView :show="showmenu" />
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const showmenu = ref(false)
</script>
