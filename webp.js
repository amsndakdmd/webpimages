import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {
    await imagemin(['images/*.{jpg,png}'], {
        destination: 'images/webp',
        plugins: [
            imageminWebp({quality: 87})
        ]
    });

    console.log("image optimized");
})();