import { defineStore } from "pinia";
import idGenerator from "@/helpers/idGenerator";

export const useBlocksStore = defineStore("blocks", {
    state: () => ({
        blocks: [],

        defaultText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecatihic natus rerum sint expedita repellendus molestiae quisquam animi porro neque facilis sequi voluptate rem eligendi delectus esse explicabo, quod fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic natus rerum sint expedita repellendus molestiae quisquam animi porro neque facilis sequi voluptate rem eligendi delectus esse explicabo, quod fuga!`,

        defaultImg: "/images/cat3.jpg",
        activeBlockId: '',
        isContentOpen: false,
    }),

    actions: {
        setActiveBlock(blockId) {
            this.activeBlockId = blockId;
        },

        getActiveBlock(siteId, pageId, blockId) {
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );
            if (pageBlocks) {
                const activeBlock = pageBlocks.items.find(
                    (item) => item.blockId === blockId
                );
                return activeBlock;
            }
        },

        getPageBlocks(siteId, pageId) {
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );
            if (pageBlocks) {
                return pageBlocks.items;
            } else {
                return [];
            }
        },

        addBlock(siteId, pageId, type) {
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );
            if (pageBlocks) {
                if (type === "text") {
                    pageBlocks.items.push({
                        text: this.defaultText,
                        type,
                        blockId: idGenerator(),
                    });
                } else if (type === "cover") {
                    pageBlocks.items.push({
                        text: this.defaultText,
                        img: this.defaultImg,
                        type,
                        blockId: idGenerator(),
                    });
                }
            } else {
                if (type === "text") {
                    this.blocks.push({
                        siteId,
                        pageId,
                        items: [
                            {
                                text: this.defaultText,
                                type,
                                blockId: idGenerator(),
                            },
                        ],
                    });
                } else if (type === "cover") {
                    this.blocks.push({
                        siteId,
                        pageId,
                        items: [
                            {
                                text: this.defaultText,
                                img: this.defaultImg,
                                type,
                                blockId: idGenerator(),
                            },
                        ],
                    });
                }
            }
        },

        deleteBlock(siteId, pageId, blockId) {
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );
            if (pageBlocks) {
                const index = pageBlocks.items.findIndex(
                    (block) => block.blockId === blockId
                );
                pageBlocks.items.splice(index, 1);
            }
        },

        copyBlock(siteId, pageId, blockId) {
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );
            if (pageBlocks) {
                const index = pageBlocks.items.findIndex(
                    (block) => block.blockId === blockId
                );

                const copy = Object.assign({}, pageBlocks.items[index], { blockId: idGenerator() });
                pageBlocks.items.splice(index, 0, copy);
                console.log(pageBlocks.items);
            }
        },

        raiseBlock(siteId, pageId, blockId) {
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );
            if (pageBlocks) {
                const index = pageBlocks.items.findIndex(
                    (block) => block.blockId === blockId
                );
                if (index) {
                    const block = pageBlocks.items[index];
                    pageBlocks.items.splice(index, 1);
                    pageBlocks.items.splice(index - 1, 0, block);
                }
            }
        },

        lowerBlock(siteId, pageId, blockId) {
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );
            if (pageBlocks) {
                const index = pageBlocks.items.findIndex(
                    (block) => block.blockId === blockId
                );
                if (index !== pageBlocks.items.length - 1) {
                    const block = pageBlocks.items[index];
                    pageBlocks.items.splice(index, 1);
                    pageBlocks.items.splice(index + 1, 0, block);
                }
            }
        },

        editBlock(siteId, pageId, blockId, info) {
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );
            if (pageBlocks) {
                const index = pageBlocks.items.findIndex(
                    (block) => block.blockId === blockId
                );

                if (pageBlocks.items[index].type === 'text') {
                    pageBlocks.items[index].text = info.text;
                } else if (pageBlocks.items[index].type === 'cover') {
                    pageBlocks.items[index].text = info.text;
                    pageBlocks.items[index].img= info.img;
                }
            }
        },

        openContent() {
            this.isContentOpen = true;
        },

        closeContent() {
            this.isContentOpen = false;
        },
    },
});
