let info = document.getElementById("info");

info.addEventListener(onmouseover, function(){

})

/*<!DOCTYPE html>
<html>
<head>
<style>
  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>
</head>
<body>

<div class="tooltip">Texto con tooltip
  <span class="tooltiptext">Información adicional</span>
</div>

</body>
</html>

------
     const tooltip = document.querySelector('.tooltip');
     const tooltipText = document.querySelector('.tooltiptext');

     tooltip.addEventListener('mouseover', () => {
       tooltipText.style.visibility = 'visible';
     });

     tooltip.addEventListener('mouseout', () => {
       tooltipText.style.visibility = 'hidden';
     });
*/