import { Category } from "../types/category";
import { Product } from "../types/product";

type Data = {
    categories: Category[],
    products: Product[]
};
export const data: Data = {
    categories: [
        {
            id: 1,
            title: 'Eletrônicos',
            cover: 'https://picsum.photos/id/0/1000/300'
        },
        {
            id: 2,
            title: 'Paisagens',
            cover: 'https://picsum.photos/id/10/1000/300'
        },
        {
            id: 3,
            title: 'Acessórios',
            cover: 'https://picsum.photos/id/21/1000/300'
        }
    ],
    products: [
        { id: 4, idCategory: 1, image: "https://picsum.photos/id/3/200/200", title: "Câmera 4K", description: "Gravação ultra HD, qualidade profissional.", price: 499.99 },
        { id: 23, idCategory: 3, image: "https://picsum.photos/id/22/200/200", title: "Óculos de Sol", description: "Proteção UV, design moderno, armação leve.", price: 49.99 },
        { id: 15, idCategory: 2, image: "https://picsum.photos/id/14/200/200", title: "Floresta Verde", description: "Refúgio natural, ideal para caminhadas e exploração.", price: 34.99 },
        { id: 9, idCategory: 1, image: "https://picsum.photos/id/8/200/200", title: "Roteador Wi-Fi", description: "Conexão estável, cobertura ampla, múltiplos dispositivos.", price: 79.99 },
        { id: 12, idCategory: 2, image: "https://picsum.photos/id/11/200/200", title: "Montanha Nevada", description: "Pico alto, esportes de inverno, beleza natural.", price: 59.99 },
        { id: 6, idCategory: 1, image: "https://picsum.photos/id/5/200/200", title: "Tablet 10\"", description: "Tela brilhante, ideal para entretenimento e produtividade.", price: 299.99 },
        { id: 21, idCategory: 3, image: "https://picsum.photos/id/20/200/200", title: "Bolsa de Couro", description: "Design clássico, espaçosa e elegante para uso.", price: 89.99 },
        { id: 25, idCategory: 3, image: "https://picsum.photos/id/24/200/200", title: "Chapéu Elegante", description: "Proteção solar, estilo casual e estiloso.", price: 19.99 },
        { id: 5, idCategory: 1, image: "https://picsum.photos/id/4/200/200", title: "Smartwatch", description: "Monitoramento de saúde e notificações inteligentes.", price: 149.99 },
        { id: 8, idCategory: 1, image: "https://picsum.photos/id/7/200/200", title: "Console X", description: "Gráficos avançados, ampla biblioteca de jogos.", price: 399.99 },
        { id: 24, idCategory: 3, image: "https://picsum.photos/id/23/200/200", title: "Carteira Slim", description: "Compacta e prática, material durável.", price: 29.99 },
        { id: 28, idCategory: 3, image: "https://picsum.photos/id/30/200/200", title: "Cinto de Couro", description: "Alta qualidade, fivela ajustável, durável.", price: 24.99 },
        { id: 3, idCategory: 1, image: "https://picsum.photos/id/2/200/200", title: "Fone Bluetooth", description: "Som cristalino, cancelamento de ruído ativo.", price: 199.99 },
        { id: 18, idCategory: 2, image: "https://picsum.photos/id/17/200/200", title: "Cachoeira Majestosa", description: "Queda d'água impressionante, espetáculo natural.", price: 64.99 },
        { id: 30, idCategory: 3, image: "https://picsum.photos/id/39/200/200", title: "Luvas de Inverno", description: "Forradas, confortáveis, aquecem em climas frios.", price: 19.99 },
        { id: 11, idCategory: 2, image: "https://picsum.photos/id/10/200/200", title: "Praia Tropical", description: "Areia branca, águas cristalinas, cenário paradisíaco.", price: 49.99 },
        { id: 19, idCategory: 2, image: "https://picsum.photos/id/18/200/200", title: "Pôr do Sol", description: "Cores vibrantes, horizonte deslumbrante e sereno.", price: 24.99 },
        { id: 16, idCategory: 2, image: "https://picsum.photos/id/15/200/200", title: "Cânion Profundo", description: "Formações rochosas impressionantes, vista espetacular.", price: 54.99 },
        { id: 14, idCategory: 2, image: "https://picsum.photos/id/13/200/200", title: "Campo Florido", description: "Cores vibrantes, beleza natural e ar fresco.", price: 29.99 },
        { id: 29, idCategory: 3, image: "https://picsum.photos/id/36/200/200", title: "Colar Elegante", description: "Design sofisticado, charme e refinamento.", price: 44.99 },
        { id: 1, idCategory: 1, image: "https://picsum.photos/id/0/200/200", title: "Smartphone X1", description: "Alta performance, tela AMOLED e câmera avançada.", price: 599.99 },
        { id: 2, idCategory: 1, image: "https://picsum.photos/id/1/200/200", title: "Laptop Pro", description: "Design elegante, processador i7, 16GB RAM.", price: 1299.99 },
        { id: 7, idCategory: 1, image: "https://picsum.photos/id/6/200/200", title: "TV LED 50\"", description: "Imagem vívida, resolução 4K, serviços de streaming.", price: 799.99 },
        { id: 17, idCategory: 2, image: "https://picsum.photos/id/16/200/200", title: "Deserto Dourado", description: "Dunas infinitas, cenário árido e fascinante.", price: 44.99 },
        { id: 13, idCategory: 2, image: "https://picsum.photos/id/12/200/200", title: "Lago Sereno", description: "Água calma, tranquilidade e paz de espírito.", price: 39.99 },
        { id: 22, idCategory: 3, image: "https://picsum.photos/id/21/200/200", title: "Relógio Esportivo", description: "Cronômetro, resistência à água, pulseira confortável.", price: 59.99 },
        { id: 10, idCategory: 1, image: "https://picsum.photos/id/9/200/200", title: "Drone Pro", description: "Voo preciso, câmera HD, controle intuitivo.", price: 699.99 },
        { id: 26, idCategory: 3, image: "https://picsum.photos/id/25/200/200", title: "Lenço de Seda", description: "Toque suave, estampas sofisticadas, elegante.", price: 14.99 },
        { id: 27, idCategory: 3, image: "https://picsum.photos/id/26/200/200", title: "Pulseira de Prata", description: "Detalhes delicados, sofisticação e estilo.", price: 39.99 },
        { id: 20, idCategory: 2, image: "https://picsum.photos/id/19/200/200", title: "Campos de Trigo", description: "Cenas pastorais tranquilas, brisa suave.", price: 31.99 }
    ]
}