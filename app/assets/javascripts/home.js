document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('my-button').onclick = (function() {
    document.getElementById('my-audio').play();
    document.getElementById('my-button-span').innerHTML = 'Hell world.';
    imageShower();
    resetText('my-button-span', 'Hello Sex');
    return false;
  });
  document.getElementById('their-button').onclick = (function() {
    document.getElementById('their-audio').play();
    document.getElementById('their-button-span').innerHTML = 'Bitchception.';
    resetText('their-button-span', 'Konichiwa Bitches');
    return false;
  });

  function imageShower(){
    const img = document.createElement("img");
    img.src = "https://s3.amazonaws.com/russell-personal/full-body-virtual-reality-suit-is-now-a-real-thing_1.jpg";

    document.getElementById('img1').appendChild(img);
    document.getElementById('img1').style.display = "visible"
    hideImage("img1");
  };

  function hideImage(id){
    setTimeout(function() {
      document.getElementById(id).style.display = "none";
    }, 3000);
  };

  function resetText(id, text){
    setTimeout(function() {
      document.getElementById(id).innerHTML = text;
    }, 3500);
  };
});
