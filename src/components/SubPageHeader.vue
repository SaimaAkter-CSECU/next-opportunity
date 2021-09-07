<template>
    <div>
        <v-navigation-drawer 
            v-model="sideNavbar"
            absolute
            temporary
        >
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Application
                </v-list-item-title>
                <v-list-item-subtitle>
                    subtext
                </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
                <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar 
            dense
            color="white"
        >
            <v-app-bar-nav-icon
                @click.native.stop= "sideNavbar = !sideNavbar" 
                class="hidden-md-and-up"
            >
            </v-app-bar-nav-icon>

            <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: 'SubPageHeader',
        data: () => ({
            sideNavbar: false, 
            items: [
                {
                    icon: 'mdi-plus', 
                    title: 'Acfyvgbhinj'
                }, 
                {
                    icon: 'mdi-plus', 
                    title: '2 Acfyvgbhinj'
                }, 
                {
                    icon: 'mdi-plus', 
                    title: '3 Acfyvgbhinj'
                }, 
            ]
        })
    }
</script> 