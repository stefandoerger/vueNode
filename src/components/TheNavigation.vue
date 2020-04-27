<template>
    <nav id="nav">
        <ul class="nav-links">
            <li class="links">
                <router-link to="/">
                    Home
                </router-link>
            </li>
            <li
                v-for="destination in destinations"
                :key="destination.name"
                class="links"
            >
                <router-link
                    :to="{
                        name: 'DestinationDetails',
                        params: {slug: destination.slug}
                    }"
                >
                    {{destination.name}}
                </router-link>

            </li>
        </ul>
    </nav>
</template>

<script>
import store from "@/store";
export default {
    data() {
        return {
            destinations: store.destinations
        }
    }

}
</script>

<style scoped>

#nav {
    padding: 30px;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: 1px solid grey;
    z-index: 1;
}

#nav ul {
    display: flex;
    justify-content: space-evenly ;
    align-items: center;
    list-style: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>