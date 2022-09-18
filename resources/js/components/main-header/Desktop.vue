<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
            </div>
            <div class="-my-2 -mr-2 md:hidden">
                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Open menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
            </div>
            <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <button @click="signin" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</button>
                <button @click="signup" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</button>
            </div>
        </div>
    </div>
</template>

<script>
import {
    Bars3Icon,
} from '@heroicons/vue/24/outline'
import {PopoverButton} from "@headlessui/vue";

export default {
    name: "Desktop",
    components: {PopoverButton, Bars3Icon},
    methods: {
        signin: function () {
            this.$router.push({name: "signin"})
        },
        signup: function () {
            this.$router.push({name: "signup"})
        },
    }
}
</script>

<style scoped>

</style>
