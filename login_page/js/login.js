$(function(){

    $('.wrap .tab_box .tab div').click(function(){
        let p=$(this).index();

        $('.wrap .tab_box .tab div').removeClass('on');
        $('.wrap .tab_box .tab div').eq(p).addClass('on');

        $('.wrap .tab_box .sheet_box>div').removeClass('so');
        $('.wrap .tab_box .sheet_box>div').eq(p).addClass('so');

    });

    let id = 'greencomputer';
    let pw = '1234';
    let userId;
    let userPw;

    $('.login_btn').click(function() {
    
      userId = $('#user_id').val();
      userPw = $('#user_pw').val();

        if(id==userId) {
            if(pw==userPw) {
                alert('사이트 접속을 환영합니다')
            } else {
                alert('비밀번호가 틀렸습니다')
            }
        } else if(id !==userId && pw !==userPw) {
            alert('아이디와 비밀번호 모두 틀렸습니다')
        } else {
            alert('아이디가 틀렸습니다')
        }
    });


    $('#user_id').val('').focus();
    $('#user_pw').val('');



    $('.user_id').keypress(function(){
        userId=$('.user_id').val();

        if(userId.length>=15) {
            alert('아이디 입력 수는 15자리 이하입니다')
        }
    });








});

















