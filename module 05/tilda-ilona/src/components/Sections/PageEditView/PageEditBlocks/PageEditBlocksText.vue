<template>
<section class="block__text">
    <div class="container">
        <p class="block__text-content" contenteditable @input="checkContent($event)">
            {{ text }}
        </p>
    </div>
</section>
</template>

<script>
export default {
    name: "edit-text-block",
    props: {
        text: String,
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
