import { defineStore } from "pinia";
import idGenerator from "@/helpers/idGenerator";
import {
    createCoverBlock,
    createSliderBlock,
    createTextBlock,
    createVideoBlock,
    createVimeoBlock,
    createYoutubeBlock,
} from "@/helpers/createBlocks";

export const useBlocksStore = defineStore("blocks", {
    state: () => ({
        blocks: [],
        stateHistory: [],
        defaultText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecatihic natus rerum sint expedita repellendus molestiae quisquam animi porro neque facilis sequi voluptate rem eligendi delectus esse explicabo, quod fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic natus rerum sint expedita repellendus molestiae quisquam animi porro neque facilis sequi voluptate rem eligendi delectus esse explicabo, quod fuga!`,
        defaultImg: "/images/cat3.jpg",
        defaultYoutube: "lqYAcBwvZkQ",
        defaultVimeo: "458037431",
        activeBlockId: "",
        activeVideo: "",
        isContentOpen: false,
    }),

    actions: {
        setActiveVideo(video) {
            this.activeVideo = video;
        },
        setActiveBlock(blockId) {
            this.activeBlockId = blockId;
        },

        getActiveBlock(siteId, pageId, blockId) {
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );
            return pageBlocks?.items.find((item) => item.blockId === blockId);
        },

        getPageBlocks(siteId, pageId) {
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );
            return pageBlocks ? pageBlocks.items : [];
        },

        addBlock(siteId, pageId, type) {
            this.saveState();
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );

            switch (type) {
                case "text":
                    const textBlock = createTextBlock(this.defaultText);
                    pageBlocks ? pageBlocks.items.push(textBlock) : this.blocks.push({
                        siteId,
                        pageId,
                        items: [textBlock],
                    });
                    break;
                case "cover":
                    const coverBlock = createCoverBlock(this.defaultText, this.defaultImg);
                    pageBlocks ? pageBlocks.items.push(coverBlock) : this.blocks.push({
                        siteId,
                        pageId,
                        items: [coverBlock],
                    });
                    break;
                case "slider":
                    const sliderBlock = createSliderBlock(this.defaultImg);
                    pageBlocks ? pageBlocks.items.push(sliderBlock) : this.blocks.push({
                        siteId,
                        pageId,
                        items: [sliderBlock],
                    });
                    break;
                case "youtube":
                case "youtube-p":
                    const youtubeBlock = createYoutubeBlock(type, this.defaultYoutube);
                    pageBlocks ? pageBlocks.items.push(youtubeBlock) : this.blocks.push({
                        siteId,
                        pageId,
                        items: [youtubeBlock],
                    });
                    break;
                case "vimeo":
                case "vimeo-p":
                    const vimeoBlock = createVimeoBlock(type,this.defaultVimeo);
                    pageBlocks ? pageBlocks.items.push(vimeoBlock) : this.blocks.push({
                        siteId,
                        pageId,
                        items: [vimeoBlock],
                    });
                    break;
                case "video":
                    const videoBlock = createVideoBlock();
                    pageBlocks ? pageBlocks.items.push(videoBlock) : this.blocks.push({
                        siteId,
                        pageId,
                        items: [videoBlock],
                    });
                    break;
                default:
                    break;
            }
        },

        deleteBlock(siteId, pageId, blockId) {
            this.saveState();
            const pageBlocks = this.getPageBlocks(siteId, pageId);

            if (pageBlocks) {
                const blockIndex = pageBlocks.findIndex(
                    (block) => block.blockId === blockId
                );

                if (blockIndex !== -1) {
                    pageBlocks.splice(blockIndex, 1);
                }
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
                const copy = JSON.parse(
                    JSON.stringify(pageBlocks.items[index])
                );

                copy.blockId = idGenerator();
                pageBlocks.items.splice(index, 0, copy);
            }
        },

        raiseBlock(siteId, pageId, blockId) {
            this.saveState();
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );

            if (pageBlocks) {
                const blockIndex = pageBlocks.items.findIndex(
                    (block) => block.blockId === blockId
                );
                if (blockIndex > 0) {
                    const [block] = pageBlocks.items.splice(blockIndex, 1);
                    pageBlocks.items.splice(blockIndex - 1, 0, block);
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
                if (index < pageBlocks.items.length - 1) {
                    const block = pageBlocks.items[index];
                    pageBlocks.items[index] = pageBlocks.items[index + 1];
                    pageBlocks.items[index + 1] = block;
                }
            }
        },

        editBlock(siteId, pageId, blockId, info) {
            this.saveState();
            const pageBlocks = this.blocks.find(
                (item) => item.siteId === siteId && item.pageId === pageId
            );

            if (pageBlocks) {
                const block = pageBlocks.items.find(
                    (block) => block.blockId === blockId
                );

                if (!block) {
                    return;
                }

                switch (block.type) {
                    case "text":
                        block.text = info.text;
                        break;
                    case "cover":
                        block.text = info.text;
                        block.img = info.img;
                        break;
                    case "slider":
                        block.images[info.index] = info.img;
                        if (info.index !== info.changeIndex) {
                            const [image] = block.images.splice(info.index, 1);
                            block.images.splice(info.changeIndex, 0, image);
                        }
                        break;
                    case "youtube":
                    case "vimeo":
                    case "youtube-p":
                    case "vimeo-p":
                        block.videoId = info.videoId;
                        break;
                    case "video":
                        block.videoUrl = info.videoUrl;
                        break;
                    default:
                        break;
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
