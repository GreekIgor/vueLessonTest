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
            <td>{{r.amount }}</td>
            <td>{{r.status }}</td>
            <td>
                <router-link v-slot="{navigate}" custom :to="{name: 'Request', params : {id: r.id}}">
                   <button class="btn" @click="navigate">Открыть</button>
                </router-link>
            </td>
            <td>dd</td>
        </tr>
        </tbody>
    </table>


</template>

<script>
    export default {
        name: "RequestTable",
        props: ['request']
    }
</script>

<style scoped>

</style>