import authApi from '../../api/auth'
import { setItem } from '../../helpers/persistanceStroge';

export const mutationTypes = { //enum veya constant gibi kullanmamizi sagliyor
    registerStart: '[auth] Register start',
    registerSuccess:'[auth]Register success',
    registerFailure: '[auth]Register failure',

}

export default { 
    state: {
        value: 'my value',
        isSubmitting: false, ///initally we dont submit so enabled button
        isLoggedIn: null,
        currentUser: null,
        validationErrors: null, // undefined da diyebilirdik

    },
    // getters: {
    //     value: state => {
    //         return state.value;
    //     }
    // },
    mutations: {
        updateValue(state, payload) {
            state.value = payload;
        },
        [mutationTypes.registerStart](state){ //js stringe cevirmesi icin [] kullandik cunku arada . var 
            state.isSubmitting = true
            state.validationErrors = null
        },
        [mutationTypes.registerSuccess](state, payload){
            state.isSubmitting = false
            state.isLoggedIn = true
            state.currentUser = payload
        },
        [mutationTypes.registerFailure](state, payload){
            state.isSubmitting = false
            state.validationErrors = payload
        }
    },
    actions: {
        updateValue({commit}, payload) {
            commit('updateValue', payload);
        },
        register(context, credentials){
            return new Promise(resolve =>{
                context.commit(mutationTypes.registerStart)
                authApi.register(credentials)
                .then(response=>{
                    context.commit(mutationTypes.registerSuccess, response.data.user)
                    //2nd argument is our payload to transfer mutation
                    setItem("accessToken", response.data.user.token)
                    resolve(response.data.user)
                }).catch(result=>{
                    context.commit(mutationTypes.registerFailure, result.response.data.errors)
                    //2nd arg is our payload
                })

            })
        }
    }
};