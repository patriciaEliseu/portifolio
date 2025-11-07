// Selecionar a Seçaõ About
const about = document.querySelector('#about');

// Selecionar o formulário de contato
const formulario = document.querySelector('#formulario');

// Expressão regular para validar o email
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 

// Função para buscar os dados no GitHub
async function getApiGitHub() {

    try {

        // PASSO 01: Fazer uma requisição do tipo GET para a API do GitHub
        const dadosPerfil = await fetch('https://api.github.com/users/patriciaEliseu');

        // Passo 02: Criar o HTML / CSS com os dados do Perfil
        const perfilJson = await dadosPerfil.json();
        
        // PASSO 03: Criar o HTML/CSS com os dados do perfil.

        let conteudo = `
   
            <!-- FOTO DO PERFIL -->
            <figure class="about_image">
                <img
                    src="${perfilJson.avatar_url}"
                    alt="Foto do perfil do GitHub -"${perfilJson.name}."
                >
            </figure> 
            <!-- CONTEÚDO DO PERFIL -->
            <article class="about_content">
 
                <h2>Sobre mim</h2>
                <p>Sou Patricia Gonçalves Eliseu, uma desenvolvedora full stack apaixonada por criar soluções digitais inovadoras. Com experiência em diversas tecnologias, estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para projetos impactantes.</p>
                <p>Minha missão é transformar ideias em realidade através do código, entregando produtos de alta qualidade que atendam às necessidades dos usuários.</p>
 
                <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver GitHub</a>
                   
                    <!-- Faltou esta div para alinhar os cards -->
                    <div class="stats-wrapper">
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.followers}</p>
                            <p class="stat-label">Seguidores</p>
                        </div>
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.public_repos}</p>
                            <p class="stat-label">Repositórios</p>
                        </div>
                    </div>
 
                </div>
            </article>
 
        `;
 
        // Passo 04: Adicionar o HTML dentro da seção About 
        about.innerHTML += conteudo;

    }catch (error) {
        console.error(error);
    }
}

    //Função de envio e validação do formulário de contato
    formulario.addEventListener('submit', function(event) {
        // Impedir o envio automático do formulário
        event.preventDefault();

        // Validação do campo nome
        const campoNome = document.querySelector('#nome');
        const txtNome = document.querySelector('#txtNome');

        // Nome precisa ter no mínimo 3 caracteres
        if (campoNome.value.length < 3) {
            txtNome.innerHTML = 'O Nome deve ter no minímo 3 caracteres.';
            campoNome.focus();
            return;
            
        } else {
            txtNome.innerHTML = '';
        }

        // Validação do campo email
        const campEmail = document.querySelector('#email');
        const txtEmail = document.querySelector('#txtEmail');

        // Validar se o email é válido
        if (!campEmail.value.match(emailRegex)) {
            txtEmail.innerHTML = 'Digite um e-mail válido.';
            campoEmail.focus();
            return;
            
        } else {
            txtEmail.innerHTML = '';
        }

 

  // validar o campo assunto
    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');

    // Assunto deve ter no mínimo 5 caracteres
    if (campoAssunto.value.length < 5) {
        txtAssunto.innerHTML = 'O Assunto deve ter no minímo 5 caracteres.';
        campoAssunto.focus();
        return;
        
    } else {
        txtAssunto.innerHTML = '';
    }

    // Se passou por todas as validações, enviar o formulário
    formulario.submit();

})


// Chamar a função para buscar os dados do GitHub
getApiGitHub();

