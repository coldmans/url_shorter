import React from "react";
import "./UrlList.css";

const UrlList = ({ urlList, onRemoveUrl }) => {
    return (
        <div className="url-list">
            {urlList.map((urlData, index) => (
                <div key={index} className="url-item">
                    <button className="remove-button" onClick={() => onRemoveUrl(index, urlData.id)}>X</button>
                    <div className="url-content">
                        <h5>Long URL: </h5>
                        <div><a href={urlData.originUrl} target="_blank" rel="noopener noreferrer">{urlData.originUrl}</a></div>
                        <h5>Short URL: </h5>
                        <div><a href={`http://localhost:8000/short-links/${urlData.hash}`} target="_blank" rel="noopener noreferrer">{`http://localhost:8000/short-links/${urlData.hash}`}</a></div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default UrlList;
