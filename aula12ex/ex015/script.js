function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }

    let fsex = document.getElementsByName('radsex')
    let idade = (ano - Number(fano.value))
    let gen = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        gen = 'Homem'
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'menino.jpg')
        } else if (idade >= 13 && idade < 21) {
            img.setAttribute('src', 'adolem.jpg')
        } else if (idade >= 21 && idade < 50) {
            img.setAttribute('src', 'homem.jpg')
        } else {
            img.setAttribute('src', 'idoso.jpg')
        }
    } else {
        gen = 'Mulher'
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'menina.jpg')
        } else if (idade >= 13 && idade < 21) {
            img.setAttribute('src', 'adolef.jpg')
        } else if (idade >= 21 && idade < 50) {
            img.setAttribute('src', 'mulher.jpg')
        } else {
            img.setAttribute('src', 'idosa.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    res.appendChild(img)
}