import { GlobalFonts } from "../../fonts/font";
import "./PostReview.css";
import React from "react";
import styled from "styled-components";

const PostRContainer = styled.div`
  background: #fff7ef;
  display: flex;
  height: 90%;
  width: 100%;
  z-index: 3;
  scroll-snap-align: start;
`;

function PostReview(){
    return(
        <>
        <GlobalFonts />
        <PostRContainer>
        <div className="postReviewBG">
            <text>리뷰</text>
        </div>
        </PostRContainer>
        </>
    )
};

export default PostReview;