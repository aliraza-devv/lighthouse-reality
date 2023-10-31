import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

export const uploadAvatar = async (image: File) => {
    if (!image) {
        return;
    }

    const imageRef = ref(storage, `realtors/${image.name + v4()}`);
    return uploadBytes(imageRef, image).then((snapshot) => {
        const imageURL = getDownloadURL(snapshot.ref).then((url) => {
            return url;
        });
        return imageURL;
    });
};

export const uploadPropertyImages = async (images: File[]) => {
    if (!images) {
        return;
    }

    const links = images.map(async (file) => {
        const imageRef = ref(storage, `properties/${file.name + v4()}`);
        return uploadBytes(imageRef, file).then(async (snapshot) => {
            const imgURL = await getDownloadURL(snapshot.ref).then((url) => {
                return url;
            });
            return imgURL;
        });
    });

    return await Promise.all(links);
};
