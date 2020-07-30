/* Number of total semesters: */
window.semesters = 10;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#223bf6"];

// { name: "Química Geral II", credits: 3, code: "IQG127", semester: 2, requirements: [6]},

window.courses = [
    // [ // ECI
    //     { name: "Algoritmos e Programação", credits: 5, code: "COS110", semester: 1, category: 1, workload: 90},
    //     { name: "Int. a Eng. Comp. e Informação", credits: 2, code: "COS111", semester: 1, category: 1, workload: 30},
    //     { name: "Circuitos Lógicos", credits: 5, code: "EEL280", semester: 1, workload: 90},
    //     { name: "Cálculo I", credits: 6, code: "MAC118", semester: 1, workload: 90},
    //     { name: "Física I", credits: 4, code: "FIT112", semester: 1, workload: 60},
    //     { name: "Física Experimental I", credits: 1, code: "FIS111", semester: 1, category: 1, workload: 30},
    //     { name: "Linguagens de Programação", credits: 5, code: "EEL670", semester: 2, category: 1, workload: 90},
    //     { name: "Álgebra Linear II", credits: 4, code: "MAE125", semester: 2, category: 1, workload: 60},
    //     { name: "Sistemas Digitais", credits: 5, code: "EEL480", semester: 2, requirements: [2], category: 1, workload: 90},
    //     { name: "Cálculo II", credits: 4, code: "MAC128", semester: 2, requirements: ["MAC118"], category: 1, workload: 60},
    //     { name: "Física II", credits: 4, code: "FIT122", semester: 2, requirements: [3, 4], category: 1, workload: 60},
    //     { name: "Física Experimental II", credits: 1, code: "FIS121", semester: 2, requirements: [4, 5], category: 1, workload: 30},
    //     { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 2, category: 4, workload: 30},
    //     { name: "Estruturas de Dados", credits: 5, code: "COS231", semester: 3, requirements: [0], category: 1, workload: 75},
    //     { name: "Teoria da Computação", credits: 4, code: "EEL881", semester: 3, category: 1, workload: 60},
    //     { name: "Arquitetura de Computadores", credits: 5, code: "EEL580", semester: 3, category: 1, workload: 75},
    //     { name: "Cálculo III", credits: 4, code: "MAC238", semester: 3, requirements: [9], category: 1, workload: 60},
    //     { name: "Física III", credits: 4, code: "FIM230", semester: 3, requirements: [4, 9], category: 1, workload: 60},
    //     { name: "Física Experimental III", credits: 1, code: "FIN231", semester: 3, requirements: [11], category: 1, workload: 30},
    //     { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 3, category: 4, workload: 30},
    //     { name: "Teoria dos Grafos", credits: 4, code: "COS242", semester: 4, requirements: [13], category: 1, workload: 60},
    //     { name: "Estatística e Mod. Probabilísticos", credits: 4, code: "COE241", semester: 4, category: 1, workload: 60},
    //     { name: "Computadores e Sociedade", credits: 4, code: "COS471", semester: 4, category: 1, workload: 60},
    //     { name: "Cálculo IV", credits: 4, code: "MAC248", semester: 4, requirements: [9], category: 1, workload: 60},
    //     { name: "Física IV", credits: 4, code: "FIM240", semester: 4, requirements: [17], category: 1, workload: 60},
    //     { name: "Física Experimental IV", credits: 1, code: "FIN241", semester: 4, requirements: [18], category: 1, workload: 30},
    //     { name: "Banco de Dados", credits: 4, code: "EEL871", semester: 5, category: 1, workload: 75},
    //     { name: "Lógica Matemática", credits: 4, code: "COS351", semester: 5, category: 1, workload: 60},
    //     { name: "Álg. Linear Computacional", credits: 4, code: "COC473", semester: 5, requirements: [7, 16], category: 1, workload: 60},
    //     { name: "Redes de Computadores I", credits: 4, code: "EEL878", semester: 5, category: 1, workload: 75},
    //     { name: "Sistemas Operacionais", credits: 5, code: "EEL770", semester: 5, category: 1, workload: 75},
    //     { name: "Química Experimental", credits: 2, code: "IQG112", semester: 5, category: 1, workload: 60},
    //     { name: "Otimização", credits: 4, semester: 6, code: "COS360", requirements: [0, ,7, 16], category: 1, workload: 60},
    //     { name: "Inteligência Computacional", credits: 4, code: "COC361", semester: 6, category: 1, workload: 60},
    //     { name: "Engenharia de Software", credits: 4, code: "EEL873", semester: 6, category: 1, workload: 75},
    //     { name: "Redes de Computadores II", credits: 4, code: "EEL879", semester: 6, category: 1, workload: 60},
    //     { name: "Telecomunic.", credits: 4, code: "COE363", semester: 6, category: 1, workload: 60},
    //     { name: "Programação Avançada", credits: 4, code: "EEL418", semester: 7, requirements: [13, 6], category: 1, workload: 75},
    //     { name: "Computação de Alto Desempenho", credits: 3, code: "COC472", semester: 7, category: 1, workload: 75},
    //     { name: "Sistemas Distribuídos", credits: 4, code: "COS470", semester: 7, category: 1, workload: 60},
    //     { name: "Gestão do Conhecimento", credits: 4, code: "COP232", semester: 7, category: 1, workload: 60},
    //     { name: "Computação Gráfica", credits: 4, code: "EEL882", semester: 7, category: 1, workload: 75},
    //     { name: "Atividades Acad. Optativas", credits: 8, semester: 7, step: 1, category: 2, workload: 120},
    //     { name: "Construção de Banco de Dados", credits: 4, code: "COS480", semester: 8, requirements: [26], category: 1, workload: 60},
    //     { name: "Empreend. I", credits: 4, code: "COP364", semester: 8, category: 1, workload: 60},
    //     { name: "Qualidade de Software", credits: 4, code: "COS482", semester: 8, requirements: [34], category: 1, workload: 60},
    //     { name: "Projeto de Graduação", credits: 4, code: "EEWX00", semester: 8, category: 1, workload: 180},
    //     { name: "Atividades Acad. Optativas", credits: 8, semester: 8, step: 1, category: 2, workload: 120},
    //     { name: "Estágio Obrigatório", credits: 160, code: "EEWU00", semester: 9, category: 1, workload: 160},
    //     { name: "Atividades Acad. Optativas", credits: 16, semester: 9, step: 1, category: 2, workload: 240},
    //     { name: "Atividades Acad. Optativas", credits: 8, semester: 10, step: 1, category: 2, workload: 120},
    //     { name: "Atividades Acad. Livre Escolha", credits: 8, semester: 10, step: 1, category: 3, workload: 120},
    //     { name: "Ativ. Compl. Especiais", credits: 405, semester: 10, step: 15, category: 5, workload: 405},
    //     { name: "Química EE", credits: 4, semester: 4, code: "IQG111", category: 1, workload: 60},
    // ],
    // [ // Eletrônica e Computação
    //     // Primeiro período
    //     { name: "Computação I", credits: 5, semester: 1, code: "EEL170", category: 1, workload: 60},
    //     { name: "Química EE", credits: 4, semester: 1, code: "IQG111", category: 1, workload: 60},
    //     { name: "Cálculo I", credits: 6, semester: 1, code: "MAC118", category: 1, workload: 90},
    //     { name: "Física I", credits: 4, semester: 1, code: "FIT112", category: 1, workload: 60},
    //     { name: "Física Experimental I", credits: 1, semester: 1, code: "FIS111", category: 1, workload: 30},
    //     { name: "História da Tecnologia", credits: 2, semester: 1, code: "EEI206", category: 1, workload: 30},
    //     // Segundo período
    //     { name: "Computação II", credits: 5, semester: 2, code: "EEL270", requirements: ["EEL170"], category: 1, workload: 60},
    //     { name: "Álgebra Linear II", credits: 4, semester: 2, code: "MAE125", category: 1, workload: 60},
    //     { name: "Cálculo II", credits: 4, semester: 2, code: "MAC128", requirements: ["MAC118"], category: 1, workload: 60},
    //     { name: "Física II", credits: 4, semester: 2, code: "FIT122", requirements: ["FIT112","MAC118"], category: 1, workload: 60},
    //     { name: "Física Experimental II", credits: 1, semester: 2, code: "FIS121", requirements: ["FIS111","FIT112"], category: 1, workload: 30},
    //     { name: "Circuitos Lógicos", credits: 5, semester: 2, code: "EEL280", category: 1, workload: 60},
    //     { name: "Engenharia e Meio Ambiente", credits: 2, semester: 2, code: "EEH210", category: 1, workload: 30},
    //     // Terceiro período
    //     { name: "Sistemas Lineares I", credits: 5, semester: 3, code: "EEL350", requirements: ["MAC128"], category: 1, workload: 60},
    //     { name: "Métodos Mat. em Eng. Eletrônica", credits: 4, semester: 3, code: "EEL356", requirements: ["MAC128"], category: 1, workload: 60},
    //     { name: "Cálculo III", credits: 4, semester: 3, code: "MAC238", requirements: ["MAC128"], category: 1, workload: 60},
    //     { name: "Física III", credits: 4, semester: 3, code: "FIM230", requirements: ["FIT112", "MAC128"], category: 1, workload: 60},
    //     { name: "Física Experimental III", credits: 1, semester: 3, code: "FIN231", requirements: ["FIS121"], category: 1, workload: 60},
    //     { name: "Sistemas Projetivos", credits: 4, semester: 3, code: "EEG105", category: 1, workload: 60},
    //     { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 2, category: 4, workload: 30},
    //     // Quarto período
    //     { name: "Algoritmos e Estrutura de Dados", credits: 5, semester: 4, code: "EEL470", category: 1, workload: 60},
    //     { name: "Circuitos Elétricos I", credits: 5, semester: 4, code: "EEL420", requirements: ["EEL350"], category: 1, workload: 60},
    //     { name: "Eletrônica I", credits: 3, semester: 4, code: "EEL315", category: 1, workload: 60},
    //     { name: "Física IV", credits: 4, semester: 4, code: "FIM240", requirements: ["FIM230", "MAC238"], category: 1, workload: 60},
    //     { name: "Física Experimental IV", credits: 1, semester: 4, code: "FIN241", requirements: ["FIM230", "FIN231"], category: 1, workload: 60},
    //     { name: "Sistemas Digitais", credits: 5, semester: 4, code: "EEL480", requirements: ["EEL280"], category: 1, workload: 60},
    //     // Quinto período
    //     { name: "Sistemas Lineares II", credits: 5, semester: 5, code: "EEL555", requirements: ["EEL350"], category: 1, workload: 60},
    //     { name: "Circuitos Elétricos II", credits: 5, semester: 5, code: "EEL525", requirements: ["EEL420"], category: 1, workload: 60},
    //     { name: "Eletrônica II", credits: 5, semester: 5, code: "EEL410", requirements: ["EEL315","EEL420"], category: 1, workload: 60},
    //     { name: "Teoria Eletromagnética II", credits: 5, semester: 5, code: "EEL535", requirements: ["FIM230","FIN231"], category: 1, workload: 60},
    //     { name: "Arquitetura de Computadores", credits: 5, semester: 5, code: "EEL580", category: 1, workload: 60},
    //     // Sexto período
    //     { name: "Comunicações I", credits: 5, semester: 6, code: "EEL640", requirements: ["EEL630"], category: 1, workload: 60},
    //     { name: "Controle Linear I", credits: 5, semester: 6, code: "EEL660", requirements: ["EEL350"], category: 1, workload: 60},
    //     { name: "Eletrônica III", credits: 5, semester: 6, code: "EEL515", requirements: ["EEL410"], category: 1, workload: 60},
    //     { name: "Modelos Probabilísticos em Eng.", credits: 4, semester: 6, code: "EEL630", requirements: ["EEL350","EEL356"], category: 1, workload: 60},
    //     { name: "Linguagens de Programação", credits: 5, semester: 6, code: "EEL670", category: 1, workload: 60},
    //     // Sétimo período
    //     { name: "Comunicações II", credits: 5, semester: 7, code: "EEL740", requirements: ["EEL630","EEL640"], category: 1, workload: 60},
    //     { name: "Controle Linear II", credits: 5, semester: 7, code: "EEL760", requirements: ["EEL660"], category: 1, workload: 60},
    //     { name: "Eletônica IV", credits: 5, semester: 7, code: "EEL615", requirements: ["EEL515"], category: 1, workload: 60},
    //     { name: "Processamento de Sinais", credits: 5, semester: 7, code: "EEL711", requirements: ["EEL525","EEL555"], category: 1, workload: 60},
    //     { name: "Projeto Integrado", credits: 1, semester: 7, code: "EELX00", category: 1, workload: 60},
    //     { name: "Sistemas Operacionas", credits: 5, semester: 7, code: "EEL770", category: 1, workload: 60},
    //     // Oitavo período
    //     { name: "Conversão de Energia", credits: 5, semester: 8, code: "EEE387", requirements: ["EEL330","EEL525"], category: 1, workload: 60},
    //     { name: "Instrum.e Técnicas de Medidas", credits: 5, semester: 8, code: "EEL710", requirements: ["EEL515"], category: 1, workload: 60},
    //     { name: "Projeto de Graduação", credits: 4, semester: 8, code: "EEWX00", category: 1, workload: 60},
    //     { name: "Atividades Acad. Optativas", credits: 20, semester: 8, step: 1, category: 2, workload: 300},
    //     // Nono período
    //     { name: "Economia A", credits: 4, semester: 9, code: "EEI312", category: 1, workload: 60},
    //     { name: "Atividades Acad. Optativas", credits: 12, semester: 9, step: 1, category: 2, workload: 180},
    //     { name: "Atividades Acad. Livre Escolha", credits: 4, semester: 9, step: 1, category: 3, workload: 60},
    //     // Décimo período
    //     { name: "Organização das Indústrias", credits: 4, semester: 10, code: "EEI321", category: 1, workload: 60},
    //     { name: "Estágio Obrigatório", credits: 2, semester: 10, code: "EEWU00", category: 1, workload: 60},
    //     { name: "Atividades Acad. Livre Escolha", credits: 4, semester: 10, step: 1, category: 3, workload: 60},
    //     { name: "Ativ. Compl. Especiais", credits: 405, semester: 10, step: 15, category: 5, workload: 405}
    // ],
    [
      {"name": "Geologia Geral", "credits": 4, "code": "IGL116", "semester": 1, "workload": 80, "requirements": []},
      {"name": "Geologia de Campo I", "credits": 1, "code": "IGLU09", "semester": 1, "workload": 48, "requirements": ["IGL116", "IGL117", "IGL104", "IGL115", "IGL103"]},
      {"name": "C\u00e1lculo Difer e Integral I", "credits": 6, "code": "MAC118", "semester": 1, "workload": 90, "requirements": []},
      {"name": "Quimica Geral I", "credits": 4, "code": "IQG114", "semester": 1, "workload": 60, "requirements": []},
      {"name": "Topografia I", "credits": 3, "code": "EER341", "semester": 1, "workload": 60, "requirements": []},
      {"name": "Sa\u00fade e Seg em Ativ de Geolog", "credits": 1, "code": "IGL117", "semester": 1, "workload": 30, "requirements": []},
      {"name": "Ativ Curricular Extens\u00e3o - Gl", "credits": 0, "code": "IGLZ50", "semester": 1, "category":5,"step":5,"workload": 420, "requirements": []},
      //
      {"name": "Fund de F\u00edsica para Geoci\u00eanc I", "credits": 4, "code": "IGL125", "semester": 2, "workload": 75, "requirements": []},
      {"name": "Algebra Linear I", "credits": 3, "code": "MAC106", "semester": 2, "workload": 45, "requirements": []},
      {"name": "C\u00e1lculo Diferen e Integral II", "credits": 4, "code": "MAC128", "semester": 2, "workload": 60, "requirements": ["MAW126", "MAC118", "MAW111", "MAE111", "MAW121", "MAC114", "MCG115"]},
      {"name": "Geomorfologia", "credits": 3, "code": "IGG224", "semester": 2, "workload": 61, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Mineralogia", "credits": 4, "code": "IGL127", "semester": 2, "workload": 91, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Ativ Complementares - Geologia", "credits": 0, "code": "IGLX05", "semester": 2, "workload": 60, "requirements": []},
      {"name": "Atividades Acad. Optativas (CIDADANIA)", "credits": 4, "semester": 2, "category": 1, "workload": 60},
      //
      {"name": "Sedimentologia", "credits": 3, "code": "IGL479", "semester": 3, "workload": 69, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Geologia de Campo II", "credits": 4, "code": "IGLU17", "semester": 3, "workload": 166, "requirements": ["IGLU09"]},
      {"name": "C\u00e1lculo Diferen e Integral III", "credits": 4, "code": "MAC238", "semester": 3, "workload": 60, "requirements": ["MCG234", "MAC128", "MAW116", "MAC123", "MAE992", "MAC124", "MAW231", "MAE121"]},
      {"name": "Fund F\u00edsic para Geoci\u00eancias II", "credits": 4, "code": "IGL233", "semester": 3, "workload": 75, "requirements": []},
      {"name": "Pedologia Aplic a Geologia", "credits": 3, "code": "IGL595", "semester": 3, "workload": 69, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Fisico-quimica Ig", "credits": 3, "code": "IQF234", "semester": 3, "workload": 45, "requirements": ["MAC128"]},
      {"name": "Introdu\u00e7\u00e3o \u00e0 Geoestat\u00edstica", "credits": 3, "code": "IGL248", "semester": 4, "workload": 60, "requirements": []},
      //
      {"name": "Geof\u00edsica", "credits": 4, "code": "IGL309", "semester": 4, "workload": 76, "requirements": ["IGL125"]},
      {"name": "Paleontologia", "credits": 4, "code": "IGL236", "semester": 4, "workload": 108, "requirements": []},
      {"name": "Geologia Estrutural I", "credits": 4, "code": "IGL249", "semester": 4, "workload": 100, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Estratigrafia", "credits": 4, "code": "IGL358", "semester": 4, "workload": 85, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      //
      {"name": "Mineralogia \u00d3tica", "credits": 3, "code": "IGL302", "semester": 5, "workload": 60, "requirements": ["IGL127"]},
      {"name": "Geologia de Campo III", "credits": 4, "code": "IGLU18", "semester": 5, "workload": 166, "requirements": ["IGLU17", "IGLU02"]},
      {"name": "Geologia de Engenharia I", "credits": 2, "code": "IGL354", "semester": 5, "workload": 45, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Geologia Estrutural II", "credits": 4, "code": "IGL301", "semester": 5, "workload": 84, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Fotogeologia", "credits": 2, "code": "IGL351", "semester": 5, "workload": 69, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Hidrogeologia", "credits": 3, "code": "IGL592", "semester": 5, "workload": 61, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      //
      {"name": "Petrologia das Rochas Igneas", "credits": 5, "code": "IGL304", "semester": 6, "workload": 129, "requirements": ["IGL302"]},
      {"name": "Geoqu\u00edmica Org\u00e2nica", "credits": 3, "code": "IGL308", "semester": 6, "workload": 45, "requirements": ["IGL116", "IGL115", "IGL103"]},
      {"name": "Geologia de Engenharia II", "credits": 2, "code": "IGL303", "semester": 6, "workload": 46, "requirements": ["IGL354"]},
      {"name": "Petrologia Rochas Sedimentares", "credits": 3, "code": "IGL307", "semester": 6, "workload": 60, "requirements": ["IGL302"]},
      {"name": "Geoprocessamento", "credits": 3, "code": "IGL488", "semester": 6, "workload": 60, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Atividades Acad. Optativas (TÉCNICAS)", "credits": 4, "semester": 6, "category": 1, "workload": 60},
      //
      {"name": "Petrologia Rochas Metam\u00f3rficas", "credits": 6, "code": "IGL402", "semester": 7, "workload": 145, "requirements": ["IGL302"]},
      {"name": "Geologia de Campo IV", "credits": 4, "code": "IGLU19", "semester": 7, "workload": 166, "requirements": ["IGLU18"]},
      {"name": "Economia dos Recurs Geol\u00f3gicos", "credits": 3, "code": "IGL596", "semester": 7, "workload": 45, "requirements": []},
      {"name": "Geotect\u00f4nica", "credits": 3, "code": "IGL401", "semester": 7, "workload": 45, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Geoqu\u00edmica Inorg\u00e2nica", "credits": 4, "code": "IGL403", "semester": 7, "workload": 60, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Geologia e Meio Ambiente", "credits": 3, "code": "IGL600", "semester": 7, "workload": 45, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Atividades Acad. Optativas (TÉCNICAS)", "credits": 4, "semester": 7, "category": 1, "workload": 60},
      //
      {"name": "Geologia Historica", "credits": 3, "code": "IGL369", "semester": 8, "workload": 45, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Recurs Minerais e Energ\u00e9ticos", "credits": 3, "code": "IGL518", "semester": 8, "workload": 45, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Geologia do Brasil", "credits": 4, "code": "IGL368", "semester": 8, "workload": 85, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Explora\u00e7\u00e3o Mineral", "credits": 3, "code": "IGL489", "semester": 8, "workload": 45, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Genese de Jazidas", "credits": 5, "code": "IGL590", "semester": 8, "workload": 109, "requirements": ["IGL116", "IGL115", "IGL103", "IGL104"]},
      {"name": "Atividades Acad. Optativas (TÉCNICAS)", "credits": 4, "semester": 8, "category": 1, "workload": 60},
      //
      {"name": "Estagio Supervisionado", "credits": 3, "code": "IGLU10", "semester": 9, "workload": 120, "requirements": []},
      //
      {"name": "Trabalho de Conclus\u00e3o de Curso", "credits": 2, "code": "IGLK01", "semester": 10, "workload": 90, "requirements": []},
      {"name": "Atividades Acad. Livre Escolha", "credits": 2, "semester": 10, "category": 1, "workload": 30},
    ]
]
