<template>
    <div class="flex">
        <h1>
            Hi there!
        </h1>
        <button type="button" @click="signin">Sign In</button>
    </div>

</template>

<script>
export default {
    name: "MainPaige",
    methods: {
        signin: function () {
            this.$router.push({name: "signin"})
        }
    }
}
</script>

<style scoped>

</style>
