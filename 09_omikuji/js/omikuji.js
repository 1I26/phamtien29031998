"use strict"
window.addEventListener("DOMContentLoaded", function () {

    // ヘッダーのテキストエフェクト
    $("header").textillate({
        loop: false, // ループのオンオフ
        minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
        initialDelay: 2000, // 遅延時間
        autoStart: true, // アニメーションを自動的にスタート
        in: { // フェードインのエフェクトの詳細設定
            effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
            delayScale: 1.5, // 遅延時間の指数
            delay: 50, // 文字ごとの遅延時間
            sync: false, // trueはアニメーションをすべての文字に同時に適用
            shuffle: true // trueは文字を順番にではなく、ランダムに
        }
    });
    // おみくじボタン(id="btn1") ボヤァと表示させる
    $(function () {
        ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
    setTimeout(
        function () {
            let popMessage = "いらっしゃい！おみくじ引いてって！";
            window.alert(popMessage);
        },
        "5000"
    );
}, false
);

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
    /*let n = Math.floor(Math.random() * 3);

    // style reset
    btn1.style.color = "";
    btn1.style.fontSize = "";
    btn1.style.fontFamily = "";
    btn1.style.fontWeight = "";
    btn1.style.fontStyle = "";
    btn1.style.transform = "";

    switch (n) {
        case 0:
            btn1.textContent = "Very Happy!!";
            btn1.style.color = "red";
            btn1.style.fontSize = "35px";
            btn1.style.fontFamily = "Arial";
            btn1.style.fontWeight = "bold";
            btn1.style.fontStyle = "italic";
            break;
        case 1:
            btn1.textContent = "Happy!";
            btn1.style.color = "green";
            btn1.style.fontSize = "42px";
            break;
        case 2:
            btn1.textContent = "UnHappy...";
            btn1.style.color = "black";
            btn1.style.fontSize = "28px";
            btn1.style.transform = "scaleX(-1)";
            break;


    }*/

    /*let resultText = ["大吉!!!!!", "吉!!!!", "中吉!!!", "小吉!!", "末吉!", "凶."];
    let resultColor = ["#ff0000", "#c71585", "#ff1493", "#ff69b4", "#ff8c00", "#1e90ff"];
    let resultFontSize = ["55px", "50px", "45px", "40px", "35px", "30px"];
    let n = Math.floor(Math.random() * resultText.length);
    btn1.textContent = resultText[n];
    btn1.style.color = resultColor[n];
    btn1.style.fontSize = resultFontSize[n];
*/

    btn1.style.transition = "1s"; // add 

    let resultText = ["大吉!!!!!", "吉!!!!", "中吉!!!", "小吉!!", "末吉!", "凶."];
    let resultColor = ["#ff0000", "#c71585", "#ff1493", "#ff69b4", "#ff8c00", "#1e90ff"];
    let resultFontSize = ["55px", "50px", "45px", "40px", "35px", "30px"];
    let resultMaxSpeed = [10, 10, 8, 5, 5, 5];
    let resultMaxSize = [30, 30, 20, 15, 20, 20];
    let resultImage = [
        "img/star.png",
        "img/sakura_hanabira.png",
        "img/sakura_hanabira.png",
        "img/sakura_hanabira.png",
        "img/leaf.png",
        "img/snowflakes.png"
    ];

    let n = Math.floor(Math.random() * resultText.length);   //make the buttons change
    btn1.textContent = resultText[n];
    btn1.style.color = resultColor[n];
    btn1.style.fontSize = resultFontSize[n];

    /* snowfall stop
    $(document).snowfall("clear");
    // jQueryのsnowfall
    $(document).ready(function () {
        $(document).snowfall({
            maxSpeed: 5, // 最大速度
            minSpeed: 1, // 最小速度
            maxSize: 20, // 最大サイズ
            minSize: 1, // 最小サイズ
            image: 'img/sakura_hanabira.png'
        });
    });
*/
    // snowfall
    $(document).snowfall("clear");
    $(document).snowfall({
        maxSpeed: resultMaxSpeed[n],
        minSpeed: 1,
        maxSize: resultMaxSize[n],
        minSize: 1,
        image: resultImage[n]
    });

}, false);
