<template>
<!-- <div>
    <h1>test</h1>
</div> -->
    <div class="auth-page">
        <!-- <h1>test</h1> -->
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign Up</h1>
                    <p class="text-xs-center">
                        <router-link :to="{name: 'login'}">Need an account?</router-link>
                            
                    </p>
                    VALIDATION ERRORS
                    <mcv-validation-errors v-if="validationErrors"
                    :validation-errors="validationErrors">

                    </mcv-validation-errors>
                    <!-- //McvValidationErrors olmasina ragmen -->
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input type="text" v-model="username" placeholder="Username" class="form-control form-control-lg"/>
                        </fieldset>

                        <fieldset class="form-group">
                            <input type="email" v-model="email" placeholder="Email" class="form-control form-control-lg"/>
                        </fieldset>

                        <fieldset class="form-group">
                            <input type="password" v-model="password" placeholder="Password" class="form-control form-control-lg"/>
                        </fieldset>

                        <button class="btn btn-lg btn-primary pull-xs-right" 
                        :disabled="isSubmitting">Sign Up</button>
                        <!-- {{count}} -->
                        
                    </form>
                    <!-- <button @click="increaseCounter">increment</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import McvValidationErrors from '../components/ValidationErrors.vue'
    export default {
        name: "McvRegister", // to differentiate 3rd library app
        components:{
            McvValidationErrors
        },
        data(){
            return {
                email: "",
                password:"",
                username:""
            }
        },
        computed: {
            // will we calculated everytime so this will get data from our state to render
            count(){
                console.log("store", this.$store)
                return this.$store.state.count
            },
            isSubmitting(){
                return this.$store.state.auth.isSubmitting
            },
            validationErrors(){
                return this.$store.state.auth.validationErrors
            }
        },
        methods:{
            increaseCounter(){
                console.log("increaseCounter")
                this.$store.commit("increment")// name of the mutation , its under index.js in this case
            },
            onSubmit(){
                console.log("onSubmit")
                // return this.$store.commit("registerStart") iptall ettik cunku action kullanacagiz
                this.$store.dispatch("register",{
                    email: this.email, username: this.username , password: this.password
                }).then(()=>{
                    this.$router.push({name: "home"}) //redirection homepage
                })
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>