$(function(){


    const idData=['greencomputer','redcomputer','bluecomputer','yellowcomputer','blackcomputer']

    let Id='';

    $('#btn_idchk').click(function() {
        Id=$('#user_id').val();
        
        for(let i in idData) {
            if(Id==idData[i]) {
                alert('사용할 수 없는 아이디입니다')
                $('#user_id').val('').focus();
                break;
            } else if(i==4) {
                alert('사용가능한 아이디입니다');
                $('#user_pw').focus();
            }
        }
        
    });

    let pw=document.getElementById('user_pw')
    let rePw=document.getElementById('user_pwchk')
    let idM=document.getElementById('id_message')
    let pwM=document.getElementById('pw_message')
    let chkPwBtn=document.getElementById('btn_pwchk')

    let name=document.getElementById('user_name')
    let telF=document.getElementById('tel_first')
    let telL=document.getElementById('tel_last')

    let dob=document.getElementById('birth_start')


    
    $('#user_id').keypress(function(){
        Id=$('#user_id').val();

        if(Id.length<8 || Id.length>=15) {
            idM.textContent='아이디 입력 수는 8자리 이상 15자리 이하입니다'
        } else {
            idM.textContent=''
        }
    });

    $('#user_pw').keypress(function(){

        if(pw.value.length<8) {
            pwM.textContent='비밀번호 입력 수는 8자리 이상입니다'
        } else {
            pwM.textContent=''
        }
    });

    chkPwBtn.addEventListener('click', () => {
        if(pw.value != rePw.value) {
            alert('비밀번호가 일치하지 않습니다!')
            
            pw.value=''
            rePw.value=''
            pw.focus()
        } else {
            alert('비밀번호가 일치합니다!')
            name.focus()
        }
    })

    telF.addEventListener('keyup', () => {
        if(telF.value.length>=4) {
            telL.focus()
        }
    })

    telL.addEventListener('keyup', () => {
        if(telL.value.length>=4) {
            dob.focus()
        }
    })

    const totalTerms=document.getElementById('total_terms')
    const termsEls=document.querySelectorAll('.terms_el')
    const terms01=document.getElementById('terms01')
    const terms02=document.getElementById('terms02')
    const terms03=document.getElementById('terms03')

    totalTerms.addEventListener('click', totalCheck)
    terms01.addEventListener('click', termsCheck)
    terms02.addEventListener('click', termsCheck)
    terms03.addEventListener('click', termsCheck)

    function totalCheck() {
        if(totalTerms.checked == true) {
            termsEls.forEach((termsEl) => {
            termsEl.checked = true
            })
        } else {
            terms01.checked = false
            terms02.checked = false
            terms03.checked = false
        }
    }

    function termsCheck() {
        if(terms01.checked && terms02.checked && terms03.checked) {
            totalTerms.checked = true
        } else {
            totalTerms.checked = false
        }
    }


});




