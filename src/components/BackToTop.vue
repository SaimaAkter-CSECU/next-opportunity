<template>
    <v-btn
        fixed
        rounded-sm
        class="backToTop white--text"
        v-bind:class=" (scrollPosition < 100)? 'd-none': 'd-flex' "
        @click="toTop"
    >
        <v-icon large>mdi-chevron-up</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: 'BackToTop', 
        data: () => ({
            scrollPosition: null,
        }),
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY;
            },
            async toTop(){
                this.$vuetify.goTo(0)
            }
        },
        mounted() {
            window.addEventListener("scroll", this.updateScroll);
        },
    }
</script>