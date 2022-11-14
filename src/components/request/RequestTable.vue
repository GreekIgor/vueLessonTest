<template>

    <h1 v-if="request.length === 0" class="text-center">Заявок нету</h1>
    <table v-else>
        <thead>
        <tr>
            <th>#</th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>Сумма</th>
            <th>Статус</th>
            <th>Деиствие</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(r, idx) in request" :key="r.id">
            <td>{{idx +1 }}</td>
            <td>{{r.fio }}</td>
            <td>{{r.phone }}</td>
            <td>{{currency(r.amount) }}</td>
            <td><AppStatus :type="r.status"/></td>
            <td>
                <router-link v-slot="{navigate}" custom :to="{name: 'Request', params : {id: r.id}}">
                   <button class="btn primary" @click="navigate">Открыть</button>
                </router-link>
            </td>
            <td>dd</td>
        </tr>
        </tbody>
    </table>


</template>

<script>
    import {currency} from '../../utils/curency'
    import AppStatus from '../ui/AppStatus'

    export default {
        name: "RequestTable",
        components: {AppStatus},
        props: ['request'],
        setup() {
            return {currency}
        }
    }
</script>

<style scoped>

</style>