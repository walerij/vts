function check(par)
{
    comp_par = Math.floor(Math.random() * 3); 
    alert("Вы выбрали "+par+" Компьютер выбрал "+comp_par)
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
        case "32":
            return "бумага"    
            break
     
    }

}