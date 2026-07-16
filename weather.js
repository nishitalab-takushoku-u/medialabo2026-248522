// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
    console.log("都市名:", data.name);
    console.log("天気:", data.weather[0].description);
    console.log("最低気温:", data.main.temp_min);
    console.log("最高気温:", data.main.temp_max);
    console.log("経度:", data.coord.lon);
    console.log("緯度:", data.coord.lat);
    console.log("湿度:", data.main.humidity);
    console.log("風速:", data.wind.speed);
    console.log("風向:", data.wind.deg);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

    let result = document.querySelector("#result");
    result.innerHTML = "";

    let h2 = document.createElement("h2");
    h2.textContent = data.name + "の天気";
    result.appendChild(h2);

    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.textContent = "都市名: " + data.name;
    ul.appendChild(li1);

    let li2 = document.createElement("li");
    li2.textContent = "天気: " + data.weather[0].description;
    ul.appendChild(li2);

    let li3 = document.createElement("li");
    li3.textContent = "最低気温: " + data.main.temp_min + "℃";
    ul.appendChild(li3);

    let li4 = document.createElement("li");
    li4.textContent = "最高気温: " + data.main.temp_max + "℃";
    ul.appendChild(li4);

    result.appendChild(ul);

    let table = document.createElement("table");

    let tr = document.createElement("tr");

    let th1 = document.createElement("th");
    th1.textContent = "項目";

    let th2 = document.createElement("th");
    th2.textContent = "値";

    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);

    let items = [
        ["経度", data.coord.lon],
        ["緯度", data.coord.lat],
        ["湿度", data.main.humidity + "%"],
        ["風速", data.wind.speed],
        ["風向", data.wind.deg]
    ];

    for (let item of items) {

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = item[0];

        let td2 = document.createElement("td");
        td2.textContent = item[1];

        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
    }

    result.appendChild(table);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let button = document.querySelector("#search");
button.addEventListener("click", sendRequest);

// 都市名と都市IDの対応
let cityId = {
    "カイロ": 360630,
    "モスクワ": 524901,
    "ヨハネスブルク": 993800,
    "北京": 1816670,
    "東京": 1850147,
    "シンガポール": 1880252,
    "シドニー": 2147714,
    "ロンドン": 2643743,
    "パリ": 2968815,
    "リオデジャネイロ": 3451189,
    "ニューヨーク": 5128581,
    "ロサンゼルス": 5368361
};

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

    let city = document.querySelector("#city").value.trim();

    let id;

    // 都市名ならIDへ変換、そうでなければ入力値(ID)をそのまま使用
    if (cityId[city]) {
        id = cityId[city];
    } else {
        id = city;
    }

    let url =
        "https://www.nishita-lab.org/web-contents/jsons/openweather/"
        + id
        + ".json";

    axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
    let data = resp.data;
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
    alert("都市名または都市IDが正しくありません。");
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log("Ajax 通信が終わりました");
}