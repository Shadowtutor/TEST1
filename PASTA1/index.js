console.log("JavaScript Funcionando")

//seleciona os botoes e as imagens

    //cachoeira
        const botaoCachoeira = document.getElementById("revelarCachoeiraBtn");
        const imagemCachoeira = document.getElementById("imagemCachoeira");

    //lagoa
        const botaoLagoa = document.getElementById("imagemLagoaBtn");
        const imagemLagoa = document.getElementById("imagemLagoa");

    //aurora
        const botaoAurora = document.getElementById("imagemAuroraBtn");
        const imagemAurora = document.getElementById("imagemAurora");

//funcao para mostrar ou esconder as imagens
    //cachoeira
        botaoCachoeira.addEventListener("click", function() 
            {
                if //condicional para que a ação ocorra (Se)
                        (imagemCachoeira.style.display === "none") 
                    {
                        imagemCachoeira.style.display = "block"; 
                    }
                        //none==nenhum (nenhuma imagem está amostra)
                        //block==bloco (existe um bloco amostra)
            
                else //condicional para que outra ação ocorra (Senão)
                    {
                        imagemCachoeira.style.display = "none";
                    }
            }   
        );
    
     //lagoa
        botaoLagoa.addEventListener("click", function() 
            {
                if //condicional para que a ação ocorra (Se)
                        (imagemLagoa.style.display === "none") 
                    {
                        imagemLagoa.style.display = "block"; 
                    }
                        //none==nenhum (nenhuma imagem está amostra)
                        //block==bloco (existe um bloco amostra)
     
                else //condicional para que outra ação ocorra (Senão)
                    {
                        imagemLagoa.style.display = "none";
                    }
            }   
        );    
    
     //aurora
        botaoAurora.addEventListener("click", function() 
            {
                    if //condicional para que a ação ocorra (Se)
                        (imagemAurora.style.display === "none") 
                {
                        imagemAurora.style.display = "block"; 
                }
                        //none==nenhum (nenhuma imagem está amostra)
                        //block==bloco (existe um bloco amostra)

                    else //condicional para que outra ação ocorra (Senão)
                {
                         imagemAurora.style.display = "none";
                }
            }   
        );        

        function abrirImagem(src) {
            const imagemGrande = document.getElementById('imagemGrande');
            const modal = document.getElementById('imagemMaior')
    //define o src da imagem maior e exibe o modal    
            imagemGrande.src=src;
            modal.style.display = "flex"; //exibe a imagem maior
        
        }

        function fecharImagem() {
            const modal = document.getElementById('imagemMaior');

    //oculta a imagem maior quando o usuario clica na area de fundo
            modal.style.display = "none";        
        }