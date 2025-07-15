"use strict"
let n = "";
let nBefore = "";

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

let soundEndflag = "0"; //suond control 10a

const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
const omikujiTextImage = document.getElementById("omikujiTextImage");
btn1.addEventListener("click", function () {
    // sound control 10a
    if (soundEndflag === "1") {
        soundControl("end", "");
    }
    btn1.style.transition = "1s"; // add 

    let resultText = [
        "img/daikichi.png",
        "img/chukichi.png",
        "img/syokichi.png",
        "img/suekichi.png",
        "img/daikyo.png"
    ];

    let resultMaxSpeed = [10, 10, 8, 5, 5];
    let resultMaxSize = [30, 30, 30, 40, 30];
    let resultImage = [
        "img/star.png",
        "img/sakura_hanabira.png",
        "img/water1.png",
        "img/redLeaves4.png",
        "img/snowflakes.png"
    ];
    // use sound 10b
    let resultSound = [
        "sound/omikuji_sound1.mp3",
        "sound/omikuji_sound2.mp3",
        "sound/omikuji_sound3.mp3",
        "sound/omikuji_sound4.mp3",
        "sound/omikuji_sound5.mp3",

    ];

   // let n = Math.floor(Math.random() * resultText.length);   //make the buttons change
   while (n === nBefore){
    n = Math.floor(Math.random() * resultText.length);
   }
   nBefore = n;
   
   omikujiTextImage.src = resultText[n];
    omikujiTextImage.classList.add("omikujiPaper");
    // 10b  when animation end delete class
    omikujiTextImage.addEventListener("animationend",
        function () {
            omikujiTextImage.classList.remove("omikujiPaper");
        }, false
    );
    // sound control 10a
    w_sound = resultSound[n];
    soundControl("start", w_sound);
    soundEndflag = "1";

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

//sound control 10a
let w_sound
let music
function soundControl(status, w_sound) {
    if (status === "start") {
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
    }
    else if (status === "end") {
        music.pause();
        music.currentTime = 0;
    }
}
