import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export function  useRequestForm(fn) {

    const {isSubmitting, handleSubmit} = useForm( {
        initialValues: {
            status: 'active'
        }
    })

    const {value: fio, errorMessage: fError, handleBlur: fBlur}  =useField(
        'fio',
        yup.string()
        .trim()
        .required('Введите фио клиента')
        )
    const {value: phone, errorMessage: pError, handleBlur: pBlur}  =useField(
        'phone',
        yup.string()
        .trim()
            .min(5, 'минимальное значение поля телефон равно 5')
        .required('поле телефон обязательно для заполнения')
        )
    const {value: amount, errorMessage: aError, handleBlur: aBlur}  =useField(
        'amount',
        yup.number()
            .required('Введите сумму это поле обязательно для заполнения')
            .min(0,'Сумма не может быть меньше нуля')
        )
    const {value: status}  =useField('status')

    const onSubmit = handleSubmit(fn)

    return {
    status,
    isSubmitting,
    onSubmit,
        fio,
        fError,
        fBlur,
        phone,
        pError,
        pBlur,
        amount,
        aError,
        aBlur,
        status
    }

}