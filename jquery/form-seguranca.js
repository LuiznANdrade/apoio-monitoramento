var selectInput = 0;
var localidadeSelect2 = document.querySelector('.localidadeSelect');
var verificationValue = 0;
var valueCondicio = 0;


function whatRonda() {
    var especifcInfoWrite = document.querySelector('.locationinfo').value;
    var whayTypeRonda = document.getElementById('whayTypeRonda');
    if (especifcInfoWrite != ""){
        whayTypeRonda.style.display = "flex"
        console.log("OLHA SE VOCÊ NÂO ME AMA");
    }
}

function whatOptionButtom() {
    var rondaday = document.getElementById('rondaday');
    var vistoriaday = document.getElementById('vistoriaday');
    var rondatypeInfo = document.querySelector('.rondatypeInfo').value;

    if( rondatypeInfo == "Vistoria Específica de Infraestutura"){
        vistoriaday.style.display = "flex";
        rondaday.style.display = "none";
    }else if ( rondatypeInfo == "Ronda Diária"){
        vistoriaday.style.display = "none";
        rondaday.style.display = "flex";
    }



}

function repitir() {
    var condicionante = document.querySelector('.localidadeInfo').value;
    var locationEspecific = document.getElementById('locationEspecific');
    var locationInfo = document.getElementById('locationInfo');

    var selectInput;

    if (condicionante !== "" && valueCondicio == 0) {
        selectInput = 1;
        locationEspecific.style.display = 'flex';
        // valueCondicio = 1;
        
        if (condicionante == "A") {
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Brinquedoteca '>Brinquedoteca </option><option value='CoWorking/PodCast'>CoWorking/PodCast</option><option value='Argos Empreendimento'>Argos Empreendimento</option><option value='Laboratório Informática 3'>Laboratório Informática 3</option><option value='Laboratório Informática 5'>Laboratório Informática 5</option><option value='Laboratório Informática 7'>Laboratório Informática 7</option><option value='Sala das Atléticas Esquina'>Sala das Atléticas Esquina</option><option value='Sala das Atléticas Lateral'>Sala das Atléticas Lateral</option><option value='Sala GPS'>Sala GPS</option><option value='Cantina Arlete'>Cantina Arlete</option>";
        } else if (condicionante == "B") {
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Biblioteca'>Biblioteca</option><option value='Laboratório Cozinha Pedagógica/Tecnologia de Alimentos '>Laboratório Cozinha Pedagógica/Tecnologia de Alimentos </option><option value='Laboratório Imagem Pessoal'>Laboratório Imagem Pessoal</option><option value='Laboratório Informática 1'>Laboratório Informática 1</option><option value='Laboratório Informática 2'>Laboratório Informática 2</option><option value='Laboratório Informática 8'>Laboratório Informática 8</option><option value='Laboratório Tecnologia Farmaceutica/Cosmetologia'>Laboratório Tecnologia Farmaceutica/Cosmetologia</option>";
        } else if (condicionante == "C") {
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Açai'>Açai</option><option value='C89'>C89</option> ...";
        }else if ( condicionante == "D"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='D85'>D85</option><option value='D86'>D86</option><option value='D87'>D87</option><option value='D88'>D88</option><option value='Laboratório Fisioterapia 1 '>Laboratório Fisioterapia 1 </option><option value='Laboratório Pré Clínico de Odontologia'>Laboratório Pré Clínico de Odontologia</option><option value='Laboratório Processos Quimicos'>Laboratório Processos Quimicos</option><option value='Copa dos Alunos'>Copa dos Alunos</option>"; 
        }else if ( condicionante == "E"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='E79'>E79</option><option value='E80'>E80</option><option value='E81'>E81</option><option value='E82'>E82</option><option value='E83'>E83</option><option value='E84'>E84</option><option value='Laboratório Avaliação Nutricional'>Laboratório Avaliação Nutricional</option><option value='Laboratório Ciências Morfofuncionais'>Laboratório Ciências Morfofuncionais</option><option value='Laboratório Fisioterapia  2'>Laboratório Fisioterapia  2</option>"; 
        }else if ( condicionante == "F"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='F14'>F14</option><option value='F15'>F15</option><option value='F16'>F16</option><option value='F17'>F17</option><option value='Laboratório Desenho Técnico 1'>Laboratório Desenho Técnico 1</option><option value='Laboratório Desenho Técnico 2'>Laboratório Desenho Técnico 2</option>"; 
        }else if ( condicionante == "G"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='G1'>G1</option><option value='G2'>G2</option><option value='G3'>G3</option><option value='G4'>G4</option><option value='G5'>G5</option><option value='G6'>G6</option><option value='G7'>G7</option><option value='G8'>G8</option><option value='G9'>G9</option><option value='G10'>G10</option><option value='G11'>G11</option><option value='G12'>G12</option><option value='G13'>G13</option><option value='G18'>G18</option><option value='G19'>G19</option><option value='G20'>G20</option><option value='G21'>G21</option><option value='G22'>G22</option><option value='G23'>G23</option>"; 
        }else if ( condicionante == "H"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Clínica de Fisioterapia e Psicologia'>Clínica de Fisioterapia e Psicologia</option><option value='H64'>H64</option><option value='H65'>H65</option><option value='H66'>H66</option><option value='H67'>H67</option><option value='H68'>H68</option><option value='H69'>H69</option><option value='H70'>H70</option><option value='H71'>H71</option><option value='H72'>H72</option><option value='H73'>H73</option><option value='H74'>H74</option><option value='H75'>H75</option><option value='H76'>H76</option><option value='H77'>H77</option><option value='H78'>H78</option><option value='Núcleo de Práticas Jurídicas'>Núcleo de Práticas Jurídicas</optio"; 
        }else if ( condicionante == "I"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Clínica de Odontologia'>Clínica de Odontologia</option><option value='Farmácia Clinica'>Farmácia Clinica</option><option value='I45'>I45</option><option value='I46'>I46</option><option value='I47'>I47</option><option value='I48'>I48</option><option value='I49'>I49</option><option value='I50'>I50</option><option value='I51'>I51</option><option value='I52'>I52</option><option value='I53'>I53</option><option value='I54'>I54</option><option value='I55'>I55</option><option value='I58'>I58</option><option value='I59'>I59</option><option value='I62'>I62</option><option value='I63'>I63</option><option value='Laboratório Estética Facial e Corporal'>Laboratório Estética Facial e Corporal</option><option value='Laboratório Física e Resistência dos Materiais 2'>Laboratório Física e Resistência dos Materiais 2</option><option value='Cantina '>Cantina </option><option value='Sala de Locação'>Sala de Locação</option>"; 
        }else if ( condicionante == "J"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='J24'>J24</option><option value='J25'>J25</option><option value='J26'>J26</option><option value='J27'>J27</option><option value='J28'>J28</option><option value='J29'>J29</option><option value='J30'>J30</option><option value='J31'>J31</option><option value='J32'>J32</option><option value='J33'>J33</option><option value='J34'>J34</option><option value='J35'>J35</option><option value='J36'>J36</option><option value='J37'>J37</option><option value='J38'>J38</option><option value='J39'>J39</option><option value='J40'>J40</option><option value='J41'>J41</option><option value='J42'>J42</option><option value='J43'>J43</option><option value='J44'>J44</option><option value='Laboratório Bromatologia'>Laboratório Bromatologia</option><option value='Laboratório Elétrica e Eletrônica'>Laboratório Elétrica e Eletrônica</option><option value='Laboratório Física e Resistência dos Materiais 1'>Laboratório Física e Resistência dos Materiais 1</option><option value='Laboratório Hidráulica'>Laboratório Hidráulica</option><option value='Laboratório Maquetaria '>Laboratório Maquetaria </option><option value='Laboratório Sistemas Térmicos'>Laboratório Sistemas Térmicos</option><option value='Laboratório Solos e Topografia'>Laboratório Solos e Topografia</option>"; 
        }else if ( condicionante == "K"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value=' Viveiro'> Viveiro</option><option value='Campo de Futebol'>Campo de Futebol</option><option value='Laboratório Construção Civil'>Laboratório Construção Civil</option><option value='Pista de Atletismo'>Pista de Atletismo</option><option value='Quadra Coberta'>Quadra Coberta</option><option value='Sala de Dança '>Sala de Dança </option><option value='Sala de Ginástica'>Sala de Ginástica</option>"; 
        }else if ( condicionante == "BLOCO SAA"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Sala da Coordenação do SAA'>Sala da Coordenação do SAA</option><option value='Sala de Arquivos'>Sala de Arquivos</option><option value='Sala Intervalor'>Sala Intervalor</option><option value='Salão de Atendimento'>Salão de Atendimento</option>"; 
        }else if ( condicionante == "BLOCO COMERCIAL"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='CPA/NDE'>CPA/NDE</option><option value='Sala da Coordenação Comercial'>Sala da Coordenação Comercial</option><option value='Sala da Pós Graduação'>Sala da Pós Graduação</option><option value='Sala de Atendimentos Comercial'>Sala de Atendimentos Comercial</option><option value='Sala de Impressão de Provas'>Sala de Impressão de Provas</option><option value='Sala de Provas'>Sala de Provas</option><option value='Sala Extra'>Sala Extra</option>"; 
        }else if ( condicionante == "BLOCO COORDENAÇÂO/PROFESSORES"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Copa'>Copa</option><option value='Coordenação Bruno'>Coordenação Bruno</option><option value='Coordenação Daniela'>Coordenação Daniela</option><option value='Coordenação Jackeline'>Coordenação Jackeline</option><option value='Coordenação José Gustavo'>Coordenação José Gustavo</option><option value='Coordenação Osmundo'>Coordenação Osmundo</option><option value='Coordenação Thamyris'>Coordenação Thamyris</option><option value='Coordenação Victor'>Coordenação Victor</option><option value='Espaço de Convivência (Recepção)'>Espaço de Convivência (Recepção)</option><option value='Sala da Impressora'>Sala da Impressora</option><option value='Sala de Descanso'>Sala de Descanso</option><option value='Sala de Reuniões'>Sala de Reuniões</option><option value='Sala dos Professores'>Sala dos Professores</option>"; 
        }else if ( condicionante == "BLOCO ADMINISTRATIVO"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Recepção'>Recepção</option><option value='Sala de Reuniões'>Sala de Reuniões</option><option value='Sala Direção'>Sala Direção</option><option value='Sala Documentação Acadêmica'>Sala Documentação Acadêmica</option><option value='Sala dos Laboratoristas'>Sala dos Laboratoristas</option><option value='Sala Operacional'>Sala Operacional</option>"; 
        }else if ( condicionante == "BLOCO CLÍNICA NUTRIÇÂO"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Clínica de Estética'>Clínica de Estética</option><option value='Clínica de Nutrição'>Clínica de Nutrição</option><option value='Laboratório de Informática 9'>Laboratório de Informática 9</optio"; 
        }else if ( condicionante == "BLOCO ANÁLISES CLÍNICAS"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Copiadora'>Copiadora</option><option value='Estoque de Educação Física'>Estoque de Educação Física</option><option value='Laboratório de Análises Clínicas'>Laboratório de Análises Clínicas</option>"; 
        }else if ( condicionante == "BLOCO DE HABILIDADES"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Laboratório de Enfermagem/Habilidades'>Laboratório de Enfermagem/Habilidades</option><option value='Sala de Apoio'>Sala de Apoio</option>"; 
        }else if ( condicionante == "BLOCO AUDITÓRIO"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Saguão'>Saguão</option><option value='Técnica de SOM'>Técnica de SOM</option><option value='Mezanino '>Mezanino </option><option value='Sala 2º Andar'>Sala 2º Andar</option><option value='Plenária'>Plenária</option><option value='Palco'>Palco</option><option value='Camarim'>Camarim</option><option value='Fundo do Palco'>Fundo do Palco</option><option value='Copa/Cozinha'>Copa/Cozinha</option><option value='Banheiro'>Banheiro</option>"; 
        }else if ( condicionante == "ACESSOS/ENTRADAS"){
            locationInfo.innerHTML = "<option value=''>Selecione um Local </option><option value='Portaria Coberta Principal'>Portaria Coberta Principal</option><option value='Portaria dos Fundos'>Portaria dos Fundos</option><option value='Estacionamento Professores'>Estacionamento Professores</option><option value='Estacionamento Principal'>Estacionamento Principal</option><option value='Estacionamento dos Fundos'>Estacionamento dos Fundos</option><option value='Canteiro Central (Jardim)'>Canteiro Central (Jardim)</option><option value='Portão Principal'>Portão Principal</option><option value='Portão Lateral'>Portão Lateral</option>"; 
        }

    } else {
        selectInput = 0;
        // locationEspecific.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const localidadeSelectOpen = document.getElementById('localidadeSelect');
    const selectRondaType = document.getElementById('selectRondaType'); 
    if (localidadeSelectOpen) {
        localidadeSelectOpen.addEventListener('click', function(){
            console.log("QUAL É!");
            repitir();
            whatRonda()
        });
    } else {
        console.error("Elemento 'localidadeSelect' não encontrado.");
    }

    if(selectRondaType){
        selectRondaType.addEventListener('click', function(){
            console.log("QUAL É2!");
            whatOptionButtom()
        });
    }else{
        console.error("Elemento 'localidadeSelect' não encontrado.");

    }
});
// setInterval(repitir, 20)

// SE VALOR DO INPUT FOR DIFERENTE DE ZERO ELE APAREÇE OS OUTRO INPUT PARA VER QUAL FOI O VEREDITO
// const selectRondaType = document.getElementById('selectRondaType');
//   const rondatypeInfo = document.querySelector('.rondatypeInfo');
  
//   localidadeSelectReposte.addEventListener('change', function() {
//     if (localidadeSelectReposte.value !== '') {
//         rondatypeInfo.value = localidadeSelectReposte.value;
//     } else {
//       localidadeInfoReposte.value = '';
//     }
// });






