import './UploadPage.css';

function Box(props){
    
        <div style="background: white;height: 50px; width: 200px;border-radius: 15px;width:{props.width};height:{props.width}">
            <span class="material-symbols-outlined">add_box</span>
        </div>
	
}

function UploadPage(){
    return(
        <div className='uploadBG'>
            <div>
                <div>
                    <Box width="500px"></Box>
                </div>
            </div>
            
        </div>
    )
}

export default UploadPage;