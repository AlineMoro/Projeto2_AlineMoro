var login_btn = document.querySelector('.div-login'),
    text1 = document.querySelector('.text1'),
    text2 = document.querySelector('.text2'),
    text3 = document.querySelector('.text3'),
    div_button = document.querySelector('.div-button')
    main_text = document.querySelector('.main-text')

login_btn.addEventListener('click',click_login)
function click_login() {
    //var res = await axios.post('https://reqres.in/api/login')
    main_text.className = 'main-text-login'
    text1.innerHTML = '<p>E-mail</p><input type="email" id="email" placeholder="ex:nome_sobrenome@hotmail.com"><p>Senha</p><input type="password" id="senha"></input>'
    text1.className = 'text1-login'
    text2.innerHTML = ''
    text2.className = 'text2-login'
    text3.innerHTML = ''
    div_button.className = 'div-button-login'
    div_button.innerHTML = '<a href="#">Entrar</a>'
}

