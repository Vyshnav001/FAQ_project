
const dropDownElements = document.querySelectorAll('.main__question');

dropDownElements.forEach((el)=>{
    el.addEventListener('click', (e)=>{
        
      if (e.target.parentElement.open == true) return e.target.parentElement = false

      dropDownElements.forEach(element => element.parentElement.open = false)
      

      e.target.parentElement.open = false
    
    })
})
