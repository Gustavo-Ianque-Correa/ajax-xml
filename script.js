//javascript para carregar as ultimas noticias


//endereço do xml
const xmlURL = 'https://folhadecianorte.com/sitemap-news.xml'

//função para buscar o xml
function buscarxml() {
    fetch(xmlURL).then(respose => respose.text).then(data => {
        //aqui vamos converter o texto em DOM
        let parcer = new DOMParser();
        let xml = parcer.parseFromString(data, "application/xml")
        
        //agora vamos extrair os dados desejados(exemplo url da noticia)
        let noticias = xml.getElementsByTagName("url");

        //elemento (no html) onde vou exibir as noticias
        let manchetescontainer = document.getElementById("manchetes");
        manchetescontainer.innerHTML = ""; //limpa o elemento

        //percorrer as noticias usando um for
        for (let i = 0; i < noticias.length; i++) {
            let loc = noticias[i].getElementsByTagName("loc")[0].textContent;
            let data_publi = noticias[i].getElementsByTagName("news:publication_data")[0].textContent;
            let titulo = noticias[1].getElementsByTagName("news:title")[0].textContent;
            let mancheteshtml = "<div class='noticias'>"; 
            let mancheteshtmlclassend = "</div>"; 
            let h21 = "<h2>";
            let h21end = "</h2>"
            let link1 = "<a href='"
            let linkend = "'>leia mais</a>"
            let montadiv = mancheteshtml+h21+$(titulo)+h21end+link1+$(loc)+linkend+mancheteshtmlclassend;
            manchetescontainer.innerHTML += montadiv;


        }
    }).catch(error => {console.error('erro ao carregar o xml'), error})
}

window.onload = buscarxml;//atualiza ao carregar a pagina