//현재 선택한 과정만 2개만 넣을 꺼임
let subjects_chk = [];

//아래는 Id로 구별 클릭이벤트 개별 처리 
let subject0Chk = false;
growing0.onclick = function() {
    if(subject0Chk == false){
         if (subjects_chk.length >=2){
             arr_info();
            alert("이미 두개를 선택해서 제일 먼저 선택한 과목 해제 " + subjects_chk[0])
            animation(subjects_chk[0]); //원래대복귀 애니메이션
            subjects_chk.shift(); //제일앞에꺼 제거 속도가 느림
            subject0Chk = false;
         }
        this.style.fontSize = '36px';
        this.style.color = 'red';
        subject0Chk = true;
        subjects_chk.push("growing0");
    }else{
        this.style.fontSize = '12px';
        this.style.color = 'black';
        subject0Chk = false
    }   
};

let subject1Chk = false;
growing1.onclick = function() {
    if(subject1Chk == false){
        if (subjects_chk.length >=2){
            arr_info();
            alert("이미 두개를 선택해서 제일 먼저 선택한 과목 해제 " + subjects_chk[0])
            animation(subjects_chk[0]); //원래대복귀 애니메이션
             subjects_chk.shift(); //제일앞에꺼 제거 속도가 느림
            subject1Chk = false;
            
         }
        this.style.fontSize = '36px';
        this.style.color = 'red';
        subject1Chk = true;
        subjects_chk.push("growing1");
    }else{
        this.style.fontSize = '12px';
        this.style.color = 'black';
        subject1Chk = false
    }   
};

let subject2Chk = false;
growing2.onclick = function() {
    if(subject2Chk == false){
        if (subjects_chk.length >=2){
            arr_info();
            alert("이미 두개를 선택해서 제일 먼저 선택한 과목 해제 " + subjects_chk[0])
             animation(subjects_chk[0]); //원래대복귀 애니메이션
              subjects_chk.shift(); //제일앞에꺼 제거 속도가 느림
            subject2Chk = false;
           
         }
        this.style.fontSize = '36px';
        this.style.color = 'red';
        subject2Chk = true;
        subjects_chk.push("growing2");
    }else{
        this.style.fontSize = '12px';
        this.style.color = 'black';
        subject2Chk = false
    }   
};

let subject3Chk = false;
growing3.onclick = function() {
    if(subject3Chk == false){
        if (subjects_chk.length >=2){
            arr_info();
            alert("이미 두개를 선택해서 제일 먼저 선택한 과목 해제 " + subjects_chk[0])
             animation(subjects_chk[0]); //원래대복귀 애니메이션
              subjects_chk.shift(); //제일앞에꺼 제거 속도가 느림
            subject3Chk = false;
           
         }
        this.style.fontSize = '36px';
        this.style.color = 'red';
        subject3Chk = true;
        subjects_chk.push("growing3");
    }else{
        this.style.fontSize = '12px';
        this.style.color = 'black';
        subject3Chk = false
    }   
};

let subject4Chk = false;
growing4.onclick = function() {
    if (subjects_chk.length >=2){
            arr_info();
            alert("이미 두개를 선택해서 제일 먼저 선택한 과목 해제 " + subjects_chk[0])
            animation(subjects_chk[0]); //원래대복귀 애니메이션
            subjects_chk.shift(); //제일앞에꺼 제거 속도가 느림
            subject4Chk = false;
         }
    if(subject4Chk == false){
        this.style.fontSize = '36px';
        this.style.color = 'red';
        subject4Chk = true;
        subjects_chk.push("growing4");
    }else{
        this.style.fontSize = '12px';
        this.style.color = 'black';
        subject4Chk = false
    }   
};

let subject5Chk = false;
growing5.onclick = function() {
    if (subjects_chk.length >=2){
            arr_info();
            alert("이미 두개를 선택해서 제일 먼저 선택한 과목 해제 " + subjects_chk[0])
            animation(subjects_chk[0]); //원래대복귀 애니메이션
            subjects_chk.shift(); //제일앞에꺼 제거 속도가 느림
            subject5Chk = false;
            
    }
    if(subject5Chk == false){
        this.style.fontSize = '36px';
        this.style.color = 'red';
        subject5Chk = true;
        subjects_chk.push("growing5");
    }else{
        this.style.fontSize = '12px';
        this.style.color = 'black';
        subject5Chk = false
    }   
};

let subject6Chk = false;
growing6.onclick = function() {
    if (subjects_chk.length >=2){
            arr_info();
            alert("이미 두개를 선택해서 제일 먼저 선택한 과목 해제 " + subjects_chk[0])
            animation(subjects_chk[0]); //원래대복귀 애니메이션
            subjects_chk.shift(); //제일앞에꺼 제거 속도가 느림
            subject6Chk = false;
            
    }
    if(subject6Chk == false){
        this.style.fontSize = '36px';
        this.style.color = 'red';
        subject6Chk = true;
        subjects_chk.push("growing6");
    }else{
        this.style.fontSize = '12px';
        this.style.color = 'black';
        subject6Chk = false
    }   
};

let subject7Chk = false;
growing7.onclick = function() {
    if (subjects_chk.length >=2){
            arr_info();
            alert("이미 두개를 선택해서 제일 먼저 선택한 과목 해제 " + subjects_chk[0])
            animation(subjects_chk[0]); //원래대복귀 애니메이션
            subjects_chk.shift(); //제일앞에꺼 제거 속도가 느림
            subject7Chk = false;
            
    }
    if(subject7Chk == false){
        this.style.fontSize = '36px';
        this.style.color = 'red';
        subject7Chk = true;
        subjects_chk.push("growing7");
    }else{
        this.style.fontSize = '12px';
        this.style.color = 'black';
        subject7Chk = false
    }   
};

let subject8Chk = false;
growing8.onclick = function() {
    if (subjects_chk.length >=2){
            arr_info();
            alert("이미 두개를 선택해서 제일 먼저 선택한 과목 해제 " + subjects_chk[0])
            animation(subjects_chk[0]); //원래대복귀 애니메이션
            subjects_chk.shift(); //제일앞에꺼 제거 속도가 느림
            subject8Chk = false;
            subjects_chk.push("growing8");
    }
    if(subject8Chk == false){
        this.style.fontSize = '36px';
        this.style.color = 'red';
        subject8Chk = true;
    }else{
        this.style.fontSize = '12px';
        this.style.color = 'black';
        subject8Chk = false
    }   
};

let subject9Chk = false;
growing9.onclick = function() {
    if (subjects_chk.length >=2){
            arr_info();
            alert("이미 두개를 선택해서 제일 먼저 선택한 과목 해제 " + subjects_chk[0])
            animation(subjects_chk[0]); //원래대복귀 애니메이션
            subjects_chk.shift(); //제일앞에꺼 제거 속도가 느림
            subject9Chk = false;
            
    }
    if(subject9Chk == false){
        this.style.fontSize = '36px';
        this.style.color = 'red';
        subject9Chk = true;
        subjects_chk.push("growing9");
    }else{
        this.style.fontSize = '12px';
        this.style.color = 'black';
        subject9Chk = false
    }   
};

//배열 정보
function arr_info(){
    for (let i = 0; i < subjects_chk.length; i++) {
        console.log(subjects_chk[i]);
    }
}

//원래크기로 복귀하게 할 함수
function animation(x){
    switch (x) {
      case "growing0":
        growing0.style.fontSize = '12px';
        growing0.style.color = 'black';
        break;
      case "growing1":
        growing1.style.fontSize = '12px';
        growing1.style.color = 'black';
        break;
     case "growing2":
        growing2.style.fontSize = '12px';
        growing2.style.color = 'black';
        break;
    case "growing3":
        growing3.style.fontSize = '12px';
        growing3.style.color = 'black';
        break;
    case "growing4":
        growing4.style.fontSize = '12px';
        growing4.style.color = 'black';
        break;
    case "growing5":
        growing5.style.fontSize = '12px';
        growing5.style.color = 'black';
        break;
    case "growing6":
        growing6.style.fontSize = '12px';
        growing6.style.color = 'black';
        break;
    case "growing7":
        growing7.style.fontSize = '12px';
        growing7.style.color = 'black';
        break;
    case "growing8":
        growing8.style.fontSize = '12px';
        growing8.style.color = 'black';
        break;
    case "growing9":
        growing9.style.fontSize = '12px';
        growing9.style.color = 'black';
        break;
    default:
        alert( "어떤 값인지 파악이 되지 않습니다." );
    }
}
