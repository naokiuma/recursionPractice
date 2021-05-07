const config = {
    url: "https://api.recursionist.io/random-words",
    parentId: "target"
}

//初回
fetch(config.url).then(response=>response.json()).then(function(data){afterProcess(data);});


//取得したデータを結合する関数
function joinWords(stringArr, delimiter){
    if(stringArr.length == 0) return "";

    let string = "";
    let length = stringArr.length;

    for(let i = 0; i < length - 2; i++){
        string += stringArr[i] + delimiter
    }
    return string + stringArr[length-1];
}

//初回fetch後の処理
function afterProcess(data, min="5", max="100"){
    let sentence = joinWords(data, " ");
    let parent = document.getElementById(config.parentId);
    parent.innerHTML = `
        <div class="card p-2">
            <h4>Sentence From the server:</h4>
                <p class="mt-3">${sentence}</p>
        </div>
    `;

    let inputs =
        `
        <div class="row mt-3">
            <div class="col-5">
                <span>Min: </span>
                <input type="number" class="form-control min-input" min="0" value="${min}">
            </div>
            <div class="col-5 offset-1">
                <span>Max: </span>
                <input type="number" class="form-control max-input" min="0" value="${max}">
            </div>
        </div>
    `;
    
    parent.innerHTML += inputs;

    let button =
    `
        <div class="col-12 row justify-content-center mt-3">
                <button class="btn btn-secondary new-data-btn">New Data!</button>
        </div>
    `
    parent.innerHTML += button;
    parent.querySelectorAll(".new-data-btn")[0].addEventListener("click", function(){
        // ボタンがクリックされると、inputタグの現在の値が取得してください。
        // その値を使って、新しいurlを定義し、そのAPIからデータを取得するように実装してください。
        let selectedMin = document.querySelectorAll(".min-input")[0].value;
        console.log(selectedMin);
        let selectedMax = document.querySelectorAll(".max-input")[0].value;
        console.log(selectedMax);


        // 以下をminとmaxをafterProcessに渡すように書き換えてください。
        let url = config.url + "?" + "min=" + selectedMin + "&" + "max=" + selectedMax;

        fetch(url).then(response=>response.json()).then((data)=>afterProcess(data));
    })
}