<template>

    <h1 v-if="request.length === 0" class="text-center">Заявок нету</h1>
    <table v-else>
        <thead>
        <tr>
            <th>1</th>
            <th>2</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>dd</td>
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