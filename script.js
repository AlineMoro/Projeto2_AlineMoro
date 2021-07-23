var login_btn = document.querySelector('.div-login'),
    text1 = document.querySelector('.text1'),
    text2 = document.querySelector('.text2'),
    text3 = document.querySelector('.text3'),
    div_button = document.querySelector('.div-button')
    main_text = document.querySelector('.main-text')

login_btn.addEventListener('click',click_login)
function click_login() {
    main_text.className = 'main-text-login'
    text1.innerHTML = '<h2>Cliente PicPay possui ofertas exclusivas!</h2><label>Email</label><input type="email" class="email" placeholder="ex: nome_sobrenome@hotmail.com"><label>Senha</label><input type="password" class="senha" placeholder="*********"></input>'
    text1.className = 'text1-login'
    text2.innerHTML = ''
    text3.className = 'text3-login'
    text3.innerHTML = ''
    div_button.className = 'div-button-login'
    div_button.innerHTML = '<a href="#">Entrar</a>'
    
    div_button.addEventListener('click', entrar)
    function entrar() {
        //console.log("Entrou")
        var email = document.querySelector('.email').value,
            senha = document.querySelector('.senha').value,
            input_email = document.querySelector('.email'),
            input_senha = document.querySelector('.senha')


        login = axios.post('https://reqres.in/api/login', {
            email: email,
            password: senha
        })

        .then(function (login){
            console.log(login);
            if(login.status == 200){
                input_email.style.border = '2px solid #21812d'
                input_senha.style.border = '2px solid #21812d'
                text3.className = 'text3-success'
                text3.innerHTML = '<h3 class="msg_error">Login efetuado com sucesso!</h3>'
            }

            var section = document.querySelector('.div-section1'),
                consulta = document.createElement('div')
                input_pesquisa = document.createElement('input')
                send_pesquisa = document.createElement('input')

            section.appendChild(consulta)
            consulta.className = 'div-consulta'
            consulta.appendChild(input_pesquisa)
            input_pesquisa.className = 'pesquisa'
            input_pesquisa.placeholder = 'Qual jogo você deseja encontrar?'
            consulta.appendChild(send_pesquisa)
            send_pesquisa.type = 'submit'
            send_pesquisa.value = 'Pesquisar'
            send_pesquisa.className = 'send-pesquisa'

            send_pesquisa.addEventListener('click', pesquisar)
            function pesquisar() {
                var titulo = document.querySelector('.pesquisa').value
                //console.log("Pesquisa")
                axios.get('https://www.cheapshark.com/api/1.0/deals?title=' + titulo)

                .then(jogo)
                function jogo(jogo) {
                    console.log(jogo)
                    for(var i = 0; i <= jogo.data.length && i < 15; i++){
                        var lista = document.createElement('ul'),
                            li = document.createElement('li'),
                            img = document.createElement('img')
                        
                        consulta.appendChild(lista)
                        lista.className = 'lista-jogos'
                        li.innerHTML = '<p><span>Título: "</span>' + jogo.data[i].title + '"</p><p><span>Classificação: </span>' + jogo.data[i].dealRating + '</p><p><span>Preço normal: </span>U$' + jogo.data[i].normalPrice + '</p><p><span>Preço promocional: </span>U$' + jogo.data[i].salePrice + '</p>'
                        img.src = jogo.data[i].thumb
                        lista.appendChild(li)
                        li.appendChild(img)
                    }
                }
            }
        })

        .catch(function (error) {
            //console.log(error)
            if(email === '' || senha === '') {
                //console.log("Erro")
                text3.className = 'text3-empity'
                text3.innerHTML = '<h3 class="msg_error">Preencha todos os campos</h3>'
            }

            else if((email.length > 0 && email.length < 3) || (senha.length > 0 && senha.length < 3)) {
                //console.log("Erro")
                text3.className = 'text3-length'
                text3.innerHTML = '<h3 class="msg_error">Campo(s) inválido(s)</h3>'
            } else {
                input_email.style.border = '2px solid #21812d'
                input_senha.style.border = '2px solid #21812d'
                text3.className = 'text3-error'
                text3.innerHTML = '<h3 class="msg_error">Usuário ou senha inválido</h3>'
            }
        })
    }
}

