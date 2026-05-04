export const WHATSAPP_PHONE = "5511958575089";

export type QuoteFieldType = "text" | "textarea" | "customDropdown";

export type QuoteField = {
  name: string;
  label: string;
  type: QuoteFieldType;
  required: boolean;
  placeholder?: string;
  options?: string[];
};

export type ServiceCategory = "printedMaterials" | "visualCommunication" | "general";

export type ServiceDefinition = {
  name: string;
  category: ServiceCategory;
  fields: QuoteField[];
  aliases?: string[];
};

export const artworkOptions = ["Sim", "Não", "Preciso de ajuda"];

export const baseQuoteFields: QuoteField[] = [
  {
    name: "customerName",
    label: "Nome",
    type: "text",
    required: true,
    placeholder: "Digite seu nome",
  },
  {
    name: "service",
    label: "Serviço",
    type: "customDropdown",
    required: true,
  },
  {
    name: "quantity",
    label: "Quantidade",
    type: "text",
    required: true,
    placeholder: "Ex: 100 unidades, 2 placas, 1 fachada",
  },
  {
    name: "hasArtwork",
    label: "Já possui arte?",
    type: "customDropdown",
    required: true,
    options: artworkOptions,
  },
  {
    name: "notes",
    label: "Observações",
    type: "textarea",
    required: false,
    placeholder: "Descreva detalhes adicionais do orçamento",
  },
];

const printSidesField: QuoteField = {
  name: "printSides",
  label: "Impressão",
  type: "customDropdown",
  required: true,
  options: ["Frente", "Frente e verso"],
};

function dropdownField(name: string, label: string, options: string[], required = true): QuoteField {
  return {
    name,
    label,
    type: "customDropdown",
    required,
    options,
  };
}

function textField(name: string, label: string, placeholder: string, required = true): QuoteField {
  return {
    name,
    label,
    type: "text",
    required,
    placeholder,
  };
}

function printedFields({
  formatOptions,
  materialOptions,
  finishingOptions,
  extraFields = [],
}: {
  formatOptions: string[];
  materialOptions: string[];
  finishingOptions: string[];
  extraFields?: QuoteField[];
}): QuoteField[] {
  return [
    dropdownField("formatSize", "Tamanho/Formato", formatOptions),
    dropdownField("paperType", "Tipo de papel/material", materialOptions),
    printSidesField,
    ...extraFields,
    dropdownField("finishing", "Acabamento", finishingOptions, false),
  ];
}

function visualFields({
  formatLabel = "Tipo/Formato",
  formatOptions,
  materialOptions,
  usageOptions = ["Interno", "Externo"],
  finishingOptions = ["Sem acabamento", "Ilhós", "Bastão", "Corte especial", "Ainda não sei"],
  includeInstallation = true,
}: {
  formatLabel?: string;
  formatOptions: string[];
  materialOptions: string[];
  usageOptions?: string[];
  finishingOptions?: string[];
  includeInstallation?: boolean;
}): QuoteField[] {
  return [
    dropdownField("formatSize", formatLabel, formatOptions),
    textField("width", "Largura", "Ex: 2 metros"),
    textField("height", "Altura", "Ex: 1 metro"),
    dropdownField("paperType", "Material", materialOptions),
    dropdownField("usage", "Uso", usageOptions),
    textField("installationLocation", "Local de instalação", "Ex: fachada da loja, parede interna", false),
    ...(includeInstallation
      ? [dropdownField("needsInstallation", "Precisa de instalação?", ["Sim", "Não", "Ainda não sei"])]
      : []),
    dropdownField("finishing", "Acabamento", finishingOptions, false),
  ];
}

const businessCardFields = printedFields({
  formatOptions: ["9x5 cm", "8,8x4,8 cm", "9x5 cm com cantos arredondados", "Cartão duplo/dobrado", "Personalizado"],
  materialOptions: ["Couchê 250g", "Couchê 300g", "Papel cartão", "Reciclado", "Ainda não sei"],
  finishingOptions: ["Sem acabamento", "Laminação fosca", "Laminação brilho", "Verniz localizado", "Cantos arredondados", "Ainda não sei"],
});

const flyerFields = printedFields({
  formatOptions: ["A6", "A5", "A4", "A3", "10x15 cm", "15x21 cm", "Personalizado"],
  materialOptions: ["Couchê 90g", "Couchê 115g", "Couchê 150g", "Offset", "Reciclado", "Ainda não sei"],
  finishingOptions: ["Sem acabamento", "Refile", "Dobra", "Laminação", "Ainda não sei"],
});

const folderCatalogFields = printedFields({
  formatOptions: ["A4 aberto", "A3 aberto", "A5 fechado", "Catálogo A4", "Catálogo A5", "Personalizado"],
  materialOptions: ["Couchê 115g", "Couchê 150g", "Couchê 170g", "Capa papel cartão", "Ainda não sei"],
  finishingOptions: ["Dobra simples", "Dobra sanfona", "Grampeado", "Lombada canoa", "Laminação na capa", "Ainda não sei"],
  extraFields: [textField("pages", "Páginas/Dobras", "Ex: 2 dobras, 8 páginas", false)],
});

const menuFields = printedFields({
  formatOptions: ["A4", "A3", "A5", "Cardápio dobrável", "Lâmina de mesa", "Personalizado"],
  materialOptions: ["Couchê 250g", "Papel cartão", "PVC", "Polaseal/plastificado", "Ainda não sei"],
  finishingOptions: ["Laminação fosca", "Laminação brilho", "Plastificação", "Dobra", "Cantos arredondados", "Ainda não sei"],
});

const invitationFields = printedFields({
  formatOptions: ["10x15 cm", "15x21 cm", "A6", "A5", "Convite com envelope", "Personalizado"],
  materialOptions: ["Couchê", "Offset", "Papel cartão", "Papel especial", "Ainda não sei"],
  finishingOptions: ["Sem acabamento", "Laminação", "Corte especial", "Dobra", "Envelope", "Ainda não sei"],
});

const labelTagFields = printedFields({
  formatOptions: ["Tag 5x9 cm", "Tag 6x10 cm", "Rótulo 5x5 cm", "Rótulo 8x5 cm", "Etiqueta em rolo", "Personalizado"],
  materialOptions: ["Papel adesivo", "Vinil adesivo", "Papel cartão", "BOPP", "Ainda não sei"],
  finishingOptions: ["Sem acabamento", "Furo para tag", "Corte especial", "Laminação", "Meio corte", "Ainda não sei"],
});

const promotionalFields = printedFields({
  formatOptions: ["Cartaz A3", "Display de balcão", "Wobbler", "Faixa de gôndola", "Peça promocional personalizada", "Ainda não sei"],
  materialOptions: ["Couchê", "Papel cartão", "Adesivo", "PVC/PS", "Ainda não sei"],
  finishingOptions: ["Sem acabamento", "Corte especial", "Dobra", "Laminação", "Vinco", "Ainda não sei"],
});

const digitalPrintFields = printedFields({
  formatOptions: ["A4", "A3", "A5", "A6", "10x15 cm", "Personalizado"],
  materialOptions: ["Sulfite", "Offset", "Couchê", "Papel cartão", "Adesivo", "Ainda não sei"],
  finishingOptions: ["Sem acabamento", "Refile", "Dobra", "Laminação", "Encadernação", "Ainda não sei"],
});

const bannerFields = visualFields({
  formatOptions: ["Banner com bastão", "Lona com ilhós", "Faixa promocional", "Backdrop/painel", "Personalizado"],
  materialOptions: ["Lona 280g", "Lona 440g", "Tecido", "Ainda não sei"],
  finishingOptions: ["Bastão e ponteiras", "Ilhós", "Solda/reforço", "Bolsa para bastão", "Ainda não sei"],
});

const stickerFields = visualFields({
  formatOptions: ["Adesivo impresso", "Adesivo recortado", "Adesivo de vitrine", "Perfurado", "Etiqueta adesiva", "Personalizado"],
  materialOptions: ["Vinil branco", "Vinil transparente", "Vinil recorte", "Adesivo perfurado", "Ainda não sei"],
  finishingOptions: ["Sem laminação", "Laminação fosca", "Laminação brilho", "Recorte eletrônico", "Meio corte", "Ainda não sei"],
  includeInstallation: true,
});

const acmFields = visualFields({
  formatLabel: "Tipo de fachada",
  formatOptions: ["Painel em ACM", "Testeira de loja", "Revestimento de fachada", "Letra caixa sobre ACM", "Totem em ACM", "Personalizado"],
  materialOptions: ["ACM 3mm", "ACM 4mm", "ACM com adesivo impresso", "ACM com letra caixa", "Ainda não sei"],
  usageOptions: ["Externo", "Interno"],
  finishingOptions: ["Adesivo aplicado", "Letra caixa", "Iluminação/LED", "Estrutura metálica", "Ainda não sei"],
});

const signFields = visualFields({
  formatLabel: "Tipo de placa",
  formatOptions: ["Placa em PVC", "Placa em PS", "Placa em ACM", "Placa de sinalização", "Totem", "Personalizado"],
  materialOptions: ["PVC", "PS", "ACM", "Acrílico", "Ainda não sei"],
  finishingOptions: ["Sem acabamento", "Furação", "Fita dupla face", "Suporte", "Corte especial", "Ainda não sei"],
});

const awningFields = visualFields({
  formatLabel: "Tipo de toldo",
  formatOptions: ["Toldo fixo", "Toldo retrátil", "Troca de lona", "Lona com impressão", "Personalizado"],
  materialOptions: ["Lona vinílica", "Lona translúcida", "Estrutura metálica", "Ainda não sei"],
  usageOptions: ["Externo"],
  finishingOptions: ["Impressão na lona", "Solda/reforço", "Estrutura", "Instalação", "Ainda não sei"],
});

const communicationFields = visualFields({
  formatLabel: "Tipo de comunicação visual",
  formatOptions: ["Fachada", "Placa", "Banner/faixa", "Adesivo", "Toldo", "Projeto combinado", "Ainda não sei"],
  materialOptions: ["ACM", "PVC/PS", "Lona", "Vinil adesivo", "Ainda não sei"],
  finishingOptions: ["Instalação", "Corte especial", "Iluminação", "Estrutura", "Ainda não sei"],
});

const generalFields: QuoteField[] = [
  {
    name: "projectDescription",
    label: "O que você precisa?",
    type: "textarea",
    required: true,
    placeholder: "Descreva o material, medidas, quantidade e objetivo",
  },
];

export const serviceDefinitions: ServiceDefinition[] = [
  { name: "Cartões de visita", category: "printedMaterials", fields: businessCardFields },
  { name: "Panfletos e flyers", category: "printedMaterials", fields: flyerFields },
  { name: "Folders e catálogos", category: "printedMaterials", fields: folderCatalogFields },
  { name: "Cardápios", category: "printedMaterials", fields: menuFields },
  { name: "Convites", category: "printedMaterials", fields: invitationFields },
  { name: "Tags e rótulos", category: "printedMaterials", fields: labelTagFields },
  { name: "Materiais promocionais", category: "printedMaterials", fields: promotionalFields },
  { name: "Impressão digital", category: "printedMaterials", fields: digitalPrintFields, aliases: ["Impressão Digital"] },
  { name: "Banners e faixas", category: "visualCommunication", fields: bannerFields, aliases: ["Banners", "Faixas"] },
  { name: "Adesivos", category: "visualCommunication", fields: stickerFields },
  { name: "Fachadas em ACM", category: "visualCommunication", fields: acmFields, aliases: ["Fachadas"] },
  { name: "Placas e sinalização", category: "visualCommunication", fields: signFields, aliases: ["Placas"] },
  { name: "Toldos", category: "visualCommunication", fields: awningFields },
  { name: "Comunicação visual", category: "visualCommunication", fields: communicationFields, aliases: ["Comunicação Visual"] },
  { name: "Materiais para empresas", category: "general", fields: generalFields, aliases: ["Materiais para Empresas"] },
  { name: "Orçamento geral", category: "general", fields: generalFields },
];

export const serviceOptions = serviceDefinitions.map((service) => service.name);

export function normalizeQuoteValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

export function getServiceDefinition(serviceName: string) {
  const normalized = normalizeQuoteValue(serviceName);

  return (
    serviceDefinitions.find((service) => {
      const names = [service.name, ...(service.aliases ?? [])];
      return names.some((name) => normalizeQuoteValue(name) === normalized);
    }) ?? serviceDefinitions[serviceDefinitions.length - 1]
  );
}

export function getCanonicalServiceName(serviceName: string) {
  return getServiceDefinition(serviceName).name;
}

export function getExtraFieldsForService(serviceName: string) {
  return getServiceDefinition(serviceName).fields;
}

export function createInitialQuoteValues(serviceName = "Orçamento geral") {
  const service = getCanonicalServiceName(serviceName);

  return {
    customerName: "",
    service,
    quantity: "",
    hasArtwork: "",
    notes: "",
    formatSize: "",
    paperType: "",
    printSides: "",
    finishing: "",
    pages: "",
    width: "",
    height: "",
    installationLocation: "",
    usage: "",
    needsInstallation: "",
    projectDescription: "",
  };
}

export type QuoteFormValues = ReturnType<typeof createInitialQuoteValues>;

export function buildWhatsAppQuoteMessage(values: QuoteFormValues, dynamicFields: QuoteField[]) {
  const dynamicServiceFields = dynamicFields
    .map((field) => {
      const value = values[field.name as keyof QuoteFormValues]?.trim();

      if (!value) {
        return null;
      }

      return `${field.label}: ${value}`;
    })
    .filter(Boolean)
    .join("\n");

  return [
    "Olá, vim pelo site da Gráfica Panni e gostaria de solicitar um orçamento.",
    "",
    `Serviço: ${values.service}`,
    `Nome: ${values.customerName}`,
    `Quantidade: ${values.quantity}`,
    `Possui arte: ${values.hasArtwork}`,
    "",
    "Detalhes do pedido:",
    dynamicServiceFields || "Sem detalhes adicionais.",
    "",
    "Observações:",
    values.notes.trim() || "Sem observações.",
    "",
    "Obrigado!",
  ].join("\n");
}

export function buildWhatsAppQuoteUrl(message: string) {
  void message;
  return "#";
}
