import idGenerator from "./idGenerator";

export function createTextBlock(defaultText) {
    return {
        text: defaultText,
        type: "text",
        blockId: idGenerator(),
    };
}

export function createCoverBlock(defaultText, defaultImg) {
    return {
        text: defaultText,
        img: defaultImg,
        type: "cover",
        blockId: idGenerator(),
    };
};

export function createSliderBlock(defaultImg) {
    return {
        images: new Array(4).fill(defaultImg),
        type: "slider",
        blockId: idGenerator(),
    };
};

export function createYoutubeBlock(type, defaultYoutube) {
    return {
        videoId: defaultYoutube,
        type,
        blockId: idGenerator(),
    };
};

export function createVimeoBlock(type, defaultVimeo) {
    return {
        videoId: defaultVimeo,
        type,
        blockId: idGenerator(),
    };
};

export function createVideoBlock() {
    return {
        videoUrl: null,
        type: "video",
        blockId: idGenerator(),
    };
};






