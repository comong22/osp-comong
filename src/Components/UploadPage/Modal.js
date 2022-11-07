import './UploadPage.css';

function mouseOver(e) {
    e.currentTarget.style.backgroundColor = "#FFBA94";
}
function mouseOut(e) {
    e.currentTarget.style.backgroundColor = "#ffa574";
} 


function ModalBasic({ setModal }) {
    const closeModal = () => {
        setModal(false);
    };

    return (
        <div >
            <div class="out"></div>
            <div class="container">
                <button class="close" onClick={closeModal}>
                    x
                </button>
                <div>
                <p class="t1">맛집을 등록하시겠습니까?</p>
                <p class="t2">업로드 후에는 수정이 불가능합니다.</p>
                </div>
                <button class="submitButton2" onMouseOver={(e) =>mouseOver(e)} onMouseOut={(e) =>mouseOut(e)} style={{marginLeft:"150px",marginTop:"17px"}} onClick={closeModal}>
                    맛집 등록하기
                </button>

            </div>
        </div>
    );
}
export default ModalBasic;
