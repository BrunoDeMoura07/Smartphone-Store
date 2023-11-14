const itens = [
    {
        id: 0,
        nome:'parceiros',
        img:'imagem.jpg',
        quantidade: 0
    },
    {
        id: 0,
        nome:'eletrônicos',
        img:'imagem.jpg',
        quantidade: 0
    },
    {
        id: 0,
        nome:'beleza',
        img:'imagem.jpg',
        quantidade: 0
    },
    {
        id: 0,
        nome:'utilidades',
        img:'imagem.jpg',
        quantidade: 0
    },
]

iniciarLoja = () => {
    const containerProdutos = document.getElementById('product-gallery');
    itens.map((val)=>{
        console.log(val.nome);
        containerProdutos.innerHTML+=
        <div class="produto">
            <p>oi</p>
        </div>
    })
}
iniciarLoja();