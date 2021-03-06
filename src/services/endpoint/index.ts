import axios from 'axios';
const accessToken = process.env.PERSONAL_ACCESS_TOKEN;


export const fetchPosts = async (url: string): Promise<object> => {
    const res = await axios.get(url, {
        headers: { 'Authorization' : `token ${accessToken}`}
    });
    // 遅延チェック用
    // const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));
    // await sleep(1000);
    return res;
}