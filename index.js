// eslint-disable-next-line no-unused-vars
function getVowe(str) {
    let res = '';
    const arr = 'аАоОуУеЕиИіІ';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (arr[i] === str[j]) {
                res += str[j];
            }
        }
    }
    return res.length;
}
