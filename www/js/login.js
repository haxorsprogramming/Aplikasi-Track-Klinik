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
      window.location.assign('mainApp/beranda.html');
    }else{
      window.alert("Tidak ada koneksi, harap periksa koneksi");
    }
   
  });
  
});