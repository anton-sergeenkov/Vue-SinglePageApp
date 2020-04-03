const checkCharsCount = numDate => {
    const strDate = numDate.toString();
    const result = (strDate.length === 1) ? `0${numDate}` : `${numDate}`;

    return result;
};

export const getCurrentDate = () => {
    const nowDate = new Date();

    const year     = nowDate.getFullYear();
    const month    = checkCharsCount(nowDate.getMonth() + 1);
    const day      = checkCharsCount(nowDate.getDate());
    const hour     = checkCharsCount(nowDate.getHours());
    const minutes  = checkCharsCount(nowDate.getMinutes());

    const fullDate = `${year}.${month}.${day} ${hour}:${minutes}`;

    return fullDate;
};
