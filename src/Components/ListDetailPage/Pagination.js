import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
    const [currPage, setCurrPage] = useState(page);
    let firstNum = currPage - (page % 5) + 1
    let lastNum = currPage - (page % 5) + 5
    const numPages = Math.ceil(total / limit);
  
    return (
      <>
        <Nav>
            <Button onClick={() => {setPage(page - 1); setCurrPage(page-2);}}
            disabled={page === 1}>
                &lt;
            </Button>
            <Button
                    onClick={() => setPage(firstNum)}
                    aria-current={page === firstNum ? "page" : null}
                >
                    {firstNum}
            </Button>
            {Array(numPages)
                .fill()
                .map((v, i) => {
                     if(i <=2){
                        return (
                            <Button
                                border="true" 
                                key={i+1} 
                                onClick={() => {setPage(firstNum+1+i)}}
                                aria-current={page === firstNum+1+i ? "page" : null}>
                                {firstNum+1+i}
                            </Button>
                        )
                    }
                    else if(i>=3){
                        return (
                            <Button
                                border="true" 
                                key ={i+1}
                                onClick={() => setPage(lastNum)}
                                aria-current={page === lastNum ? "page" : null}>
                                {lastNum}
                            </Button>
                        )  
                    }})}
            <Button onClick={() => {setPage(page+1); setCurrPage(page);}} disabled={page === numPages}>
                &gt;
            </Button>
        </Nav>
    </>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin : 16px;
`;

const Button = styled.button`
    border : none;
    padding: 8px;
    margin: 0;
    color: #424242;
    font-size: 13px;
    &[disabled] {
    cursor: revert;
    transform: revert;
    }
    &[aria-current] {
    font-weight: bold;
    color : FFBA94;
    cursor: revert;
    transform: revert;
}
`;

export default Pagination;
