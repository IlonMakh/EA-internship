import { defineStore } from "pinia";
import idGenerator from "@/helpers/idGenerator";

export const useBlocksStore = defineStore("blocks", {
    state: () => ({
        blocks: [],
        stateHistory: [],
        defaultText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecatihic natus rerum sint expedita repellendus molestiae quisquam animi porro neque facilis sequi voluptate rem eligendi delectus esse explicabo, quod fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic natus rerum sint expedita repellendus molestiae quisquam animi porro neque facilis sequi voluptate rem eligendi delectus esse explicabo, quod fuga!`,
        defaultImg: "/images/cat3.jpg",
        defaultYoutube: "lqYAcBwvZkQ",
        defaultVimeo: "458037431",
        activeBlockId: "",
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
            this.saveState();
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
                } else if (type === "slider") {
                    pageBlocks.items.push({
                        images: new Array(4).fill(this.defaultImg),
                        type,
                        blockId: idGenerator(),
                    });
                } else if (type === "youtube" || type === "youtube-p") {
                    pageBlocks.items.push({
                        videoId: this.defaultYoutube,
                        type,
                        blockId: idGenerator(),
                    });
                } else if (type === "vimeo" || type === "vimeo-p") {
                    pageBlocks.items.push({
                        videoId: this.defaultVimeo,
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
                } else if (type === "slider") {
                    this.blocks.push({
                        siteId,
                        pageId,
                        items: [
                            {
                                images: new Array(4).fill(this.defaultImg),
                                type,
                                blockId: idGenerator(),
                            },
                        ],
                    });
                } else if (type === "youtube" || type === "youtube-p") {
                    this.blocks.push({
                        siteId,
                        pageId,
                        items: [
                            {
                                videoId: this.defaultYoutube,
                                type,
                                blockId: idGenerator(),
                            }
                        ],
                    });
                } else if (type === "vimeo" || type === "vimeo-p") {
                    this.blocks.push({
                        siteId,
                        pageId,
                        items: [
                            {
                                videoId: this.defaultVimeo,
                                type,
                                blockId: idGenerator(),
                            }
                        ],
                    });
                }
            }
        },

        deleteBlock(siteId, pageId, blockId) {
            this.saveState();
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
            this.saveState();
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );

            if (pageBlocks) {
                const index = pageBlocks.items.findIndex(
                    (block) => block.blockId === blockId
                );
                const copy = Object.assign({}, pageBlocks.items[index], {
                    blockId: idGenerator(),
                });

                pageBlocks.items.splice(index, 0, copy);
            }
        },

        raiseBlock(siteId, pageId, blockId) {
            this.saveState();
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
            this.saveState();
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
            this.saveState();
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );

            if (pageBlocks) {
                const index = pageBlocks.items.findIndex(
                    (block) => block.blockId === blockId
                );

                if (pageBlocks.items[index].type === "text") {
                    pageBlocks.items[index].text = info.text;
                } else if (pageBlocks.items[index].type === "cover") {
                    pageBlocks.items[index].text = info.text;
                    pageBlocks.items[index].img = info.img;
                } else if (pageBlocks.items[index].type === "slider") {
                    pageBlocks.items[index].images[info.index] = info.img;
                        if (info.index !== info.changeIndex) {
                            const image = pageBlocks.items[index].images.splice(info.index, 1);
                            
                            pageBlocks.items[index].images.splice(info.changeIndex, 0, image[0]);
                        }
                } else if (pageBlocks.items[index].type === "youtube" || pageBlocks.items[index].type === "vimeo" || pageBlocks.items[index].type === "youtube-p" || pageBlocks.items[index].type === "vimeo-p") {
                    pageBlocks.items[index].videoId = info.videoId;
                }
            }
        },

        openContent() {
            this.isContentOpen = true;
        },

        closeContent() {
            this.isContentOpen = false;
        },

        saveState() {
            this.stateHistory.push(JSON.stringify(this.blocks));
        },

        undoAction() {
            if (this.stateHistory.length) {
                this.blocks = JSON.parse(this.stateHistory.pop());
            }
        },
    },
});
