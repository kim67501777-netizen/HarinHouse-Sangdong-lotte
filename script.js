document.addEventListener("DOMContentLoaded", function(){

    console.log("HARIN HOUSE 홈페이지 정상 작동");

    // 관심고객 버튼 클릭 안내
    const buttons = document.querySelectorAll(".gold");

    buttons.forEach(function(button){

        button.addEventListener("click", function(){

            console.log("관심고객 등록 페이지 이동");

        });

    });

});
