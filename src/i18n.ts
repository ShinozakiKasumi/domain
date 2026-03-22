export const languages = [
  { code: 'zh-CN', name: '简体中文', currency: 'CNY', symbol: '¥', rate: 1 },
  { code: 'zh-TW', name: '繁體中文', currency: 'TWD', symbol: 'NT$', rate: 4.4 },
  { code: 'en', name: 'English', currency: 'USD', symbol: '$', rate: 0.14 },
  { code: 'ja', name: '日本語', currency: 'JPY', symbol: '¥', rate: 21 },
  { code: 'de', name: 'Deutsch', currency: 'EUR', symbol: '€', rate: 0.13 },
  { code: 'fr', name: 'Français', currency: 'EUR', symbol: '€', rate: 0.13 },
  { code: 'es', name: 'Español', currency: 'EUR', symbol: '€', rate: 0.13 },
  { code: 'pt', name: 'Português', currency: 'EUR', symbol: '€', rate: 0.13 },
];

export const translations: Record<string, any> = {
  'zh-CN': {
    title: '域名表',
    subtitle: '极简、纯粹。甄选优质域名，记录网络宇宙的每一个灵感节点。',
    priceText: '议价',
    acquire: '提交出价',
    domains: {
      'asaka.moe': {
        desc: '“亚咲花”，极其适合个人博客、同人社团或 ACG 资讯站。',
        suffix: '.moe 是来源于日语“萌（萌え）”的通用顶级域，二次元浓度极高。'
      },
      'greyfox.dev': {
        desc: '“灰狐”（经典游戏角色），是极佳的硬核开发者、极客技术博客或开源项目域名。',
        suffix: '.dev 是由 Google 运营的通用顶级域，专为开发者和技术人打造。'
      },
      'miku.rs': {
        desc: '“初音未来 (Miku)”，四字母极品短域。对 Rust 开发者和二次元爱好者具有双重属性加持。',
        suffix: '.rs 是塞尔维亚（Serbia）的国家顶级域名，也是 Rust 语言源文件的标准后缀。'
      },
      'zutomayo.org': {
        desc: '“永远是深夜有多好 (ZUTOMAYO)”音乐组合，完美适配粉丝后援会或民间组织资料站。',
        suffix: '.org 意为组织（Organization），是互联网最早期成立的通用顶级域之一。'
      },
      'abc.sc': {
        desc: '“ABC”，极品三字母基础短域。便于记忆，极其适合作为导航站、短链接服务或基础工具入口。',
        suffix: '.sc 是塞舌尔（Seychelles）的国家顶级域名，常用于 Source Code (源码) 或超短域构建。'
      }
    }
  },
  'zh-TW': {
    title: '網域表',
    subtitle: '極簡、純粹。甄選優質網域，記錄網路宇宙的每一個靈感節點。',
    priceText: '議價',
    acquire: '提交出價',
    domains: {
      'asaka.moe': {
        desc: '「亞咲花」，極其適合個人部落格、同人社團或 ACG 資訊站。',
        suffix: '.moe 是來源於日語「萌（萌え）」的通用頂級域，二次元濃度極高。'
      },
      'greyfox.dev': {
        desc: '「灰狐」（經典遊戲角色），是極佳的硬核開發者、極客技術部落格或開源專案網域。',
        suffix: '.dev 是由 Google 營運的通用頂級域，專為開發者和技術人打造。'
      },
      'miku.rs': {
        desc: '「初音未來 (Miku)」，四字母極品短域。對 Rust 開發者和二次元愛好者具有雙重屬性加持。',
        suffix: '.rs 是塞爾維亞（Serbia）的國家頂級網域，也是 Rust 語言原始碼檔案的標準後綴。'
      },
      'zutomayo.org': {
        desc: '「永遠是深夜有多好 (ZUTOMAYO)」音樂組合，完美適配粉絲後援會或民間組織資料站。',
        suffix: '.org 意為組織（Organization），是網際網路最早期成立的通用頂級域之一。'
      },
      'abc.sc': {
        desc: '「ABC」，極品三字母基礎短域。便於記憶，極其適合作為導航站、短網址服務或基礎工具入口。',
        suffix: '.sc 是塞席爾（Seychelles）的國家頂級網域，常用於 Source Code (原始碼) 或超短域構建。'
      }
    }
  },
  'en': {
    title: 'Domain List',
    subtitle: 'Minimalist and pure. A curated selection of premium domains recording every spark in the cyber universe.',
    priceText: 'Negotiable',
    acquire: 'Make Offer',
    domains: {
      'asaka.moe': {
        desc: '"Asaka", perfect for personal blogs, doujin circles, or ACG news portals.',
        suffix: '.moe is a generic top-level domain derived from the Japanese word "moe", featuring high ACG culture.'
      },
      'greyfox.dev': {
        desc: '"Grey Fox" (classic game character), an excellent domain for hardcore developers, geek tech blogs, or open-source projects.',
        suffix: '.dev is a top-level domain operated by Google, tailored for developers and tech enthusiasts.'
      },
      'miku.rs': {
        desc: '"Hatsune Miku", a premium 4-letter short domain. Offers double appeal for Rust developers and ACG fans.',
        suffix: '.rs is the country code TLD for Serbia, and widely popular as the standard file extension for the Rust programming language.'
      },
      'zutomayo.org': {
        desc: '"ZUTOMAYO" (Japanese music group), perfectly suited for fan clubs or non-profit community info sites.',
        suffix: '.org stands for Organization, one of the earliest generic top-level domains on the internet.'
      },
      'abc.sc': {
        desc: '"ABC", an ultra-premium 3-letter base domain. Easy to remember, perfect for navigation sites, URL shorteners, or foundational tool portals.',
        suffix: '.sc is the country code TLD for Seychelles, often used for Source Code or building ultra-short links.'
      }
    }
  },
  'ja': {
    title: 'ドメインリスト',
    subtitle: 'シンプルで純粋。サイバー空間のインスピレーションを記録するプレミアムドメインの厳選コレクション。',
    priceText: '価格応相談',
    acquire: 'オファーを出す',
    domains: {
      'asaka.moe': {
        desc: '「亜咲花」。個人ブログ、同人サークル、またはACG情報サイトに最適です。',
        suffix: '.moe は日本語の「萌え」に由来するトップレベルドメインで、オタク文化に特化しています。'
      },
      'greyfox.dev': {
        desc: '「グレイ・フォックス」（ゲームのキャラクター）。ハードコアな開発者、技術ブログ、オープンソースプロジェクトに最適なドメインです。',
        suffix: '.dev は Google が運営する、開発者やエンジニア向けのトップレベルドメインです。'
      },
      'miku.rs': {
        desc: '「初音ミク」、希少な4文字のショートドメイン。Rust開発者と二次元ファンの両方にアピールできます。',
        suffix: '.rs はセルビアの国別コードトップレベルドメインであり、Rust言語の標準拡張子としても人気です。'
      },
      'zutomayo.org': {
        desc: '「ずっと真夜中でいいのに。(ZUTOMAYO)」。ファンクラブや非営利コミュニティの情報サイトにぴったりです。',
        suffix: '.org は Organization（組織）を意味し、インターネット黎明期から存在するトップレベルドメインの一つです。'
      },
      'abc.sc': {
        desc: '「ABC」、超プレミアムな3文字のショートドメイン。覚えやすく、ポータルサイトや短縮URLサービスに最適です。',
        suffix: '.sc はセーシェルの国別ドメインですが、Source Code（ソースコード）やショートリンクの構築によく使われます。'
      }
    }
  },
  'de': {
    title: 'Domainliste',
    subtitle: 'Minimalistisch und rein. Eine kuratierte Auswahl an Premium-Domains.',
    priceText: 'Verhandelbar',
    acquire: 'Angebot machen',
    domains: {
      'asaka.moe': {
        desc: '"Asaka", perfekt für persönliche Blogs, Doujin-Zirkel oder ACG-Nachrichtenportale.',
        suffix: '.moe ist eine generische Top-Level-Domain, abgeleitet vom japanischen "Moe".'
      },
      'greyfox.dev': {
        desc: '"Grey Fox", exzellent für Hardcore-Entwickler, Tech-Blogs oder Open-Source-Projekte.',
        suffix: '.dev ist eine Top-Level-Domain von Google, speziell für Entwickler.'
      },
      'miku.rs': {
        desc: '"Hatsune Miku", eine Premium-4-Buchstaben-Domain für Rust-Entwickler und ACG-Fans.',
        suffix: '.rs ist die länderspezifische TLD für Serbien und eine beliebte Dateiendung für Rust.'
      },
      'zutomayo.org': {
        desc: '"ZUTOMAYO", perfekt für Fanclubs oder gemeinnützige Community-Informationsseiten.',
        suffix: '.org steht für Organization, eine der ältesten Top-Level-Domains.'
      },
      'abc.sc': {
        desc: '"ABC", eine seltene 3-Buchstaben-Domain. Perfekt für Navigationsseiten oder URL-Shortener.',
        suffix: '.sc ist die länderspezifische TLD für die Seychellen, oft für Source Code genutzt.'
      }
    }
  },
  'fr': {
    title: 'Liste de domaines',
    subtitle: 'Minimaliste et pur. Une sélection de domaines premium pour capturer l\'inspiration.',
    priceText: 'Négociable',
    acquire: 'Faire une offre',
    domains: {
      'asaka.moe': {
        desc: '"Asaka", parfait pour les blogs personnels, les cercles de fans ou les portails d\'actualités ACG.',
        suffix: '.moe est un domaine de premier niveau générique dérivé du japonais "moe".'
      },
      'greyfox.dev': {
        desc: '"Grey Fox", excellent pour les développeurs chevronnés, les blogs technologiques ou les projets open source.',
        suffix: '.dev est un domaine de premier niveau exploité par Google, conçu pour les développeurs.'
      },
      'miku.rs': {
        desc: '"Hatsune Miku", un domaine court premium de 4 lettres. Double attrait pour les développeurs Rust et les fans.',
        suffix: '.rs est le TLD de la Serbie, populaire comme extension de fichier pour le langage Rust.'
      },
      'zutomayo.org': {
        desc: '"ZUTOMAYO", parfaitement adapté aux fan clubs ou aux sites communautaires à but non lucratif.',
        suffix: '.org signifie Organisation, l\'un des plus anciens domaines de premier niveau.'
      },
      'abc.sc': {
        desc: '"ABC", un domaine de base ultra-premium de 3 lettres. Parfait pour les raccourcisseurs d\'URL.',
        suffix: '.sc est le TLD des Seychelles, souvent utilisé pour le "Source Code".'
      }
    }
  },
  'es': {
    title: 'Lista de dominios',
    subtitle: 'Minimalista y puro. Una selección de dominios premium para capturar tu inspiración.',
    priceText: 'Negociable',
    acquire: 'Hacer oferta',
    domains: {
      'asaka.moe': {
        desc: '"Asaka", perfecto para blogs personales, círculos de fans o portales de noticias.',
        suffix: '.moe es un dominio de nivel superior genérico derivado del japonés "moe".'
      },
      'greyfox.dev': {
        desc: '"Grey Fox", excelente para desarrolladores, blogs tecnológicos o proyectos de código abierto.',
        suffix: '.dev es un dominio de nivel superior operado por Google, diseñado para desarrolladores.'
      },
      'miku.rs': {
        desc: '"Hatsune Miku", un dominio corto premium de 4 letras para desarrolladores de Rust y fans.',
        suffix: '.rs es el TLD de Serbia, popular como extensión de archivo para el lenguaje Rust.'
      },
      'zutomayo.org': {
        desc: '"ZUTOMAYO", perfectamente adaptado para clubes de fans o sitios comunitarios.',
        suffix: '.org significa Organización, uno de los dominios de nivel superior más antiguos.'
      },
      'abc.sc': {
        desc: '"ABC", un dominio base ultra premium de 3 letras. Perfecto para acortadores de URL.',
        suffix: '.sc es el TLD de Seychelles, a menudo utilizado para "Source Code".'
      }
    }
  },
  'pt': {
    title: 'Lista de Domínios',
    subtitle: 'Minimalista e puro. Uma seleção de domínios premium para registrar sua inspiração.',
    priceText: 'Negociável',
    acquire: 'Fazer oferta',
    domains: {
      'asaka.moe': {
        desc: '"Asaka", perfeito para blogs pessoais, círculos de fãs ou portais de notícias.',
        suffix: '.moe é um domínio de nível superior genérico derivado do japonês "moe".'
      },
      'greyfox.dev': {
        desc: '"Grey Fox", excelente para desenvolvedores, blogs de tecnologia ou projetos de código aberto.',
        suffix: '.dev é um domínio de nível superior operado pelo Google, projetado para desenvolvedores.'
      },
      'miku.rs': {
        desc: '"Hatsune Miku", um domínio curto premium de 4 letras para desenvolvedores Rust e fãs.',
        suffix: '.rs é o TLD da Sérvia, popular como extensão de arquivo para a linguagem Rust.'
      },
      'zutomayo.org': {
        desc: '"ZUTOMAYO", perfeitamente adaptado para fã-clubes ou sites comunitários.',
        suffix: '.org significa Organização, um dos domínios de nível superior mais antigos.'
      },
      'abc.sc': {
        desc: '"ABC", um domínio base ultra premium de 3 letras. Perfeito para encurtadores de URL.',
        suffix: '.sc é o TLD de Seychelles, frequentemente usado para "Source Code".'
      }
    }
  }
};
