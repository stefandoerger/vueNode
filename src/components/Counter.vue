<template>

    <div class="countBox">

        <h1> {{ countTitle }} </h1>
        <h2>Count is: {{ count }} </h2>

        <p>
            <button @click="count += 1">Increment</button>
        </p>

    </div>

</template>

<script>

export default {

    data() {
        return {
            countTitle: 'Counter',
            count: 0
        };
    }

}

</script>

<style>

    .countBox {
        background-color: rgb(192, 192, 192);
        color: darkslategrey!important;
        padding: 1.5em;
        margin-bottom: .5em;
        font-size: 1em;
        color: whitesmoke;
    }

</style>