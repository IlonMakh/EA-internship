import { defineStore } from "pinia";
import idGenerator from "@/helpers/idGenerator";

export const useEditViewStore = defineStore('editViewStore', {
    state: () => ({
        blocks: [],

        defaultText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        hic natus rerum sint помогите мне нужен стейт менеджер expedita repellendus molestiae quisquam animi
        porro neque facilis sequi voluptate rem eligendi delectus esse
        explicabo, quod fuga! Если сзади смешной кот, то это просто я, когда увидела очередную порцию заданий на день.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Obcaecati hic natus rerum sint expedita
        repellendus molestiae quisquam animi помогите porro neque facilis sequi
        voluptate rem eligendi delectus esse explicabo, quod fuga!`,

        defaultImg: "/images/cat3.jpg",
    }),

    actions: {
        addBlock(type) {
            if (type === "text") {
                this.blocks.push({
                    text: this.defaultText,
                    type,
                    blockId: idGenerator(),
                });
            } else if (type === "cover") {
                this.blocks.push({
                    text: this.defaultText,
                    img: this.defaultImg,
                    type,
                    blockId: idGenerator(),
                });
            }
        },

        deleteBlock(id) {
            const index = this.blocks.findIndex(block => block.blockId === id);
            this.blocks.splice(index, 1);
        },

        copyBlock(id) {
            const index = this.blocks.findIndex(block => block.blockId === id);
            this.blocks.splice(index, 0, this.blocks[index]);
        },

        raiseBlock(id) {
            const index = this.blocks.findIndex(block => block.blockId === id);
            if (index) {
                const block = this.blocks[index];
                this.blocks.splice(index, 1);
                this.blocks.splice(index - 1, 0, block);
            }
        },

        lowerBlock(id) {
            const index = this.blocks.findIndex(block => block.blockId === id);
            if (index !== this.blocks.length - 1) {
                const block = this.blocks[index];
                this.blocks.splice(index, 1);
                this.blocks.splice(index + 1, 0, block);
            }
        },
    },
});
