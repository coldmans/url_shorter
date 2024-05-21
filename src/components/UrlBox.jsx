import React, { useState, useEffect } from "react";
import UrlButton from "./UrlButton";
import UrlList from "./UrlList";
import "./UrlBox.css";

const UrlBox = () => {
    const [url, setUrl] = useState("");
    const [urlList, setUrlList] = useState([]);

    useEffect(() => {
        // 전체 링크 불러오기
        fetch('http://localhost:8000/short-links/all')
            .then(response => response.json())
            .then(data => {
                setUrlList(data);
            })
            .catch(error => {
                console.error('Error fetching the links:', error);
            });
    }, []);

    const handleAddurl = () => {
        let formattedUrl = url;

        // URL에 프로토콜이 없으면 추가
        if (!/^https?:\/\//i.test(url)) {
            formattedUrl = 'http://' + url;
        }

        console.log('Adding URL:', formattedUrl); // 디버깅용 로그
        fetch('http://localhost:8000/short-links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ originUrl: formattedUrl }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Response Data:', data);  // 응답 데이터 출력
                setUrlList([...urlList, data]); // URL 목록 업데이트
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleRemoveUrl = (index, id) => {
        fetch(`http://localhost:8000/short-links/delete/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setUrlList(urlList.filter((_, i) => i !== index));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
