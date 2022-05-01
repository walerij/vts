function check(par)
{
    comp_par = Math.floor(Math.random() * 3); 
    alert("Вы выбрали "+change(par)+" Компьютер выбрал "+change(""+comp_par))
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