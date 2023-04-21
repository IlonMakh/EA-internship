<template>
<div class="page-edit__modal-blocks">
    <div class="blocks__item" @click="addBlock">
        <h6 class="blocks__item-title">Блок с текстом</h6>
        <p class="blocks__item-description">Выравнивание текста посередине</p>
    </div>
</div>
</template>

<script>
export default {
    name: "edit-text-tab",

    data() {
        return {};
    },

    methods: {
        addBlock() {
            this.$emit("addBlock", 'text');
        }
    },
};
</script>
