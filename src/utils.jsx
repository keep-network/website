export const getSrc = (imagePath, imageType, imageMaxRes) => {
    const srcset = [];
    let count = imageMaxRes;

    while (count) {
        let src = '';
        if (count === 1) {
            src = `${imagePath}.${imageType} ${count}x`;
        } else {
            src = `${imagePath}@${count}x.${imageType} ${count}x`;
        }
        srcset.push(src);
        count--;
    }

    return srcset.join(', ');
};
