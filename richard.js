
//HOME LINK WHEN ON THE RESULTS SCREEN
  document.querySelector('h1').addEventListener('click', function() {
    window.location.href = 'index.html';
  });


//RUNS THE CALCULATION FUNCTION WHEN THE CALCULATE BUTTON IS CLICKED AND REMOVES INPUT BOX FROM SCREEN RENDER
  document.querySelector('#calculate-button').addEventListener('click', function() {
    let batteryTemp = document.querySelector('#avgTemp').value;
        let chargeTime = document.querySelector('#chargeTime').value;
        let batteryCost = document.querySelector('#batteryCost').value;
  
    calculate(batteryTemp, chargeTime, batteryCost); // Pass the input values to the calculate function
  
    document.querySelector('.results').style.display = 'block';
    document.querySelector('.input-container').style.display = 'none';
  });

//REMOVES INPUT BOX FROM SCREEN RENDER

  document.querySelector('#calculate-button').addEventListener('click', function() {
    document.querySelector('.inputBox').style.display = 'none';
  });

//TODO
//TEST OF INPUT AND OUTPUT RENDER
//RESULTS RENDER TO THE SCREEN FROM THE ALGORITHM
//THEORY OF OPERATION LINK - CALCULATE BUTTON BECOMES THEORY OF CALCULATIONS BUTTON 
//THAT IS WHAT ARE THE ASSUMPTIONS MADE BEHIND THE CALCULATION