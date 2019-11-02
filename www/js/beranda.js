$(document).ready(function(){
  
          $('.materialboxed').materialbox();
          $('.button-collapse').sideNav();
          $('select').material_select();
          var loading = "<div class='progress'><div class='indeterminate'></div></div>";
          console.log("Halaman berhasil di load");
          $('#divUtama').html(loading);
          $('#divUtama').load('utama.html');
          $('#judulApps').html("Track Rute Apps");
      //tombol beranda
      $('#homeSideNav').click(function(){
      location.reload();
      });
  
  $('#pesanDriver').click(function(){
    
            $('#divUtama').html(loading);
          $('#divUtama').load('pesanDriver.php');
          $('#judulApps').html("Track Rute Apps");
    $('.button-collapse').sideNav('hide');
  });
  
  
  $('#btnPengujian').click(function(){    
            $('#divUtama').html(loading);
          $('#divUtama').load('pengujian.html');
          $('#judulApps').html("Pengujian");
    $('.button-collapse').sideNav('hide');
  });
  
  
      
    
  
      function updateSistem(){
        Materialize.toast('Server realtime sedang berjalan', 1100);
      }
  
     
      
    });