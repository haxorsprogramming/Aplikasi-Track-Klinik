$(document).ready(function(){
 
  let username = $('#txtUsername');
  let password = $('#txtPassword');
 
  let statusKoneksi = navigator.onLine;
      
  if(statusKoneksi === true){
     $('#capStatus').html('Status koneksi ke server : terhubung');
  }else{
    $('#capStatus').html('Status koneksi ke server : tidak terhubung');
  }
     
  
  $('#btnLogin').click(function(){
    $.get('http://157.245.154.248:3563/anggota/all',function(data){
      console.log(data);
    });
  });
  
});