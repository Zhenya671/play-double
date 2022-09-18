<template>
    <Popover class="relative bg-white">
        <Desktop />
        <Mobile />
    </Popover>

</template>

<script>
import Mobile from "../components/main-header/Mobile.vue";
import { Popover} from '@headlessui/vue'
import Desktop from "../components/main-header/Desktop.vue";

export default {
    name: "MainPaige",
    components: {
        Desktop, Popover, Mobile
    },
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
