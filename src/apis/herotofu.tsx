import axios from 'axios'

const herotofu = axios.create({
  baseURL: "https://public.herotofu.com/v1/a8ab0660-15c3-11ed-bc91-695741f28ee9",
});

const postMail = (data: any) => herotofu.post("", data);

export default postMail;