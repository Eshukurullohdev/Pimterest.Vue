<template>
  <div class="w-full">
    <div class="w-full mt-24 flex justify-center items-center">
      <RouterLink
        to="/"
        class="w-[50px] h-[50px] rounded-full flex justify-center items-center absolute top-[120px] left-[150px] cursor-pointer hover:bg-gray-200"
      >
        <i class="fa-solid fa-arrow-left text-2xl"></i>
      </RouterLink>
      <!-- top -->
      <div class="w-[792px] h-[400px] rounded-l-[30px] flex justify-center items-center relative">
        <!-- left -->
        <div
          class="w-[396px] h-[396px] rounded-l-[30px] bg-cover bg-center relative"
          :style="{ backgroundImage: `url(${imageDetail.src.large})` }"
          v-if="imageDetail"
        >
          <div
            @click="showModal"
            @mouseenter="showp = true"
            @mouseleave="showp = false"
            class="w-[50px] h-[50px] rounded-full bg-white shadow-lg flex justify-evenly items-center absolute bottom-16 right-2 cursor-pointer z-10"
            :class="{ '!w-[165px]': showp }"
          >
            <p class="hidden font-bold" :class="{ '!block': showp }">Wiew Larger</p>
            <i class="fa-solid fa-arrows-up-down text-[20px] transform -rotate-45"></i>
          </div>
          <div
            @mouseenter="showp2 = true"
            @mouseleave="showp2 = false"
            class="w-[50px] h-[50px] rounded-full bg-white shadow-lg flex justify-evenly items-center absolute bottom-2 right-2 cursor-pointer z-10"
            :class="{ '!w-[120px]': showp2 }"
          >
            <p class="hidden font-bold" :class="{ '!block': showp2 }">Explore</p>
            <i class="fa-solid fa-magnifying-glass text-[20px]"></i>
          </div>
        </div>
        <!-- modal -->
        <div
          class="w-full h-dvh bg-[rgba(0,0,0,0.8)] fixed top-0 hidden darken2 p-[15px] justify-center items-center"
          :class="{ '!flex': showsave }"
          style="z-index: 1200"
        >
          <!-- mini x -->
          <div
            @click="closeModal"
            class="w-[50px] h-[50px] rounded-full bg-white hover:bg-gray-200 cursor-pointer flex items-center justify-center absolute left-5 top-5"
          >
            <i class="fa-solid fa-x text-[25px]"></i>
          </div>
          <!-- mini x -->
          <img class="w-[600px] h-[95%] rounded-[30px] object-cover" v-if="imageDetail" :src="imageDetail.src.large" alt="" />
          <div class="w-[245px] h-[50px] flex items-center justify-between absolute top-5 right-5">
            <span
              class="w-[120px] h-[50px] font-bold rounded-full bg-white text-[18px] flex items-center justify-evenly cursor-pointer hover:bg-gray-200"
              >Profile<i class="fa-solid fa-chevron-down text-[18px]"></i
            ></span>
            <span
              class="w-[120px] h-[50px] rounded-full bg-red-600 text-white text-[18px] tracking-[2px] flex items-center justify-center cursor-pointer hover:bg-red-700"
              >Save</span
            >
          </div>
        </div>
        <!-- modal -->
        <!-- left -->
        <div
          class="w-[396px] h-[396px] border-[1px] border-solid rounded-r-[30px] p-[10px] relative"
        >
          <!-- top -->
          <div class="w-[376px] h-[50px] flex items-center justify-center">
            <div
              class="w-[50px] h-[50px] rounded-full hover:bg-gray-200 cursor-pointer flex items-center justify-center"
            >
              <i class="fa-regular fa-heart text-2xl"></i>
            </div>
            <p class="cursor-pointer font-bold">495</p>
            <div
              class="w-[50px] h-[50px] rounded-full hover:bg-gray-200 cursor-pointer flex items-center justify-center"
            >
              <i class="fa-solid fa-arrow-up-from-bracket text-xl"></i>
            </div>
            <div
              class="w-[50px] h-[50px] rounded-full hover:bg-gray-200 cursor-pointer flex items-center justify-center"
            >
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </div>
            <div
              class="w-[100px] h-[50px] rounded-full hover:bg-gray-200 cursor-pointer flex items-center justify-evenly"
            >
              <p class="font-bold">Пр...</p>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <span
              class="w-[120px] h-[50px] rounded-full bg-red-600 text-white text-[18px] tracking-[2px] flex items-center justify-center cursor-pointer hover:bg-red-700"
              >Save</span
            >
          </div>
          <!-- top -->
          <!-- profile -->
          <div class="w-[376px] h-[30px] flex mt-[10px] ml-[10px]">
            <img
              class="w-[30px] h-[30px] rounded-full cursor-pointer"
              src="/public/photo cat.jpg"
              alt=""
            />
            <p class="cursor-pointer pl-[10px] mt-[5px]">IT House & English max</p>
          </div>
          <!-- profile -->
          <!-- comments -->
          <div class="w-[366px] flex justify-between mt-7 ml-[10px]">
            <p class="font-bold cursor-pointer">8 комментариев</p>
            <div
              class="w-[30px] h-[30px] rounded-full hover:bg-gray-200 cursor-pointer flex items-center justify-center"
            >
              <i class="fa-solid fa-chevron-down text-[20px]"></i>
            </div>
          </div>
          <!-- comments -->
          <!-- input for writing comment -->
          <div
            class="w-[366px] h-[50px] rounded-full ml-[5px] bg-[#e9e9e9] absolute bottom-[10px] flex items-center justify-between p-[15px]"
          >
            <input
              @keydown="showplane = true"
              @keydown.backspace="showplane = false"
              class="outline-none bg-gray-200"
              type="text"
              placeholder="Writing comment"
            />
            <!-- right -->
            <div class="w-[120px] flex justify-evenly">
              <div
                class="w-[28px] h-[28px] rounded-full hover:bg-gray-300 cursor-pointer flex items-center justify-center"
              >
                <i class="fa-solid fa-face-smile text-[20px]"></i>
              </div>
              <div
                class="w-[28px] h-[28px] rounded-full hover:bg-gray-300 cursor-pointer flex items-center justify-center"
              >
                <i class="fa-solid fa-star text-[20px]"></i>
              </div>
              <div
                class="w-[28px] h-[28px] rounded-full hover:bg-gray-300 cursor-pointer flex items-center justify-center"
              >
                <i class="fa-solid fa-image text-[20px]"></i>
              </div>
              <div
                class="w-[32px] h-[32px] rounded-full bg-red-600 hover:bg-red-700 cursor-pointer items-center justify-center hidden"
                :class="{ '!flex': showplane }"
              >
                <i class="fa-solid fa-paper-plane text-white"></i>
              </div>
            </div>
            <!-- right -->
          </div>
          <!-- input for writing comment -->
        </div>
      </div>
      <!-- top -->
    </div>
    <div class="w-full mt-5 ml-[90px]">
      <div
        class="w-full h-screen bg-[rgba(0,0,0,0.4)] absolute top-[90px] right-0 z-10"
        v-if="show"
      ></div>
      <div
        class="container pr-[7rem]"
        :style="{
          'grid-template-columns': gridTemplateColumn,
          'min-width': `${screenWidth}px`,
        }"
      >
        <RouterLink
          to="/detail/"
          v-for="item in items"
          :key="item"
          class="item relative"
          :style="{ gridRowEnd: `span ${item.span}`, backgroundImage: `url(${item.image})` }"
        >
          <div class="w-full hidden item__inner">
            <span
              class="px-4 py-2 bg-red-600 text-white absolute top-3 right-3 rounded-full text-sm"
              >Save</span
            >
            <div
              class="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[95%] flex justify-between items-center"
            >
              <a href="#" class="text-[12px] bg-white py-1 px-3 rounded-full font-semibold"
                ><i class="fa-solid fa-arrow-up rotate-45 mr-1"></i> Visit site</a
              >
              <div class="flex gap-2 text-black">
                <i
                  class="fa-solid fa-arrow-up-from-bracket w-7 h-7 text-sm flex justify-center items-center rounded-full cursor-pointer bg-white"
                ></i>
                <i
                  class="fa-solid fa-ellipsis w-7 h-7 text-sm flex justify-center items-center rounded-full cursor-pointer bg-white"
                ></i>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { createClient } from 'pexels'
import { useRoute } from 'vue-router'

const APIKEY = ref('R3h8TtlSNwEZ6POIiAEUUzTnAo3TY3gOziXW59dbORNPnb31MFdftUkF')

const client = createClient(APIKEY.value)

const showplane = ref(false)
const showp = ref(false)
const showp2 = ref(false)
const showsave = ref(false)

const router = useRoute()

const props = defineProps(['show'])

// 🟢 Reactive list yaratamiz
const items = ref([])
const images = ref([])

const imageDetail = ref()

// ekran o'lchamini olish

const screenWidth = ref(window.innerWidth)

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth
  console.log(screenWidth.value)
}

const gridTemplateColumn = computed(() => {
  if (screenWidth.value > 4000) return 'repeat(20, 1fr)'
  if (screenWidth.value > 1400) return 'repeat(7, 1fr)'
  if (screenWidth.value > 1216) return 'repeat(5, 1fr)'
  if (screenWidth.value > 1100) return 'repeat(4, 1fr)'
  if (screenWidth.value > 799) return 'repeat(3, 1fr)'
  if (screenWidth.value > 300) return 'repeat(2, 1fr)'
})

const fetchImageDetail = async () => {
  client.photos.show({ id: router.params.id }).then((res) => {
    imageDetail.value = res
  })
}

const fetchImages = () => {
  for (let x = 0; x < 100; x++) {
    images.value.push(`https://picsum.photos/200/6${x}`)
  }
}

const generateItems = () => {
  items.value = Array.from({ length: 100 }, () => ({
    span: Math.floor(Math.random() * 40) + 20, // 40 dan 20 gacha span
    image: images.value[Math.floor(Math.random() * images.value.length)], // Tasodifiy rasm tanlash
  }))
}

const showModal = () => {
  showsave.value = true
  document.body.style.overflow = 'hidden'
}
const closeModal = () => {
  showsave.value = false
  document.body.style.overflow = 'scroll'
}

// 🔵 Component yuklanganda itemlar hosil bo'ladi
onMounted(() => {
  fetchImages() // 100ta rasmni olish funskiyasi
  generateItems() // 100ta divni olish funksiyasi
  fetchImageDetail()
  updateScreenWidth()
  window.addEventListener('resize', updateScreenWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth)
})
</script>

<style>
</style>