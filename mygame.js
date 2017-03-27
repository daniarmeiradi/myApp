//#####----- Game Tebak Kecocokan Pilihan -----#####
//Permainan ini bertujuan untuk mencocokkan elemen dari sebuah array yang dipilih secara
//acak oleh fungsi Math.random() dengan input dari pemain yang ditampung oleh variabel
//"tebakan".


var tipeData = ['string', 'number', 'boolean', 'undefined', 'null' ];

var jawaban = tipeData[Math.round(Math.random() * tipeData.length)];

function game(){
  var tebakan = prompt('Tebak sebuah tipe data dalam javascript.\nPilih : string, number, boolean, undefined, null\nCocokkan jawaban Anda dengan jawaban kami !');
  
 if (tebakan === null){
   return;
  }else if (tebakan === jawaban){
    alert('Jawaban kami: '+jawaban+'\nJawaban Anda: '+tebakan+'\nCOCOK !');
  }else if (tipeData.indexOf(tebakan) === -1){
    alert('\"'+tebakan+'\" itu BUKAN tipe data !');
  }else {
    alert('Jawaban kami: '+jawaban+'\nJawaban Anda: '+tebakan+'\nTIDAK COCOK !');
  }
}

game();