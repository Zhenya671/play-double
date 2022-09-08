<template>
    <div class="mx-auto max-w-xs">
        <input
            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="email"
            placeholder="Email"
        />
        <input
            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="password"
            placeholder="Password"
        />
        <button
            class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        >
            <svg
                class="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <path d="M20 8v6M23 11h-6"/>
            </svg>
            <span class="ml-3">
                  Sign In
                </span>
        </button>
        <button
            class="w-full tracking-wide font-semibold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-2"
        @click="signup">
            <span class="ml-3">
                  Don't have account?
                </span>
        </button>
    </div>
</template>

<script>
export default {
    name: "SignInForm",
    methods: {
        signup: function () {
            this.$router.push({name: "signup"})
        }
    }
}
</script>

<style scoped>

</style>
