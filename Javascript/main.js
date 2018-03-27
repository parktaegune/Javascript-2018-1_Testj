var myHeading = document.querySelector('h1'); 
 myHeading.innerHTML = 'Cloud Service'; 
 function getIdPw(){
    if(!document.userInfo.id.value){
        alert("아이디를 입력하세요.");
        return false;
    }
    if(!document.userInfo.password.value){
        alert("비밀번호를 입력하세요.");
        return false;
    }
    // 비밀번호와 비밀번호 확인에 입력된 값이 동일한지 확인
    if(document.userInfo.password.value != document.userInfo.passwordcheck.value ){
        alert("비밀번호를 동일하게 입력하세요.");
        return false;
    }
}
