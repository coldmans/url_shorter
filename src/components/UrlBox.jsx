import React, { useState } from "react";
import UrlButton from "./UrlButton";
import UrlList from "./UrlList";
import "./UrlBox.css";

const UrlBox = () => {
    const [url, setUrl] = useState("");
    const [urlList, setUrlList] = useState([]);

    const handleAddurl = () => {
        if (url) {
            setUrlList([...urlList, url]);
            setUrl("");
        }
        else {
            alert("URL을 입력해주세요.");
        }
    };

    const handleRemoveUrl = (index) => {
        const newUrlList = urlList.filter((_, i) => i !== index);
        setUrlList(newUrlList);
    };

    return (
        <div className="con">
            <div className="input-container">
                <div>
                    <input className="url-box" type="text" placeholder="Enter URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)} />
                </div>
                <div className="url-button" onClick={handleAddurl}>
                    <UrlButton />
                </div>
            </div>
            <UrlList urlList={urlList} onRemoveUrl={handleRemoveUrl} />
        </div>

    );
};

export default UrlBox;