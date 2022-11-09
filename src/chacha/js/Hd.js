function bgcolor(a){
    document.body.classList = a;
}

function Hd(){
    return(
        <header id="id">
            <div className="container d-flex justify-content-between align-items-center">
                <h1><a href=""><img src="./img/homeLogo_scroll.svg" width="200px" alt="" /></a></h1>
                <ul id="gnb" className="d-flex">
                    <li><a href="">포트폴리오</a></li>
                    <li><a href="">사전인터뷰</a></li>
                    <li><a href="">어제의 나</a></li>
                </ul>
                <div className="btns">
                    <button onClick={ function(){ bgcolor('bg-dark'); } } className="border-dark bg-dark text-white">검정</button>
                    <button onClick={ function(){ bgcolor('bg-white'); } } className="border-dark bg-white text-dark">하양</button>
                </div>
            </div>
        </header>
    )
};
export default Hd;