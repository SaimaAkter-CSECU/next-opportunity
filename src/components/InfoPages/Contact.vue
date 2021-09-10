<template>
    <div
        id="contact" 
        width="90%"
    >
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                v-model="name"
                :rules="inputRules"
                label="Name"
                required
                class="mb-4"
            ></v-text-field>

            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                class="mb-4"
            ></v-text-field>

            <v-select
                v-model="select"
                :items="items"
                item-value="id"
                item-text="name"
                :rules="[v => !!v || 'Item is required']"
                label="Type"
                required
                class="mb-4"
            ></v-select>

            <v-text-field
                v-model="subject"
                :rules="inputRules"
                label="Subject"
                required
                class="mb-4"
            ></v-text-field>

            <v-textarea
                v-model="message"
                :rules="inputRules"
                label="Message"
                auto-grow
                rows="3"
                row-height="25"
                dense
                class="mb-4"
            ></v-textarea>

            <!-- <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
            ></v-checkbox> -->

            <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                large
                @click="validate"
            >
                Validate
            </v-btn>

            <v-btn
                color="error"
                class="mr-4"
                large
                @click="reset"
            >
                Cancel
            </v-btn>
        </v-form>

    </div>
</template>

<script>
    export default {  
        name: 'Contact',
        data: () => ({
            valid: true,
            name: '',
            inputRules: [
                v => !!v || 'This Field is required',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                {
                    id: 1, 
                    name: 'General Query'
                },
                {
                    id: 2, 
                    name: 'Exceptional Query'
                },
                {
                    id: 3, 
                    name: 'General Query 2'
                }
            ],
            checkbox: false,
        }),
        methods: {
            validate () {
                this.$refs.form.validate()
            },
            reset () {
                this.$refs.form.reset()
            },
        },
    }
</script>