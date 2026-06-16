const produtos = [
  // --- CALÇADOS (1-21) ---
  { id: 1,  nome: "Tênis Keds Floral",           categoria: "Calçados",  preco: 65.00, precoStr: "R$ 65,00",  tamanho: "35",         img: "images/produto_01.jpg", desc: "Tênis Keds modelo clássico com estampa floral miúda e delicada em tons variados. Possui amarração tradicional, solado em bom estado e acabamento confortável — perfeito para um look despojado e cheio de charme." },
  { id: 2,  nome: "Sapatilha Nude",               categoria: "Calçados",  preco: 35.00, precoStr: "R$ 35,00",  tamanho: "36",         img: "images/produto_02.jpg", desc: "Sapatilha clássica na cor nude/bege, de bico arredondado e bico fino. Versátil e confortável para o dia a dia, combina com calças, saias e vestidos de qualquer comprimento." },
  { id: 3,  nome: "Sandália Bege",                categoria: "Calçados",  preco: 40.00, precoStr: "R$ 40,00",  tamanho: "37",         img: "images/produto_03.jpg", desc: "Sandália bege com tira fina e acabamento delicado. Leve e ideal para o verão, combina com looks casuais e românticos — da praia ao almoço ao ar livre." },
  { id: 4,  nome: "Tênis Branco Casual",          categoria: "Calçados",  preco: 55.00, precoStr: "R$ 55,00",  tamanho: "37",         img: "images/produto_04.jpg", desc: "Tênis branco clássico de cano baixo, solado levinho e design limpo. Peça coringa que eleva qualquer look — de jeans e camiseta a vestidos florais." },
  { id: 5,  nome: "Sandália com Tira",            categoria: "Calçados",  preco: 45.00, precoStr: "R$ 45,00",  tamanho: "36",         img: "images/produto_05.jpg", desc: "Sandália com tira cruzada em material resistente, toque feminino e elegante. O design estruturado no tornozelo garante estabilidade sem abrir mão do estilo." },
  { id: 6,  nome: "Sapatilha Preta",              categoria: "Calçados",  preco: 30.00, precoStr: "R$ 30,00",  tamanho: "38",         img: "images/produto_06.jpg", desc: "Sapatilha preta básica de bico fino e solado plano. Indispensável no guarda-roupa feminino — vai do trabalho ao jantar sem esforço nenhum." },
  { id: 7,  nome: "Tênis Colorido",               categoria: "Calçados",  preco: 50.00, precoStr: "R$ 50,00",  tamanho: "36",         img: "images/produto_07.jpg", desc: "Tênis com detalhes coloridos vibrantes, solado branco e design descolado. Para quem quer injetar personalidade e energia no look do dia a dia." },
  { id: 8,  nome: "Chinelo Rasteirinha",          categoria: "Calçados",  preco: 20.00, precoStr: "R$ 20,00",  tamanho: "37",         img: "images/produto_08.jpg", desc: "Rasteirinha leve com palmilha confortável e tira fina. Ideal para os dias mais quentes — vai bem com vestidos, shorts e saias de qualquer comprimento." },
  { id: 9,  nome: "Sandália Gladiadora",          categoria: "Calçados",  preco: 48.00, precoStr: "R$ 48,00",  tamanho: "37",         img: "images/produto_09.jpg", desc: "Sandália estilo gladiadora com tiras que percorrem o tornozelo. Traz um ar poderoso e sofisticado ao look — combina lindamente com vestidos, saias midi e macaquinhos." },
  { id: 10, nome: "Tênis Nike Azul",              categoria: "Calçados",  preco: 90.00, precoStr: "R$ 90,00",  tamanho: "37",         img: "images/produto_10.jpg", desc: "Tênis Nike em azul marinho com logotipo clássico lateral. Modelo de corrida com solado acolchoado, confortável para caminhadas longas, treinos leves e composições esportivas urbanas." },
  { id: 11, nome: "Sapato de Salto Baixo",        categoria: "Calçados",  preco: 55.00, precoStr: "R$ 55,00",  tamanho: "36",         img: "images/produto_11.jpg", desc: "Sapato fechado com salto bloco baixo, discreto e elegante. Perfeito para ocasiões especiais ou o dia a dia no trabalho — confortável por horas sem perder a classe." },
  { id: 12, nome: "Sandália Dourada",             categoria: "Calçados",  preco: 42.00, precoStr: "R$ 42,00",  tamanho: "37",         img: "images/produto_12.jpg", desc: "Sandália dourada de tira fina com brilho acetinado. Eleva looks para festas, formaturas e jantares especiais — combina com preto, branco e verde esmeralda." },
  { id: 13, nome: "Tênis Chunky Branco",          categoria: "Calçados",  preco: 75.00, precoStr: "R$ 75,00",  tamanho: "36",         img: "images/produto_13.jpg", desc: "Tênis chunky de solado robusto estilo anos 90, cor branca com detalhes em relevo. Tendência que não sai de moda — transforma qualquer look básico em algo fashion." },
  { id: 14, nome: "Sapatilha Vinho",              categoria: "Calçados",  preco: 35.00, precoStr: "R$ 35,00",  tamanho: "38",         img: "images/produto_14.jpg", desc: "Sapatilha na cor vinho/marsala, de bico arredondado e acabamento sofisticado. Tom que valoriza composições outono-inverno e dá profundidade a qualquer visual." },
  { id: 15, nome: "Tênis Adidas Retrô",           categoria: "Calçados",  preco: 80.00, precoStr: "R$ 80,00",  tamanho: "37",         img: "images/produto_15.jpg", desc: "Tênis Adidas retrô branco com as três listras coloridas clássicas na lateral. Ícone do streetwear que combina com tudo — de calça cargo a vestido camiseta." },
  { id: 16, nome: "Sandália Plataforma",          categoria: "Calçados",  preco: 58.00, precoStr: "R$ 58,00",  tamanho: "36",         img: "images/produto_16.jpg", desc: "Sandália plataforma com salto e base elevados, que alongam a silhueta sem desconforto. Design moderno para looks de festival, passeio e noite." },
  { id: 17, nome: "Bota Cano Curto",              categoria: "Calçados",  preco: 95.00, precoStr: "R$ 95,00",  tamanho: "37",         img: "images/produto_17.jpg", desc: "Bota de cano curto em material resistente com salto bloco e bico fino. Perfeita para o outono-inverno, combina com calças skinny, saias midi e vestidos." },
  { id: 18, nome: "Sandália Mickey",              categoria: "Calçados",  preco: 28.00, precoStr: "R$ 28,00",  tamanho: "Infantil 26", img: "images/produto_18.jpg", desc: "Sandália infantil temática com estampa do Mickey Mouse na tira e na palmilha. Resistente, fácil de calçar e super fofa para os pequenos aventureiros." },
  { id: 19, nome: "Tênis Slip On",                categoria: "Calçados",  preco: 45.00, precoStr: "R$ 45,00",  tamanho: "36",         img: "images/produto_19.jpg", desc: "Tênis slip on sem cadarço, com elástico lateral para calçar em segundos. Leve, confortável e estiloso — praticidade máxima para o dia a dia agitado." },
  { id: 20, nome: "Sandália Infantil Mickey",     categoria: "Calçados",  preco: 25.00, precoStr: "R$ 25,00",  tamanho: "Infantil 28", img: "images/produto_20.jpg", desc: "Sandália infantil Mickey Mouse com velcro ajustável e solado antiderrapante. Resistente e divertida — a criançada vai adorar usar todos os dias." },
  { id: 21, nome: "Mocassim Marrom",              categoria: "Calçados",  preco: 60.00, precoStr: "R$ 60,00",  tamanho: "37",         img: "images/produto_21.jpg", desc: "Mocassim marrom de couro ou sintético com costura decorativa característica. Versátil e elegante — transita entre o casual e o formal com muito charme." },

  // --- BLUSAS E TOPS (22-40) ---
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

  // --- CALÇAS (41-56) ---
  { id: 41, nome: "Calça Jeans Skinny",           categoria: "Calças",    preco: 55.00, precoStr: "R$ 55,00",  tamanho: "38",         img: "images/produto_41.jpg", desc: "Calça jeans skinny de cintura média em lavagem média, com lycra para modelar sem apertar. Caimento afinado na perna que valoriza o shape e combina com qualquer top." },
  { id: 42, nome: "Calça Pantalona",              categoria: "Calças",    preco: 60.00, precoStr: "R$ 60,00",  tamanho: "M",          img: "images/produto_42.jpg", desc: "Calça pantalona de tecido fluido com perna larga e cós alto. Elegante e confortável — flui lindo com blusas simples, sapatilha e sandália de tira." },
  { id: 43, nome: "Shorts Jeans",                 categoria: "Calças",    preco: 30.00, precoStr: "R$ 30,00",  tamanho: "38",         img: "images/produto_43.jpg", desc: "Shorts jeans clássico de cintura média com bainhas desfiadas e lavagem clara. Peça coringa do verão — combina com cropped, regata e qualquer tipo de calçado." },
  { id: 44, nome: "Calça Moletom Cinza",          categoria: "Calças",    preco: 45.00, precoStr: "R$ 45,00",  tamanho: "M",          img: "images/produto_44.jpg", desc: "Calça moletom cinza mescla com elástico no cós e nos punhos. Conforto máximo para o dia em casa, homeoffice ou passeios casuais com tênis e moletom." },
  { id: 47, nome: "Shorts de Alfaiataria",        categoria: "Calças",    preco: 38.00, precoStr: "R$ 38,00",  tamanho: "36",         img: "images/produto_47.jpg", desc: "Shorts de alfaiataria em tecido encorpado cor bege, com cós alto e caimento estruturado. Elegante e confortável — perfeito para looks de trabalho ou passeios." },
  { id: 48, nome: "Calça Cargo Verde",            categoria: "Calças",    preco: 65.00, precoStr: "R$ 65,00",  tamanho: "38",         img: "images/produto_48.jpg", desc: "Calça cargo verde musgo com múltiplos bolsos laterais e cós com cordão ajustável. Tendência do streetwear atual — combine com cropped e tênis chunky." },
  { id: 51, nome: "Calça Social Preta",           categoria: "Calças",    preco: 55.00, precoStr: "R$ 55,00",  tamanho: "38",         img: "images/produto_51.jpg", desc: "Calça social preta de tecido encorpado em modelagem slim, com cós médio e barra reta. Versátil para o ambiente formal e casual — da reunião ao jantar." },
  { id: 52, nome: "Bermuda Jeans",                categoria: "Calças",    preco: 35.00, precoStr: "R$ 35,00",  tamanho: "38",         img: "images/produto_52.jpg", desc: "Bermuda jeans na altura do joelho, lavagem clara e barra dobrada. Confortável e estilosa para o verão — combina com camisetas, regatas e tops casuais." },
  { id: 54, nome: "Calça Wide Leg",               categoria: "Calças",    preco: 68.00, precoStr: "R$ 68,00",  tamanho: "38",         img: "images/produto_54.jpg", desc: "Calça wide leg de tecido fluido com perna larga e cós alto ajustado. Silhueta alongada e sofisticada — uma das tendências mais quentes da moda atual." },
  { id: 55, nome: "Shorts Floral",                categoria: "Calças",    preco: 28.00, precoStr: "R$ 28,00",  tamanho: "P",          img: "images/produto_55.jpg", desc: "Shorts de tecido leve com estampa floral em tons alegres e femininos. Ideal para os dias quentes — combina com blusas simples, cropped ou camisa aberta." },
  { id: 56, nome: "Calça Legging Preta",          categoria: "Calças",    preco: 30.00, precoStr: "R$ 30,00",  tamanho: "M",          img: "images/produto_56.jpg", desc: "Legging preta confeccionada em tecido elástico de alta resistência com leve brilho. Alia conforto e elasticidade — ideal para exercícios, yoga ou looks casuais do dia a dia." },

  // --- SAIAS (45-46, 49-50, 53) ---
  { id: 45, nome: "Saia Midi Plissada Branca",    categoria: "Saias",     preco: 50.00, precoStr: "R$ 50,00",  tamanho: "P/M",        img: "images/produto_45.jpg", desc: "Saia midi plissada na cor branca off-white, tecido leve que flui com o vento. Elegante e moderna — perfeita para o verão com blusa de alça ou cropped." },
  { id: 46, nome: "Saia Floral Midi",             categoria: "Saias",     preco: 45.00, precoStr: "R$ 45,00",  tamanho: "P",          img: "images/produto_46.jpg", desc: "Saia midi com estampa floral em tecido leve e romantico, cós elástico e caimento suave. Linda com blusa básica e rasteirinha para o dia a dia." },
  { id: 49, nome: "Saia Mini Xadrez",             categoria: "Saias",     preco: 32.00, precoStr: "R$ 32,00",  tamanho: "P",          img: "images/produto_49.jpg", desc: "Saia mini com estampa xadrez escolar em tons de preto e branco, com zíper lateral e caimento reto. Estilo colegial charmoso e divertido que combina com meia e bota." },
  { id: 50, nome: "Saia Longa Plissada Off",      categoria: "Saias",     preco: 58.00, precoStr: "R$ 58,00",  tamanho: "Único",      img: "images/produto_50.jpg", desc: "Saia longa plissada em tom off-white com bordado delicado no cós elástico. Levíssima e sofisticada — combina com blusas de renda, cetim ou tricot." },
  { id: 53, nome: "Saia Wrap Floral",             categoria: "Saias",     preco: 40.00, precoStr: "R$ 40,00",  tamanho: "Único",      img: "images/produto_53.jpg", desc: "Saia wrap (envelope) com estampa floral colorida, amarração lateral ajustável e comprimento midi. Caimento perfeito para todos os biotipos — versátil e feminina." },

  // --- VESTIDOS E CONJUNTOS (57-70) ---
  { id: 57, nome: "Vestido Floral Longo",         categoria: "Vestidos",  preco: 75.00, precoStr: "R$ 75,00",  tamanho: "P",          img: "images/produto_57.jpg", desc: "Vestido longo com estampa floral em tecido levíssimo e fluido. Romântico e ideal para passeios, eventos ao ar livre e almoços especiais — use com sandália dourada." },
  { id: 58, nome: "Vestido Midi Listrado",        categoria: "Vestidos",  preco: 65.00, precoStr: "R$ 65,00",  tamanho: "M",          img: "images/produto_58.jpg", desc: "Vestido midi listrado em azul e branco com cós marcado e saia levemente evasê. Clássico e versátil — da praia ao restaurante, sempre elegante." },
  { id: 59, nome: "Vestido de Festa",             categoria: "Vestidos",  preco: 90.00, precoStr: "R$ 90,00",  tamanho: "P",          img: "images/produto_59.jpg", desc: "Vestido de festa em tecido encorpado com acabamento refinado e caimento elegante. Perfeito para formaturas, casamentos e eventos especiais — uma peça única de brechó." },
  { id: 60, nome: "Macacão Jeans",                categoria: "Vestidos",  preco: 80.00, precoStr: "R$ 80,00",  tamanho: "M",          img: "images/produto_60.jpg", desc: "Macacão jeans em lavagem média com alças ajustáveis e botões frontais. Peça moderna e coringa que funciona com tênis, sapatilha ou sandália." },
  { id: 61, nome: "Vestido Xadrez Mini",          categoria: "Vestidos",  preco: 55.00, precoStr: "R$ 55,00",  tamanho: "P",          img: "images/produto_61.jpg", desc: "Vestido mini com estampa xadrez em tecido levinho, manga longa e gola V. Estilo vintage revivido — combine com meia calça e bota para um look outono perfeito." },
  { id: 62, nome: "Conjunto Cropped + Saia",      categoria: "Vestidos",  preco: 70.00, precoStr: "R$ 70,00",  tamanho: "P",          img: "images/produto_62.jpg", desc: "Conjunto coordenado com cropped e saia midi em tecido de mesma estampa. Compre o look completo pronto — só veste e sai arrasando, sem esforço nenhum." },
  { id: 63, nome: "Vestido Slip Dress",           categoria: "Vestidos",  preco: 60.00, precoStr: "R$ 60,00",  tamanho: "P/M",        img: "images/produto_63.jpg", desc: "Slip dress em tecido acetinado com alças finas e caimento reto elegante. Pode ser usado sozinho ou sobreposto a uma camisa branca aberta — tendência que nunca sai de moda." },
  { id: 64, nome: "Vestido Casual Verão",         categoria: "Vestidos",  preco: 50.00, precoStr: "R$ 50,00",  tamanho: "M",          img: "images/produto_64.jpg", desc: "Vestido casual de verão em tecido leve com estampa discreta e modelagem soltinha. Fresco e confortável para o dia a dia quente — do mercado ao passeio." },
  { id: 65, nome: "Vestido Alfaiataria Branco",   categoria: "Vestidos",  preco: 85.00, precoStr: "R$ 85,00",  tamanho: "P",          img: "images/produto_65.jpg", desc: "Vestido estilo alfaiataria branco com modelagem estruturada, cós marcado e ombros retos. Clean, sofisticado e atemporal — para quem valoriza elegância minimalista." },
  { id: 66, nome: "Macacão Curto Floral",         categoria: "Vestidos",  preco: 62.00, precoStr: "R$ 62,00",  tamanho: "P",          img: "images/produto_66.jpg", desc: "Macacão curto com estampa floral em tecido leve e alças finas. Um achado de brechó — fresh e feminino para o verão, combinando com sandálias ou rasteirinhas." },
  { id: 67, nome: "Vestido Midi Floral",          categoria: "Vestidos",  preco: 68.00, precoStr: "R$ 68,00",  tamanho: "M",          img: "images/produto_67.jpg", desc: "Vestido midi com estampa floral moderna em tecido de viscose, com cós definido e saia rodada. Combina com tênis branco ou sandália de tira para um look completo." },
  { id: 68, nome: "Conjunto de Linho",            categoria: "Vestidos",  preco: 88.00, precoStr: "R$ 88,00",  tamanho: "M",          img: "images/produto_68.jpg", desc: "Conjunto de linho bege com camisa de botões e calça pantalona. Elegante, fresco e sofisticado para dias quentes — estilo mediterrâneo de dar inveja." },
  { id: 69, nome: "Vestido Rodado Estampado",     categoria: "Vestidos",  preco: 58.00, precoStr: "R$ 58,00",  tamanho: "M",          img: "images/produto_69.jpg", desc: "Vestido rodado com estampa alegre e colorida, tecido levinho que gira com o movimento. Feminino e cheio de vida — perfeito para festas ao ar livre e passeios." },
  { id: 70, nome: "Macacão Jeans Curto",          categoria: "Vestidos",  preco: 72.00, precoStr: "R$ 72,00",  tamanho: "38",         img: "images/produto_70.jpg", desc: "Macacão jeans curto com botões frontais e alças reguláveis. Cool e descolado — use com cropped por baixo ou apenas uma blusa básica para um look completo." },

  // --- AGASALHOS E JAQUETAS (71-80) ---
  { id: 71, nome: "Blazer Bege Oversized",        categoria: "Agasalhos", preco: 80.00, precoStr: "R$ 80,00",  tamanho: "M/G",        img: "images/produto_71.jpg", desc: "Blazer bege oversized em tecido encorpado com ombros marcados e lapela clássica. Peça-chave que eleva qualquer look na hora — de jeans básico a vestido slip." },
  { id: 72, nome: "Jaqueta Jeans Clássica",       categoria: "Agasalhos", preco: 75.00, precoStr: "R$ 75,00",  tamanho: "M",          img: "images/produto_72.jpg", desc: "Jaqueta jeans clássica em lavagem média com botões de metal e bolsos frontais. Peça coringa para qualquer estação — use com vestidos, calças ou saias." },
  { id: 73, nome: "Moletom Hoody Rosa",           categoria: "Agasalhos", preco: 55.00, precoStr: "R$ 55,00",  tamanho: "M",          img: "images/produto_73.jpg", desc: "Moletom com capuz na cor rosa suave, tecido peluciado por dentro e bolso canguru. Quentinho e super confortável para os dias frios ou noites frescas." },
  { id: 74, nome: "Casaco de Lã Preto",           categoria: "Agasalhos", preco: 95.00, precoStr: "R$ 95,00",  tamanho: "M",          img: "images/produto_74.jpg", desc: "Casaco de lã preta com modelagem estruturada, botões embutidos e gola alta. Elegante e aconchegante para o inverno — peça de brechó com valor real." },
  { id: 75, nome: "Jaqueta Bomber Caramelo",      categoria: "Agasalhos", preco: 85.00, precoStr: "R$ 85,00",  tamanho: "M",          img: "images/produto_75.jpg", desc: "Jaqueta bomber na cor caramelo/terracota com elástico no cós e nos punhos, zíper frontal e bolsos laterais. Tendência e muito estilosa para o outono." },
  { id: 76, nome: "Cardigan Longo Cinza",         categoria: "Agasalhos", preco: 60.00, precoStr: "R$ 60,00",  tamanho: "Único",      img: "images/produto_76.jpg", desc: "Cardigan longo aberto em tricot cinza mescla, manga comprida e caimento amplo. Aconchegante e versátil para sobrepor a qualquer look no outono e inverno." },
  { id: 77, nome: "Blazer Xadrez Vintage",        categoria: "Agasalhos", preco: 78.00, precoStr: "R$ 78,00",  tamanho: "M",          img: "images/produto_77.jpg", desc: "Blazer com estampa xadrez clássica em tecido encorpado, estilo vintage dos anos 90. Peça única com muito caráter — para quem quer se destacar com personalidade." },
  { id: 78, nome: "Jaqueta Corta Vento",          categoria: "Agasalhos", preco: 65.00, precoStr: "R$ 65,00",  tamanho: "M",          img: "images/produto_78.jpg", desc: "Jaqueta corta-vento leve em nylon com capuz embutido e zíper duplo. Prática para dias nublados, caminhadas ao ar livre e viagens — dobra e cabe na bolsa." },
  { id: 79, nome: "Moletom Cropped Colorido",     categoria: "Agasalhos", preco: 48.00, precoStr: "R$ 48,00",  tamanho: "P/M",        img: "images/produto_79.jpg", desc: "Moletom cropped em cor vibrante com gola redonda e punhos canelados. Tendência streetwear — combine com calça cargo, legging ou short de cintura alta." },
  { id: 80, nome: "Colete Tricot",                categoria: "Agasalhos", preco: 52.00, precoStr: "R$ 52,00",  tamanho: "P/M",        img: "images/produto_80.jpg", desc: "Colete de tricot sem mangas com costela fina e decote V, em tom neutro e atemporal. Prático para sobrepor a camisetas e blusas — estilo e calor na medida certa." },
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
