<template>
    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
                leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="px-5 pt-5 pb-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto"
                                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                 alt="Your Company"/>
                        </div>
                        <div class="-mr-2">
                            <PopoverButton
                                class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Close menu</span>
                                <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
                            </PopoverButton>
                        </div>
                    </div>
                    <div class="mt-6">
                        <nav class="grid gap-y-8">
                            <a v-for="item in solutions" :key="item.name" :href="item.href"
                               class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                                <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-indigo-600"
                                           aria-hidden="true"/>
                                <span class="ml-3 text-base font-medium text-gray-900">{{ item.name }}</span>
                            </a>
                        </nav>
                    </div>
                </div>
                <div class="space-y-6 py-6 px-5">
                    <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>

                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>
                        <a v-for="item in resources" :key="item.name" :href="item.href"
                           class="text-base font-medium text-gray-900 hover:text-gray-700">{{ item.name }}</a>
                    </div>
                    <div>
                        <button @click="signup"
                           class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign
                            up</button>
                        <p class="mt-6 text-center text-base font-medium text-gray-500">
                            Existing customer?
                            {{ ' ' }}
                            <a @click="signin" class="text-indigo-600 hover:text-indigo-500">Sign in</a>
                        </p>
                    </div>
                </div>
            </div>
        </PopoverPanel>
    </transition>
</template>

<script>
import {PopoverButton, PopoverPanel} from "@headlessui/vue";
import {XMarkIcon} from '@heroicons/vue/24/outline'

export default {
    name: "header",
    components: {PopoverButton, PopoverPanel, XMarkIcon},
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
