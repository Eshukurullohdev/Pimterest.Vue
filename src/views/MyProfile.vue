<template>
    <RouterLink to="/account" class="w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer absolute top-[100px] left-[90px]">
        <i class="fa-solid fa-arrow-left text-[24px]"></i>
    </RouterLink>
    <div class="w-[100%] mt-24 flex items-center justify-center">
        <div class="flex items-center justify-center flex-col">
            <img class="w-[120px] h-[120px] rounded-full" src="/public/photo cat.jpg" alt="">
            <div>
                <h1 class="text-[36px] font-bold">Nurmuhammad Sodiqjonov</h1>
                <div class="flex items-center justify-center">
                    <i class="fa-solid fa-lock text-[#767676] text-[20px] mt-[15px] mb-[15px]"></i>
                </div>
                <div class="flex items-center justify-center gap-1">
                    <i class="fa-brands fa-pinterest text-[#767676]"></i>
                    <p class="text-[#767676] text-[14px] font-normal">snn_dev</p>
                </div>
                <div class="flex items-center justify-center mt-[10px]">
                    <p>0 following</p>
                </div>
                <div class="flex items-center justify-center gap-2 mt-4">
                    <button class="w-[72px] h-[48px] bg-[#E9E9E9] rounded-3xl flex items-center justify-center font-bold">Share</button>
                    <button class="w-[111px] h-[48px] bg-[#E9E9E9] rounded-3xl flex items-center justify-center font-bold">Edit profile</button>
                </div>
            </div>
        </div>
    </div>
    <div class="w-[100%] text-center flex items-center justify-center mt-[100px]">
            <div>
                <div class="flex items-center justify-center">
                    <img src="https://s.pinimg.com/webapp/boards-cf40ced5.svg" alt="">
                </div>
                <div class="mt-4">
                    <span class="font-bold">Keep track of what inspires you</span>
                    <h1 class="mt-2">Boards help you organize the Pins you save <br> into collections</h1>
                    <button class="w-[140px] text-white mt-4 h-[40px] border-[1px] bg-[#e60023] hover:bg-red-700 rounded-3xl font-bold">Create a board</button>
                </div>
            </div>
        </div>
</template>