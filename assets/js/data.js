const pizzas = [
    {
        salgadas_classicas: [
            {
                id: 101,
                image: 'assets/img/pizzas/salgadas/margherita.webp',
                nome: "Margherita",
                descricao: "Molho de tomate italiano, mussarela fresca, manjericão e azeite.",
                preco: 45.00
            },
            {
                id: 102,
                image: 'assets/img/pizzas/salgadas/calabresa.webp',
                nome: "Calabresa",
                descricao: "Molho de tomate, mussarela, calabresa fatiada e cebola.",
                preco: 48.00
            },
            {
                id: 103,
                image: 'assets/img/pizzas/salgadas/portuguesa.webp',
                nome: "Portuguesa",
                descricao: "Molho de tomate, mussarela, presunto, ovo, cebola, azeitona e pimentão.",
                preco: 52.00
            },
            {
                id: 104,
                image: "assets/img/pizzas/salgadas/frango-catupiry.webp",
                nome: "Frango com Catupiry",
                descricao: "Molho de tomate, mussarela, frango desfiado e catupiry original.",
                preco: 50.00
            }
        ], 
        salgadas_especiais: [
            {
                id: 201,
                image: "assets/img/pizzas/salgadas especiais/moda-casa.webp",
                nome: "Forno Divino (Da Casa)",
                descricao: "Molho de tomate, mussarela de búfala, tomate cereja, presunto parma e rúcula fresca.",
                preco: 65.00
            },
            {
                id: 202,
                image: "assets/img/pizzas/salgadas especiais/quatro-queijos.webp",
                nome: "Quatro Queijos",
                descricao: "Molho de tomate, mussarela, provolone, parmesão e gorgonzola.",
                preco: 58.00
            },
            {
                id: 203,
                image: "assets/img/pizzas/salgadas especiais/pepperoni.webp",
                nome: "Pepperoni",
                descricao: "Molho de tomate, mussarela e pepperoni especial.",
                preco: 60.00
            }
        ], 
        doces: [
            {
                id: 301,
                image: "assets/img/pizzas/doces/chocolate-morango.webp",
                nome: "Chocolate com Morango",
                descricao: "Brigadeiro cremoso, morangos frescos e granulado.",
                preco: 40.00
            },
            {
                id: 302,
                image: "assets/img/pizzas/doces/romeu-julieta.webp",
                nome: "Romeu & Julieta",
                descricao: "Mussarela e goiabada cremosa.",
                preco: 38.00
            }
        ]
    }
]

export { pizzas };