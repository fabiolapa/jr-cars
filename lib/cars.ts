export type Fuel = "Gasolina" | "Diesel" | "Híbrido" | "Elétrico";
export type Transmission = "Manual" | "Automática";

export type Car = {
  slug: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  km: number;
  fuel: Fuel;
  transmission: Transmission;
  power: number; // cv
  price: number; // EUR
  color: string;
  doors: number;
  seats: number;
  segment: "Citadino" | "SUV" | "Berlina" | "Carrinha" | "Desportivo";
  highlights: string[];
  description: string;
  images: string[];
  featured?: boolean;
  sold?: boolean;
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const cars: Car[] = [
  {
    slug: "vw-id3-pro-performance-1st-plus",
    brand: "Volkswagen",
    model: "ID.3",
    version: "Pro Performance 1st Plus",
    year: 2021,
    km: 48500,
    fuel: "Elétrico",
    transmission: "Automática",
    power: 204,
    price: 24900,
    color: "Preto Manganês",
    doors: 5,
    seats: 5,
    segment: "Citadino",
    highlights: [
      "Autonomia 420 km (WLTP)",
      "Carregamento rápido 100 kW",
      "Câmara de marcha-atrás",
      "Apple CarPlay sem fios",
    ],
    description:
      "VW ID.3 1st Plus em estado impecável, primeira mão, sempre revisto em concessionário. Bateria 58 kWh, autonomia real superior a 350 km. Pronto a entregar com IUC isento.",
    images: [
      u("photo-1606664515524-ed2f786a0bd6"),
      u("photo-1593941707874-ef25b8b4a92b"),
      u("photo-1617469767053-d3b523a0b982"),
    ],
    featured: true,
  },
  {
    slug: "bmw-320d-pack-m",
    brand: "BMW",
    model: "320d",
    version: "Pack M Auto",
    year: 2019,
    km: 92300,
    fuel: "Diesel",
    transmission: "Automática",
    power: 190,
    price: 27500,
    color: "Cinzento Mineral",
    doors: 4,
    seats: 5,
    segment: "Berlina",
    highlights: [
      "Pack M completo",
      "Bancos em pele aquecidos",
      "Head-Up Display",
      "Faróis Laser",
    ],
    description:
      "BMW 320d Pack M, caixa automática Steptronic 8 velocidades. Nacional, com livro de revisões carimbado. Garantia incluída.",
    images: [
      u("photo-1555215695-3004980ad54e"),
      u("photo-1494976388531-d1058494cdd8"),
      u("photo-1542362567-b07e54358753"),
    ],
    featured: true,
  },
  {
    slug: "mercedes-a180d-amg-line",
    brand: "Mercedes-Benz",
    model: "A 180 d",
    version: "AMG Line",
    year: 2020,
    km: 76800,
    fuel: "Diesel",
    transmission: "Automática",
    power: 116,
    price: 23900,
    color: "Branco Polar",
    doors: 5,
    seats: 5,
    segment: "Citadino",
    highlights: [
      "AMG Line interior + exterior",
      "MBUX duplo ecrã",
      "Câmara 360º",
      "Jantes 18\"",
    ],
    description:
      "Mercedes A 180 d AMG Line, único dono, sempre garagem. Manutenção em concessionário oficial. Possibilidade de financiamento até 96 meses.",
    images: [
      u("photo-1617531653332-bd46c24f2068"),
      u("photo-1503376780353-7e6692767b70"),
      u("photo-1552519507-da3b142c6e3d"),
    ],
    featured: true,
  },
  {
    slug: "audi-a4-avant-40-tdi",
    brand: "Audi",
    model: "A4 Avant",
    version: "40 TDI S line S tronic",
    year: 2020,
    km: 110400,
    fuel: "Diesel",
    transmission: "Automática",
    power: 190,
    price: 29500,
    color: "Preto Mythos",
    doors: 5,
    seats: 5,
    segment: "Carrinha",
    highlights: [
      "S line completo",
      "Virtual Cockpit Plus",
      "Bancos desportivos",
      "Matrix LED",
    ],
    description:
      "Audi A4 Avant 40 TDI S line, motor 2.0 TDI 190cv, caixa S tronic. Carrinha familiar com excelente consumo e equipamento topo de gama.",
    images: [
      u("photo-1606220838315-056192d5e927"),
      u("photo-1542362567-b07e54358753"),
      u("photo-1503376780353-7e6692767b70"),
    ],
  },
  {
    slug: "peugeot-208-gt-line",
    brand: "Peugeot",
    model: "208",
    version: "1.5 BlueHDi GT Line",
    year: 2019,
    km: 68900,
    fuel: "Diesel",
    transmission: "Manual",
    power: 100,
    price: 13500,
    color: "Vermelho Elixir",
    doors: 5,
    seats: 5,
    segment: "Citadino",
    highlights: [
      "i-Cockpit 3D",
      "Câmara de marcha-atrás",
      "Apple CarPlay / Android Auto",
      "Sensores estacionamento",
    ],
    description:
      "Peugeot 208 GT Line, consumo médio 4.1 L/100km. Ideal para cidade e viagens longas. Pronto a financiar.",
    images: [
      u("photo-1494976388531-d1058494cdd8"),
      u("photo-1583121274602-3e2820c69888"),
      u("photo-1606664515524-ed2f786a0bd6"),
    ],
  },
  {
    slug: "renault-clio-rs-line-tce",
    brand: "Renault",
    model: "Clio",
    version: "1.0 TCe RS Line",
    year: 2021,
    km: 41200,
    fuel: "Gasolina",
    transmission: "Manual",
    power: 100,
    price: 14900,
    color: "Azul Iron",
    doors: 5,
    seats: 5,
    segment: "Citadino",
    highlights: [
      "Easy Link 9.3\"",
      "Pack RS Line",
      "Câmara traseira",
      "Cruise Control adaptativo",
    ],
    description:
      "Renault Clio RS Line, pouco rodado, garantia de fábrica até 2025. Como novo.",
    images: [
      u("photo-1542362567-b07e54358753"),
      u("photo-1617469767053-d3b523a0b982"),
      u("photo-1606664515524-ed2f786a0bd6"),
    ],
  },
  {
    slug: "tesla-model-3-long-range",
    brand: "Tesla",
    model: "Model 3",
    version: "Long Range AWD",
    year: 2022,
    km: 62000,
    fuel: "Elétrico",
    transmission: "Automática",
    power: 366,
    price: 36900,
    color: "Branco Pérola Multi-Coat",
    doors: 4,
    seats: 5,
    segment: "Berlina",
    highlights: [
      "Autonomia 580 km (WLTP)",
      "Autopilot avançado",
      "Tração integral",
      "0-100 em 4.4s",
    ],
    description:
      "Tesla Model 3 Long Range, dual motor AWD. Supercharging incluído. Bateria com saúde superior a 95%. IUC isento.",
    images: [
      u("photo-1560958089-b8a1929cea89"),
      u("photo-1617531653332-bd46c24f2068"),
      u("photo-1593941707874-ef25b8b4a92b"),
    ],
    featured: true,
  },
  {
    slug: "toyota-corolla-touring-hybrid",
    brand: "Toyota",
    model: "Corolla Touring",
    version: "1.8 Hybrid Comfort+",
    year: 2020,
    km: 88500,
    fuel: "Híbrido",
    transmission: "Automática",
    power: 122,
    price: 21500,
    color: "Cinzento Tempestade",
    doors: 5,
    seats: 5,
    segment: "Carrinha",
    highlights: [
      "Consumo 4.4 L/100km",
      "Toyota Safety Sense",
      "Câmara 360º",
      "Bagageira 598 L",
    ],
    description:
      "Toyota Corolla Touring Hybrid, fiabilidade Toyota e baixos consumos. Ideal para TVDE ou família.",
    images: [
      u("photo-1617469767053-d3b523a0b982"),
      u("photo-1606220838315-056192d5e927"),
      u("photo-1494976388531-d1058494cdd8"),
    ],
  },
  {
    slug: "vw-tiguan-elegance-tdi",
    brand: "Volkswagen",
    model: "Tiguan",
    version: "2.0 TDI Elegance DSG",
    year: 2021,
    km: 79200,
    fuel: "Diesel",
    transmission: "Automática",
    power: 150,
    price: 31900,
    color: "Cinzento Pirite",
    doors: 5,
    seats: 5,
    segment: "SUV",
    highlights: [
      "Pack Elegance",
      "Travel Assist",
      "Banco condutor ergoActive",
      "Discover Pro 10\"",
    ],
    description:
      "VW Tiguan Elegance DSG, SUV familiar com elevado nível de equipamento. Estado impecável, sempre revisto.",
    images: [
      u("photo-1606664515524-ed2f786a0bd6"),
      u("photo-1555215695-3004980ad54e"),
      u("photo-1617531653332-bd46c24f2068"),
    ],
  },
];

export function getCar(slug: string): Car | undefined {
  return cars.find((c) => c.slug === slug);
}

export const brands = Array.from(new Set(cars.map((c) => c.brand))).sort();
export const fuels: Fuel[] = ["Gasolina", "Diesel", "Híbrido", "Elétrico"];

export function formatEUR(n: number) {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function formatKm(n: number) {
  return new Intl.NumberFormat("pt-PT").format(n) + " km";
}
