<template>
    <div 
        id="local" 
    >
        <v-row>
            <v-col
                cols="12"
                xs="12"
                sm="6"
                class="d-flex flex-column align-center"
            >
                <v-img
                    :src="bangladeshFlag"
                    width="150"
                    height="90"
                >
                </v-img>
                <h4 class="mt-7 font-weight-regular">Youth Opportunities Bangladesh</h4>
                <p class="primary--text mt-3" >
                    <a href="#">Website</a> | <a href="#">Facebook Group</a>
                </p>
            </v-col>
            <v-col
                cols="12"
                xs="12"
                sm="6"
                class="d-flex flex-column align-center"
            >
                <v-img
                    :src="indonesiaFlag"
                    width="130"
                    height="90" 
                >
                </v-img>
                <h4 class="mt-7 font-weight-regular">Youth Opportunities Indonesia</h4>
                <p class="primary--text mt-3" >
                    <a href="#">Website</a> | <a href="#">Facebook Group</a>
                </p>
            </v-col>
        </v-row>   
    </div>
</template>

<script>
    import bangladeshFlag from '../../assets/image/Local/bangladesh_flag.png'
    import indonesiaFlag from '../../assets/image/Local/indonesia_flag.png'
    export default {  
        name: 'Local',
        data: () => ({
            bangladeshFlag: bangladeshFlag, 
            indonesiaFlag: indonesiaFlag
        }),
    }
</script>