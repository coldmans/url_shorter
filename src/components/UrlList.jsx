import React from "react";
import "./UrlList.css";

const UrlList = ({ urlList, onRemoveUrl }) => {
    return (
        <div className="url-list">
            {urlList.map((url, index) => (
                <div key={index} className="url-item">
                    <div className="url-content">
                        <h5>longUrl</h5>
                        <div>{url}</div>
                        <h5>shortUrl</h5>
                        <div>{/* 짧은 URL 로직 추가 */}</div>
                    </div>
                    <button className="remove-button" onClick={() => onRemoveUrl(index)}>X</button>
                </div>
            ))}
        </div>
    );
};

export default UrlList;