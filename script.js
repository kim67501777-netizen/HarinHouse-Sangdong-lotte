// Firebase 연결
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDek6Uu1XBPXTwqZGbtsbEL95i_RNwDDLc",
  authDomain: "harinhouse-e4cf4.firebaseapp.com",
  projectId: "harinhouse-e4cf4",
  storageBucket: "harinhouse-e4cf4.firebasestorage.app",
  messagingSenderId: "285124457549",
  appId: "1:285124457549:web:48df8af5ecbabbf2365804",
  measurementId: "G-7VDJBZ6FJG"
};

// Firebase 시작
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


document.addEventListener("DOMContentLoaded", function(){

    console.log("HARIN HOUSE 홈페이지 정상 작동");


    // 관심고객 등록 폼
    const form = document.querySelector("#customerForm");


    if(form){

        form.addEventListener("submit", async function(e){

            e.preventDefault();


            const name = document.querySelector("#name").value;
            const phone = document.querySelector("#phone").value;
            const type = document.querySelector("#type").value;


            try {

                await addDoc(collection(db, "customers"), {

                    name: name,
                    phone: phone,
                    type: type,
                    date: new Date()

                });


                alert("관심고객 등록이 완료되었습니다.\n빠른 상담으로 안내드리겠습니다.");

                form.reset();


            } catch(error){

                console.error("저장 오류:", error);

                alert("등록 중 오류가 발생했습니다.");

            }

        });

    }


    // 관심고객 버튼 클릭 확인
    const buttons = document.querySelectorAll(".gold");

    buttons.forEach(function(button){

        button.addEventListener("click", function(){

            console.log("관심고객 등록 페이지 이동");

        });

    });


});
