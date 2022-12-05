export const highlightWords = (str, arr) => {
    let tagWithoutHash = arr.map((item) => {
        return item.slice(1).toLocaleLowerCase();
    });

    let arrFromStr = str.split(' ');
    const changedArr = arrFromStr.map((item) => {
        if (tagWithoutHash.some((i) => item.toLocaleLowerCase().includes(i))) {
            return `<span class="highlighted-word">` + item + `</span>`;
        } else {
            return `<span>` + item + `</span>`;
        }
    });

    const newString = changedArr.join(' ');

    document.getElementById('text-area-to-highlight').outerHTML = newString;
};
