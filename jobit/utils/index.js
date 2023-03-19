export const checkImageURL = (url) => {
    if (!url) return false;
    else {
        const pattern = new RegExp("^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$", "i");
        return pattern.test(url);
    }
};

// if empty image, show this placeholder
export const defaultImageOnEmpty = () => "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg";
