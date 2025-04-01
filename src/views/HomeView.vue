<template>
  <div class="w-[96%] mt-24 ml-24">
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
        :to="{ name: 'detail', params: { id: item.id } }"
        v-for="item in images"
        :key="item"
        class="item relative"
        :style="{
          gridRowEnd: `span ${Math.floor(Math.random() * 40) + 20}`,
          backgroundImage: showLoading
            ? 'linear-gradient(90deg, rgba(136,113,36,0.772128919927346) 29%, rgba(189,139,34,0.6824930655856092) 61%)'
            : `url(${item.src.large})`,
        }"
      >
        <div class="w-full hidden item__inner">
          <span class="px-4 py-2 bg-red-600 text-white absolute top-3 right-3 rounded-full text-sm"
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
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { createClient } from 'pexels'

const props = defineProps(['show'])

const APIKEY = ref('R3h8TtlSNwEZ6POIiAEUUzTnAo3TY3gOziXW59dbORNPnb31MFdftUkF')

const client = createClient(APIKEY.value)


const items = ref([])
const images = ref([])
const showLoading = ref(true)



const screenWidth = ref(window.innerWidth)

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth
}


const gridTemplateColumn = computed(() => {
  if (screenWidth.value > 4000) return 'repeat(20, 1fr)'
  if (screenWidth.value > 1400) return 'repeat(7, 1fr)'
  if (screenWidth.value > 1216) return 'repeat(5, 1fr)'
  if (screenWidth.value > 1100) return 'repeat(4, 1fr)'
  if (screenWidth.value > 799) return 'repeat(3, 1fr)'
  if (screenWidth.value > 300) return 'repeat(2, 1fr)'
})

const fetchImages = async () => {
  client.photos.curated({ per_page: 200, page: 1 }).then((res) => {
    images.value = res.photos
  })
}


onMounted(() => {
  for (let x = 0; x < 100; x++) {
    images.value += x
  }
  setTimeout(() => {
    images.value = []
    fetchImages() 
    showLoading.value = false
  }, 3000)
  updateScreenWidth()
  window.addEventListener('resize', updateScreenWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth)
})
</script>

<style>
.container {
  display: grid;
  grid-auto-flow: dense;
  gap: 10px;
}
.item {
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  background-repeat: no-repeat;
  background-size: cover;
}
.item:hover .item__inner {
  display: block;
}
.item:hover {
  background-color: #888;
  background-blend-mode: multiply;
}
</style>
