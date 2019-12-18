document.addEventListener('DOMContentLoaded', function() {
    
    var myForm = document.forms[0];
    var inputs = document.querySelectorAll('form input');
    myForm.addEventListener('submit', function(e) {
       
        e.preventDefault();
        
        var inputs = document.querySelectorAll('form input');
        
        inputs.forEach(function(checkInput) {
            
            var forText = checkInput.value;
            
           if (checkInput.textContent !== forText) {
               checkInput.classList.remove('warning-bg');
               checkInput.nextElementSibling.style.display = 'none';
               checkInput.style.border = '1px solid #CCCCCC';
               checkInput.style.borderRadius = '2px';
           } 
            
            else {
                
               checkInput.classList.add('warning-bg'); 
                checkInput.nextElementSibling.style.display = 'block';
                checkInput.style.border = '2px solid #FF7978';
                checkInput.style.borderRadius = '5px';
              
            }
            
        })
        
        
    });   
    
      myForm.addEventListener('keyup', function(e) {
          
          inputs.forEach(function(onType) {
              
              if (onType.className !== 'warning-bg') {
                  onType.style.border = '1px solid #CCCCCC';
                  onType.classList.remove('warning-bg');
                  onType.nextElementSibling.style.display = 'none';
              }
              
          })
          
      })
    
        
});