function toCelsius() {
    let num=document.getElementById('num').value 
    return (5/9) * (num-32);
  }
  document.getElementById("demo").innerHTML = toCelsius;

  function reload(){
 window.location.reload()
}