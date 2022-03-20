let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ];

  function load_table(){
    var table = document.getElementById("main_table");
        // document.getElementById('tbl').innerHTML += '<tr><td>New Text</td></tr>';
        console.log("before ----->"+table.rows.length);
        var i=2;
        var t= table.rows.length-1;
        //if(t!=1) i=1;
      for(t;t>0;t--){
        // console.log("i ----->"+t+" length ----->"+t);
        table.rows[t].remove();
        //if(i==t) {t=1; break;}
      }
        users.forEach( item => {
      let row = table.insertRow();
      let id = row.insertCell(0);
      id.innerHTML = item.id;
      let createdDate = row.insertCell(1);
      createdDate.innerHTML = item.createdDate;
      let status = row.insertCell(2);
      status.innerHTML = '<button class="btn_table '+item.status+'">'+item.status+'</button>';
      let firstName = row.insertCell(3);
      firstName.innerHTML = item.firstName;
      let lastName = row.insertCell(4);
      lastName.innerHTML = item.lastName;
      let userName = row.insertCell(5);
      userName.innerHTML = item.userName;
      let registrationNumber = row.insertCell(6);
      registrationNumber.innerHTML = item.registrationNumber;
      let action = row.insertCell(7);
      action.innerHTML =
      '<span class="action_icon" onclick="remove_element('+item.id+')">&#128465;</span>';

    });
  }




  const trigger = document.querySelector('.open-modal-btn');
const closeBtn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.my-modal');
const okBtn = document.querySelector('.ok-modal-btn');
const myform=document.getElementById('myform');

trigger.addEventListener('click', () => {
  modal.showModal();
});
closeBtn.addEventListener('click', () => {
  modal.close();
});
//
myform.addEventListener('submit', () => {
//alert('eeeeeeeeeeee');
test();
});
// okBtn.addEventListener('click', () => {
//   //modal.close('Ok! 🤠');
// });

function test(){
  console.log('test function');

users.push({ createdDate: document.getElementById('date').value,
 status: document.getElementById('status').value,
 firstName:document.getElementById('firstName').value,
 lastName:document.getElementById('lastName').value,
 userName:document.getElementById('userName').value,
 registrationNumber:56555,
id:Math.floor(Math.random() * 999999),
});

load_table();

}

function remove_element(id){
var res=confirm("es-tu sûr de supprimer cet utilisateur ?");
if(res)
{
  let new_users="";
 new_users= users.filter(item => {
  return item.id !=id
});
// console.log(element);
// users.remove(element);
users=new_users;
console.log(users);
load_table();
}
}
