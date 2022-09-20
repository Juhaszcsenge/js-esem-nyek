function katt(){
 //window.alert('Katt');
  console.log('katt');
  //document.getElementById('fogomb').classList.add('Fontos');
  document.getElementById('fogomb').classList.toggle('fontos');

  if(document.getElementById('fogomb').classList.contains('fontos')){
    document.getElementById('fogomb').textContent = 'Ez egy fontos gomb';
  }else{
    document.getElementById('fogomb').textContent = 'Ez egy sima gomb';
  }




}

function duplakatt(){
    console.log('dupla');
}



function folotte(){
    console.log('Fölötte');

}



function init(){
    document.getElementById('fogomb').addEventListener('click',katt);
    document.getElementById('fogomb').addEventListener('dbclick',duplakatt);
    document.getElementById('bekezdes').addEventListener('pointerover',folotte);
    document.getElementById('egyik').addEventListener('input', szamol);
     document.getElementById('masik').addEventListener('input', szamol);

    document.getElementById('hatterszin').addEventListener('input', hatterszin);
    document.getElementById('betuszin').addEventListener('input', betuszin);
    console.log('Init');
}

document.addEventListener('DOMContentLoaded', init);
console.log('JS fájl vége');

function szamol(){
    let egyikszam = parseFloat(document.getElementById('egyik').value);
    let masikszam = parseFloat(document.getElementById('masik').value);
    document.getElementById('eredmeny').value = egyikszam + masikszam;

    document.getElementById('kivonas').textContent = (egyikszam - masikszam) ;
}

function hatterszin(e){
   let szin = e.currentTarget.value;
   console.log(szin);
   document.getElementById('szinezo').style.backgroundColor = szin;
}

function betuszin(e){
    let szin = e.currentTarget.value;
    document.body.style.color = szin;
}