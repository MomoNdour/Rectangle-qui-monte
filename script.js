var corps = document.querySelector('body');

var rect = document.getElementById('Rectangle');

//La fonction qui fait monter le rectangle si on appui sur la touche Haut du clavier
corps.onkeydown = function()
{
    //Une variable 
    var touche = event.keyCode;
    if(touche == 38)
    {
        rect.style.top = "0";
        rect.style.transition = '2s';

        //SetTimeout Pour executer une fonction en temps donnés cad je veux à 1000ms faire redecendre mon rectangle à 400px de top
        setTimeout(function()
                    {
                        rect.style.top = "400px";
                        rect.style.transition = '2s';
                    },
        2000)
    }
    
}