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
    respict =""
    if (result=="Компьютер выиграл")
        {
            resultclass_name = "alert alert-danger mb-2"
            respict="comp"
        }
        
    else if (result=="Вы выиграли")
    {
        resultclass_name = "alert alert-success mb-2"
        respict="man"
    }
       
    else if (result=="Ничья")  
    {
        resultclass_name = "alert alert-secondary mb-2"
        respict="none"
    }  
        

    document.getElementById("result").className= resultclass_name
    document.getElementById("res_info").innerHTML = "Результат игры"

    res_you = "<div class='card' style='width: 18rem;'> \
    <img src='image\\"+par+".jpg' class='card-img-top' alt='...'> \
    <div class='card-body'>\
      <h5 class='card-title'>Ваш выбор</h5> \
      <p class='card-text'>"+change(par)+"</p>\
      \
    </div> \
  </div>"


  res_comp = "<div class='card' style='width: 18rem;'> \
  <img src='image\\"+comp_par+".jpg' class='card-img-top' alt='...'> \
  <div class='card-body'>\
    <h5 class='card-title'>Выбор компьютера</h5> \
    <p class='card-text'>"+change(""+comp_par)+"</p>\
    \
  </div> \
</div>"


res_win = "<div class='card' style='width: 18rem;'> \
<img src='image\\"+respict+".png' class='card-img-top' alt='...'> \
<div class='card-body'>\
  <h5 class='card-title'>Результат</h5> \
  <p class='card-text'>"+result+"</p>\
  \
</div> \
</div>"
    //document.getElementById("result").innerHTML = " Вы выбрали <strong>"+change(par)+"</strong>. Компьютер выбрал <strong>"+change(""+comp_par)+"</strong>. "+result
   
    document.getElementById("result_you").innerHTML = res_you
    document.getElementById("result_comp").innerHTML = res_comp 
    document.getElementById("result_win").innerHTML = res_win

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