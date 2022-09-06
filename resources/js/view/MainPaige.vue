<template>
    <h1>
        Hi there!
    </h1>
</template>

<script>
export default {
    name: "MainPaige",
    mounted() {
        if (!window.Laravel) {
            this.$router.push({
                path: '/login'
            });
        }
    }
}
</script>

<style scoped>

</style>
