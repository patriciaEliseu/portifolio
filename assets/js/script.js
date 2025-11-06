// Selecionar a Seçaõ About

const about = document.querySelector('#about');

// Função para buscar os dados no GitHub
async function getApiGitHub() {

    try {

        // Fazer uma requisição do tipo GET para a API do GitHub
        const dadosPerfil = await fetch('https://api.github.com/users/patriciaeliseupge');

        // Passo 02: Criar o HTML / CSS com os dados do Perfil
        // vou pegar todo o conteudo menos a cessão.


        let conteudo = await dadosPerfil.json();

        let conteudo = 

        let conteudo = `
       
            <!-- FOTO DO PERFIL -->
            <figure class="about_image">
                <img
                    src="${perfilJson.avatar_url}"
                    alt="Foto do perfil do GitHub - ${perfilJson.name}."
                >
            </figure> 
            <!-- CONTEÚDO DO PERFIL -->
            <article class="about_content">
 
                <h2>Sobre mim</h2>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Nulla id gravida magna, ut semper sapien.</p>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Nulla id gravida magna, ut semper sapien.</p>
 
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
 

 

        // Passo 04: 

}catch (error) {
        console.error(error);
    }
}

// Chamar a função para buscar os dados do GitHub
getApiGitHub();

