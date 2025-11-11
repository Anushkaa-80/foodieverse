// SDK initialization
//3rd party storage related files, any services which may be chnaged later

var ImageKit = require("imagekit");
require('dotenv').config();


var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file,fileName)
{
    const result = await imagekit.upload({
        file:file,
        fileName:fileName,
    })
    return result;
}
module.exports ={
    uploadFile
}

// 2 missing in food.controller(we use when we are building a very good and high quality of website ) it is bit complex: the interaction happens between server and db through dao file
// validation ki layer bhi lgna hotu hai ., express validator