<template>
    <div class="domain-modal" @click.self="closeDomain">
        <div class="domain-modal__content">
            <button class="domain-modal__close" @click="closeDomain">
                <svg><use xlink:href="#close"></use></svg>
            </button>
            <form class="domain-modal__form">
                <input class="domain-modal__input" type="text" placeholder="Имя домена">
                <button class="domain-modal__save" @click.self.prevent="closeDomain">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'domain-modal',

    methods: {
        closeDomain() {
            this.$emit("closeDomain");
        },
    }
};
</script>