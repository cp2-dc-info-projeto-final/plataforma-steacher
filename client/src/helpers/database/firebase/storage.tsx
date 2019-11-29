import { storage } from './config/connection';

const ref = storage().ref();

function uploadImage(image: any) {
    const imgRef = ref.child('images');

    imgRef.put(image).then(result => imgRef.getDownloadURL().then(url => console.log(url)));
}

function getImage() {

}

export {
    uploadImage,
    getImage
}