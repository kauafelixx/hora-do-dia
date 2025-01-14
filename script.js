

function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')

    var data= new Date()
    var hora= data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora <12){
        //bom dia
        imagem.src="img/manha.png"
        document.body.style.background ='#f9d487'
        document.h1.style.color='#000000'
           document.p.style.color='#000000'
    }else if (hora >=12 && hora <18){
        //boa tarde
        imagem.src="img/tarde.png"
            document.body.style.background ='#f08925'
    }else{
        //boa noite
        imagem.src="img/noite.png"
            document.body.style.background ='#3E7786'
        
    }
}