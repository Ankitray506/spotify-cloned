const { ImageKit } = require("@imagekit/nodejs");

let ImageKitClient = null;

function getImageKitClient() {
    if (!ImageKitClient) {
        const privateKey = process.env.IMAGEKIT_PRIVATE_KEY || "dummy_private_key";
        ImageKitClient = new ImageKit({
            privateKey: privateKey,
        });
    }
    return ImageKitClient;
}

async function uploadFile(file) {
    const client = getImageKitClient();
    const result = await client.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "spotify-cloned/music"
    });

    return result;
}

module.exports = { uploadFile };