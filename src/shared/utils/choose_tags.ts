export const chooseTags = (str: string) => {
    const reg = /#\w+/g;
    const arrOfTags = str.toLowerCase().match(reg);
    return Array.from(new Set(arrOfTags));
};
