function carregar() {
    let hora = window.document.getElementById('horas')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let atual = data.getHours()
    let text = window.document.getElementById('texto')

    hora.innerHTML = `Agora são ${atual} horas.`
    if (atual >= 0 && atual < 12) {
        img.src = 'dia.jpg'
        texto.innerHTML = 'Bom dia!'
        document.body.style.background = '#ffffe0'
    } else if (atual >= 12 && atual <= 18) {
        img.src = 'tarde.jpg'
        texto.innerHTML = 'Boa tarde!'
        document.body.style.background = '#da70d6'
    } else {
        img.src = 'noite.jpg'
        texto.innerHTML = 'Boa noite!'
        document.body.style.background = '#251824'
    }
}
