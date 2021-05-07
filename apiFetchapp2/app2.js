const config = {
    url: "https://api.recursionist.io/random-user",
    parentId: "target"
}

fetch(config.url).then(response=>response.json()).then(function(data){
    afterProcess(data);
});


function afterProcess(user){
    let parent = document.getElementById(config.parentId);

    //ボタン作成
    //parent.innerHTML = "";
    //parent.innerHTML +=

    let btn = 
    `
        <div class="col-10 mt-3 d-flex justify-content-end">
                <button class="btn btn-secondary new-data-btn">New Data!</button>
        </div>
    `;
    parent.insertAdjacentHTML("afterbegin",btn);
    
 

    // クリックされると、generateUserCardで作成したHTMLをparentにappendしてください。
    // クリックされていない初期状態でもuser cardが表示されるようにしてください。
    parent.querySelectorAll(".new-data-btn")[0].addEventListener("click", function(){
        fetch(config.url).then(response=>response.json()).then(
            (data)=>{
                //ここで処理
                console.log(data);//ok
                console.log(parent);
                parent.insertAdjacentHTML("beforeend",generateUserCard(data));
            }
        );
    });

    parent.insertAdjacentHTML("beforeend",generateUserCard(user));
}



// ユーザーのカードを作成するgenerateUserCardという関数を作成してください。
// 上のHTMLを参考にしてください。

function generateUserCard(user){
    //console.log(parent);
    //console.log(user);
     let card = `
        <div class="col-12 d-flex justify-content-center outer-card m-3">
            <div class="d-flex align-items-center col-md-7 col-10 m-1">
                <div class="d-flex col-12 profile-card">
                    <div class="col-8 py-3">
                        <h4>${user.firstName}  + ${user.lastName}</h4>
                        <div class="py-2"><p>Site:${user.website} </p></div>
                        <div class="py-2"><p>Birthday:${user.birthday} </p></div>
                        <div class="py-2"><p>Occupation:${user.occupation} </p></div>
                        <div class="py-2"><p>Biography:${user.bio} </p></div>
                        <div class="py-2"><p>Skill set: </p></div>
                    </div>
                    <div class="col-4 d-flex justify-content-center align-items-center">
                        <div><img class="avatar" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    return card;

}
   






//配列を任意の文字ででつなぐ
function joinWords(stringArr, delimiter){
    if(stringArr.length == 0) return "";

    let string = "";
    let length = stringArr.length;

    for(let i = 0; i <= length - 2; i++){
        string += stringArr[i] + delimiter
    }
    return string + stringArr[length-1];
}