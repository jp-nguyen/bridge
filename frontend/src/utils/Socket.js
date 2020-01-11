import Axios from "axios";

import Config from "../Config.json";

const { baseURL } = Config;

const client = Axios.create({
    baseURL: baseURL,
    json: true
});

async function POST(data) {
    // TODO
}

export default { POST };