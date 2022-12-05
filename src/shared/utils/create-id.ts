export const createId = () => {
    function getRandom() {
        return Math.random();
    }
    return (getRandom() * 1000).toString();
};
