import './UploadPage.css';
import Add from '../../images/add.svg';


function Box(){
    
    return(
    <div><div className='box'><img src={Add}></img></div><div className='title'>대표사진</div></div>
    )
}

function UploadPage(){
    return(

        <div className='uploadBG'>
            <div>
                <br></br>
                <br></br>
                <br></br><br></br>
                <br></br>
                <br></br><br></br>
                <br></br>
                
                
               <Box></Box>
               
            </div>
            
        </div>
    )
}

export default UploadPage;