<template>
    <div id="SubPageBanner">
        <v-container 
            class="ps-md-7 ps-sm-5"
        >
            <h1 class="white--text font-weight-bold">{{pageTitle}}</h1>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'SubPageBanner',
        data: () => ({
            pageTitle: '', 
        }),
        watch: {
            $route: {
                immediate: true,
                handler(to) {
                    this.pageTitle = to.meta;
                    // console.log(to);
                    // console.log(from);

                    this.loading = true; 
                    setTimeout(() => (this.loading = false), 5000); 
                }
            },
        }, 
    }
</script>