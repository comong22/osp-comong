import './UploadPage.css';
import Add from '../../images/add.svg';
import { useState } from 'react';
import ModalBasic from './Modal.js';




function mouseOver(e) {
    e.currentTarget.style.backgroundColor = "#FFBA94";
}
function mouseOut(e) {
    e.currentTarget.style.backgroundColor = "#ffa574";
} 


function AddBox(props){
    
    return(
    <div><div style={{height: props.size, width:props.size}}   className='box'><img src={Add} alt="add"></img></div></div>
    )
}
function InputBox(props){
    return(
        <span style={{marginRight:props.margin}}>
        <span className='text'>{props.title}</span> 
        <input className="inputText" type='text' size={props.size} placeholder={props.value} ></input>
        </span>
    )
}


function UploadPage(){
        const [modal, setModal] = useState(false);
        const showModal = () => {
            setModal(true);
        };
    return(

        <div className='uploadBG'>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <div style={{display:'flex'}}>
                <div style={{width: '40%', float: 'left'}}>
                    <AddBox size="400px"></AddBox>
                    <div className='title' style={{textAlign:"center"}}>대표사진</div>
                </div>
               <div style={{width: '60%', float: 'right'}}>
                    <div>
                        <InputBox  title="식당이름" margin="30px" size="25"></InputBox>
                        <InputBox title="카테고리" value="일식" margin="40px"></InputBox>
                        <InputBox title="주차여부" value="Y" size="6"></InputBox>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <InputBox title="주소" value="정확한 주소를 입력해주세요!" size='90'></InputBox>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <InputBox title="전화번호" value="010-1234-5678" size='35' margin="40px"></InputBox>
                        <InputBox title="가격대" value="최저가"size='15'></InputBox>
                        <InputBox title="~" value="최고가"size='15'></InputBox>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <InputBox title="영업시간" value="09:00~21:00" size='18' margin="40px"></InputBox>
                        <InputBox title="사이트" value="인스타그램, 대표사이트" size='53'></InputBox>
                    </div>
                    <hr width="650" style={{position:'absolute',top:'375px',right:'198px',zIndex:"1",backgroundColor:"#FFBA94"}}></hr>
                    <div  className='title' style={{marginTop:"30px",position:'relative',marginLeft:'220px', backgroundColor:"#FFF7EF",width:"250px", border:"100px",zIndex:"2"}} > 대표메뉴 등록하기</div>
                    <br></br>
                    <div style={{display:"flex", justifyContent:"left",margin:"0px 90px"}}>
                        <AddBox size="150px"></AddBox>
                        <div style={{float: "right",marginTop:"30px",marginLeft:"60px"}} >
                            <InputBox title="메뉴명"></InputBox>
                            <br></br>
                            <br></br>
                            <InputBox title="가격" size="15" ></InputBox>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"left",marginTop:"30px",marginLeft:"310px"}}>
                    <button onClick={showModal}  onMouseOver={(e) =>mouseOver(e)} onMouseOut={(e) =>mouseOut(e)} className='submitButton' >등록하기</button>
                    {modal && <ModalBasic setModal={setModal} />}
                    
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default UploadPage;

