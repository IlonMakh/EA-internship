<template>
<section class="block__cover">
    <img class="block__cover-img" :src="image" />
    <div class="container">
        <p class="block__cover-content" contenteditable @input="checkContent($event)">
            {{ text }}
        </p>
    </div>
</section>
</template>

<script>
export default {
    name: "edit-cover-block",
    props: {
        text: String,
        image: String,
    },

    data() {
        return {
            textContent: "",
        };
    },

    methods: {
        checkContent($event) {
            this.textContent = $event.target.innerText;
        }
    },
};
</script>
