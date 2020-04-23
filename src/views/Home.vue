<template>
  <div class="home">
      <h1>All Destinations</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <div class="destination">
        <div v-for="destination in destinations"
            :key="destination.name">

                <router-link :to="{name: 'DestinationDetails', params: { slug: destination.slug } }">
                <!-- Named-Routes Link to view-file -->
                <!-- instead of -->
                <!-- <router-link :to="destination.slug"> -->
                    <h2> {{ destination.name }} </h2>
                </router-link>

                <figure>
                    <router-link :to="{name: 'DestinationDetails', params: { slug: destination.slug } }">
                        <img
                        :src="require(`@/assets/${destination.image}`)"
                        :alt="destination.name"
                        />
                    </router-link>
                </figure>

        </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "Home",
  components: {},
    data() {
        return {
            destinations: store.destinations
        };
    }
};
</script>

<style scoped>

    .destination  {
        display: flex;
        justify-content: space-between;
    }

    .destination img {
        width: 100%;
    }

</style>