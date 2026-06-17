const produtos = [
  // --- CALÇADOS ---
  { id: 1,  nome: "Tênis Keds Floral",           categoria: "Calçados",  preco: 12.90, precoStr: "R$ 12,90",  tamanho: "34",         img: "images/produto_01.jpg", desc: "Tênis Floral Keds, modelo clássico com estampa floral miúda e delicada em tons de vermelho, verde e cinza. Possui amarração por cadarço branco, ilhoses brancas e a etiqueta vermelha da marca na lingueta." },
  { id: 2,  nome: "Rasteira anabela laranja",               categoria: "Calçados",  preco: 39.99, precoStr: "R$ 39,99",  tamanho: "39",         img: "images/produto_02.jpg", desc: "Rasteira anabela com uma tira frontal larga em textura trançada de corda laranja vibrante. Possui palmilha bege com contorno alaranjado, tira traseira de suporte e salto plano com acabamento texturizado." },
  { id: 3,  nome: "Tênis Esportivo da Nike",                categoria: "Calçados",  preco: 40.00, precoStr: "R$ 30,90",  tamanho: "34",         img: "images/produto_04.jpg", desc: "Tênis Esportivo Nike, modelo de corrida, esbranquiçado com detalhes em rosa e amarelo neon. Destaca-se pelo logotipo prata metalizado, cadarços brancos com ponteiras limão e uma entressola com amortecimento." },
  { id: 4,  nome: "Tênis feminino prata",          categoria: "Calçados",  preco: 30.99, precoStr: "R$ 30,99",  tamanho: "39",         img: "images/produto_06.jpg", desc: "Tênis Prata Metalizado, modelo casual com acabamento sintético prata espelhado e costuras em matelassê acolchoado nas laterais. Apresenta bico arredondado, cadarços cinzas e solado reto emborrachado na cor branca." },
  { id: 5,  nome: "Tênis esportivo masculino azul marinho",            categoria: "Calçados",  preco: 30.90, precoStr: "R$ 30,90",  tamanho: "38",         img: "images/produto_09.jpg", desc: "Tênis Esportivo Nike, com texturas em degradê. Conta com ajuste por cabos nas laterais, cadarço oval na mesma cor e o logotipo da marca estampado na lingueta." },
  { id: 6,  nome: "Salto feminino marrom",              categoria: "Calçados",  preco: 99.90, precoStr: "R$ 99,90",  tamanho: "39",         img: "images/produto_11.jpg", desc: "Estilo mule com cabedal duplo em camurça marrom-café. Destaca-se pelas duas tiras largas com fivelas quadradas grossas em metal dourado e palmilha interna macia com a assinatura da marca." },
  { id: 7,  nome: "Chinelo masculino azul",               categoria: "Calçados",  preco: 16.00, precoStr: "R$ 16,00",  tamanho: "36/37",         img: "images/produto_13.jpg", desc: "Modelo slide clássico todo emborrachado na cor azul-marinho. Possui uma tira larga frontal com as três listras brancas da marca e palmilha anatômica texturizada com o logotipo Adidas em relevo no calcanhar." },
  { id: 8,  nome: "Salto anabela azul jeans",          categoria: "Calçados",  preco: 49.80, precoStr: "R$ 49,80",  tamanho: "39",         img: "images/produto_15.jpg", desc: "Modelo com cabedal em tecido azul-jean texturizado, trazendo um recorte central e aplicação de uma corrente plástica de elos grossos no mesmo tom. Tem palmilha caramelo e salto plataforma médio." },
  { id: 9,  nome: "Sandália masculina preta",          categoria: "Calçados",  preco: 39.90, precoStr: "R$ 39,90",  tamanho: "24",         img: "images/produto_17.jpg", desc: "Modelo slide na cor preta, feito em material emborrachado. Traz o rosto do personagem Mickey Mouse aplicado em relevo na tira frontal e conta com uma fita elástica cinza na parte de trás para evitar que saia do pé." },
  { id: 10, nome: "Sandália feminina infantil branca",              categoria: "Calçados",  preco: 29.99, precoStr: "R$ 29,99",  tamanho: "24",         img: "images/produto_19.jpg", desc: "Sandália Infantil estilo papete para crianças. É estruturada com duas tiras largas horizontais acolchoadas que se ajustam por velcro e uma tira traseira elástica para sustentação do calcanhar sobre a palmilha texturizada." },
  { id: 11, nome: "Salto com detalhes em brilho",        categoria: "Calçados",  preco: 39.90, precoStr: "R$ 39,90",  tamanho: "34",         img: "images/produto_21.jpg", desc: "Salto bloco médio na cor nude/bege claro. O cabedal é formado por três tiras finas e arredondadas paralelas, todas revestidas com strass brilhante de tamanho miúdo." },
  { id: 12, nome: "Bota vermelho bordô",             categoria: "Calçados",  preco: 159.90, precoStr: "R$ 159,90",  tamanho: "39",         img: "images/produto_23.jpg", desc: "Bota de cano curto, em tricô (malha encorpada) na cor vinho/marsala. Tem bico fino, salto, e um detalhe de tira decorativa com botão dourado na lateral externa do cano." },
  { id: 13, nome: "Scarpin",          categoria: "Calçados",  preco: 35.00, precoStr: "R$ 35,00",  tamanho: "38",         img: "images/produto_26.jpg", desc: "Tênis chunky de solado robusto estilo anos 90, cor branca com detalhes em relevo. Tendência que não sai de moda — transforma qualquer look básico em algo fashion." },
  { id: 14, nome: "Tênis feminino bebecê rosê",              categoria: "Calçados",  preco: 30.00, precoStr: "R$ 30,00",  tamanho: "38",         img: "images/produto_28.jpg", desc: "Modelo na cor nude/rosê, prático e versátil, perfeito para compor looks casuais e modernos. Possui solado leve e confortável, ideal para passeios, trabalho ou rotina diária." },
  { id: 15, nome: "Tênis feminino bebecê preto",           categoria: "Calçados",  preco: 20.00, precoStr: "R$ 20,00",  tamanho: "35",         img: "images/produto_58.jpg", desc: "Material sintético com acabamento elegante e confortável. Modelo clássico, resistente e em ótimo estado." },
  // { id: 16, nome: "Sandália Plataforma",          categoria: "Calçados",  preco: 58.00, precoStr: "R$ 58,00",  tamanho: "36",         img: "images/produto_16.jpg", desc: "Sandália plataforma com salto e base elevados, que alongam a silhueta sem desconforto. Design moderno para looks de festival, passeio e noite." },
  // { id: 17, nome: "Bota Cano Curto",              categoria: "Calçados",  preco: 95.00, precoStr: "R$ 95,00",  tamanho: "37",         img: "images/produto_17.jpg", desc: "Bota de cano curto em material resistente com salto bloco e bico fino. Perfeita para o outono-inverno, combina com calças skinny, saias midi e vestidos." },
  // { id: 18, nome: "Sandália Mickey",              categoria: "Calçados",  preco: 28.00, precoStr: "R$ 28,00",  tamanho: "Infantil 26", img: "images/produto_18.jpg", desc: "Sandália infantil temática com estampa do Mickey Mouse na tira e na palmilha. Resistente, fácil de calçar e super fofa para os pequenos aventureiros." },
  // { id: 19, nome: "Tênis Slip On",                categoria: "Calçados",  preco: 45.00, precoStr: "R$ 45,00",  tamanho: "36",         img: "images/produto_19.jpg", desc: "Tênis slip on sem cadarço, com elástico lateral para calçar em segundos. Leve, confortável e estiloso — praticidade máxima para o dia a dia agitado." },
  // { id: 20, nome: "Sandália Infantil Mickey",     categoria: "Calçados",  preco: 25.00, precoStr: "R$ 25,00",  tamanho: "Infantil 28", img: "images/produto_20.jpg", desc: "Sandália infantil Mickey Mouse com velcro ajustável e solado antiderrapante. Resistente e divertida — a criançada vai adorar usar todos os dias." },
  // { id: 21, nome: "Mocassim Marrom",              categoria: "Calçados",  preco: 60.00, precoStr: "R$ 60,00",  tamanho: "37",         img: "images/produto_21.jpg", desc: "Mocassim marrom de couro ou sintético com costura decorativa característica. Versátil e elegante — transita entre o casual e o formal com muito charme." },

  // --- BLUSAS ---
  { id: 22, nome: "Blusa Listrada Tricot",        categoria: "Blusas",    preco: 42.00, precoStr: "R$ 42,00",  tamanho: "M",          img: "images/produto_22.jpg", desc: "Blusa de tricot listrada nas cores bege e azul marinho, com costela no barrado e na gola. Quentinha, estruturada e super elegante para o inverno." },
  { id: 23, nome: "Blusa Floral Manga Longa",     categoria: "Blusas",    preco: 35.00, precoStr: "R$ 35,00",  tamanho: "P",          img: "images/produto_23.jpg", desc: "Blusa de tecido leve em estampa floral colorida, manga longa com barrado reto. Feminina e romântica, ideal para o dia a dia ou passeios em dias amenos." },
  { id: 24, nome: "Cropped Ombro a Ombro",        categoria: "Blusas",    preco: 28.00, precoStr: "R$ 28,00",  tamanho: "P/M",        img: "images/produto_24.jpg", desc: "Cropped com decote ombro a ombro em tecido leve e elástico. Versátil e moderno — combina com saia midi, calça de cintura alta ou short jeans." },
  { id: 25, nome: "Camisa Social Branca",         categoria: "Blusas",    preco: 40.00, precoStr: "R$ 40,00",  tamanho: "M",          img: "images/produto_25.jpg", desc: "Camisa social em tecido branco liso de toque macio, com botões frontais e colarinho clássico. Perfeita para looks formais ou casuais — dentro ou fora da calça." },
  { id: 26, nome: "Blusa de Viscose Rosa",        categoria: "Blusas",    preco: 30.00, precoStr: "R$ 30,00",  tamanho: "M",          img: "images/produto_26.jpg", desc: "Blusa de viscose em tom rosinha suave com caimento fluido e toque sedoso. Leve e fresca para os dias quentes, com decote sutil e manga curta." },
  { id: 27, nome: "Camiseta Básica Preta",        categoria: "Blusas",    preco: 22.00, precoStr: "R$ 22,00",  tamanho: "M",          img: "images/produto_27.jpg", desc: "Camiseta básica preta de algodão com gola redonda e modelagem levemente relaxada. A peça coringa que qualquer guarda-roupa precisa — combina com absolutamente tudo." },
  { id: 28, nome: "Blusa Babado",                 categoria: "Blusas",    preco: 35.00, precoStr: "R$ 35,00",  tamanho: "P",          img: "images/produto_28.jpg", desc: "Blusa com babado frontal em camadas, tecido leve e fluido em tom claro. O babado confere volume no busto e um ar romântico e delicado ao visual." },
  { id: 29, nome: "Camiseta Estampada",           categoria: "Blusas",    preco: 25.00, precoStr: "R$ 25,00",  tamanho: "M",          img: "images/produto_29.jpg", desc: "Camiseta de algodão com estampa divertida na frente, modelagem regular e gola careca. Ideal para looks descontraídos de fim de semana ou passeios casuais." },
  { id: 30, nome: "Suéter Listrado Caramelo",     categoria: "Blusas",    preco: 55.00, precoStr: "R$ 55,00",  tamanho: "M",          img: "images/produto_30.jpg", desc: "Suéter de tricot listrado nas cores caramelo e azul escuro, de malha encorpada e modelagem oversized. Aconchegante e muito charmoso para o outono-inverno." },
  { id: 31, nome: "Blusa Renda Branca",           categoria: "Blusas",    preco: 32.00, precoStr: "R$ 32,00",  tamanho: "P",          img: "images/produto_31.jpg", desc: "Blusa branca com aplique ou painel em renda delicada, de toque suave e acabamento fino. Peça romântica que eleva looks casuais com elegância feminina." },
  { id: 32, nome: "Top Cropped Colorido",         categoria: "Blusas",    preco: 20.00, precoStr: "R$ 20,00",  tamanho: "P/M",        img: "images/produto_32.jpg", desc: "Top cropped em cor vibrante, tecido leve com elástico no barrado. Perfeito para compor looks despojados com saia, calça wide leg ou short no verão." },
  { id: 33, nome: "Camisa Xadrez Flanela",        categoria: "Blusas",    preco: 38.00, precoStr: "R$ 38,00",  tamanho: "M",          img: "images/produto_33.jpg", desc: "Camisa de flanela com estampa xadrez clássica em cores quentes. Tecido macio e encorpado, ideal para usar aberta sobre uma camiseta ou fechada no frio." },
  { id: 34, nome: "Blusa Ciganinha",              categoria: "Blusas",    preco: 28.00, precoStr: "R$ 28,00",  tamanho: "Único",      img: "images/produto_34.jpg", desc: "Blusa ciganinha com elástico na barra e no decote, de ombros livres e tecido fluido leve. Super tendência — combina com saia longa, calça ou shorts." },
  { id: 35, nome: "Regata Básica Branca",         categoria: "Blusas",    preco: 18.00, precoStr: "R$ 18,00",  tamanho: "M",          img: "images/produto_35.jpg", desc: "Regata branca clássica de algodão, com alças largas e caimento reto. Peça essencial que funciona sozinha nos dias quentes ou embaixo de blazers e kimonos." },
  { id: 36, nome: "Blusa Manga Bufante",          categoria: "Blusas",    preco: 36.00, precoStr: "R$ 36,00",  tamanho: "P",          img: "images/produto_36.jpg", desc: "Blusa com manga bufante franzida na cava e no punho, tecido leve e estruturado. Tendência retrô que confere um ar super feminino e sofisticado ao look." },
  { id: 37, nome: "Camiseta Oversized",           categoria: "Blusas",    preco: 30.00, precoStr: "R$ 30,00",  tamanho: "G",          img: "images/produto_37.jpg", desc: "Camiseta oversized de algodão com caimento amplo e ombros caídos. Estilo streetwear confortável e moderno — use com calça cigarrete ou short apertado." },
  { id: 38, nome: "Blusa Alcinha Seda",           categoria: "Blusas",    preco: 32.00, precoStr: "R$ 32,00",  tamanho: "P",          img: "images/produto_38.jpg", desc: "Blusa de alcinha fina em tecido cetim acetinado, com decote reto e caimento elegante. Perfeita para noites especiais ou como slip top sobreposto a blazer." },
  { id: 39, nome: "Cropped Tricot Branco",        categoria: "Blusas",    preco: 40.00, precoStr: "R$ 40,00",  tamanho: "P/M",        img: "images/produto_39.jpg", desc: "Cropped de tricot branco com costela fina, manga curta e acabamento no barrado. Leve e delicado, ideal para looks de primavera com saias ou calças de cintura alta." },
  { id: 40, nome: "Blusa Estampa Aquarela",       categoria: "Blusas",    preco: 34.00, precoStr: "R$ 34,00",  tamanho: "M",          img: "images/produto_40.jpg", desc: "Blusa de viscose com estampa em aquarela colorida — manchas suaves de rosa, azul e verde. Artística e feminina, para quem ama um look autoral e cheio de personalidade." },

  // --- CALÇAS E BERMUDAS ---
  { id: 41, nome: "Legging preta corino",           categoria: "Calças",    preco: 30.00, precoStr: "R$ 30,00",  tamanho: "M",         img: "images/produto_46.jpg", desc: "Calça modelo montaria em tecido cirre com acabamento que imita couro. Cintura alta com cós largo que modela e não marca. Tecido com ótimo stretch, veste super bem no corpo sem ficar transparente." },
  { id: 42, nome: "Calça jeans feminina verde escuro",              categoria: "Calças",    preco: 10.90, precoStr: "R$ 10,90",  tamanho: "44",          img: "images/produto_60.jpg", desc: "Calça skinny na cor verde militar. Modelagem que alonga e afina as pernas. Tecido com elastano que garante conforto pra usar o dia todo sem apertar." },
  { id: 43, nome: "Calça feminina Branca Alfaiataria",                 categoria: "Calças",    preco: 20.00, precoStr: "R$ 20,00",  tamanho: "40",         img: "images/produto_64.jpg", desc: "Calça pantalona em tecido de alfaiataria. Modelagem elegante com cintura alta e pernas amplas. Tecido encorpado que tem caimento perfeito e não marca o corpo." },
  { id: 44, nome: "Pantacourt de couro preto",          categoria: "Calças",    preco: 29.99, precoStr: "R$ 29,99",  tamanho: "GG",          img: "images/produto_66.jpg", desc: "Modelagem ampla, soltinha e super estilosa. Cintura alta com elástico embutido + cordão ajustável. A barra é mais curta, na altura da canela." },
  { id: 47, nome: "Bermuda masculina Xadrez",        categoria: "Calças",    preco: 12.00, precoStr: "R$ 12,00",  tamanho: "M",         img: "images/produto_44.jpg", desc: "bermuda masculina de estilo casual e despojado." },
  // { id: 48, nome: "Calça Cargo Verde",            categoria: "Calças",    preco: 65.00, precoStr: "R$ 65,00",  tamanho: "38",         img: "images/produto_48.jpg", desc: "Calça cargo verde musgo com múltiplos bolsos laterais e cós com cordão ajustável. Tendência do streetwear atual — combine com cropped e tênis chunky." },
  // { id: 51, nome: "Calça Social Preta",           categoria: "Calças",    preco: 55.00, precoStr: "R$ 55,00",  tamanho: "38",         img: "images/produto_51.jpg", desc: "Calça social preta de tecido encorpado em modelagem slim, com cós médio e barra reta. Versátil para o ambiente formal e casual — da reunião ao jantar." },
  // { id: 52, nome: "Bermuda Jeans",                categoria: "Calças",    preco: 35.00, precoStr: "R$ 35,00",  tamanho: "38",         img: "images/produto_52.jpg", desc: "Bermuda jeans na altura do joelho, lavagem clara e barra dobrada. Confortável e estilosa para o verão — combina com camisetas, regatas e tops casuais." },
  // { id: 54, nome: "Calça Wide Leg",               categoria: "Calças",    preco: 68.00, precoStr: "R$ 68,00",  tamanho: "38",         img: "images/produto_54.jpg", desc: "Calça wide leg de tecido fluido com perna larga e cós alto ajustado. Silhueta alongada e sofisticada — uma das tendências mais quentes da moda atual." },
  // { id: 55, nome: "Shorts Floral",                categoria: "Calças",    preco: 28.00, precoStr: "R$ 28,00",  tamanho: "P",          img: "images/produto_55.jpg", desc: "Shorts de tecido leve com estampa floral em tons alegres e femininos. Ideal para os dias quentes — combina com blusas simples, cropped ou camisa aberta." },
  // { id: 56, nome: "Calça Legging Preta",          categoria: "Calças",    preco: 30.00, precoStr: "R$ 30,00",  tamanho: "M",          img: "images/produto_56.jpg", desc: "Legging preta confeccionada em tecido elástico de alta resistência com leve brilho. Alia conforto e elasticidade — ideal para exercícios, yoga ou looks casuais do dia a dia." },

  // --- SAIAS ---
  { id: 45, nome: "Saia Jeans Azul",    categoria: "Saias",     preco: 35.00, precoStr: "R$ 35,00",  tamanho: "44",        img: "images/produto_70.jpg", desc: "Saia midi jeans modelo lápis com fenda frontal profunda. Peça nova, sem uso, com etiqueta da marca Camarote Jeans. Cintura alta que modela o corpo. Lavagem jeans média, atemporal e super fácil de combinar." },
  // { id: 46, nome: "Saia Floral Midi",             categoria: "Saias",     preco: 45.00, precoStr: "R$ 45,00",  tamanho: "P",          img: "images/produto_46.jpg", desc: "Saia midi com estampa floral em tecido leve e romantico, cós elástico e caimento suave. Linda com blusa básica e rasteirinha para o dia a dia." },
  // { id: 49, nome: "Saia Mini Xadrez",             categoria: "Saias",     preco: 32.00, precoStr: "R$ 32,00",  tamanho: "P",          img: "images/produto_49.jpg", desc: "Saia mini com estampa xadrez escolar em tons de preto e branco, com zíper lateral e caimento reto. Estilo colegial charmoso e divertido que combina com meia e bota." },
  // { id: 50, nome: "Saia Longa Plissada Off",      categoria: "Saias",     preco: 58.00, precoStr: "R$ 58,00",  tamanho: "Único",      img: "images/produto_50.jpg", desc: "Saia longa plissada em tom off-white com bordado delicado no cós elástico. Levíssima e sofisticada — combina com blusas de renda, cetim ou tricot." },
  // { id: 53, nome: "Saia Wrap Floral",             categoria: "Saias",     preco: 40.00, precoStr: "R$ 40,00",  tamanho: "Único",      img: "images/produto_53.jpg", desc: "Saia wrap (envelope) com estampa floral colorida, amarração lateral ajustável e comprimento midi. Caimento perfeito para todos os biotipos — versátil e feminina." },

  // --- NOVIDADES ---
  { id: 57, nome: "Mochila tira colo Preta",         categoria: "Vestidos",  preco: 15.90, precoStr: "R$ 15,90",  tamanho: "ajustável",          img: "images/produto_72.jpg", desc: "com entrada USB | alça ajustável." },
  { id: 58, nome: "Cinto feminino",        categoria: "Vestidos",  preco: 10.00, precoStr: "R$ 10,00",  tamanho: "G",          img: "images/produto_36.jpg", desc: "Animal print." },
  // { id: 59, nome: "Vestido de Festa",             categoria: "Vestidos",  preco: 90.00, precoStr: "R$ 90,00",  tamanho: "P",          img: "images/produto_59.jpg", desc: "Vestido de festa em tecido encorpado com acabamento refinado e caimento elegante. Perfeito para formaturas, casamentos e eventos especiais — uma peça única de brechó." },
  // { id: 60, nome: "Macacão Jeans",                categoria: "Vestidos",  preco: 80.00, precoStr: "R$ 80,00",  tamanho: "M",          img: "images/produto_60.jpg", desc: "Macacão jeans em lavagem média com alças ajustáveis e botões frontais. Peça moderna e coringa que funciona com tênis, sapatilha ou sandália." },
  // { id: 61, nome: "Vestido Xadrez Mini",          categoria: "Vestidos",  preco: 55.00, precoStr: "R$ 55,00",  tamanho: "P",          img: "images/produto_61.jpg", desc: "Vestido mini com estampa xadrez em tecido levinho, manga longa e gola V. Estilo vintage revivido — combine com meia calça e bota para um look outono perfeito." },
  // { id: 62, nome: "Conjunto Cropped + Saia",      categoria: "Vestidos",  preco: 70.00, precoStr: "R$ 70,00",  tamanho: "P",          img: "images/produto_62.jpg", desc: "Conjunto coordenado com cropped e saia midi em tecido de mesma estampa. Compre o look completo pronto — só veste e sai arrasando, sem esforço nenhum." },
  // { id: 63, nome: "Vestido Slip Dress",           categoria: "Vestidos",  preco: 60.00, precoStr: "R$ 60,00",  tamanho: "P/M",        img: "images/produto_63.jpg", desc: "Slip dress em tecido acetinado com alças finas e caimento reto elegante. Pode ser usado sozinho ou sobreposto a uma camisa branca aberta — tendência que nunca sai de moda." },
  // { id: 64, nome: "Vestido Casual Verão",         categoria: "Vestidos",  preco: 50.00, precoStr: "R$ 50,00",  tamanho: "M",          img: "images/produto_64.jpg", desc: "Vestido casual de verão em tecido leve com estampa discreta e modelagem soltinha. Fresco e confortável para o dia a dia quente — do mercado ao passeio." },
  // { id: 65, nome: "Vestido Alfaiataria Branco",   categoria: "Vestidos",  preco: 85.00, precoStr: "R$ 85,00",  tamanho: "P",          img: "images/produto_65.jpg", desc: "Vestido estilo alfaiataria branco com modelagem estruturada, cós marcado e ombros retos. Clean, sofisticado e atemporal — para quem valoriza elegância minimalista." },
  // { id: 66, nome: "Macacão Curto Floral",         categoria: "Vestidos",  preco: 62.00, precoStr: "R$ 62,00",  tamanho: "P",          img: "images/produto_66.jpg", desc: "Macacão curto com estampa floral em tecido leve e alças finas. Um achado de brechó — fresh e feminino para o verão, combinando com sandálias ou rasteirinhas." },
  // { id: 67, nome: "Vestido Midi Floral",          categoria: "Vestidos",  preco: 68.00, precoStr: "R$ 68,00",  tamanho: "M",          img: "images/produto_67.jpg", desc: "Vestido midi com estampa floral moderna em tecido de viscose, com cós definido e saia rodada. Combina com tênis branco ou sandália de tira para um look completo." },
  // { id: 68, nome: "Conjunto de Linho",            categoria: "Vestidos",  preco: 88.00, precoStr: "R$ 88,00",  tamanho: "M",          img: "images/produto_68.jpg", desc: "Conjunto de linho bege com camisa de botões e calça pantalona. Elegante, fresco e sofisticado para dias quentes — estilo mediterrâneo de dar inveja." },
  // { id: 69, nome: "Vestido Rodado Estampado",     categoria: "Vestidos",  preco: 58.00, precoStr: "R$ 58,00",  tamanho: "M",          img: "images/produto_69.jpg", desc: "Vestido rodado com estampa alegre e colorida, tecido levinho que gira com o movimento. Feminino e cheio de vida — perfeito para festas ao ar livre e passeios." },
  // { id: 70, nome: "Macacão Jeans Curto",          categoria: "Vestidos",  preco: 72.00, precoStr: "R$ 72,00",  tamanho: "38",         img: "images/produto_70.jpg", desc: "Macacão jeans curto com botões frontais e alças reguláveis. Cool e descolado — use com cropped por baixo ou apenas uma blusa básica para um look completo." },

  // --- AGASALHOS E JAQUETAS ---
  { id: 71, nome: "Casaco feminino de tricot",        categoria: "Agasalhos", preco: 19.90, precoStr: "R$ 19,90",  tamanho: "P",        img: "images/produto_33.jpg", desc: "casaco estilo cardigan, confeccionado em tricô leve com uma trama aberta e texturizada." },
  { id: 72, nome: "Cachecol feminino",       categoria: "Agasalhos", preco: 10.00, precoStr: "R$ 10,00",  tamanho: "livre",          img: "images/produto_34.jpg", desc: "Cores: Rosa, verde, musgo e roxo" },
  { id: 73, nome: "Casaco masculino Flanela",           categoria: "Agasalhos", preco: 30.00, precoStr: "R$ 30,00",  tamanho: "M",          img: "images/produto_38.jpg", desc: "casaco masculino de flanela, tecido caracteristicamente macio e aquecido." },
  { id: 74, nome: "Touca de tricot",           categoria: "Agasalhos", preco: 9.90, precoStr: "R$ 9,90",  tamanho: "P/M",          img: "images/produto_47.jpg", desc: "Tons de bege e branco." },
  { id: 75, nome: "Casaco feminino",      categoria: "Agasalhos", preco: 15.90, precoStr: "R$ 15,90",  tamanho: "M",          img: "images/produto_78.jpg", desc: "Jaqueta esportiva leve. Corta-vento com moletom fino." },
  // { id: 76, nome: "Cardigan Longo Cinza",         categoria: "Agasalhos", preco: 60.00, precoStr: "R$ 60,00",  tamanho: "Único",      img: "images/produto_76.jpg", desc: "Cardigan longo aberto em tricot cinza mescla, manga comprida e caimento amplo. Aconchegante e versátil para sobrepor a qualquer look no outono e inverno." },
  // { id: 77, nome: "Blazer Xadrez Vintage",        categoria: "Agasalhos", preco: 78.00, precoStr: "R$ 78,00",  tamanho: "M",          img: "images/produto_77.jpg", desc: "Blazer com estampa xadrez clássica em tecido encorpado, estilo vintage dos anos 90. Peça única com muito caráter — para quem quer se destacar com personalidade." },
  // { id: 78, nome: "Jaqueta Corta Vento",          categoria: "Agasalhos", preco: 65.00, precoStr: "R$ 65,00",  tamanho: "M",          img: "images/produto_78.jpg", desc: "Jaqueta corta-vento leve em nylon com capuz embutido e zíper duplo. Prática para dias nublados, caminhadas ao ar livre e viagens — dobra e cabe na bolsa." },
  // { id: 79, nome: "Moletom Cropped Colorido",     categoria: "Agasalhos", preco: 48.00, precoStr: "R$ 48,00",  tamanho: "P/M",        img: "images/produto_79.jpg", desc: "Moletom cropped em cor vibrante com gola redonda e punhos canelados. Tendência streetwear — combine com calça cargo, legging ou short de cintura alta." },
  // { id: 80, nome: "Colete Tricot",                categoria: "Agasalhos", preco: 52.00, precoStr: "R$ 52,00",  tamanho: "P/M",        img: "images/produto_80.jpg", desc: "Colete de tricot sem mangas com costela fina e decote V, em tom neutro e atemporal. Prático para sobrepor a camisetas e blusas — estilo e calor na medida certa." },
];

const categorias = ["Todos", "Calçados", "Blusas", "Calças", "Saias", "Vestidos", "Agasalhos"];

// ============================================
// CARRINHO
// ============================================
let carrinho = JSON.parse(localStorage.getItem('elis_carrinho') || '[]');

function salvarCarrinho() {
  localStorage.setItem('elis_carrinho', JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id) {
  const prod = produtos.find(p => p.id === id);
  if (!prod) return;
  const existente = carrinho.find(i => i.id === id);
  if (existente) {
    existente.qtd++;
  } else {
    carrinho.push({ ...prod, qtd: 1 });
  }
  salvarCarrinho();
  atualizarBadgeCarrinho();
  mostrarToast(`✓ ${prod.nome} adicionado ao carrinho!`);
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(i => i.id !== id);
  salvarCarrinho();
  atualizarBadgeCarrinho();
  renderizarCarrinho();
}

function limparCarrinho() {
  carrinho = [];
  salvarCarrinho();
  atualizarBadgeCarrinho();
  renderizarCarrinho();
}

function totalCarrinho() {
  return carrinho.reduce((sum, i) => sum + i.preco * i.qtd, 0);
}

function atualizarBadgeCarrinho() {
  const qtd = carrinho.reduce((sum, i) => sum + i.qtd, 0);
  const badges = document.querySelectorAll('.carrinho-badge');
  badges.forEach(b => {
    b.textContent = qtd;
    b.style.display = qtd > 0 ? 'flex' : 'none';
  });
}

function renderizarCarrinho() {
  const itensEl = document.getElementById('carrinho-itens');
  const totalEl = document.getElementById('carrinho-total-valor');
  if (!itensEl) return;

  if (carrinho.length === 0) {
    itensEl.innerHTML = `
      <div class="carrinho-vazio">
        <div class="icone-sacola">🛍️</div>
        <p>Seu carrinho está vazio.<br>Adicione peças que você amou!</p>
      </div>`;
    if (totalEl) totalEl.textContent = 'R$ 0,00';
    return;
  }

  itensEl.innerHTML = carrinho.map(item => `
    <div class="carrinho-item">
      <img src="${item.img}" alt="${item.nome}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2270%22 height=%2270%22><rect fill=%22%23f0ede5%22 width=%2270%22 height=%2270%22/><text x=%2250%25%22 y=%2255%25%22 font-size=%2224%22 text-anchor=%22middle%22>👗</text></svg>'">
      <div class="carrinho-item-info">
        <h4>${item.nome}</h4>
        <p class="item-tam">📏 ${item.tamanho} · Qtd: ${item.qtd}</p>
        <p class="item-preco">${item.precoStr}</p>
      </div>
      <button class="btn-remover-item" onclick="removerDoCarrinho(${item.id})" title="Remover">✕</button>
    </div>
  `).join('');

  if (totalEl) {
    totalEl.textContent = totalCarrinho().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}

function abrirCarrinho() {
  renderizarCarrinho();
  document.getElementById('carrinho-overlay').classList.add('active');
  document.getElementById('carrinho-drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function fecharCarrinho() {
  document.getElementById('carrinho-overlay').classList.remove('active');
  document.getElementById('carrinho-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================
// AUTENTICAÇÃO
// ============================================
let usuarioLogado = JSON.parse(localStorage.getItem('elis_usuario') || 'null');

function login(nome, email, senha) {
  const usuarios = JSON.parse(localStorage.getItem('elis_usuarios') || '[]');
  const user = usuarios.find(u => u.email === email && u.senha === senha);
  if (!user) return false;
  usuarioLogado = { nome: user.nome, email: user.email };
  localStorage.setItem('elis_usuario', JSON.stringify(usuarioLogado));
  atualizarNavUsuario();
  return true;
}

function cadastrar(nome, email, senha) {
  const usuarios = JSON.parse(localStorage.getItem('elis_usuarios') || '[]');
  if (usuarios.find(u => u.email === email)) return false;
  usuarios.push({ nome, email, senha });
  localStorage.setItem('elis_usuarios', JSON.stringify(usuarios));
  usuarioLogado = { nome, email };
  localStorage.setItem('elis_usuario', JSON.stringify(usuarioLogado));
  atualizarNavUsuario();
  return true;
}

function logout() {
  usuarioLogado = null;
  localStorage.removeItem('elis_usuario');
  atualizarNavUsuario();
  mostrarToast('Você saiu da sua conta.');
}

function atualizarNavUsuario() {
  const btnLogin = document.getElementById('btn-login-nav');
  const userAvatar = document.getElementById('user-avatar');
  if (!btnLogin) return;

  if (usuarioLogado) {
    btnLogin.style.display = 'none';
    if (userAvatar) {
      userAvatar.style.display = 'flex';
      userAvatar.textContent = usuarioLogado.nome.charAt(0).toUpperCase();
      userAvatar.title = `${usuarioLogado.nome} — Clique para sair`;
    }
  } else {
    btnLogin.style.display = 'flex';
    if (userAvatar) userAvatar.style.display = 'none';
  }
}

function abrirAuth(aba) {
  const overlay = document.getElementById('auth-overlay');
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (aba) trocarAba(aba);
}

function fecharAuth() {
  document.getElementById('auth-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function trocarAba(aba) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-form-section').forEach(s => s.style.display = 'none');
  document.querySelector(`.auth-tab[data-aba="${aba}"]`).classList.add('active');
  document.getElementById(`form-${aba}`).style.display = 'flex';
}

// ============================================
// CHECKOUT
// ============================================
let metodoPagamento = 'pix';

function abrirCheckout() {
  if (carrinho.length === 0) { mostrarToast('Carrinho vazio!'); return; }
  fecharCarrinho();
  const overlay = document.getElementById('checkout-overlay');
  if (!overlay) return;
  renderizarResumoCheckout();
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function fecharCheckout() {
  document.getElementById('checkout-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function renderizarResumoCheckout() {
  const el = document.getElementById('checkout-resumo-itens');
  if (!el) return;
  el.innerHTML = carrinho.map(i => `
    <div class="checkout-resumo-item">
      <span>${i.nome} (${i.tamanho}) x${i.qtd}</span>
      <span>${(i.preco * i.qtd).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
    </div>
  `).join('') + `
    <div class="checkout-resumo-total">
      <span>Total</span>
      <span>${totalCarrinho().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
    </div>`;
}

function selecionarMetodo(metodo) {
  metodoPagamento = metodo;
  document.querySelectorAll('.metodo-btn').forEach(b => {
    b.classList.toggle('selecionado', b.dataset.metodo === metodo);
  });
  const cartaoForm = document.getElementById('cartao-form');
  if (cartaoForm) cartaoForm.style.display = metodo === 'cartao' ? 'flex' : 'none';
}

function finalizarPedido() {
  const nome = document.getElementById('checkout-nome')?.value.trim();
  const tel = document.getElementById('checkout-tel')?.value.trim();
  if (!nome || !tel) { mostrarToast('Preencha seu nome e telefone!'); return; }

  const itensTxt = carrinho.map(i => `${i.nome} (${i.tamanho}) x${i.qtd} - ${i.precoStr}`).join('\n');
  const total = totalCarrinho().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  fecharCheckout();
  limparCarrinho();

  const msg = encodeURIComponent(
    `Olá! Gostaria de finalizar meu pedido no Achadinhos da Elis! 🛍️\n\n` +
    `*Nome:* ${nome}\n*Telefone:* ${tel}\n\n*Itens:*\n${itensTxt}\n\n` +
    `*Total: ${total}*\n*Pagamento:* ${metodoPagamento.toUpperCase()}\n\nObrigada! 💕`
  );
  setTimeout(() => {
    window.open(`https://wa.me/55?text=${msg}`, '_blank');
  }, 300);

  mostrarToast('🎉 Pedido enviado! Redirecionando para o WhatsApp...');
}

// ============================================
// MODAL PRODUTO
// ============================================
function criarModal() {
  if (document.getElementById('produto-modal')) return;
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'produto-modal';
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <img class="modal-img" src="" alt="" id="modal-img" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22320%22 height=%22380%22><rect fill=%22%23f0ede5%22 width=%22320%22 height=%22380%22/><text x=%2250%25%22 y=%2255%25%22 font-size=%2264%22 text-anchor=%22middle%22>👗</text></svg>'">
      <div class="modal-body">
        <p class="modal-categoria" id="modal-cat"></p>
        <h2 id="modal-nome"></h2>
        <p class="modal-preco" id="modal-preco"></p>
        <p class="modal-desc" id="modal-desc"></p>
        <p class="modal-tamanho" id="modal-tam"></p>
        <button class="btn-add-cart-modal" id="modal-btn-cart">🛒 Adicionar ao Carrinho</button>
        <button class="btn-fechar-modal" onclick="fecharModal()">Fechar</button>
      </div>
      <button class="modal-fechar" onclick="fecharModal()" aria-label="Fechar">&times;</button>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) fecharModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharModal(); });
}

let modalProdutoAtualId = null;
function abrirModal(id) {
  const prod = produtos.find(p => p.id === id);
  if (!prod) return;
  modalProdutoAtualId = id;
  document.getElementById('modal-img').src = prod.img;
  document.getElementById('modal-img').alt = prod.nome;
  document.getElementById('modal-cat').textContent = prod.categoria;
  document.getElementById('modal-nome').textContent = prod.nome;
  document.getElementById('modal-preco').textContent = prod.precoStr;
  document.getElementById('modal-desc').textContent = prod.desc;
  document.getElementById('modal-tam').textContent = `📏 Tamanho: ${prod.tamanho}`;
  document.getElementById('modal-btn-cart').onclick = () => {
    adicionarAoCarrinho(id);
    fecharModal();
  };
  document.getElementById('produto-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  const m = document.getElementById('produto-modal');
  if (m) { m.classList.remove('active'); document.body.style.overflow = ''; }
}

// ============================================
// CARD DE PRODUTO
// ============================================
function criarCardProduto(prod) {
  const div = document.createElement('div');
  div.className = 'produto-card';
  div.dataset.categoria = prod.categoria;
  div.innerHTML = `
    <img class="produto-img" src="${prod.img}" alt="${prod.nome}" loading="lazy"
      onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22220%22 height=%22220%22><rect fill=%22%23f0ede5%22 width=%22220%22 height=%22220%22/><text x=%2250%25%22 y=%2255%25%22 font-size=%2248%22 text-anchor=%22middle%22>👗</text></svg>'">
    <div class="produto-info">
      <p class="produto-categoria">${prod.categoria}</p>
      <h3>${prod.nome}</h3>
      <p class="produto-preco">${prod.precoStr}</p>
      <p class="produto-tamanho">📏 ${prod.tamanho}</p>
      <div class="produto-acoes">
        <button class="btn-ver" onclick="abrirModal(${prod.id})">Ver detalhes</button>
        <button class="btn-add-cart" onclick="adicionarAoCarrinho(${prod.id})">🛒 Comprar</button>
      </div>
    </div>`;
  return div;
}

// ============================================
// DESTAQUE (index)
// ============================================
function initDestaque() {
  const grid = document.getElementById('grid-destaque');
  if (!grid) return;
  produtos.slice(0, 8).forEach(prod => grid.appendChild(criarCardProduto(prod)));
}

// ============================================
// CATÁLOGO — com filtro, busca, ordenação e contagem
// ============================================
let categoriaAtiva = 'Todos';
let termoBusca = '';
let ordemAtiva = 'padrao';

function initCatalogo() {
  const grid = document.getElementById('grid-catalogo');
  if (!grid) return;
  criarFiltros();
  renderizarCatalogo();

  // Busca
  const input = document.getElementById('busca-input');
  if (input) {
    input.addEventListener('input', e => {
      termoBusca = e.target.value.toLowerCase().trim();
      renderizarCatalogo();
    });
  }

  // Ordenação
  const select = document.getElementById('ordenar-select');
  if (select) {
    select.addEventListener('change', e => {
      ordemAtiva = e.target.value;
      renderizarCatalogo();
    });
  }
}

function criarFiltros() {
  const bar = document.getElementById('filtros-bar');
  if (!bar) return;
  categorias.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filtro-btn' + (cat === 'Todos' ? ' ativo' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      categoriaAtiva = cat;
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
      renderizarCatalogo();
    });
    bar.appendChild(btn);
  });
}

function renderizarCatalogo() {
  const grid = document.getElementById('grid-catalogo');
  const sem = document.getElementById('sem-resultados');
  const contagem = document.getElementById('contagem-resultados');
  if (!grid) return;
  grid.innerHTML = '';

  let filtrados = produtos.filter(p => {
    const matchCat = categoriaAtiva === 'Todos' || p.categoria === categoriaAtiva;
    const matchBusca = p.nome.toLowerCase().includes(termoBusca) ||
                       p.categoria.toLowerCase().includes(termoBusca) ||
                       p.desc.toLowerCase().includes(termoBusca);
    return matchCat && matchBusca;
  });

  // Ordenação
  if (ordemAtiva === 'menor') {
    filtrados.sort((a, b) => a.preco - b.preco);
  } else if (ordemAtiva === 'maior') {
    filtrados.sort((a, b) => b.preco - a.preco);
  } else if (ordemAtiva === 'az') {
    filtrados.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  }

  // Contagem
  if (contagem) {
    contagem.textContent = filtrados.length === 0
      ? 'Nenhuma peça encontrada'
      : `${filtrados.length} peça${filtrados.length !== 1 ? 's' : ''} encontrada${filtrados.length !== 1 ? 's' : ''}`;
  }

  if (filtrados.length === 0) {
    if (sem) sem.style.display = 'block';
  } else {
    if (sem) sem.style.display = 'none';
    filtrados.forEach(p => grid.appendChild(criarCardProduto(p)));
  }
}

// ============================================
// NAVBAR + HAMBURGER
// ============================================
function initNavbar() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }
  const pg = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === pg || (pg === '' && href === 'index.html')) link.classList.add('active');
  });
}

// ============================================
// TOAST
// ============================================
function mostrarToast(msg) {
  let toast = document.getElementById('toast-global');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.id = 'toast-global';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  criarModal();
  initDestaque();
  initCatalogo();
  atualizarBadgeCarrinho();
  atualizarNavUsuario();

  // Carrinho
  const btnCart = document.getElementById('btn-carrinho');
  if (btnCart) btnCart.addEventListener('click', abrirCarrinho);
  const carrinhoOverlay = document.getElementById('carrinho-overlay');
  if (carrinhoOverlay) carrinhoOverlay.addEventListener('click', fecharCarrinho);
  const btnFecharCarrinho = document.getElementById('btn-fechar-carrinho');
  if (btnFecharCarrinho) btnFecharCarrinho.addEventListener('click', fecharCarrinho);
  const btnLimpar = document.getElementById('btn-limpar-carrinho');
  if (btnLimpar) btnLimpar.addEventListener('click', limparCarrinho);
  const btnCheckout = document.getElementById('btn-checkout');
  if (btnCheckout) btnCheckout.addEventListener('click', abrirCheckout);

  // Auth
  const btnLoginNav = document.getElementById('btn-login-nav');
  if (btnLoginNav) btnLoginNav.addEventListener('click', () => abrirAuth('login'));
  const userAvatar = document.getElementById('user-avatar');
  if (userAvatar) userAvatar.addEventListener('click', logout);
  const authOverlay = document.getElementById('auth-overlay');
  if (authOverlay) authOverlay.addEventListener('click', e => { if (e.target === authOverlay) fecharAuth(); });
  const btnFecharAuth = document.getElementById('btn-fechar-auth');
  if (btnFecharAuth) btnFecharAuth.addEventListener('click', fecharAuth);
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => trocarAba(tab.dataset.aba));
  });

  // Form Login
  const formLogin = document.getElementById('form-login');
  if (formLogin) {
    formLogin.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const senha = document.getElementById('login-senha').value;
      if (login('', email, senha)) {
        fecharAuth();
        mostrarToast(`Bem-vinda de volta, ${usuarioLogado.nome}! 💕`);
      } else {
        mostrarToast('E-mail ou senha incorretos. Tente novamente.');
      }
    });
  }

  // Form Cadastro
  const formCadastro = document.getElementById('form-cadastro');
  if (formCadastro) {
    formCadastro.addEventListener('submit', e => {
      e.preventDefault();
      const nome = document.getElementById('cad-nome').value;
      const email = document.getElementById('cad-email').value;
      const senha = document.getElementById('cad-senha').value;
      if (cadastrar(nome, email, senha)) {
        fecharAuth();
        mostrarToast(`Bem-vinda, ${nome}! Conta criada com sucesso! 🎉`);
      } else {
        mostrarToast('Este e-mail já está cadastrado. Tente fazer login.');
      }
    });
  }

  // Checkout
  const checkoutOverlay = document.getElementById('checkout-overlay');
  if (checkoutOverlay) {
    checkoutOverlay.addEventListener('click', e => { if (e.target === checkoutOverlay) fecharCheckout(); });
  }
  const btnFecharCheckout = document.getElementById('btn-fechar-checkout');
  if (btnFecharCheckout) btnFecharCheckout.addEventListener('click', fecharCheckout);
  document.querySelectorAll('.metodo-btn').forEach(btn => {
    btn.addEventListener('click', () => selecionarMetodo(btn.dataset.metodo));
  });
  const btnFinalizar = document.getElementById('btn-finalizar');
  if (btnFinalizar) btnFinalizar.addEventListener('click', finalizarPedido);

  // Filtro via URL (?cat=)
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    setTimeout(() => {
      const btns = document.querySelectorAll('.filtro-btn');
      btns.forEach(btn => { if (btn.textContent === cat) btn.click(); });
    }, 50);
  }
});
