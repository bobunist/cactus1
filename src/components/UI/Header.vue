<template>
    <div class="w-full h-[70px] bg-primary flex align-center">
        <img src="@/assets/logo.png" class="w-[50px] h-[50px] self-center ml-4">
        <div class="flex flex-col justify-center ml-4">
            <p class="text-white text-xl">кактус</p>
            <p class="text-white text-sm">сайт для продажи б/у вещей</p>
        </div>
        <div class="text-white text-base ml-auto mr-4 flex items-center space-x-5">
            <RouterLink to="/">
                <p>Главная страница</p>
            </RouterLink>
            <RouterLink to="/auth">
                <p>Вход</p>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-header'
}
</script>

<style></style>