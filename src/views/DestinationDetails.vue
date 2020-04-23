<template>
    <div>
        <section>
            <h2>{{ destination.name }}</h2>
            <img :src="require(`@/assets/${destination.image}`)" alt="destination.name">
            <p>{{destination.description}}</p>
        </section>
        <section>
            <h2>
                Top Experiences in {{ destination.name }}
            </h2>
            <div class="cards">
                <div v-for="experience in destination.experiences"
                :key="experience.slug"
                class="card">
                    <router-link
                    :to="{
                        name: 'experienceDetails',
                        params: { experienceSlug: experience.slug}
                    }">
                        <img :src="require(`@/assets/${experience.image}`)"
                        alt="experience.name">
                        <span class="card__test">
                            {{ experience.name }}
                        </span>
                    </router-link>
                </div>
            </div>
            <router-view :key="$route.path"/>
        </section>
    </div>

</template>

<script>
import store from "@/store.js";
export default {
    data() {
        return {
            // slug:this.$route.params.slug
            // Not necessary, but makes it cleaner. Otherwise you write each time this.$route.params.....
            // Not needed anymore, since we use props
        }
    },
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    computed: {

        destination() {
            return store.destinations.find(
                destination => destination.slug === this.slug
            )
        }

    }
}
</script>