function Hello({name = "익명", hobby="자기", fav_food="밥"}){
    return (
        <div>
            <h3>{name}의 프로필</h3>
            <p>취미 : {hobby}</p>
            <p>좋아하는 음식 : {fav_food}</p>
        </div>
    )
}
export default Hello

//props - properties(속성)
// <img src="cat.jpg" alt="고양이사진">

//App.jsx가 props를 사용해서 Hello가 자식