let perguntas = [
    {
        titulo: 'Place',
        alternativas: ['ˈpleɪs','ˈkʰʌmpənɪ','ˈɡɹup','ˈbi'],
        correta: 0
    },
    {
        titulo: 'Get',
        alternativas: ['ˈpleɪs','ˈkʰʌmpənɪ','ˈɡɛt','ˈbi'],
        correta: 2
    },
    {
        titulo: 'Day',
        alternativas: ['ˈpleɪs','ˈkʰʌmpənɪ','ˈɡɛt','ˈdeɪ'],
        correta: 3
    }
    ]
   
    let app = {
    start: function(){
    
        this.Atualpos = 0;
        this.Totalpontos = 0;
    
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element,index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },
    
    mostraquestao: function(q){
        this.qatual = q;
        // mostrando o titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        // mostrando as alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element,index){
            element.textContent = q.alternativas[index];
        })
    
    },
    
    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            this.Atualpos = 0;
        }
    },
    
    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correct")
            this.Totalpontos++;
            this.mostraresposta(true);
        }
        else{
            console.log("Wrong")
            this.mostraresposta(false);
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },
    
    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Your score:  ${this.Totalpontos}`;
    },
    
    mostraresposta: function (correto) {
        let resultDiv = document.getElementById('result');
        let result = '';
        // formate a mensagem a ser exibida
        if (correto) {
          result = 'Correct Answer!';
        }
        else {
          // obtenha a questão atual
          let pergunta = perguntas[this.Atualpos];
          // obtenha o índice da resposta correta da questão atual
          let cindice = pergunta.correta;
          // obtenha o texto da resposta correta da questão atual
          let ctexto = pergunta.alternativas[cindice];
          result = `Incorrect! Correct Answer: ${ctexto}`;
        }
        resultDiv.textContent = result;
      }
    
    
    }
    
    app.start();