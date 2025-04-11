import Image from "next/image";
import BarraSuperior from "../widgets/BarraSuperior";
import MenuNavegacao from "../widgets/MenuNavegacao";

type Props = {
  params: {
    id: string;
  };
};

const dados = {
  produtos: [
    {
      id: 1,
      titulo: "Smartphone Samsung Galaxy S23",
      descricao: 'Tela AMOLED 6.1", 128GB, Câmera Tripla, 5G',
      preco: "3599.99",
      local: "Brasília",
      url: "Smartphone Samsung Galaxy S23",
      categoria: "Eletrônicos",
      imagem: "/images/s24.avif",
      estoque: 10,
    },
    {
      id: 2,
      titulo: "Notebook Dell Inspiron 15",
      descricao: "Intel i5, 8GB RAM, 512GB SSD, Windows 11",
      preco: "4299.9",
      local: "Brasília",
      url: "Notebook Dell Inspiron 15",
      categoria: "Informática",
      imagem: "/images/notebook.avif",
      estoque: 7,
    },
    {
      id: 3,
      titulo: "Fone de Ouvido Bluetooth JBL",
      descricao: "Som potente, cancelamento de ruído, bateria de 40h",
      preco: "499.0",
      local: "Brasília",
      url: "Fone de Ouvido Bluetooth JBL",
      categoria: "Áudio",
      imagem: "/images/jbl.avif",
      estoque: 25,
    },
    {
      id: 4,
      titulo: "Tênis Nike Air Max",
      descricao: "Conforto e estilo para o dia a dia",
      preco: "699.9",
      local: "Brasília",
      url: "Tênis Nike Air Max",
      categoria: "Moda",
      imagem: "/images/nike.avif",
      estoque: 12,
    },
    {
      id: 5,
      titulo: "Cafeteira Elétrica Philco",
      descricao: "15 xícaras, com filtro permanente",
      preco: "149.99",
      local: "Brasília",
      url: "Cafeteira Elétrica Philco",
      categoria: "Eletrodomésticos",
      imagem: "/images/cafeteira.avif",
      estoque: 18,
    },
    {
      id: 6,
      titulo: 'TV LG 50" 4K UHD',
      descricao: "Smart TV com webOS, HDR10, Wi-Fi",
      preco: "2599.0",
      local: "Brasília",
      url: "TV LG 50 4K UHD",
      categoria: "Eletrônicos",
      imagem: "/images/tv.avif",
      estoque: 5,
    },
    {
      id: 7,
      titulo: "Relógio Smartwatch Xiaomi",
      descricao: "Monitoramento de saúde e notificações",
      preco: "349.9",
      local: "Brasília",
      url: "Relógio Smartwatch Xiaomi",
      categoria: "Acessórios",
      imagem: "/images/relogio.avif",
      estoque: 20,
    },
    {
      id: 8,
      titulo: "Impressora Multifuncional HP",
      descricao: "Wi-Fi, impressão, cópia e digitalização",
      preco: "599.0",
      local: "Brasília",
      url: "Impressora Multifuncional HP",
      categoria: "Informática",
      //imagem: "https://example.com/impressora-hp.jpg",
      estoque: 9,
    },
    {
      id: 9,
      titulo: "Geladeira Brastemp Frost Free",
      descricao: "375L, Inox, com controle de temperatura",
      preco: "3199.99",
      local: "Brasília",
      url: "Geladeira Brastemp Frost Free",
      categoria: "Eletrodomésticos",
      //imagem: "https://example.com/geladeira-brastemp.jpg",
      estoque: 3,
    },
    {
      id: 10,
      titulo: "Mochila para Notebook Targus",
      descricao: 'Resistente à água, para notebooks até 15.6"',
      preco: "199.9",
      local: "Brasília",
      url: "Mochila para Notebook Targus",
      categoria: "Acessórios",
      //imagem: "https://example.com/mochila-targus.jpg",
      estoque: 30,
    },
    {
      id: 11,
      titulo: "Cadeira Gamer ThunderX3",
      descricao: "Ajustável, com apoio lombar e de braço",
      preco: "999.0",
      local: "Brasília",
      url: "Cadeira Gamer ThunderX3",
      categoria: "Móveis",
      //imagem: "https://example.com/cadeira-gamer.jpg",
      estoque: 4,
    },
    {
      id: 12,
      titulo: "Livro 'O Poder do Hábito'",
      descricao: "Charles Duhigg, edição brochura",
      preco: "49.9",
      local: "Brasília",
      url: "Livro O Poder do Hábito",
      categoria: "Livros",
      //imagem: "https://example.com/livro-poder-habito.jpg",
      estoque: 50,
    },
  ],
};

export default function Detalhes({ params }: Props) {
  const { id } = params;
  const produtos = dados.produtos;

  return (
    <div>
      <header className="bg-amber-300">
        <BarraSuperior />
        <MenuNavegacao />
      </header>

      <main>
        {produtos.map((itens) => (
          <>
            <div className="max-w-6xl mx-auto px-4 py-10" key={itens.id}>
              <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[400px]">
                  <Image
                    key={itens.id}
                    src={itens.url}
                    alt={itens.titulo}
                    className="w-full rounded-xl shadow"
                    width={300}
                    height={300}
                  />
                </div>

                <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                      {itens.titulo}
                    </h1>
                    <p className="text-3xl text-green-600 font-bold mb-4">
                      {itens.preco}
                    </p>
                    <p className="text-gray-700 mb-4">{itens.descricao}</p>
                    <p className="text-sm text-gray-500">{itens.local}</p>
                  </div>
                  <button className="mt-6 bg-blue-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-blue-700 transition">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </main>
    </div>
  );
}
