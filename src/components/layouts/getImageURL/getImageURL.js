import { storage } from '../../../firebase/firebase'
import { ref, getDownloadURL } from "firebase/storage";
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../UI/Spinner/Spinner'

const GetImageURL = ({ urlName }) => {
    const [imgUrl, setImgUrl] = useState('')
    const [docUrl, setDocUrl] = useState('')
    const [loading, setLoading] = useState(true)

    var customUrl;
    const docType = urlName.split('.').pop().toLowerCase()
    if (docType === 'pdf' || docType === 'doc') {
        const storeRef = ref(storage, 'resumes/' + urlName);
        getDownloadURL(storeRef)
            .then((url) => {
                setDocUrl(url)
            });
        customUrl = <a className="btn btn1" style={{ border: "1px solid #fff" }}
            href={docUrl} target="_blank" rel="noopener noreferrer" download>
            <FontAwesomeIcon icon={faDownload} />{' '}My Resume</a>
    }
    if (docType === 'jpg' || docType === 'png' || docType === 'jpeg') {
        const storeRef = ref(storage, 'images/' + urlName);
        getDownloadURL(storeRef)
            .then((url) => {
                setImgUrl(url);
                setLoading(false)
            });
        customUrl =
            loading ? <Spinner /> : <img src={imgUrl} alt="no pics" className="rounded img-fluid" />
    }

    return (
        <React.Fragment>
            {customUrl ? customUrl : null}
        </React.Fragment>
    )
}

export default GetImageURL;

