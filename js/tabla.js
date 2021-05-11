let i = 2

for(i  = 0; i<= 20 ; i++){
   let table = `<table class="m-5 table" style="width: 18rem">
  
  </thead>
  <tbody>
    <tr>
      <th scope="row">${i}</th>
      <td>kim</td>
      <td>morales</td>
      <td>kim@gmail.com</td>
    </tr>
    <thead>
    <tr>
   <th scope="col">#</th>
   <th scope="col">nombre</th>
   <th scope="col">apellido</th>
   <th scope="col">correo</th>
   </tr> `
  


      
    document.getElementById("contenedor-table1").innerHTML += table
}
