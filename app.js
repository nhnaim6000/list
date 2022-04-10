

const form = document.getElementById('form_in');




form.addEventListener('submit', (e) =>{

    e.preventDefault();



let name = document.getElementById('name');

let loca = document.getElementById('location');

let skill = document.querySelectorAll('input[type="checkbox"]:checked');

let gen = document.querySelector('input[type="radio"]:checked');

let tbody = document.getElementById('tbody');

let sv = '' ;



for(let i = 0; i < skill.length; i++){

    sv += skill[i].value;
  
    
}






tbody.innerHTML += `

<tr>
      
      <td>${name.value}</td>
      <td>${loca.value}</td>
      <td>${sv}</td>
      <td>${gen.value}</td>
    </tr>
    <tr>


`;

});
