import { storage } from '../../../firebase/firebase'

const getImageURL = (img) => {
    try {
        if (img.split('.').pop() === 'pdf') {
            storage.ref('resumes').child(img).getDownloadURL().then(url => {
                if (url) {
                    document.getElementById(img).setAttribute('href', url)
                }
            })
        } else {
            storage.ref('images').child(img).getDownloadURL().then(url => {
                if (url) {
                    document.getElementById(img).setAttribute('src', url)
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
    return ''
}

export default getImageURL;
