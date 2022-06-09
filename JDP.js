  

/* 
Etape 1 : choisir le mot a deviner
    Appuyer sur demarrer le jeu => clavier = display bloc 
    utiliser un input => texte limiter a un mot sans caractere speciaux
    stocker le mot dans la variable correspondante
    crée une variable motUser qui contiendra un tableau avec autant de "_" que mot/lenght (boucle)
    demander a cliquer sur une lettre
Etape 2 : Verifier la lettre
    si lettre deja clicker
    si lettre bonne alors....sinon faute++
etape 3 condition victoire/defaite
Si f = 6 alors defaite
si motChoisis = motUser alors Victoire
//Permet de recuperer les information de chaque touche du clavier individuellement
*/

//******************************** Etape 1 : choisir le mot a deviner
window.onload = function(){
    var monTableau = [];
    var monTableauUser = [];
    var i=0;
    var usedLettre;
    var f = 0;
    var motChoisis;
    document.querySelector('#start').onclick = function() {

        document.querySelector('#indication').style.display = 'none';
        // '<p>Choisir le mot de depart</p>'+ 
        // '<input id="votreMot" type="text" placeholder="noter votre mot ici"></input>'+
        // '<button id="submit" type="button"> envoyer</button>';
        document.querySelector('#start').style.display = 'none';
        document.querySelector('#choixMot').style.display = 'block';
        
    };
    document.querySelector('#submit').onclick = function() {
        
        motChoisis = document.querySelector('#votreMot').value.toLowerCase();
        
        document.querySelector('#motChoisis').innerText = motChoisis
        
        
        while (i < motChoisis.length){
            monTableau.push(motChoisis.slice(i , i+1));
            monTableauUser.splice(i,0,"_");
            i++;
        };
        
        console.log(monTableau)
        console.log(monTableauUser)
        document.querySelector('#motUser').innerText = monTableauUser
        document.querySelector('#clavier').style.display = 'block';
        document.querySelector('#indication').innerHTML = '<p>Cliquez une lettre</p>'
        document.querySelector('#choixMot').style.display = 'none';
    };
        







    
    var a = monTableauUser.join()
    var b = monTableau.join()
    


    



    // while(f<6){
    //     //******************************** Etape 2 : Verifier la lettre


        //Fonction par laquelle la valeur du clavier passera
        function choixLettre(lettre) {
            var lettreChoisis = lettre
            console.log(lettreChoisis)
        }

            document.querySelector('#a').onclick = () => {
                choixLettre('a');
                // this.style.backgroundColor = 'silver';
                
            }
            document.querySelector('#b').onclick = () => {
                choixLettre('b');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#c').onclick = () => {
                choixLettre('c');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#d').onclick = () => {
                choixLettre('d');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#e').onclick = () => {
                choixLettre('e');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#f').onclick = () => {
                choixLettre('f');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#g').onclick = () => {
                choixLettre('g');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#h').onclick = () => {
                choixLettre('h');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#i').onclick = () => {
                choixLettre('i');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#j').onclick = () => {
                choixLettre('j');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#k').onclick = () => {
                choixLettre('k');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#l').onclick = () => {
                choixLettre('l');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#m').onclick = () => {
                choixLettre('m');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#n').onclick = () => {
                choixLettre('n');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#o').onclick = () => {
                choixLettre('o');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#p').onclick = () => {
                choixLettre('p');
                // this.style.backgroundColor = 'silver';
            }
            document.querySelector('#q').onclick = () => {
                choixLettre('q');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#r').onclick = () => {
                choixLettre('r');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#s').onclick = () => {
                choixLettre('s');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#t').onclick = () => {
                choixLettre('t');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#u').onclick = () => {
                choixLettre('u');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#v').onclick = () => {
                choixLettre('v');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#w').onclick = () => {
                choixLettre('w');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#x').onclick = () => {
                choixLettre('x');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#y').onclick = () => {
                choixLettre('y');
                // this.style.backgroundColor = 'silver'
            }
            document.querySelector('#z').onclick = () => {
                choixLettre('z');
                // this.style.backgroundColor = 'silver'
            }


    
    //         // if (usedLettre.indexOf(lettreChoisis) != -1){
    //         //     document.querySelector('#indication').innerText = "Tu as deja utiliser cette lettre choisis en une autre";
    //         // //     document.querySelector('#'+lettre).style.backgroundColor = 'red'
    //         //     //         console.log(monTableau);
    //         //     //         console.log(monTableauUser);
    //         //     //         console.log(f);
    //         // }
    //         // else{
    //         //     usedLettre = usedLettre + lettre
    //         //     if (motChoisis.indexOf(lettreChoisis) = -1){
    //         //         document.querySelector('#indication').innerHTML = '<p>La lettre n\'est pas la bonne</p><p>Choisissez une autre lettre</p>';
                    
    //         //         f++


    //         //     }
    //         //     else{
    //         //             for (var idx=0; idx != -1;idx++){
                        
    //         //             idx = (monTableau.indexOf(lettre));
    //         //             monTableauUser.splice(idx,1,lettre);  //teste si le mot est present plusieurs fois
    //         //             idx = monTableau.indexOf(lettre, idx+1);
    //         //             document.querySelector('#motUser').innerText = monTableauUser;
    //         //             document.querySelector('#indication').innerHTML = '<p>Choisissez une autre lettre</p>'
    //         //             idx++
    //         //             }
    //         //     }
    //         // }

            
    //     }
        //******************************** Etape 3 condition victoire/defaite
        // if ( a = b ) {
        //     f=10
        //     document.querySelector('#indication').innerHTML = '<h2>VOUS AVEZ GAGNER</h2>'
        // }

    // }







}