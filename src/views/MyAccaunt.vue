<template>
    <div class="w-[96%] ml-[70px] mt-[84px] h-[80px]">
        <div class=" flex items-center justify-center">
            <div class="w-[80%] flex items-center justify-between">
                <div>
                    <div>

                        <h1 class="text-[36px] font-bold">Your saved ideas
                        </h1>
                    </div>
                    <div style="transform: translateY(40px);" class="flex gap-4">
                        <span class="font-bold">Pins</span>
                        <span class="font-bold">Boards</span>
                        <span class="w-[50px] h-[3px] bg-[#333] rounded-lg relative top-[30px] right-[70px]"></span>
                    </div>
                </div>
                <div class="flex justify-center gap-4">
                    <div
                        class="w-[50px] h-[50px] bg-[#5866B8] rounded-full flex items-center justify-center text-white text-[20px]">
                        S</div>
                    <div>
                        <h1 class="font-bold text-[20px]">shukurulloh ergashev</h1>
                        <span>0 following</span>
                    </div>
                    <RouterLink to="/profile" class="w-[110px] h-[40px] bg-[#E9E9E9] rounded-3xl flex items-center justify-center font-bold">View profile</RouterLink>
                </div>
            </div>
        </div>
        <div style="transform: translateY(80px) translateX(145px);" class="w-[80%] flex items-center justify-between">
            <div class="flex gap-4 items-center">
                <i class="text-[20px] fa-solid fa-sliders"></i>
                <button class="w-[71px] h-[40px] border-[1px] rounded-3xl font-bold">Group</button>
            </div>
            <div>
                <i class="text-[25px] fa-solid fa-plus"></i>
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
                    <button class="w-[140px] text-white mt-4 h-[40px] border-[1px] bg-[#e60023] rounded-3xl font-bold">Create a board</button>
                </div>
            </div>
        </div>
    </div>
</template>
