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
    text1.innerHTML = '<h2>Clientes PicPay possuem ofertas exclusivas!</h2><p>Email</p><input type="email" class="email" placeholder="ex:nome_sobrenome@hotmail.com"><p>Senha</p><input type="password" class="senha"></input>'
    text1.className = 'text1-login'
    text2.innerHTML = ''
    text3.innerHTML = ''
    div_button.className = 'div-button-login'
    div_button.innerHTML = '<a href="#">Entrar</a>'
    div_button.parentElement = 'div.text1-login'
    
    
    div_button.addEventListener('click', entrar)
    function entrar() {
        //console.log("Entrou")
        var email = document.querySelector('.email').value,
            senha = document.querySelector('.senha').value
    }
}

