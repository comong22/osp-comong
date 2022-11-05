import './UploadPage.css';
import Add from '../../images/add.svg';
//import { useState } from 'react';
//import { useCallback } from 'react';

function AddBox(props){
    
    return(
    <div><div style={{height: props.size, width:props.size}}   className='box'><img src={Add} alt="add"></img></div></div>
    )
}
function InputBox(props){
    //const [value,setValue]=useState('welcome');
    //const onChange=useCallback(e=>{
    //    setValue(e.target.value);
    //},[]);
    return(
        <span style={{margin:'30px'}}>
        <span className='text'>{props.title}</span>
        <input className="inputText" type='text' size={props.size} defaultValue={props.value} ></input>
        </span>
    )
}

function UploadPage(){
    return(

        <div className='uploadBG'>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <div style={{display:'flex'}}>
                <div style={{width: '40%', float: 'left'}}>
                    <AddBox size="400px"></AddBox>
                    <div className='title'>대표사진</div>
                </div>
               <div style={{width: '60%', float: 'right'}}>
                    <div>
                        <InputBox title="식당이름"></InputBox>
                        <InputBox title="카테고리" value="일식"></InputBox>
                        <InputBox title="주차여부" value="Y"></InputBox>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <InputBox title="주소" value="정확한 주소를 입력해주세요!" size='100'></InputBox>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <InputBox title="전화번호" value="010-1234-5678" size='20'></InputBox>
                        <InputBox title="가격대" value="최저가"></InputBox>
                        <InputBox title="~" value="최고가"></InputBox>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <InputBox title="영업시간" value="09:00~21:00" size='40'></InputBox>
                        <InputBox title="사이트" value="인스타그램, 대표사이트"></InputBox>
                    </div>
                    <div className='title'>대표메뉴 등록하기</div>
                    <br></br>
                    <div style={{display:"flex", justifyContent:"center",margin:"0px 90px"}}>
                        <AddBox style={{float: "left"}} size="150px"></AddBox>
                        <div style={{float: "right"}} >
                            <InputBox title="메뉴명"></InputBox>
                            <br></br>
                            <br></br>
                            <InputBox title="가격" ></InputBox>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"center",marginTop:"30px"}}>
                        <button className='submitButton'>등록하기</button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default UploadPage;