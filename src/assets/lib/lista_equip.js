//* ------- LISTA DE EQUIMAPENTOS / MÁQUINAS -------*/
//! EM VR, INSERIR O NOME DA PASTA COM AS IMAGENS
const equipamentos = [
  {
    ID: 'bancada-hidraulica',
    navlink: 'Bancada Hidráulica',
    titulo: 'BANCADA HIDRÁULICA',
    descricao:
      'A formação de profissionais que tenham um conhecimento prático é um dos fatores que as empresas mais visam no momento. A junção do conhecimento prático com o teórico faz com que os profissionais, ao se depararem com situações reais, consigam resolvê-las e com isso trazer soluções técnica às empresas contratantes. Assim, a bancada hidráulica foi projetada para realizar o treinamento de profissionais em montagem de tubulações industriais com diferentes configurações espaciais. Perdas de energia por atrito e arranjos diferenciados de tubos são verificados por instrumentação.',
    funcionamento:
      'Diferentes configurações são montadas de maneira a se verificar a perda de energia da bomba do sistema por atrito. Para isso, os profissionais são submetidos a realizarem a montagem de tubulações seguindo fluxogramas específicos dos arranjos industriais. Na prática da montagem, os alunos ou o profissional irão verificar tanto fenômenos de transferência de calor como, com auxílio do docente, conhecer assuntos referentes ao teorema de Bernoulli e momentum.',
    detalhamento: [
      "Tanques de alimentação para óleo e água em aço carbono com chapa de 3/16''",
      "Tubos Sch40 de 1/2''",
      'Indicadores de vazão tipo rotâmetro',
      'Indicadores de pressão tipo Bourbon',
      "Válvulas de controle tipo globo de 1/2''",
      "Válvulas de retenção de 1/2''",
      "Válvulas de alívio de 1/2''",
      'Resistência de imersão de 800 W',
      'Inversores de frequência',
      'Esquide com rodízios destinado ao suporte de todos os equipamentos',
      'Quadro elétrico com inversores de frequência',
      'POP (Procedimento operacional padrão).'
    ],
    croqui: 'equipamentos/bancada-hidraulica/crq_bancada-hidraulica.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'biopeixe1',
    navlink: 'Biopeixe 1',
    titulo: 'MÁQUINA DESTINADA A EXTRAÇÃO DE ÓLEO DE VÍSCERAS DE PEIXES',
    descricao:
      'A busca pela diversificação da matriz energética como estratégia de crescimento econômico sustentável é uma realidade inevitável para os países que buscam a promoção de investimento no setor de biocombustíveis. Dentro deste enfoque, surge a necessidade de progressos tecnológicos promotores da utilização de matérias-primas que possuam valor agregado, alta capacidade de produção e custo competitivo. Tal que o resíduo ou subproduto gerado na exploração de um recurso possa vir a ser convertido em insumo de valor agregado para outra indústria. Neste sentido, o aproveitamento dos resíduos do peixe e vísceras de frango, para a produção de biodiesel é uma ótima alternativa para suprir o déficit de matéria prima e reduzir a poluição causada pela liberação dos resíduos nos rios e solo. A máquina de extração de óleo e gordura animal surgiu da necessidade de reaproveitar os rejeitos oriundos da produção de carnes e pescados. O sistema conta de uma unidade compacta no qual estão inclusas as principais operações necessárias ao processamento e purificação do óleo produzido. Etapas como aquecimento, cocção, decantação e filtragem são realizados na unidade.',
    funcionamento:
      'O sistema possui um reator tipo tanque agitado. Este é utilizado na cocção das vísceras. O sistema conta ainda com um equipamento de decantação verticalizado. As etapas que necessitam de aquecimento são alimentadas por aquecedor elétrico com fluido de aquecimento tipo óleo térmico.',
    detalhamento: [
      "Reator para cocção em aço inox de 60 L, chapa 3/16'', motor de 1/2 c.v., agitação por pás tipo turbina",
      "Tanque de borra em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em vidro boro silicato, válvula inferior destinado a descarga de material",
      "Tanque para coleta de óleo em aço carbono, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em vidro boro silicato, válvula inferior destinado a descarga de material",
      "Aquecedor elétrico em aço carbono, volume de 30L, chapa 3/16'', potência de 8 kW",
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Bombas de engrenagem de 1/2 c.v. destinadas ao transporte de fluídos no sistema',
      'Sensores de pressão tipo Termopar J',
      'Válvula de segurança com abertura de até 5 bar de pressão interna',
      'Esquide em aço carbono com rodízios',
      'POP (Procedimento operacional padrão).'
    ],
    croqui: 'equipamentos/biopeixe1/crq_biopeixe1.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'biopeixe2',
    navlink: 'Biopeixe 2',
    titulo: 'MÁQUINA DESTINADA A EXTRAÇÃO DE ÓLEO DE VÍSCERAS DE PEIXES',
    descricao:
      'A Máquina Biopeixe surgiu da necessidade de reaproveitar os rejeitos oriundos da produção de pescados. O sistema conta de uma unidade compacta no qual estão inclusas as principais operações necessárias ao processamento e purificação do óleo produzido. Etapas como aquecimento, cocção, degomagem, decantação e filtragem são realizados na unidade. A busca pela diversificação da matriz energética como estratégia de crescimento econômico sustentável é uma realidade inevitável para os países que buscam a promoção de investimento no setor de biocombustíveis. Dentro deste enfoque, surge a necessidade de progressos tecnológicos promotores da utilização de matérias-primas que possuam valor agregado, alta capacidade de produção e custo competitivo. Tal que, o resíduo ou subproduto gerado na exploração de um recurso, possa vir a ser convertido em insumo de valor agregado para outra indústria. Neste sentido, o aproveitamento dos resíduos do peixe, as vísceras, para a produção de biodiesel é uma ótima alternativa para suprir o déficit de matéria prima e reduzir a poluição causada pela liberação dos resíduos nos rios e solo. <br> <br> A Máquina Biopeixe surgiu da necessidade de reaproveitar os rejeitos oriundos da produção de pescados. O sistema conta de uma unidade compacta no qual estão inclusas as principais operações necessárias ao processamento e purificação do óleo produzido. Etapas como aquecimento, cocção, degomagem, decantação e filtragem são realizados na unidade. ',
    funcionamento:
      'O sistema possui dois reatores tipo tanque agitado. O primeiro tanque é utilizado na cocção das vísceras, o segundo reator é utilizado para etapas como lavagem, degomagem e secagem. O sistema conta ainda com um equipamento de decantação verticalizado. As etapas que necessitam de aquecimento são alimentadas por aquecedor elétrico com fluido de aquecimento tipo óleo térmico.',
    detalhamento: [
      "Reator de cocção em aço inox de 60 L, chapa 3/16'', motor de 1/2 c.v., agitação por pás tipo turbina",
      "Reator de cocção em aço inox de 50 L, chapa 3/16'', motor de 1/2 c.v., agitação por pás tipo turbina, sistema de condensação destinado a quebra de nevoeiro, zona para inserção de vácuo",
      "Trocadores de calor em aço carbono (dois), chapa 3/16'', 32 tubos BWG, vedação com papelão hidráulico",
      "Tanque de borra em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em vidro boro silicato, válvula inferior destinado a descarga de material",
      "Tanque de condensados em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em boro silicato,válvula inferior destinada a retirada de material a ser analisada",
      "Aquecedor elétrico em aço carbono, volume de 30L, chapa 3/16'', potencia de 8 kW",
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Bombas de engrenagem (quatro) de 1/2 c.v. destinadas ao transporte de fluídos no sistema',
      'Bomba de vácuo destinada a secagem do óleo',
      'Indicador de pressão tipo Bourbon',
      'Sensores de pressão tipo Termopar J',
      'Válvula de segurança com abertura de até 5 bar de pressão interna',
      'Esquide em aço carbono com rodízios',
      'POP (Procedimento operacional padrão).'
    ],
    croqui: '',
    img: ['equipamentos/biopeixe2/pht_biopeixe2-001.jpg',
      'equipamentos/biopeixe2/pht_biopeixe2-002.jpg',
      'equipamentos/biopeixe2/pht_biopeixe2-003.jpg',
      'equipamentos/biopeixe2/pht_biopeixe2-004.jpg'],
    vr: ''
  },
  {
    ID: 'cald-automatizada',
    navlink: 'Caldeira B.C. Automatizada',
    titulo: 'CALDEIRA DE BAIXO CUSTO AUTOMATIZADA',
    descricao:
      'A área de automação industrial é um setor em unidades de produção que possui um elevado conhecimento. A utilização de equipamentos sofisticados acoplados ao conhecimento de operações unitárias bem como seu completo funcionamento na área de operações de transformação é algo de engenheiros e técnicos devem compreender. Não basta conhecer os instrumentos destinados a automação. É necessário entender as variáveis as quais se deseja controlar. Com isso, a Ekipar desenvolveu a mini caldeira de baixo custo que contempla as principais variáveis de controle. Com isso, set point de vazão, temperatura, pressão e nível serão compreendidos e facilmente absorvidos por alunos de engenharia. Neste sistema são encontrados todos os tipos de válvulas de processo e instrumentos para tubulação. Trata-se, portanto, de um equipamento completo no qual o alunos terá uma compreensão de como são os equipamentos reais, as variáveis de processo, instrumentos, CLP e Supervisório.',
    funcionamento:
      'O sistema de Automação foi projetado para que o aluno conheça as diversas operações de fluxo e troca térmica. A unidade possui equipamentos aos quais estão incorporadas as variáveis de nível, vazão, temperatura e pressão. O equipamento possui elementos que possibilitam a compreensão da mudança de fase de líquido para vapor. A unidade é alimentada cm auxilio de bomba de fluxo contínuo controlada por inversor de frequência. As tubulações possuem trechos com visores em vidro boro silicato. O fluxo de material é acompanhado com visores de fluxo tipo rotâmetros e placas de orifício. A caldeira possui válvulas de segurança e visores de nível em vidro boro silicato.',
    detalhamento: [
      "Tanques de alimentação em aço inoxidável, chapa 3/16'', com visor de nível e sensores de nível capacitivos",
      'Sensor de vazão tipo placa de orifício com sensores de pressão tipo Bourdon',
      'Visor de vazão tipo Rotâmetro',
      'Visor de fluxo em vidro boro silicato destinado a compreensão de fluxo de material e funcionamento de válvulas de controle (válvula borbuleta)',
      'Válvulas on-off com atuadores elétricos',
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Bombas centrífugas de ½ c.v. destinado ao transporte de fluídos no sistema',
      'Inversor de Freqüência',
      'CLP – Controlador lógico Programável',
      'Supervisório em Plataforma SCADA Sensores de Pressão Termopar tipo J',
      'Esquide em aço carbono com rodízios',
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/cald-automatizada/crq_cald-automatizada.png',
    img: ['equipamentos/cald-automatizada/img_cald-automatizada-001.jpg',
      'equipamentos/cald-automatizada/img_cald-automatizada-002.jpg'],
    vr: ''

  },
  {
    ID: 'cald-didatica',
    navlink: 'Caldeira Didática',
    titulo: 'UNIDADE DIDÁTICA PARA ESTUDO DE UTILIDADES INDUSTRIAIS',
    descricao:
      'O total funcionamento de unidade de transformações necessita de variados tipos de utilidades industriais. Sistemas reacionais necessitam de aquecimento ou resfriamento de maneira a obter a conversão estimada em pesquisas laboratoriais. Em etapas de resfriamento de correntes ou aquecimentos destas, é necessária a utilização de água ou óleo térmico. Para tanto, o conhecimento de energias térmicas, entalpias, capacidades caloríficas a pressão ou a volume constante, são necessárias ao perfeito funcionamento de unidades industriais e da utilização da utilidade adequada. O estudo de tipos de vapor e o título que cada um deverá fornecer a um processo é uma das atividades mais estudadas e avaliadas por profissionais que trabalham nestas unidades de transformação. Compreender que quanto maior a pressão do sistema mais caro será as unidades de transformação e mais perigosa será sua operacionalidade é uma exigência que engenheiros e técnicos são obrigados a compreender de forma aprofundada. A integração entre as engenharias e a utilização correta de como atuar em unidades de transformação que utilizem os diferentes tipos de utilidades industriais devem abranger custos operacionais, equipamentos de vapor, equipamentos para óleo térmico, tubulações para vapor e suas normas, tipos de bombas, válvulas de processo, válvulas de segurança e purgadores de vapor.',
    funcionamento:
      'A unidade destinada às utilidades industriais foi projetada para oferecer a alunos uma total compreensão sobre os a utilização de óleo térmico, vapor e água de refrigeração. A unidade é composta por água que é bombeada por bomba centrífuga a uma caldeira que irá aquecê-la até que está receba calor sensível e calor latente. O vapor será direcionado aos trocadores de calor e a equipamentos destinados a purga de condensados. Nestes trocadores a valor irá perder calor latente e parte da matéria irá condensar. O material condensado é enviado a purgadores de boia, balde invertido e termodinâmico. A unidade possui, ainda, torre de refrigeração a qual será responsável pela etapa de condensação de vapores e geração de condensados. Na etapa de instrumentação o sistema é composto por indicadores de fluxo tipo rotâmetros, visores de nível, Termômetros e termopares. Com isso, o sistema será monitorado por controle de temperatura, vazão e nível. A tubulação é representada didaticamente por trechos e circuitos da unidade. Bombas de circulação são controladas por inversores de frequência os quais, com auxilio de rotâmetros, permitem que a vazão de fluídos líquidos sejam manipulados para equipamentos específicos. Os vasos de pressão são certificados pela NR13, norma brasileira que qualifica a construção de equipamentos que devem trabalhar sobre pressões calculadas para cada projeto. Em termos de segurança o sistema possui válvulas de retenção, válvulas de alivio e válvulas de segurança. Todas as válvulas destinadas a segurança do sistema são calibradas de forma a operar em pressões inferiores a pressões de cálculo de espessuras de chapas do equipamento.',
    detalhamento: [
      "Tanque de alimentação: Aço inox, chapa 3/16'', com visor de nível e indicador de temperatura lateral",
      "Trocadores de calor: Aço inox AISI 304, chapa 3/16'', 32 tubos BWG, vedação com papelão hidráulico, destinados a compreensão de aquecimento e resfriamento",
      'Aquecedor: Aço inox AISI 316 com resistência interna de 2kW',
      'Trocador bitubular: Aço inox',
      "Caldeira: Aço inox, chapa 3/16''. Normatizada pela NR13. Aquecimento por resistências elétricas de 10kW. Válvula de segurança para 8bar de pressão. Indicadores de pressão tipo Bourbon. Termopar tipo K destinado ao monitoramento da temperatura",
      'Tanque destinado à compressão de vapores e condensação: Normatizado pela NR13. Indicador de pressão tipo Bourbon e válvula de segurança',
      "Tanque de recuperação: Aço inox, chapa 3/16'', destinado à recuperação de vapores oriundos da condensação em trocadores de calor",
      'Purgadores: Tipo boia, balde invertido e termodinâmicos',
      'Filtros em Y: Destinados a remoção de sujeitas do sistema',
      'Válvulas: Vapores, retenção, passagem direta e controle de fluxo',
      'Rotâmetros: Destinados ao estudo de vazão na tubulação',
      'Indicadores de temperatura: Tipo J, em trechos da tubulação destinados ao monitoramento da perda de temperatura nos trechos do sistema',
      'Tubulação: Schedule 40, pintura epóxi de acordo com normas industriais',
      'Fluxograma: Montagem em CAD e impressão em acrílico da tubulação de maneira a tornar o sistema mais didático',
      'Bombas centrífugas: 1/2 c.v. destinado ao transporte de fluídos no sistema',
      'Bomba de engrenagem: 1/2 c.v. destinada ao fluxo de óleo térmico da caldeira elétrica',
      'Torre de refrigeração: Modular',
      'Inversores de frequência',
      'Esquide em aço carbono com rodízios',
      'POP: Procedimento operacional padrão.'],
    croqui: 'equipamentos/cald-didatica/crq_CAD01.png',
    img: [
      'equipamentos/cald-didatica/pht_cald-didatica-001.jpg'
      // 'equipamentos/cald-didatica/',
      // 'equipamentos/cald-didatica/',
      // 'equipamentos/cald-didatica/',
      // 'equipamentos/cald-didatica/',
      // 'equipamentos/cald-didatica/',
      // 'equipamentos/cald-didatica/',
    ],
    vr: 'equipamentos/cald-didatica/VR'
  },
  {
    ID: 'cavalo-de-pau',
    navlink: 'Cavalo-de-Pau',
    titulo: 'CAVALO DE PAU (BOMBA DE VARETA)',
    descricao:
      'A bomba de vareta de sucção ou simplesmente bomba de vareta, também é a parte superficial de uma bomba de pistão, instalada em um poço de petróleo.',
    funcionamento:
      'Uma unidade de bombeamento é instalada na superfície do reservatório, próximo à cabeça do poço, para transformar o movimento rotativo de um motor em movimento alternativo (ascendente-descendente). Este movimento alternativo é transmitido por meio de uma coluna de hastes de aço (a “vareta”), colocada dentro da coluna de produção, que permanece aberta, para uma bomba que está localizada no fundo do poço. Esta bomba alternativa fornece energia mecânica ao petróleo, que então eleva-se até a superfície.',
    detalhamento: [
      'Unidade de bombeamento em aço carbono e pintura epóxi',
      'Motor de 3/4 c.v.',
      'Esquide em aço carbono destinado à sustentação estrutural',
      'Reservatório em aço inox AISI 316L',
      'Sistema de sucção em aço inox e vedação em polietileno',
      'Tanque de refluxo em aço inox e vidro boro silicato',
      'Quadro elétrico trifásico com inversor de frequência.'],
    croqui: 'equipamentos/cavalo-de-pau/crq_cavalo-de-pau.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'destilaria1',
    navlink: 'Destilaria 1',
    titulo: 'MINI-DESTILARIA AUTOMATIZADA COM SUPERVISÓRIO E CLP',
    descricao:
      'A formação de profissionais que tenham um conhecimento prático é um dos fatores que as empresas mais visam no momento. A junção do conhecimento prático com o teórico faz com que os profissionais, ao se depararem com situações reais, consigam resolver situações e com isso trazer soluções técnica às empresas contratantes. Assim, micro destilaria foi projetada para realizar o treinamento de profissionais em montagem de tubulações industriais, transferência de calor e massa. A unidade foi projetada para destilar etanol e água. Fora isso, cada equipamento de processo possui características específicas quanto à pressão e temperatura. Vasos de pressão são relacionados à espessura da parede do material e a magnitude de esforço suportado.',
    funcionamento:
      'A mini destilaria foi projetada para que os alunos em engenharia ou cursos técnicos de formação possam interagir com sistema de forma direta. A mistura água e etanol é bombeada ao refervedor do sistema que é aquecido via resistências submersas. A mistura, ao entrar em ebulição, é direcionada aos estágios de contato e transferência de massa. O etanol é condensado no topo da coluna ao trocador calor com corrente de água bombeada da torre de refrigeração. O material destilado é recuperado em um tanque de condensados e posteriormente levado para análise do teor de pureza. A unidade foi projetada para trabalhar com sistema de automação que contenha uma plataforma com interface entre os alunos e a máquina. Para tanto, foram desenvolvidas estratégias de controle em malha fechada dos sistemas que compõem a unidade. O sistema é todo acompanhado de acordo com sets de nível, temperatura e vazão.',
    detalhamento: [
      "Coluna de destilação em aço inox AISI 304, diâmetro de 4'', recheio cerâmico com 1/8 do diâmetro da coluna, 4 estágios separados por flanges e vedação por papelão hidráulico",
      "Trocador de calor em aço inox AISI 304, chapa 3/16'', 32 tubos BWG, vedação com papelão hidráulico",
      "Tanque de alimentação em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em vidro boro silicato, válvula inferior destinado a descarga de material",
      "Tanque de condensados em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em boro silicato,válvula inferior destinada a retirada de material a ser analisada",
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Bombas centrífugas de 1/2 c.v. destinadas ao transporte de fluídos no sistema',
      'Indicador de pressão tipo Bourbon',
      'Sensores de Pressão tipo Termopar K',
      'Transdutores e sensores de vazão',
      'Transdutores e sensores de pressão',
      'Inversores de frequência',
      'Válvulas elétricas de controle',
      'Quadro elétrico',
      'Válvula de segurança com abertura de até 5 bar de pressão interna',
      'POP – Procedimento operacional padrão.'],
    croqui: 'equipamentos/destilaria1/crq_destilaria1.png',
    img: ['equipamentos/destilaria1/pht_destilaria1-001.jpg'],
    vr: ''
  },
  {
    ID: 'destilaria2',
    navlink: 'Destilaria 2',
    titulo: 'MINI-DESTILARIA 2 COM AUTOMAÇÃO E CONTROLE MANUAL',
    descricao:
      'A formação de profissionais que tenham conhecimento prático é um dos fatores que as empresas mais visam no momento. A junção do conhecimento prático com o teórico faz com que os profissionais ao se depararem com situações reais consigam resolvê-las e, com isso, trazer soluções técnica às empresas contratantes. Assim, a Mini-Destilaria 2 foi projetada para realizar o treinamento de profissionais em montagem de tubulações industriais, transferência de calor e massa. A unidade foi projetada para destilar etanol e água. Fora isso, cada equipamento de processo possui características específicas quanto à pressão e temperatura. Vasos de pressão são relacionados à espessura da parede do material e quanto de esforço essa suporta.',
    funcionamento:
      'A Mini-Destilaria 2 foi projetada para que os alunos em engenharia ou cursos técnicos de formação possam interagir com sistema de forma direta. A mistura água e etanol é bombeada ao refervedor do sistema que é aquecido via resistências submersas. A mistura, ao entrar em ebulição, é direcionada aos estágios de contato e transferência de massa. O etanol é condensado no topo da coluna do trocador calor com corrente de água bombeada proveniente da torre de refrigeração. O material destilado é recuperado em um tanque de condensados e posteriormente levado para análise do teor de pureza.',
    detalhamento: [
      'Coluna de destilação em aço inox AISI 304, diâmetro de 4”, recheio cerâmico com 1/8 do diâmetro da coluna, 4 estágios separados por flanges e vedação por papelão hidráulico',
      "Trocador de calor em aço inox AISI 304, chapa 3/16'', 32 tubos BWG, vedação com papelão hidráulico",
      "Tanque de alimentação em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em vidro boro silicato, válvula inferior destinado a descarga de material",
      "Tanque de condensados em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em boro silicato, válvula inferior destinada a retirada de material a ser analisada",
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Bombas centrífugas de 1/2 c.v. destinado ao transporte de fluídos no sistema',
      'Indicador de pressão tipo Bourbon',
      'Sensores de pressão tipo Termopar J',
      'Válvula de segurança com abertura de até 5 bar de pressão interna',
      'Esquide em aço carbono com rodízios',
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/destilaria1/crq_destilaria2.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'destilaria3',
    navlink: 'Destilaria 3',
    titulo:
      'MINI DESTILARIA 3 DE DIMENSÕES REDUZIDAS PARA ÉSTERES COM AUTOMAÇÃO E CONTROLE MANUAL',
    descricao:
      'A formação de profissionais que tenham um conhecimento prático é um dos fatores que as empresas mais visam no momento. A junção do conhecimento prático com o teórico faz com que os profissionais ao se depararem com situações reais consigam resolver situações e com isso trazer soluções técnica às empresas contratantes. Assim, a Destilaria 3 foi projetada para realizar o treinamento de profissionais em montagem de tubulações industriais, transferência de calor e massa. A unidade foi projetada para destilar etanol, água e ésteres. Fora isso, cada equipamento de processo possui características específicas quanto à pressão e temperatura. Vasos de pressão são relacionados à espessura da parede do material e quanto de esforço esses suporta.',
    funcionamento:
      'A Destilaria 3 foi projetada para que os alunos em engenharia ou cursos técnicos de formação possam interagir com sistema de forma direta. A mistura de ésteres é bombeada ao refervedor do sistema que é aquecido via resistências ao redor do balão. A mistura ao entrar em ebulição é direcionada aos estágios de contato e transferência de massa. Os ésteres de menor ponto de ebulição são condensados no topo da coluna no trocador calor com corrente de água bombeada da torre de refrigeração. O material destilado é recuperado em um tanque de condensados e posteriormente levado para análise do teor de pureza.',
    detalhamento: [
      "Coluna de destilação em aço inox AISI 304, diâmetro de 4'', recheio cerâmico com 1/8 do diâmetro da coluna, 4 estágios separados por flanges e vedação por papelão hidráulico",
      "Trocadores de calor (dois) em aço inox AISI 304, chapa 3/16'', 32 tubos BWG, vedação com papelão hidráulico",
      "Tanque de alimentação em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em vidro boro silicato, válvula inferior destinado a descarga de material",
      "Tanques de condensados (dois) em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em boro silicato,válvula inferior destinada a retirada de material a ser analisada",
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Bomba centrífugas de 1/2 c.v. destinada ao transporte de fluídos no sistema',
      'Bomba de vácuo destinada a redução de pressão no sistema',
      'Indicador de pressão tipo Bourbon',
      'Sensores de temperatura tipo Termopar J',
      'Válvula de segurança com abertura de até 5 bar de pressão interna',
      'Esquide em aço carbono co rodízios',
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/destilaria1/crq_destilaria3.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'extr-liquidos',
    navlink: 'Extr. Líquidos',
    titulo: 'SISTEMA DE EXTRAÇÃO LÍQUIDO-LÍQUIDO',
    descricao:
      'A separação de substâncias utilizando a diferença de densidades/massa molecular é uma das operações de separação mais utilizadas nas indústrias de transformação química. Através da utilização deste principio, produtos são purificados e subprodutos são isolados do processo do produtivo. Entre as operações unitárias utilizadas neste processo estão os decantadores verticais, decantadores horizontais e os ciclones. Estes equipamentos são utilizados com a mesma funcionalidade no entanto, com eficiência de processo diferenciadas.',
    funcionamento:
      'A separação de fases ocorre a través do contato direto entre as fases.',
    detalhamento: [
      "Tanques de alimentação para óleo e água em aço carbono com chapa de 3/16''",
      'Torre de extração líquido–líquido com cinco estágios em vidro boro silicato, prato de contato entre as fases de teflon',
      'Tubulação em teflon e válvulas punk-flow',
      'Sistema de aquecimento tipo caldeira com resistência de imersão',
      'Bomba de engrenagem',
      'Bomba centrífuga',
      'Válvulas de controle de fluxo tipo globo',
      'Válvulas abertura rápida tipo esfera',
      'Inversores de frequência',
      'Esquide com rodízios destinado ao suporte de todos os equipamentos',
      'Quadro elétrico com inversores de frequência',
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/extr-liquidos/crq_extr-liquidos.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'extr-oleos-essenc',
    navlink: 'Etra. Óleos Essenciais',
    titulo: 'SISTEMA DESTINADO À OBTENÇÃO DE ÓLEOS ESSENCIAIS',
    descricao:
      "Os óleos essenciais são considerados a ''alma'' da planta e são os principais componentes bioquímicos de ação terapêutica das plantas aromáticas e medicinais. Podem ser incorporados no seu dia-a-dia, trazendo vários benefícios para a saúde física, mental e emocional. A forma pela qual esses óleos podem ser extraídos da planta é por arraste a vapor ou extração por solvente. Os óleos obtidos por praticas limpas de extração (sem contaminante tipo solvente) possuem uma aplicabilidade que vai desde sua utilização na produção de farmacêutica como alimentícia. Pesquisas variadas veem sendo utilizadas para extrair diferentes tipos de óleos e analisar sua aplicabilidade. Com isso, a Ekipar, desenvolveu um sistema que possui como objetivo extrair óleos essências em quantidades de maior expressividade.",
    funcionamento:
      'A unidade foi desenvolvida para extrair óleos de amostras de diferentes espécies. O sistema apresenta uma sistemática de fluxo fechado em termos de utilidades industriais. A unidade possui uma caldeira geradora de vapor que distribui o vapor gerado para um tanque pressurizado com distribuidores internos. O equipamento possui, ainda, trocador de calor destinado a condensação do óleo e vapor de arraste. O condensado é direcionado a um tanque separador de fases. Neste tanque existe visor de nível através do qual o óleo é separado da fase aquosa. Na fase de condensação, a unidade apresenta também uma mini torre de resfriamento.',
    detalhamento: [
      'Caldeira geradora de vapor normatizada, NR13',
      'Tanque de alimentação, em aço inox AISI 316L, de materia da qual será removida o óleo essencial',
      'Trocador de calor, tipo casco e tubos, em aço inox AISI 316L',
      'Tanque de condensados em aço carbono com visor de nível em vidro boro silicato',
      'Válvulas de controle tipo gaveta',
      'Mini torre de refrigeração',
      'Bomba centrifuga',
      'Controlador de temperatura',
      'Estrutura modular',
      'Quadro elétrico',
      'Visores de fluxo',
      'Procedimento Operacional Padrão.'],
    croqui: 'equipamentos/extr-oleos-essenc/crq_extr-oleos-essenc.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'fermentador',
    navlink: 'Fermentador',
    titulo: 'MINI-USINA DIDÁTICA PARA PRODUÇÃO DE ETANOL',
    descricao:
      'Os combustíveis derivados de petróleo são produtos que aos poucos serão substituídos por combustíveis oriundos de fontes Renováveis. Neste contexto estão os alcoóis obtidos da fermentação alcoólica e o biodiesel oriundo de óleos vegetais e gordura animal. No Brasil, vários cursos superiores e formadores de técnicos na área de biocombustíveis foram formados. Visando este mercado, inúmeros equipamentos são lançados com intuito de capacitar estes profissionais. No entanto, em termos de plantas com pequena capacidade e que possibilite a transferência de conhecimento a estes profissionais, o mercado ainda encontra-se bastante deficitário. Assim, a Ekipar desenvolveu um sistema completo em termos de operações unitárias que englobam uma unidade destinada a produção de etanol. O sistema possui vazão de 10 L com equipamentos que contemplam agitadores, trocadores de calor, transferência de massa, automação e controle.',
    funcionamento:
      'A unidade parte do principio da propriedade de fermentação do caldo alcoólico. Para tanto, o sistema possui tanques de fermentação, decantadores, sistema de inserção de inoculo fermentativo, dentre outros equipamentos.',
    detalhamento: [
      'Dornas de fermentação em aço inox AISI 316',
      'Bombas dosadoras de elementos necessários a manutenção de pH',
      'Ciclones de remoção de leveduras',
      'Tanques de alimentação e obtenção do calco fermentado',
      'Quadro elétrico',
      'Automação com IHM',
      'Procedimento operacional Padrão (POP).'],
    croqui: 'equipamentos/fermentador/crq_fermentador.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'flotador',
    navlink: 'Flotador',
    titulo: 'SISTEMA DE FLOTAÇÃO A AR DISSOLVIDO',
    descricao:
      'A flotação é um processo que envolve três fases: líquida, sólida e gasosa. É utilizada para separar partículas suspensas ou materiais graxos ou oleosos de uma fase líquida. A separação é produzida pela combinação de bolhas de gás, geralmente o ar, com a partícula, resultando em um agregado, cuja densidade é menor que a do líquido e, portanto, podendo assim, ser coletado posteriormente.',
    funcionamento:
      'Os efluentes são misturados em um sistema de mistura estático (Mixer) e posteriormente são levados a um tanque de agitação e mistura de surfactantes. A atuação do surfactante ocasionará a quebra da emulsão água-óleo. No mesmo tanque é misturado água com ar dissolvido. Após a quebra da emulsão, o óleo é removido em compartimentos específicos. A água recuperada é retirada do sistema por sistema de bombeamento. Neste tipo de sistema são tratados efluentes de reatores, durante o tratamento de esgotos sanitários.',
    detalhamento: [
      'Tanques de alimentação para óleo e água em aço carbono',
      'Misturador estático tipo convergente',
      'Banco de agitadores com motor redutor',
      'Tanque FAD em acrílico',
      'Indicadores de vazão para água e óleo tipo rotâmetros',
      'Tanque para utilização de surfactante',
      'Sistema de bombeamento com bombas tipo centrífuga',
      'Indicador de pressão tipo Bourbon',
      'Suporte do sistema tipo esquide em aço carbono',
      'Quadro elétrico com inversores de frequência',
      'POP (Procedimento operacional padrão).'
    ],
    croqui: 'equipamentos/flotador/crq_flotador.png',
    img: ['equipamentos/flotador/pht_flotador-001.png'],
    vr: ''
  },
  {
    ID: 'forno-secagem1',
    navlink: 'Forno Secagem 1',
    titulo: 'FORNO EM BATELADA DESTINADO À SECAGEM DE MATERIAIS',
    descricao:
      'O processo de secagem de material sólido é um dos processos de beneficiamento de sólidos mais realizados no mundo. A secagem de material é uma das atividades que exige equipamentos específicos. Assim, a utilização de equipamentos que possam ser utilizados e testados em laboratório é de suma importância ao desenvolvimento de novas pesquisas e, essas pesquisas possam estimular maiores desenvolvimento no setor de materiais da industria química.',
    funcionamento:
      'O forno de secagem de material em batelada foi desenvolvido para ser utilizado em laboratórios que estudam o desenvolvimento de novos materiais. O equipamento possui um compartimento que pode ser preenchido com diferentes materiais. Estes podem ser secos a partir de contato com resistências elétricas que podem chegar à temperatura de 300°C. O equipamento possui sistema de controle no qual a matéria a ser seca poderá ser monitorada durante o processo de secagem',
    detalhamento: [
      "Cuba em aço inox AISI 304, chapa 3/16'', vedação com papelão hidráulico",
      "Agitação interna com pás estilo ''raspador''",
      'Moto-redutor destinado a proporcionar um maior torque ao sistema de secagem',
      'Manômetro tipo Bourbon destinado ao acompanhamento da pressão durante a secagem',
      'Sensores de pressão tipo Termopar J',
      'Válvula de segurança com abertura de até 5 bar de pressão interna',
      "Esquide em aço carbono destinado a sustentação do sistema, perfil em L de 1.1/2''",
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/forno-secagem1/crq_forno-secagem1.png',
    img: ['equipamentos/forno-secagem1/pht_forno-secagem1-001.jpg'],
    vr: ''
  },
  {
    ID: 'forno-secagem2',
    navlink: 'Forno Secagem 2',
    titulo: 'FORNO CONTÍNUO DESTINADO À SECAGEM DE MATERIAIS',
    descricao:
      'A secagem de material sólido requer sistemas específicos que possam fornecer ao material as características necessárias a sua utilização. Assim tempo e temperatura de operação são cruciais à correta operacionalidade destes produtos.',
    funcionamento:
      'O forno contínuo foi projetado para secar os produtos sólidos de forma intermitente. O material é alimentado em sua boca de alimentação e por um parafuso helicoidal (sem fim). A matéria solida fica em contato com a superfície aquecida por fluido quente que passa pela camisa. O percurso do material dura em torno de 1 hora, permitindo seu aquecimento durante este tempo. Na extremidade oposta o material seco é coletado.',
    detalhamento: [
      'Alimentador vertical em aço inox AISI 316',
      'Motor de 1/4 c.v.',
      'Parafuso helicoidal em aço inox AISI 316',
      'Forno com camisa externa em aço inox AISI 316',
      'Sensores de temperatura e pressão',
      'Quadro elétrico trifásico',
      'Esquide em aço carbono destinado a suportar a estrutura',
      'POP – Procedimento operacional Padrão.'],
    croqui: 'equipamentos/forno-secagem2/crq_forno-secagem2.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'kit-didatico1',
    navlink: 'Kit Didático 1',
    titulo: 'KIT DE TUBOS, CHAPAS E PARAFUSOS',
    descricao:
      'A construção de equipamentos industriais requer o conhecimento da escolha do material a ser utilizado nas operações de produção. As unidades produtoras possuem diferentes tipos de matérias primas. Assim, a integridade dos equipamentos é relacionada ao tipo de material e sua capacidade de suportar ataques corrosivos. Fora isso, cada equipamento de processo possui características específicas quanto à pressão e temperatura. Efeitos de externa e internas, vasos de pressão são relacionados a espessura do material e quanto de esforço esses suportam.',
    funcionamento:
      'Os Kits foram projetados para que, através de exemplos e planilhas de cálculo, o docente possa apresentar durante sua aula os tipos de materiais e em que situação esses são utilizados. Para isso, o mesmo terá que dominar e conhecer fundamentos de projetos de engenharia e escolha de tipos de materiais para indústria química.',
    detalhamento: [
      'Parafusos sextavados M3 ao M10 em aço carbono',
      'Parafusos Allen M4',
      "Tubos SCH40 de 4''",
      "Tubos SCH40 de 2''",
      "Tubos SCH40 de 1''",
      "Tubos SCH40 de 3/4''",
      "Tubos SCH40 de 1/2''",
      "Tubos SCH40 de 1/4''",
      "Chapas AISI 304 de 1/2''",
      "Chapas AISI 304 de 3/8''",
      "Chapas AISI 304 de 1/4''",
      "Chapas AISI 304 de 3/16''",
      "Chapas AISI 304 de 1/8''",
      'Chapas AISI 304 de 1/16”',
      "Chapas AISI 304 de 1/32''",
      'Esquide em aço carbono com rodízios',
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/kit-didatico1/crq_kit-didatico1.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'mini-reator1',
    navlink: 'Mini Reator 1',
    titulo: 'REATOR PARA SÍNTESES DIVERSAS EM BAIXAS PRESSÕES (2 Litros)',
    descricao:
      'Pesquisas envolvendo a transformação de substâncias em novos produtos estão cada vez mais acentuadas. Novas substâncias são sintetizadas todos ao anos no Brasil e no mundo. No entanto, o desenvolvimento destes produtos em alguns casos necessitam de condições especiais em termos de variáveis de processo. Dentre as variáveis mais estudadas e que possuem afinidade com cinéticas reacionais estão a temperatura e a pressão. A necessidade de sistemas especializados para cada tipo de reação proporciona ao mercado o desenvolvimento de sistemas complexos. Sempre lembrando que sistemas simples devem possuir características que possam ajudar aos pesquisadores em suas pesquisas e desenvolvimentos. Pensando nisso, a Ekipar desenvolveu sistemas reacionais com custos reduzidos e que podem ser utilizados em sistemas químicos que não exijam grandes esforços mecânicos.',
    funcionamento:
      'Os reatores funcionam sob agitação de motores no qual existem inversores de frequência necessários ao controle de velocidade do sistema. O aquecimento é realizado por meio de camisa de circulação de fluido (aquecimento/resfriamento). Dependendo do sistema, o mesmo poderá ainda possuir trocador destinado a condensação de voláteis existente no meio.',
    detalhamento: ['', '', ''],
    croqui: 'equipamentos/mini-reator1/crq_mini-reator1.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'mini-torre-frac',
    navlink: 'Mini Torre Fracionadora',
    titulo:
      'MICRO-DESTILARIA EM BATELADA COM FRACIONAMENTO EM PRATOS COM BORBULHADORES',
    descricao:
      'A formação de profissionais que tenham um conhecimento prático é um dos fatores que as empresas mais visam no momento. A junção do conhecimento prático com o teórico faz com que os profissionais ao se depararem com situações reais consigam resolver situações e com isso trazer soluções técnica às empresas contratantes. Assim, micro destilaria foi projetada para realizar pesquisas que necessitem de um sistema de separação que envolva a separação por diferença de pontos de ebulição. O equipamento possui internamente pratos de separação com borbulhadores e sangrias laterais para amostragem de produto. A unidade é acompanhada por sensores de temperatura que possibilitam conhecer a temperatura de cada fração recuperada.',
    funcionamento:
      'A Micro destilaria foi projetada para que os pesquisadores, alunos em engenharia ou cursos técnicos de formação possam interagir com sistema de forma direta. O sistema funciona utilizando o principio de separação por diferença de pontos de ebulição. A mistura a ser separada deverá ser alimentada no balão. Ao serem aquecidas, as frações serão direcionadas a estágios diferentes da coluna. Na coluna as frações serão recuperadas na lateral da coluna por inserção de tubos laterais.',
    detalhamento: [
      "Coluna de destilação em aço inox AISI 304, diâmetro de 2'', pratos com borbulhadores, 4 estágios* separados por flanges e vedação por papelão hidráulico",
      "Trocador de calor em aço inox AISI 304, chapa 3/16'', 32 tubos BWG, vedação com papelão hidráulico",
      "Tanque de Condensados em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em boro silicato, válvula inferior destinada a retirada de material a ser analisada",
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Indicador de Pressão tipo Bourbon',
      'Sensores de Pressão tipo Termopar K',
      'Manta aquecedora para balão de fundo redondo',
      'Válvula de segurança com abertura de até 5 bar de pressão interna',
      'Esquide em aço carbono com rodízios',
      'POP (Procedimento operacional padrão).', '*o número de estágios pode varia de acordo com as necessidades do projeto'
    ],
    croqui: 'equipamentos/mini-torre-frac/crq_mini-torre-frac.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'mini-usina1',
    navlink: 'Mini Usina 1',
    titulo: 'MINI-USINA EM BATELADA DE BANCADA PARA PRODUÇÃO DE BIODIESEL',
    descricao:
      'Os combustíveis derivados de petróleo são produtos que aos poucos serão substituídos por combustíveis oriundos de fontes Renováveis. Neste contexto estão os alcoóis obtidos da fermentação alcoólica e o biodiesel oriundo de óleos vegetais e gordura animal. No Brasil, vários cursos superiores e formadores de técnicos na área de biocombustíveis foram formados. Visando este mercado, inúmeros equipamentos são lançados com intuito de capacitar estes profissionais. No entanto, em termos de plantas com pequena capacidade e que possibilite a transferência de conhecimento a estes profissionais, o mercado ainda encontra-se bastante deficitário. Assim, a Ekipar desenvolveu um sistema de bancada o qual possui como principais etapas a produção e lavagem a seco do biodiesel.',
    funcionamento:
      '<p>Sistema de Transesterificação e Lavagem: Unidade modular com tanques em aço inox, reator batelada aço inox AISI 304. Sistema de agitação controlado por inversores de frequência, sistema de mistura estático e sistema de aquecimento estático.</p><p>Sistema de Lavagem da fase éster em coluna extratora com resinas de troca Iônica: O sistema é constituído de coluna em aço inox AISI 304.  O sistema de lavagem utiliza o princípio de lavagem por contato iônico no qual o sabão formado no processo é retirado ao longo da coluna de lavagem. Após a etapa a coluna é regenerada por álcool do próprio processo.</p> ',
    detalhamento: ['Módulo 1:', 'Reator Batelada, volume de 2L, em aço inox, pás de agitação em teflon, agitadores com inversores de frequência',
      'Visor de nível em vidro boro silicato',
      'Indicador de temperatura tipo J',
      'Coluna de lavagem em aço inox AISI 304',
      'POP – Procedimento operacional Padrão.'],
    croqui: 'equipamentos/mini-usina1/crq_mini-usina1.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'mini-usina2',
    navlink: 'Mini Usina 2',
    titulo:
      'MINI-USINA EM BATELADA COM AQUECIMENTO PARA PRODUÇÃO DE BIODIESEL',
    descricao:
      'Os combustíveis derivados de petróleo são produtos que aos poucos serão substituídos por combustíveis oriundos de fontes renováveis. Neste contexto estão os álcoois obtidos da fermentação alcoólica e o biodiesel oriundo de óleos vegetais e gordura animal. No Brasil, vários cursos superiores e formadores de técnicos na área de biocombustíveis foram formados. Visando este mercado, inúmeros equipamentos são lançados com intuito de capacitar estes profissionais. No entanto, em termos de plantas com pequena capacidade e que possibilite a transferência de conhecimento a estes profissionais, o mercado ainda encontra-se bastante deficitário. Assim, a Ekipar desenvolveu um sistema completo em termos de operações unitárias que englobam uma unidade destinada a produção de biodiesel.',
    funcionamento:
      'O sistema de produção de biodiesel apresenta os três grandes blocos processuais existentes em uma unidade produtora a saber: <br>Bloco 1 (ou módulo 1)<br>Sistema de Transesterificação: Unidade modular com tanques em aço inox, reatores CSTR em aço inox AISI 304. Sistema de agitação contro lado por inversores de frequência, sistema de mistura estático e sistema de aquecimento estático.<br>Sistema de Lavagem da fase éster em coluna extratora com resinas de troca Iônica: O sistema é constituído de coluna em aço inox AISI 304 O sistema de lavagem utiliza o princípio de lavagem por contato iônico no qual o sabão formado no processo é retirado ao longo da coluna de lavagem. Após a etapa, a coluna é regenerada por álcool do próprio processo. <br> Bloco 2 (ou módulo 2) <br> Mini Destilaria destinada a recuperação do álcool em excesso: No processo de transesterificação do óleo e obtenção posterior de biodiesel o álcool, seja ele metanol ou etanol, é usado em excesso. Este reagente deverá ser recuperado e reutilizado na etapa inicial de alimentação. Assim, todo álcool utilizado no processo e que não reagiu é recuperado no sistema de destilação com torre de recheios projetada para esta unidade fabril.',
    detalhamento: ['Módulo 1', 'Reatores CSTR, volume de 2L, em aço inox AISI 316, pás de agitação em teflon, agitadores com inversores de frequência',
      'Sistema de aquecimento tipo caldeira com resistência de imersão',
      'Bomba de engrenagem',
      'Válvulas de controle de fluxo tipo globo',
      'Válvulas abertura rápida tipo esfera',
      'Inversores de frequência',
      'Esquide com rodízios destinado ao suporte de todos os equipamentos',
      'Quadro elétrico com inversores de frequência',
      'POP (Procedimento operacional padrão).', '<br><br>',
      'Módulo 2', "Coluna de destilação em aço inox AISI 304, diâmetro de 4'', recheio cerâmico com 1/8 do diâmetro da coluna, 4 estágios separados por flanges e vedação por papelão hidráulico",
      "Trocador de calor em aço inox AISI 304, chapa 3/16'', 32 tubos BWG, vedação com papelão hidráulico",
      "Tanque de alimentação em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em vidro boro silicato, válvula inferior destinado a descarga de material",
      "Tanque de condensados em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em boro silicato, válvula inferior destinada a retirada de material a ser analisada",
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Bombas centrífugas de 1/2 c.v. destinado ao transporte de fluídos no sistema',
      'Indicador de Pressão tipo Bourbon',
      'Sensores de Pressão tipo Termopar J',
      'Válvula de segurança com abertura de até 5 bar de pressão interna',
      'Esquide em aço carbono co rodízios',
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/mini-usina2/crq_mini-usina2.png',
    img: ['equipamentos/mini-usina2/pht_mini-usina2-001.jpg',
      'equipamentos/mini-usina2/pht_mini-usina2-002.jpg'],
    vr: ''
  },
  {
    ID: 'mini-usina3',
    navlink: 'Mini Usina 3',
    titulo:
      'MINI-USINA CONTÍNUA DIDÁTICA COM TODAS AS ETAPAS PARA PRODUÇÃO DE BIODIESEL',
    descricao:
      'Os combustíveis derivados de petróleo são produtos que aos poucos serão substituídos por combustíveis oriundos de fontes renováveis. Neste contexto estão os álcoois obtidos da fermentação alcoólica e o biodiesel oriundo de óleos vegetais e gordura animal. No Brasil, vários cursos superiores e formadores de técnicos na área de biocombustíveis foram formados. Visando este mercado, inúmeros equipamentos são lançados com intuito de capacitar estes profissionais. No entanto, em termos de plantas com pequena capacidade e que possibilitem a transferência de conhecimento a estes profissionais, o mercado ainda encontra-se bastante deficitário. Assim, a Ekipar desenvolveu um sistema completo em termos de operações unitárias que englobam uma unidade destinada a produção de biodiesel. O sistema possui vazão de 10L/h com equipamentos que contemplam agitadores, trocadores de calor, transferência de massa, automação e controle.',
    funcionamento:
      'O sistema de produção de biodiesel apresenta os três grandes blocos processuais existentes em uma unidade produtora a saber: <br> Bloco 1 (ou módulo 1) – Sistema de Transesterificação: Unidade modular com tanques em aço inox, reatores CSTR em vidro borosilicato, reatores PFR em vidro borosilicato. Sistema de agitação controlado por inversores de frequência, alimentação monitorada por indicadores de vazão, decantador horizontal em vidro, sistema de mistura estático e sistema de aquecimento estático. <br> Bloco 2 (ou módulo 2) – Sistema de Lavagem da fase éster em coluna extratora Contra corrente: O sistema é constituído de coluna em vidro destinado a visualização do fenômeno de troca de massa, aquecedor elétrico de óleo térmico destinado ao aquecimento de uma das correntes, pratos ou estágios de troca de massa. O bloco de lavagem da fase éster apresenta uma sistemática contra corrente em que o solvente poderá ser água ou glicerina reprocessada. <br> Bloco 3 (ou módulo 3) – Mini Destilaria destinada a recuperação do álcool em excesso: No processo de transesterificação do óleo e obtenção posterior de biodiesel, o álcool, seja ele metanol ou etanol, é usado em excesso. Este reagente deverá ser recuperado e reutilizado na etapa inicial de alimentação. Assim, todo álcool utilizado no processo e que não reagiu é recuperado no sistema de destilação com torre de recheios projetada para esta unidade fabril.',
    detalhamento: ['Módulo 1: <br>', 'Reatores CSTR, volume de 2L, em vidro borosilicato, pás de agitação em teflon, agitadores com inversores de frequência',
      'Reatores PFR em vidro borosilicato, recheios em com anéis de raschig em borosilicato, juntas em teflon e acoplamento personalizado em teflon',
      'Decantador Horizontal em vidro borosilicato, zona de coalescência recheada com anéis de raschig em material cerâmico, acoplamento em tecnyl',
      'Aquecedor elétrico estático em aço inox AISI 304 com espiras destinadas ao fluxo contínuo de óleo vegetal',
      'Mixer estático em aço inox AISI 304',
      "Tanque de alimentação de óleo vegetal em aço carbono, chapa 3/16''",
      "Tanque de alimentação de álcool etílico ou metílico em aço carbono, chapa 3/16''",
      "Tanque de alimentação de solução catalisadora em aço inox AISI 304, chapa 3/16''",
      'Bombas centrífugas, potencia de 1/4 c.v.',
      'Bomba de engrenagem, potencia de 1/2 c.v.',
      'Indicadores de Vazão de área variável tipo rotâmetro',
      'Indicadores de nível tipo haste lateral',
      'Tubulação em tubos de teflon',
      'Válvulas em aço carbono ou teflon. ',

      'Módulo 2: <br>', "Tanques de alimentação para óleo e água em aço carbono com chapa de 3/16''",
      'Torre de extração líquido–líquido com cinco estágios em vidro borosilicato, prato de contato entre as fases teflon',
      'Tubulação em teflon e válvulas punk-flow',
      'Sistema de aquecimento tipo caldeira com resistência de imersão',
      'Bomba de engrenagem',
      'Bomba centrífuga',
      'Válvulas de controle de fluxo tipo globo',
      'Válvulas abertura rápida tipo esfera',
      'Inversores de frequência',
      'Esquide com rodízios destinado ao suporte de todos os equipamentos',
      'Quadro elétrico com inversores de frequência',
      'POP (Procedimento operacional padrão).',

      'Módulo 3:<br>', 'Coluna de destilação em aço inox AISI 304, diâmetro de 4”, recheio cerâmico com 1/8 do diâmetro da coluna, 4 estágios separados por flanges e vedação por papelão hidráulico',
      "Trocador de calor em aço inox AISI 304, chapa 3/16'', 32 tubos BWG, vedação com papelão hidráulico",
      "Tanque de alimentação em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em vidro borosilicato, válvula inferior destinado a descarga de material",
      "Tanque de condensados em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em borosilicato, válvula inferior destinada a retirada de material a ser analisada",
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Bombas centrífugas de 1/2 c.v. destinado ao transporte de fluídos no sistema',
      'Indicador de Pressão tipo Bourbon',
      'Sensores de Pressão tipo Termopar J',
      'Válvula de segurança com abertura de até 5 bar de pressão interna',
      'Esquide em aço carbono com rodízios',
      'POP (Procedimento operacional padrão).'],
    croqui: ['equipamentos/mini-usina3/crq_mini-usina3-000.png',
      'equipamentos/mini-usina3/crq_mini-usina3-001.png',
      'equipamentos/mini-usina3/crq_mini-usina3-002.png',
      'equipamentos/mini-usina3/crq_mini-usina3-003.png'],
    img: [''],
    vr: ''
  },
  {
    ID: 'pirolise1',
    navlink: 'Pirólise 1',
    titulo: 'UNIDADE DE PEQUENO PORTE DESTINADA A PIRÓLISE DE BIOMASSA',
    descricao:
      'Os estudos envolvendo a reutilização de biomassa para produção de energia estão cada dia mais evidenciados. A utilização de matéria que possa ser reutilizada na geração de energia são pesquisas que estão sendo alavancadas em todo o planeta. Com isso, o conceito de sustentabilidade e engenharia reversa está ganhando cada vez mais a atenção dos centros de pesquisas. No desejo de possibilitar que pesquisadores possam estudar e avaliar o potencial das diversas fontes de matéria para geração de bio óleo e biogás, foi desenvolvido uma planta em batelada para pirólise de materiais diversos. O sistema apresenta uma plataforma móvel e de baixo custo que pode ser alocado em qualquer local de pesquisa.',
    funcionamento:
      'Sistema de pirólise: Unidade modular com tanques em aço inox, reator batelada aço inox AISI 304. Sistema de agitação controlado por inversores de frequência, sistema de mistura estático e sistema de aquecimento estático. O equipamento possui trocadores de calor em aço inox com tanques acoplados para a coleta de bio óleo. A matéria prima após a quebra por aquecimento gera o óleo e o gás. Este bio óleo é coletado em tanques de coleta e posteriormente analisado. O gás formado é levado colunas de vidro boro silicato e podem ser coletados ou queimados em um queimador na parte superior da unidade.',
    detalhamento: ['Módulo 1: Pirólise do Material', 'Reator por batelada, volume de 3L, em aço inox, pás de agitação em aço, agitadores com inversores de frequência',
      'Aquecimento por resistência elétrica de 10kW',
      'Termopar tipo K destinado ao controle do aquecimento',
      'Indicador de pressão tipo Bourbon',
      'Motor de 3/4 c.v.',

      'Módulo 2: Recuperação do bio óleo e lavagem do gás gerado', 'Trocadores de calor casco e tubos em aço inox AISI 304',
      'Tanques de 2L em aço inox',
      'Coluna em vidro boro silicato destinada a lavagem do gás gerado durante a pirólise',
      'Esquide em aço carbono com rodízios',
      'Procedimento Operacional padrão – POP.'],
    croqui: '',
    img: ['equipamentos/pirolise1/pht_pirolise1-001.jpg',
      'equipamentos/pirolise1/pht_pirolise1-002.jpg'],
    vr: ''
  },
  {
    ID: 'pirolise2',
    navlink: 'Pirólise 2',
    titulo: 'UNIDADE PILOTO CONTÍNUA DESTINADA À PIRÓLISE DE BIOMASSA',
    descricao:
      'Os estudos envolvendo a reutilização de biomassa para produção de energia estão cada dia mais evidenciados. A utilização de matéria que possa ser reutilizada na geração de energia são pesquisas que estão sendo alavancadas em todo o planeta. Com isso, o conceito de sustentabilidade e engenharia reversa está ganhando cada vez mais a atenção dos centros de pesquisas. No desejo de possibilitar que pesquisadores possam estudar e avaliar o potencial das diversas fontes de matéria para geração de bio óleo e biogás, foi desenvolvido uma planta em contínua para pirólise de materiais diversos.',
    funcionamento:
      'Unidade modular com tanques em aço inox, reator contínuo vertical em aço inox AISI 304. O equipamento possui trocadores de calor em aço inox com tanques acoplados para a coleta de bio óleo. A matéria prima após a quebra por aquecimento gera o óleo e o gás. Este bio óleo é coletado em tanques de coleta e posteriormente analisado. O gás formado é levado colunas de vidro boro silicato e podem ser coletados ou queimados em um queimador na parte superior da unidade.',
    detalhamento: ['Módulo 1: Pirólise do Material', 'Reator com alimentação contínua, volume de 3L, em aço inox, aquecimento por resistência elétrica de 10kW',
      'Termopar tipo K destinado ao controle do aquecimento',
      'Indicador de pressão tipo Bourbon',
      'Motor de 3/4 c.v.',

      'Módulo 2: Recuperação do bio óleo e lavagem do gás gerado', 'Trocadores de calor casco e tubos em aço inox AISI 304',
      'Tanques de 2L em aço inox',
      'Coluna de separação em aço inox AISI 316 com sangrias laterais',
      'Termopares tipo K em toda a unidade, destinados ao monitoramento do sistema',
      'Torre de resfriamento',
      'Esquide em aço carbono',
      'POP (Procedimento Operacional padrão).'],
    croqui: 'equipamentos/pirolise2/crq_pirolise2.png',
    img: ['equipamentos/pirolise2/img_pirolise2-001.jpg'],
    vr: ''
  },
  {
    ID: 'pirolise-bancada',
    navlink: 'Pirólise Bancada',
    titulo: 'SISTEMA DE PIRÓLISE DE BANCADA',
    descricao:
      'Os estudos envolvendo a reutilização de biomassa para produção de energia estão cada dia mais evidenciados. A utilização de matéria que possa reutilizada na geração de energia são pesquisas que estão sendo alavancadas em todo o planeta. Com isso, o conceito de sustentabilidade e engenharia reversa está ganhando cada vez mais a atenção dos centros de pesquisas. No desejo de possibilitar que pesquisadores possam estudar e avaliar o potencial das diversas fontes de matéria para geração de bio óleo e biogás, foi desenvolvido uma planta em batelada, em pequeno porte, para pirólise de materiais diversos. O sistema apresenta uma plataforma móvel e de baixo custo que pode ser alocado em qualquer local de pesquisa. Para tanto, a unidade conta de uma plataforma que foi desenvolvida para operar em bancada. Isso é possível devido ao fato do sistema possuir uma capacidade em volumes reduzidos.',
    funcionamento:
      'Sistema de pirólise: A Unidade foi projetada para operar a temperaturas de até 650°C. Para tanto, o sistema possui um reator batelada em aço inox AISI 316L. Para o aquecimento, a unidade foi desenvolvida com resistências isoladas por material cerâmico. Os vapores gerados, condensáveis, serão capitados em trocadores de calor ligados em série.',
    detalhamento: ['Módulo 1 – Pirólise do Material ', 'Reator Batelada, volume de 1L, em aço inox, sem agitação, em aço',
      'Aquecimento por resistência elétrica de 10KW',
      'Termopar tipo K destinado ao controle do aquecimento',
      'Indicador de pressão tipo Bourbon',
      'Isolamento em cerâmica. ',

      'Módulo 2 – Recuperação do bio óleo e lavagem do gás gerado ', 'Trocadores de calor casco e tubos em aço inox AISI 304',
      'Tanques de 200 mL em aço inox',
      'Esquide em aço carbono com rodízios',
      'Procedimento Operacional padrão – POP'],
    croqui: 'equipamentos/pirolise-bancada/crq_pirolise-bancada.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'poliglicerol',
    navlink: 'Poliglicerol',
    titulo: 'SISTEMA POLIGLICEROL',
    descricao:
      'O estudo de sínteses de novos produtos é um ramo da química que ocorre desde datas remotas. A necessidade de se encontrar novas substância e sintetizar produtos não acessíveis ao homem ainda hoje é fonte de intensos estudos e pesquisas. Pensando nisso, a Ekipar desenvolveu um sistema destinado à síntese de produtos diversificados. O Sistema Poliglicerol é um equipamento destinado a pesquisas que envolvam a inserção de atmosferas inertes e altas temperaturas.',
    funcionamento:
      'A unidade foi projetada para funcionar em modo batelada. Para tanto, os reagentes devem ser inseridos no reator tipo tanque agitado. Este possui a particularidade de trabalhar em atmosfera inerte. O equipamento conta ainda com um sistema de condensação de vapores que são removidos durante as reações de síntese. A unidade vem ainda acoplada com torre de resfriamento e caldeira para aquecimento do sistema.',
    detalhamento: [
      'Reator em aço inox AISI 316L, volume de 20 L, agitação por pás tipo hélice, motor de 1/2 c.v.',
      'Trocador de calor em aço inox AISI 304',
      'Caldeira elétrica com resistências de 2kW',
      'Torre de refrigeração com bomba de 1/2 c.v. e motor de 1/2 c.v.',
      'Estrutura com rodízios e dispositivo de freios',
      'POP - Procedimento operacional Padrão.'],
    croqui: 'equipamentos/poliglicerol/crq_poliglicerol.png',
    img: ['equipamentos/poliglicerol/img_poliglicerol-001.png'],
    vr: ''
  },
  {
    ID: 'polimerizador1',
    navlink: 'Polimerizador',
    titulo: 'SISTEMA DESTINADO À POLIMERIZAÇÃO',
    descricao:
      'A polimerização de moléculas para obtenção de produtos com maior massa molecular necessita de condições especiais para sua realização. Assim, sistemas específicos são projetados para que seja obtidos produtos com alto grau de seletividade e pureza.',
    funcionamento:
      'O material a ser polimerizado (monômeros) são postos em contato dentro de um balão de 500 mL encamisado. O sistema é aquecido (faixa de temperatura de 100–500°C). Para substancias a serem aglomeradas e posterior formação de água, o sistema possui sistema de condensação de vapores a baixas temperaturas. O líquido condensado é recolhido em balão (250 mL) de condensados e poderá ser analisado posteriormente.',
    detalhamento: [
      'Balão de alimentação em vidro boro silicato com camisa (500 mL)',
      'Balão de alimentação em vidro boro silicato sem camisa (500mL)',
      'Condensador de refluxo em boro silicato',
      'Balão para coleta de vapores (250 mL)',
      'Manta aquecedora (100–500°C) com controle de temperatura e isolamento em lã de rocha',
      'Agitador com inversor de frequência (IKA)',
      'Suporte em aço inox 304.'],
    croqui: '',
    img: ['equipamentos/polimerizador1/pht_polimerizador1-001.jpg'],
    vr: ''
  },
  {
    ID: 'purificador-oleo',
    navlink: 'Purificador de Óleo',
    titulo: 'SISTEMA DE PURIFICAÇÃO DE ÓLEO RESIDUAL',
    descricao:
      'O consumo mundial de alimentos fritos tem aumentado nos últimos anos, pois as pessoas dispõem de menos tempo para preparar seus alimentos e o processo de fritura é uma alternativa rápida. Com isso, tem-se gerado grande quantidade de óleos residuais de fritura. Este produto ao ser lançado nos esgotos pode causar uma serie de problemas ambientais. No entanto o óleo de fritura, após o correto tratamento, poderá ser reutilizado na cadeia produtiva de biodiesel. Assim, a Ekipar desenvolveu o sistema destinado a purificação e secagem do óleo residual. O sistema possui a capacidade de retirar particulados e remover a umidade do óleo coletado.',
    funcionamento:
      'O sistema de purificação de óleo residual foi projetado para tratar de forma completa óleo a ser reciclado. A unidade apresenta as principais operações necessárias a purificação do óleo. Este material é alocado em tanque de abastecimento e, posteriormente, é enviado a uma centrífuga na qual todo material particulado e retirado do meio. Após a retirada de material particulado, o óleo ainda úmido é direcionado a um tanque flash, sistema no qual ocorre a secagem do óleo. Após esta etapa o óleo está pronto para ser reutilizado na cadeia produtiva de biodiesel.',
    detalhamento: [
      "Tanques em aço carbono (dois), chapa 3/16'', volume de 15 Litros",
      "Trocador de calor em aço carbono, chapa 3/16'', 32 tubos BWG, vedação em papelão hidráulico",
      "Tanque de condensados em aço carbono, chapa 3/16'', com suspiro destinado a equalização da pressão, visores de nível lateral em boro silicato,válvula inferior destinada a retirada de material a ser analisada",
      "Aquecedor elétrico em aço carbono, volume de 30L, chapa 3/16'', potência de 8Kw",
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Bomba de engrenagem de 1/2 c.v. destinada ao transporte de fluidos no sistema',
      'Bomba de vácuo destinada a secagem do óleo',
      "Tanque flash em aço inox AISI 304, chapa 3/16'', sistema de quebra névoa, serpentina com tubos BWG, visor de nível",
      'Indicador de Pressão tipo Bourbon',
      'Sensores de Pressão tipo Termopar J',
      'Válvula de segurança com abertura de até 5 bar de pressão interna',
      'Esquide em aço carbono com rodízios',
      'Quadro elétrico com inversor de frequência',
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/purificador-oleo/crq_purificador-oleo.png',
    img: ['equipamentos/purificador-oleo/pht_purificador-oleo-001.jpg'],
    vr: ''
  },
  {
    ID: 'reator-batelada-20l',
    navlink: 'Reator Batelada 20L',
    titulo: 'REATOR EM BATELADA 20L',
    descricao:
      'Pesquisas envolvendo a síntese de produtos diversos necessitam de sistemas específicos para que ocorram as reações cinéticas. O tipo de agitação, velocidade e tempo reacional tendem a influenciar a produção do material desejado. Com isso, o sistema foi desenvolvido para realizar produção com volumes de ate 20L em batelada. Assim, de forma a verificar a eficiência do tipo de agitação, o sistema possui a versatilidade de poder atuar com diferentes tipos de agitadores. A unidade possui, ainda, um sistema de retirada de condensáveis. Para tanto, a unidade possui um trocador casco e tubos com condensação vertical.',
    funcionamento: '',
    detalhamento: ['', '', ''],
    croqui: '',
    img: ['equipamentos/reator-batelada-20l/pht_reator-batelada-20l-001.jpg',
      'equipamentos/reator-batelada-20l/pht_reator-batelada-20l-002.jpg'],
    vr: ''
  },
  {
    ID: 'reator-hiperbarico',
    navlink: 'Reator Hiperbárico',
    titulo: 'MINI-REATOR PARA ALTAS PRESSÕES',
    descricao:
      'Pesquisas envolvendo a transformação de substancias em novos produtos estão cada vez mais acentuadas. Novas substancias são sintetizadas todos ao anos no Brasil e no mundo. No entanto o desenvolvimento destes produtos, em alguns casos, necessitam de condições especiais em termos de variáveis de processo. Dentre as variáveis mais estudadas e que possuem afinidade com cinéticas reacionais estão a temperatura e a pressão. Em termos de temperatura, grande parte dos materiais para a indústria química pode suportar com certo grau de segurança. Para o caso da pressão, um dos grandes problemas desta variável e que poderá prejudicar os ensaios reacionais são pontos de vazamentos, esforços mecânicos e grau de ruptura. Pensando nisso, a Ekipar desenvolveu uma tecnologia nacional em termo de reator para sínteses de substancias que exigem condições elevadas de temperatura e pressão.',
    funcionamento:
      'O reator para altas pressões desenvolvido pela Ekipar foi desenvolvido para ser um sistema simples e de fácil manipulação. O reator apresenta uma entrada superior na qual são alocados os reagentes a serem transformados. O equipamento possui um recipiente interno em teflon destinado a manter os reagentes sem o contato com aço. Uma manta isolante mantém a temperatura interna equilibrada. O aquecimento é realizado com auxilio de chapa de aquecimento com agitador magnético acoplado. Temperatura e pressão são monitoradas por interface homem-máquina (IHM) o qual realiza o controle do sistema. Todo o equipamento é isolado do meio externo por meio de uma capela em vidro.',
    detalhamento: [
      'Reator em aço inox AISI 304, Barra circular 110mm x 145mm',
      'Chapa aquecedora com controle de temperatura e velocidade de agitação',
      'Isolamento externo em vibra de vidro',
      'Capela em vidro temperado',
      "Válvula de alívio, pressão de abertura 1500 a 2000Psi a 288°C – 1/4''NPT",
      "Termopar tipo ''T'', rosca G1/4'' para alta pressão",
      "Conector macho G1/4'' para tubulação alta pressão 1/4''OD IHM – Interface homem máquina",
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/reator-hiperbarico/crq_reator-hiperbarico.png',
    img: ['equipamentos/reator-hiperbarico/pht_reator-hiperbarico-001.jpg',
      'equipamentos/reator-hiperbarico/pht_reator-hiperbarico-002.jpg',
      'equipamentos/reator-hiperbarico/pht_reator-hiperbarico-003.jpg'],
    vr: ''
  },
  {
    ID: 'reator-multifuncional',
    navlink: 'Reator Multifuncional',
    titulo: 'REATOR MULTIFUNCIONAL DESTINADO À PRODUÇÃO DE BIODIESEL',
    descricao:
      'Os combustíveis derivados de petróleo são produtos que aos poucos serão substituídos por combustíveis oriundos de fontes renováveis. Neste contexto estão os alcoóis obtidos da fermentação alcoólica e o biodiesel oriundo de óleos vegetais e gordura animal. No Brasil, vários cursos superiores e formadores de técnicos na área de biocombustíveis foram criados. Visando este mercado, inúmeros equipamentos são lançados com intuito de capacitar estes profissionais. No entanto, em termos de plantas com pequena capacidade e que possibilite a tranferência de conhecimento a estes profissionais, o mercado ainda encontra-se bastante deficitário. Assim, a Ekipar desenvolveu um sistema completo em termos de operações unitárias que englobam uma unidade destinada a produção de biodiesel. O sistema possui vazão de 100L/h com equipamentos que contemplam agitadores, trocadores de calor, transferência de massa, automação e controle.',
    funcionamento:
      'O projeto Reator Multifuncional equivale a uma usina compacta de biodiesel, onde as etapas de reação, decantação da fase glicerinosa, lavagem com água e secagem, são efetuados em um único equipamento. O reator central é complementado por um sistema de aquecimento elétrico, um tanque de coleta de glicerina, colunas de troca iônica para o estudo alternativo da purificação do biodiesel a seco, que elimina a emissão das águas de lavagem que podem apresentar certo impacto ambiental em decorrência do descarte inadequado deste material. A Figura abaixo apresenta o sistema com as etapas do processo que são executadas em um único equipamento.',
    detalhamento: ['Módulo 1', 'Reator por batelada, volume de 800L, em aço inox , pás de agitação em aço, agitadores com inversores de frequência',
      'Decantador vertical em aço inox, zona de coalecencia no próprio reator',
      'Aquecedor elétrico estático em aço inox AISI 304 com espiras destinadas ao fluxo contínuo de óleo vegetal',
      'Mixer estático em aço inox AISI 304',
      "Tanque de alimentação de óleo vegetal em aço carbono, chapa 3/16''",
      "Tanque de alimentação de álcool etílico ou metílico em aço carbono, chapa 3/16''",
      "Tanque de alimentação de solução catalisadora em aço inox AISI 304, chapa 3/16''",
      'Bombas centrífugas, potência de 1/4 c.v.',
      'Bomba de engrenagem, potência de 1/2 c.v.',
      'Indicadores de vazão de área variável tipo rotâmetro',
      'Indicadores de nível tipo haste lateral',
      'Tubulação em tubos de teflon',
      'Válvulas em aço carbono ou teflon',
      'POP – Procedimento operacional Padrão'],
    croqui: 'equipamentos/reator-multifuncional/crq_reator-multifuncional.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'separador-imisciveis',
    navlink: 'Separador de Imiscíveis',
    titulo: 'SISTEMA DE TESTES EM SEPARAÇÃO DE SUBSTANCIAS IMISCÍVEIS',
    descricao:
      'A separação de substancia utilizando a diferença de densidades/massa molecular é uma das operações de separação mais utilizadas nas indústrias de transformação química. Através desta utilização deste principio produtos são purificados e subprodutos são isolados do processo do produtivo. Entre as operações unitárias utilizadas neste processo estão os decantadores verticais, decantadores horizontais e os Ciclones. Ambos os equipamentos são utilizados com a mesma funcionalidade no entanto, com eficiência de processo diferenciadas.',
    funcionamento:
      'A corrente com mistura de óleo e água são bombeados a um misturador estático (MIX). A mistura é direcionada ao hidrociclone decantador, ou ao Flotador.Nestes irá ocorrer a separação de fases. No entanto a eficiência de separação de ambos será avaliada com os dados obtidos na saída do sistema. Nos sistemas são observados zonas de coalescência, decantação por análise de numero de Reynolds e perfis de decantação.',
    detalhamento: [
      'Tanques de alimentação para óleo e água em aço carbono',
      'Misturador estático tipo convergente',
      'Decantador horizontal em aço inox',
      'Separador Hidrociclone',
      'Flotador em aço inox',
      'Indicador de temperatura',
      'Sensor de Temperatura',
      'Visor de nível em vidro boro silicato',
      'Indicador de Vazão tipo rotâmetro',
      'Indicadores de vazão para água e óleo tipo rotâmetros',
      'Tanque para utilização de surfactante',
      'Caldeira de aquecimento de olé térmico',
      'Sistema de bombeamento com bombas tipo centrífuga',
      'Suporte do sistema tipo esquide em aço carbono',
      'Quadro elétrico com inversores de frequência',
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/separador-imisciveis/crq_separador-imisciveis.png',
    img: ['equipamentos/separador-imisciveis/pht_separador-imisciveis-001.jpg',
      'equipamentos/separador-imisciveis/pht_separador-imisciveis-002.jpg',
      'equipamentos/separador-imisciveis/pht_separador-imisciveis-003.jpg',
      'equipamentos/separador-imisciveis/pht_separador-imisciveis-004.jpg'],
    vr: ''
  },
  {
    ID: 'separador-oleo',
    navlink: 'Separador de Óleo',
    titulo: 'SISTEMA DE SEPARAÇÃO DE ÓLEO',
    descricao:
      'A separação de substancia utilizando a diferença de densidades/massa molecular é uma das operações de separação mais utilizadas nas indústrias de transformação química. Através da utilização deste principio, produtos são purificados e subprodutos são isolados do processo do produtivo. Entre as operações unitárias utilizadas neste processo estão os decantadores verticais, decantadores horizontais e os ciclones. Estes equipamentos são utilizados com a mesma funcionalidade. As eficiências de processo, no entanto, são diferenciadas.',
    funcionamento:
      'A corrente com mistura de óleo e água é bombeada a um misturador estático (Mixer). A mistura é direcionada ao hidrociclone ou ao decantador. Em ambos irá ocorrer a separação de fases. No entanto a eficiência de separação de cada um será avaliada com os dados obtidos na saída do sistema. Nos sistemas são observados zonas de coalescência, decantação por análise de numero de Reynolds e perfis de decantação.',
    detalhamento: [
      'Tanques de alimentação para óleo e água em aço carbono',
      'Misturador estático tipo convergente',
      'Decantador horizontal em aço inox',
      'Separador Hidrociclone',
      'Indicadores de vazão para água e óleo tipo rotâmetros',
      'Tanque para utilização de surfactante',
      'Sistema de bombeamento com bombas tipo centrífuga',
      'Suporte do sistema tipo esquide em aço carbono',
      'Quadro elétrico com inversores de frequência',
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/separador-oleo/crq_separador-oleo.png',
    img: ['equipamentos/separador-oleo/pht_separador-oleo-001.jpg',
      'equipamentos/separador-oleo/pht_separador-oleo-002.jpg'],
    vr: ''
  },
  {
    ID: 'sist-troca-term1',
    navlink: 'Sist. Troca Térmica 1',
    titulo: 'SISTEMA DE TROCA TÉRMICA',
    descricao:
      'Em unidades de processamento um dos equipamentos mais conhecidos e utilizados são os trocadores de calor. Acoplados a sistemas de troca térmica, os trocadores de calor fecham os ciclos inerentes aos sistemas de transferência de calor. Engenheiros e estudantes, sejam técnicos ou alunos de engenharia, necessitam entender o real funcionamento destes equipamentos. Com isso, não apenas os materiais construtivos, como também as normas de fabricação devem ser expostas de forma a tornar os profissionais cada vez mais preparados nesta operação unitária tão crucial as unidades de transformação.',
    funcionamento:
      'O sistema de troca térmica, com trocador casco e tubos, foi projetado para o treinamento de profissionais na área de transformação industrial. O sistema consta de equipamentos que contemplam um circuito fechado ao qual estão inclusos bombas, vasos de circulação, instrumentos de processo e utilizadas industriais. Assim, a unidade é capaz, juntamente com o professor responsável pela transferência de conhecimento, de proporcionar ao estudante um vasto conhecimento em unidade de transferência de calor, utilidades industriais e instrumentação industrial.',
    detalhamento: [
      "Trocador de calor em aço inox AISI 304, chapa 3/16'', 32 tubos BWG, vedação com papelão hidráulico",
      "Tanque de alimentação em aço inox AISI 304, chapa 3/16'', suspiro destinado a equalização da pressão, visores de nível lateral em vidro boro silicato, válvula inferior destinado a descarga de material",
      "Aquecedor elétrico com potencia de 15 kW em aço inox AISI 304, chapa 3/16”. Isolamento externo utilizando lã de rocha com espessura de 1''. Tampos laterais com chapa de 1/4'' PMTA de 8 bar de pressão",
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Bombas centrífugas de 1/2 c.v. destinado ao transporte de fluídos no sistema',
      'Indicador de pressão tipo Bourbon',
      'Sensores de pressão tipo Termopar J',
      'Válvula de segurança com abertura de até 5 bar de pressão interna',
      'Esquide em aço carbono com rodízios',
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/sist-troca-term1/crq_sist-troca-term1.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'sist-troca-term2',
    navlink: 'Sist. Troca Térmica 2',
    titulo: 'SISTEMA AUTOMATIZADO DE TROCA TÉRMICA',
    descricao:
      'A área de automação industrial é um setor em unidades de produção que possui um elevado conhecimento. A utilização de equipamentos sofisticados acoplados ao conhecimento de operações unitárias, bem como seu completo funcionamento na área de operações de transformação, é algo de engenheiros e técnicos devem compreender. Não basta conhecer os instrumentos destinados a automação. É necessário entender as variáveis as quais se deseja controlar. Com isso, a Ekipar desenvolveu a unidade de automação industrial que contempla as principais variáveis de controle. Com isso, set point de vazão, temperatura, pressão e nível serão compreendidos e facilmente absorvidos por alunos de engenharia. Fora isso, a unidade possui sistemas em aço e, juntamente com este sistema, equipamentos em acrílico que mostram o interno de como é este sistema. Neste sistema são encontrados todos os tipos de válvulas de processo e instrumentos para tubulação. Trata-se, portanto, de um equipamento completo no qual o alunos terá uma compreensão de como são os equipamentos reais, as variáveis de processo, instrumentos, CLP e Supervisório.',
    funcionamento:
      'O sistema de automação foi projetado para que o aluno conheça as diversas operações de fluxo e troca térmica. A unidade possui equipamentos aos quais estão incorporados as variáveis de nível, vazão, temperatura e pressão. O equipamentos possui trocadores de calor, tanques de pressão, caldeiras de óleo térmico, torre de refrigeração, tubulação com rotâmetros, tubulação em acrílico (destinada a observação de fluxo de material), controlador lógico programável e supervisório.',
    detalhamento: [
      "Tanques de alimentação em aço inox, chapa 3/16'', com visor de nível e sensores de nível capacitivos",
      "Trocadores de calor em aço inox AISI 304, chapa 3/16'', 32 tubos BWG, vedação com papelão hidráulico, destinados a compreensão de aquecimento e resfriamento",
      'Aquecedor em aço inox AISI 316 com resistência interna de 2kW',
      'Trocador em acrílico, destinado a compreensão de fluxo de corrente e mecânica construtiva',
      'Tubulação em acrílico destinado a compreensão de fluxo de material e funcionamento de válvulas de controle (válvula borboleta)',
      'Tubulação SCH40, pintura epóxi de acordo com normas industriais',
      'Bombas centrífugas de 1/2 c.v. destinadas ao transporte de fluídos no sistema',
      'Torre de refrigeração modular',
      'Indicador de pressão tipo Bourbon',
      'Inversores de frequência',
      'CLP – Controlador lógico Programável',
      'Supervisório em plataforma SCADA',
      'Sensores de Pressão tipo Termopar J',
      'Estrutura em aço carbono com rodízios',
      'POP (Procedimento operacional padrão).'],
    croqui: 'equipamentos/sist-troca-term2/crq_sist-troca-term2.png',
    img: [''],
    vr: ''
  },
  {
    ID: 'unidade-tratamento1',
    navlink: 'Unidade de Tratamento',
    titulo: 'ESTAÇÃO DE TRATAMENTO DE ÁGUA E ESGOTO – ETE/ETA',
    descricao:
      'A água é um dos recursos naturais mais importantes em nosso planeta. A correta compreensão entre suas propriedades químicas é de suma importância ao correto manuseios desta substância química. A água é encontrada em oceanos, lagos e no subsolo. No entanto, nem toda a água encontra-se em condições de consumo ao ser humano. Para que a mesma esteja em condições de serem consumidas é necessário que passe por uma serie de etapas físico-químicas. Nestas etapas ocorre a remoção de impurezas que são extremamente prejudiciais à saúde humana.',
    funcionamento:
      'Na unidade, o processo de tratamento utiliza processos físicos e químicos para que a água adquira as propriedades desejadas que a tornem própria para o consumo. A estação utilizam grandes formas para deter impurezas maiores como vegetais, depois disso a água segue para uma etapa de floculação quando, através de agentes químicos como o sulfato de alumínio, as partículas de sujeira se aglomeram para em seguida decantarem no fundo de um tanque. <br> Posteriormente, a água passa por uma etapa de filtração, passando através de filtros compostos por carvão, areia e cascalho. Ao final, recebe aditivos químicos os quais corrigem a acidez da água, o cloro que age como desinfetante e o flúor que é adicionado para reduzir o problema de cáries na população.',
    detalhamento: [
      'Tanque de alimentação em aço inox, 80 Litros',
      'Medidor de Venturi',
      'Filtro de areia',
      'Sistema de gradeamento em aço inox',
      'Floculador',
      'Sistema de cloração',
      'Bomba centrifuga com motor de 3/4 c.v.',
      'POP – Procedimento Operacional Padrão.'],
    croqui: 'equipamentos/unidade-tratamento1/crq_unidade-tratamento1.png',
    img: [''],
    vr: ''
  }
]

export default equipamentos
