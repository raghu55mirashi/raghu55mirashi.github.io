import { storage } from '../../../firebase/firebase'

const getImageURL = (img) => {
    if (img.split('.').pop() === 'pdf') {
        storage.ref('resumes').child(img).getDownloadURL().then(url => {
            document.getElementById(img).setAttribute('href', url)
        })
    } else {
        storage.ref('images').child(img).getDownloadURL().then(url => {
            document.getElementById(img).setAttribute('src', url)
        })
    }
    return null
}

export default getImageURL;
