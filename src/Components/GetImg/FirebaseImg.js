import React, { useState, useEffect } from "react";
import { storage, firebase} from "../../firebase";
import styled from "styled-components";
import { uploadBytes, listAll} from "../../firebase";

export const UploadImg = styled.div`
  margin-top: 90px;
`;

function FireBaseExample() {
    
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const imageListRef = storage.ref("files/");

    const upload = () => {
        if (imageUpload === null) return;
    
        const imageRef = storage.ref(`files/${imageUpload.name}`);
        // `images === 참조값이름(폴더이름), / 뒤에는 파일이름 어떻게 지을지
        uploadBytes(imageRef, imageUpload)
        .then((snapshot) => {
          // 업로드 되자마자 뜨게 만들기
          storage
          .getDownloadURL(snapshot.ref)
          .then((url) => {
            setImageList((prev) => [...prev, url]);
          });
          // 
        });
    };

      useEffect(() => {
        imageList.listAll(imageListRef).then((response) => {
          response.items.forEach((item) => {
            storage
            .getDownloadURL(item)
            .then((url) => {
              setImageList((prev) => [...prev, url]);
            });
          });
        });
      }, []);

      return (
        <div>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={upload}>업로드</button>
          
          {imageList.map((el) => {
            return <img key={el} src={el} />;
          })}
        </div>
      );

}

export default FireBaseExample;