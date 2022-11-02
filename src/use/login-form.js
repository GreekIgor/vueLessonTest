
import * as yup from 'yup'
import {useField, useForm} from 'vee-validate'
import {computed, watch } from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLoginForm() {
    const store = useStore()
    const router = useRouter()
    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} =useField(
        'email',
        yup
            .string()
            .trim()
            .required('Поле емаил обязательно для ввоада')
            .email('вы ввели не email не валидный')
    )

    const MIN_LENGTH = 6

    const {value: password, errorMessage: pError, handleBlur: pBlur} =useField(
        'password',
        yup
            .string()
            .trim()
            .required()
            .min(MIN_LENGTH, `длина пароля одлжна быть не менее ${MIN_LENGTH} символов введено`)
    )

    const isTooManyAttemps = computed( ()=> submitCount.value >= 3)

    watch(isTooManyAttemps, val => {
        if(val) {
            setTimeout(()=>submitCount.value = 0 , 1500)
        }
    })

    const onSubmit = handleSubmit( async values => {
        try {
            await   store.dispatch('auth/login', values)
            console.log('Form', values)
            router.push('/')
        } catch (e) {
            
        }
    })
        

    return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttemps
    }
}