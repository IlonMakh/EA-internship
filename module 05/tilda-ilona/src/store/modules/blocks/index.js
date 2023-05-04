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
import { getLocalStorageArray, getLocalStorageValue } from "@/helpers/localStorageCheck";

const BLOCKS = getLocalStorageArray('blocks');
const STATE_HISTORY = getLocalStorageArray('stateHistory');
const ACTIVE_BLOCK_ID = getLocalStorageValue('activeBlockId');
const ACTIVE_VIDEO = getLocalStorageValue('activeVideo');

export const useBlocksStore = defineStore("blocks", {
    state: () => ({
        blocks: BLOCKS,
        stateHistory: STATE_HISTORY,
        defaultText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecatihic natus rerum sint expedita repellendus molestiae quisquam animi porro neque facilis sequi voluptate rem eligendi delectus esse explicabo, quod fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic natus rerum sint expedita repellendus molestiae quisquam animi porro neque facilis sequi voluptate rem eligendi delectus esse explicabo, quod fuga!`,
        defaultImg: "/images/cat3.jpg",
        defaultYoutube: "lqYAcBwvZkQ",
        defaultVimeo: "458037431",
        activeBlockId: ACTIVE_BLOCK_ID,
        activeVideo: ACTIVE_VIDEO,
        isContentOpen: false,
    }),

    actions: {
        updateBlocksState() {
            this.blocks = getLocalStorageArray('blocks');
            this.stateHistory = getLocalStorageArray('stateHistory');
            this.activeBlockId = getLocalStorageValue('activeBlockId');
            this.activeVideo = getLocalStorageValue('activeVideo');
        },

        setActiveVideo(video) {
            this.activeVideo = video;
            localStorage.setItem("activeVideo", this.activeVideo);
        },
        setActiveBlock(blockId) {
            this.activeBlockId = blockId;
            localStorage.setItem("activeBlockId", this.activeBlockId);
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

                    pageBlocks ? pageBlocks.items.push(textBlock) : this.addBlockGroup(siteId, pageId, textBlock);
                    break;

                case "cover":
                    const coverBlock = createCoverBlock(this.defaultText, this.defaultImg);

                    pageBlocks ? pageBlocks.items.push(coverBlock) : this.addBlockGroup(siteId, pageId, coverBlock);
                    break;

                case "slider":
                    const sliderBlock = createSliderBlock(this.defaultImg);

                    pageBlocks ? pageBlocks.items.push(sliderBlock) : this.addBlockGroup(siteId, pageId, sliderBlock);
                    break;

                case "youtube":
                case "youtube-p":
                    const youtubeBlock = createYoutubeBlock(type, this.defaultYoutube);

                    pageBlocks ? pageBlocks.items.push(youtubeBlock) : this.addBlockGroup(siteId, pageId, youtubeBlock);
                    break;

                case "vimeo":
                case "vimeo-p":
                    const vimeoBlock = createVimeoBlock(type,this.defaultVimeo);

                    pageBlocks ? pageBlocks.items.push(vimeoBlock) : this.addBlockGroup(siteId, pageId, vimeoBlock);
                    break;

                case "video":
                    const videoBlock = createVideoBlock();

                    pageBlocks ? pageBlocks.items.push(videoBlock) : this.addBlockGroup(siteId, pageId, videoBlock);
                    break;

                default:
                    break;
            }

            localStorage.setItem("blocks", JSON.stringify(this.blocks));
        },

        addBlockGroup(siteId, pageId, block) {
            this.blocks.push({
                siteId,
                pageId,
                items: [block],
            });
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

            localStorage.setItem("blocks", JSON.stringify(this.blocks));
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

            localStorage.setItem("blocks", JSON.stringify(this.blocks));
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

            localStorage.setItem("blocks", JSON.stringify(this.blocks));
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

            localStorage.setItem("blocks", JSON.stringify(this.blocks));
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

            localStorage.setItem("blocks", JSON.stringify(this.blocks));
        },

        openContent() {
            this.isContentOpen = true;
        },

        closeContent() {
            this.isContentOpen = false;
        },

        saveState() {
            this.stateHistory.push(JSON.stringify(this.blocks));
            localStorage.setItem("stateHistory", JSON.stringify(this.stateHistory));
        },

        undoAction() {
            if (this.stateHistory.length) {
                this.blocks = JSON.parse(this.stateHistory.pop());
                localStorage.setItem("stateHistory", JSON.stringify(this.stateHistory));
                localStorage.setItem("blocks", JSON.stringify(this.blocks));
            }
        },
    },
});
