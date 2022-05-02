function check(par)
{
    comp_par = Math.floor(Math.random() * 3); 
    
    result=""
    if (par==comp_par) result="Ничья"
    else if (par==0 && comp_par==2) result="Компьютер выиграл"
    else if (par==2 && comp_par==0) result="Вы выиграли"
    else if (par>comp_par) result="Компьютер выиграл"
    else if (par<comp_par) result="Вы выиграли"
   
    //окраска окна результата
    resultclass_name = ""
    if (result=="Компьютер выиграл")
        resultclass_name = "alert alert-danger"
    else if (result=="Вы выиграли")
        resultclass_name = "alert alert-success"
    else if (result=="Ничья")    
        resultclass_name = "alert alert-secondary"

    document.getElementById("result").className= resultclass_name
    document.getElementById("result").innerHTML = " Вы выбрали <strong>"+change(par)+"</strong>. Компьютер выбрал <strong>"+change(""+comp_par)+"</strong>. "+result
    
}


function getname()
{
    VK.Api.call('users.get', { v:"5.73"}, function(r) {
        if(r.response) {
          alert('Привет, ' + r.response[0].first_name);
        }
      });
}

function change(par)
{
    switch(par){
        case "0":
            return "камень"
            break
        case "1":
            return "ножницы"
            break
        case "2":
            return "бумага"    
            break
     
    }

}