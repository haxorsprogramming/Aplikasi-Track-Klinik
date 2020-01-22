$(document).ready(function(){
 
  let username = $('#txtUsername');
  let password = $('#txtPassword');
  username.focus();
  let statusKoneksi = navigator.onLine;
  let statusServer = '';
 
    if(statusKoneksi === true){
     $('#capStatus').html('Status koneksi ke server : terhubung');
      }else{
        $('#capStatus').html('Status koneksi ke server : tidak terhubung. Melakukan koneksi ulang dalam 5 detik.');
      }
  
  $('#btnLogin').click(function(){
    let cekLagi = navigator.onLine;
    if(cekLagi === true){
      let userId = username.val();
      let passId = password.val();
      if(userId ==='' || passId === ''){
        window.alert("Isi username & password ..");
        username.focus();
      }else{
        $('#capStatus').html("Login ...");
        $.post('http://api.haxors.or.id/taing/login_cek.php',{'userId':userId,'passId':passId},function(data){
          let obj = JSON.parse(data);
          let status = obj.status;
          console.log(data);
          if(status == 'sukses'){
            window.location.assign('mainApp/beranda.html');
          }else{
            window.alert("Username / password yang kamu masukkan salah..");
          }
        });
      }
    }else{
      window.alert("Tidak ada koneksi, harap periksa koneksi");
    }
   
  });
  
});