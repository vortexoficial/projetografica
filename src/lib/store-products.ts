export const STORE_WHATSAPP_NUMBER = "5511958575089";

export const storeCategories = [
  "Todos",
  "Canecas",
  "Placas",
  "Presentes",
  "Adesivos",
  "Comunicação Visual",
] as const;

export type StoreFilterCategory = (typeof storeCategories)[number];
export type StoreCategory = Exclude<StoreFilterCategory, "Todos">;

export type StoreProduct = {
  id: string;
  slug: string;
  name: string;
  category: StoreCategory;
  shortDescription: string;
  description: string;
  price: string;
  availability: string;
  images: string[];
  specifications: string[];
  customizationOptions: string[];
  featured: boolean;
};

const demoPhoto = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

const productDemoPhotos = {
  caneca: demoPhoto("20843712"),
  placaPvc: demoPhoto("9544250"),
  placaAcm: demoPhoto("12305329"),
  adesivos: demoPhoto("10772232"),
  chaveiro: demoPhoto("12114172"),
  squeeze: demoPhoto("3737800"),
  miniBanner: demoPhoto("9289302"),
  tag: demoPhoto("9594081"),
  quadro: demoPhoto("12486418"),
  placaPix: demoPhoto("12935051"),
} as const;

export const storeProducts: StoreProduct[] = [
  {
    id: "caneca-personalizada-panni",
    slug: "caneca-personalizada-panni",
    name: "Caneca Personalizada Panni",
    category: "Canecas",
    shortDescription: "Caneca criativa para presentes, empresas e datas especiais.",
    description:
      "Caneca personalizada com impressão colorida, acabamento brilhante e visual preparado para presentear ou reforçar a identidade da sua marca no dia a dia.",
    price: "A partir de R$ 39,90",
    availability: "Pronta entrega",
    images: [productDemoPhotos.caneca],
    specifications: [
      "Capacidade: 325ml",
      "Material: cerâmica",
      "Impressão colorida",
      "Acabamento brilhante",
    ],
    customizationOptions: ["Nome", "Logo", "Frase", "Arte personalizada"],
    featured: true,
  },
  {
    id: "placa-decorativa-em-pvc",
    slug: "placa-decorativa-em-pvc",
    name: "Placa Decorativa em PVC",
    category: "Placas",
    shortDescription: "Placa leve para decoração, avisos e ambientes internos.",
    description:
      "Placa em PVC com impressão de alta qualidade, indicada para vitrines, interiores, recepções, eventos e espaços que precisam de uma comunicação bonita e prática.",
    price: "A partir de R$ 49,90",
    availability: "Pronta entrega",
    images: [productDemoPhotos.placaPvc],
    specifications: [
      "Material: PVC",
      "Tamanhos variados",
      "Impressão em alta qualidade",
      "Uso interno",
    ],
    customizationOptions: ["Logo", "Frase", "Cores da marca", "Arte personalizada"],
    featured: false,
  },
  {
    id: "placa-comercial-em-acm",
    slug: "placa-comercial-em-acm",
    name: "Placa Comercial em ACM",
    category: "Comunicação Visual",
    shortDescription: "Placa resistente para fachadas e sinalização externa.",
    description:
      "Placa em ACM com presença visual forte, indicada para fachadas, lojas, clínicas e negócios que precisam aparecer com acabamento profissional.",
    price: "A partir de R$ 149,90",
    availability: "Sob consulta",
    images: [productDemoPhotos.placaAcm],
    specifications: [
      "Material: ACM",
      "Alta durabilidade",
      "Uso externo",
      "Ideal para fachadas",
    ],
    customizationOptions: ["Medidas", "Logo", "Layout de fachada", "Acabamento"],
    featured: true,
  },
  {
    id: "kit-adesivos-personalizados",
    slug: "kit-adesivos-personalizados",
    name: "Kit Adesivos Personalizados",
    category: "Adesivos",
    shortDescription: "Adesivos em vários formatos para marcas e embalagens.",
    description:
      "Kit de adesivos personalizados para embalagens, brindes, identificação e divulgação, com recorte especial e acabamento de acordo com o uso.",
    price: "A partir de R$ 29,90",
    availability: "Pronta entrega",
    images: [productDemoPhotos.adesivos],
    specifications: [
      "Recorte especial",
      "Vinil adesivo",
      "Laminação opcional",
      "Vários formatos",
    ],
    customizationOptions: ["Logo", "Formato", "Tamanho", "Acabamento"],
    featured: true,
  },
  {
    id: "chaveiro-personalizado",
    slug: "chaveiro-personalizado",
    name: "Chaveiro Personalizado",
    category: "Presentes",
    shortDescription: "Brinde compacto para lembranças, eventos e marcas.",
    description:
      "Chaveiro personalizado para presentear clientes, montar lembrancinhas ou criar brindes de marca com visual exclusivo e produção prática.",
    price: "A partir de R$ 19,90",
    availability: "Pronta entrega",
    images: [productDemoPhotos.chaveiro],
    specifications: [
      "Formato personalizado",
      "Impressão colorida",
      "Argola metálica",
      "Ideal para brindes",
    ],
    customizationOptions: ["Nome", "Logo", "Ilustração", "Formato especial"],
    featured: true,
  },
  {
    id: "squeeze-personalizado",
    slug: "squeeze-personalizado",
    name: "Squeeze Personalizado",
    category: "Presentes",
    shortDescription: "Squeeze útil para ações promocionais e presentes.",
    description:
      "Squeeze personalizado para empresas, eventos e campanhas, com aplicação visual preparada para deixar sua marca presente na rotina do cliente.",
    price: "A partir de R$ 59,90",
    availability: "Pronta entrega",
    images: [productDemoPhotos.squeeze],
    specifications: [
      "Material leve e resistente",
      "Tampa rosqueável",
      "Impressão personalizada",
      "Uso promocional",
    ],
    customizationOptions: ["Logo", "Frase", "Nome", "Cores da marca"],
    featured: false,
  },
  {
    id: "mini-banner-de-mesa",
    slug: "mini-banner-de-mesa",
    name: "Mini Banner de Mesa",
    category: "Comunicação Visual",
    shortDescription: "Expositor compacto para balcões, mesas e eventos.",
    description:
      "Mini banner de mesa para destacar promoções, QR codes, menus, informativos e campanhas em balcões ou pontos de atendimento.",
    price: "A partir de R$ 34,90",
    availability: "Pronta entrega",
    images: [productDemoPhotos.miniBanner],
    specifications: [
      "Estrutura compacta",
      "Impressão colorida",
      "Base de apoio",
      "Ideal para balcões",
    ],
    customizationOptions: ["Arte promocional", "QR Code", "Logo", "Formato do material"],
    featured: true,
  },
  {
    id: "tag-personalizada-para-loja",
    slug: "tag-personalizada-para-loja",
    name: "Tag Personalizada para Loja",
    category: "Adesivos",
    shortDescription: "Tags para embalagens, roupas, presentes e produtos.",
    description:
      "Tags personalizadas para valorizar embalagens, peças, presentes e produtos artesanais com um toque profissional e acabamento bem resolvido.",
    price: "A partir de R$ 24,90",
    availability: "Pronta entrega",
    images: [productDemoPhotos.tag],
    specifications: [
      "Papel de alta gramatura",
      "Furo opcional",
      "Cordão sob consulta",
      "Corte reto ou especial",
    ],
    customizationOptions: ["Logo", "Tamanho", "Corte", "Informações do produto"],
    featured: false,
  },
  {
    id: "quadro-personalizado",
    slug: "quadro-personalizado",
    name: "Quadro Personalizado",
    category: "Presentes",
    shortDescription: "Quadro criativo para presentear ou decorar ambientes.",
    description:
      "Quadro personalizado para presentes afetivos, decoração de ambientes e peças comemorativas com arte visual criada sob medida.",
    price: "A partir de R$ 69,90",
    availability: "Pronta entrega",
    images: [productDemoPhotos.quadro],
    specifications: [
      "Impressão em alta definição",
      "Tamanhos variados",
      "Acabamento decorativo",
      "Uso interno",
    ],
    customizationOptions: ["Foto", "Frase", "Nome", "Arte personalizada"],
    featured: false,
  },
  {
    id: "placa-pix-personalizada",
    slug: "placa-pix-personalizada",
    name: "Placa Pix Personalizada",
    category: "Placas",
    shortDescription: "Placa com QR Code Pix para balcões e atendimento.",
    description:
      "Placa Pix personalizada para facilitar pagamentos no balcão, com QR Code, identidade visual da marca e acabamento pronto para uso.",
    price: "A partir de R$ 39,90",
    availability: "Pronta entrega",
    images: [productDemoPhotos.placaPix],
    specifications: [
      "Base rígida",
      "QR Code personalizado",
      "Impressão colorida",
      "Ideal para balcões",
    ],
    customizationOptions: ["Chave Pix", "Logo", "Cores da marca", "Mensagem curta"],
    featured: true,
  },
];

export function getProductBySlug(slug: string) {
  return storeProducts.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return storeProducts.filter((product) => product.featured).slice(0, 6);
}

export function buildProductWhatsAppMessage(product: StoreProduct) {
  return `Olá, vim pelo site da Gráfica Panni e tenho interesse em um produto da Loja da Panni.

Produto: ${product.name}
Categoria: ${product.category}
Preço: ${product.price}
Disponibilidade: ${product.availability}

Gostaria de saber mais detalhes e formas de personalização.`;
}

export function buildProductWhatsAppUrl(product: StoreProduct) {
  void product;
  return "#";
}

export function buildStoreWhatsAppUrl() {
  return "#";
}
