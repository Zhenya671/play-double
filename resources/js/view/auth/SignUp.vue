<template>
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div
            class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
        >
            <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div class="mt-12 flex flex-col items-center">
                    <h1 class="text-2xl xl:text-3xl font-extrabold">
                        Sign up
                    </h1>
                    <div class="w-full flex-1 mt-8">
                        <div class="flex flex-col items-center">
                            <SignGoogle/>
                            <SignGithub/>
                        </div>
                        <div class="my-8 border-b text-center">
                            <div
                                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                            >
                                Or sign up with e-mail
                            </div>
                        </div>
                        <SignUpForm />
                    </div>
                </div>
            </div>
            <Addition/>
        </div>
    </div>
</template>

<script>
import SignGoogle from "../../components/auth/SignGoogle.vue";
import SignGithub from "../../components/auth/SignGithub.vue";
import Addition from "../../components/auth/Addition.vue";
import SignUpForm from "../../components/auth/SignUpForm.vue";

export default {
    name: "SighUp",
    components: {SignUpForm, Addition, SignGithub, SignGoogle}
}
</script>

<style scoped>

</style>
