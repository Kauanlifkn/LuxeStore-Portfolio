const produtos = [
  { id:1, nome:"Camisa Social Premium", preco:299.90, categoria:"masculino", img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQuYhqlOTix6tJ1GSIZjp9FViVvpxoRS5JvV06UAYpZIfqIDQATsAITw_3u2TfWS1LFfD4iLw8PLrW47-rdtq5lJjEvGuy6LQ3mzSo49Z2ktsIUjWXg8kMS", desc:"Algodão egípcio de alta gramatura. Corte italiano moderno." },
  { id:2, nome:"Vestido Midi Silk", preco:459.90, categoria:"feminino", img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQub8q1oe86KvNXCbwoXYsn_Lk6mkjTxyBgmL6lWRBfhBXMI5QtNLgMXxFvAbTnYV_J9ZfWR45ObJaiYwTVlEqcST1ZjW7o5-BKExonoS8YPS6Wv4gTsgg2ow", desc:"Toque de seda com caimento fluido e elegante." },
  { id:3, nome:"Sneaker Urban Pro", preco:529.90, categoria:"calcados", img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800", desc:"Tecnologia de amortecimento e design futurista." },
  { id:4, nome:"Watch Gold Edition", preco:899.90, categoria:"acessorios", img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXZZ5mA_mJiEohKhLYDs_JvhNqHn5O1aKyaerpOxbNKPr7s5zTv_0z4QpgMw6m3dxQoOrsDlybjPQXdg0c9aSBrFa3G5YyHPWt5AgHiD0u5x4xiQch6mWkhg", desc:"Resistente à água, vidro de safira e acabamento premium." },
  { id:5, nome:"Blazer Slim Night", preco:749.90, categoria:"masculino", img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPhWWcy21hJJaDCpEfF97WAMLjZKqv6N1fsUItXl--UVoQ2Y_v85YjeLiEDLNMojLEuYj_HKiWqXEvfWjGo8f0TtFf8TYI5BvbjeambZ7LddEMqAoZ5_Aq", desc:"Corte slim fit ideal para eventos noturnos." },
  { id:6, nome:"Bolsa Leather Tote", preco:999.90, categoria:"acessorios", img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRe8QH08Au0dM_aNV8d8Z0aneLkqzQVciy5prrENyZ1QGT97mi4eY1ig--Bq1kAy8wKSroYBHmg8QHLwqbxox17MNkrHbGZ2Z67m6weFoNdK0_-qJwn2_JgOA", desc:"Couro legítimo com compartimentos inteligentes." },
  { id:7, nome:"Salto Nude Classic", preco:429.90, categoria:"calcados", img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_Xs9XnM_X1tAv0epSKEZXY9mM01HfgCOmrMsnW7WpxRFIpUdQbMfiYOU_zQ3bOCl4vLIft0GN8Z1GW5x7u7wtiZdVxdXWsYshK07TyJC0O9TFiRy3SrQLbw", desc:"Conforto para o dia todo com elegância inigualável." },
  { id:8, nome:"Linen Shirt Breeze", preco:279.90, categoria:"masculino", img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIGOXTJKHBuCEb3HfpvaX9Ml6JaWRRv7PWBwBGTiuLHbJ5w7P6nIbEhm2jleMjWixth9Mg-ex_aqGN4sLJacsSUyJYyq_-rVVxP_LfRqBGGRMpE6K0TthvSg", desc:"100% Linho natural, respirável e sofisticado." },
  { id:9, nome:"Jaqueta Moto Leather", preco:1199.90, categoria:"masculino", img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8isZFdwPb4QQLjtGaYaQme08BXRSBs0ANm5nYaCZjUmCTT445uYRQErtWsOpVCInE8N7q2iH9dF01mRNAy263APySlUkgHA", desc:"Estilo rebelde com acabamento de alta costura." },
  { id:10, nome:"Colar Gold Minimal", preco:239.90, categoria:"acessorios", img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTtCIQEs-_S4LCYTH84JooqV8ggqxz8y968v5-VgBSkUeq911VqHNTcuJ4P_hO2iQNJsNhMOcnonA4j1bnBZvv0wFHdL0uN5utS4w0ZBYI", desc:"Banhado a ouro 18k, design geométrico." },
  { id:11, nome:"Óculos Sun Classic", preco:350.00, categoria:"acessorios", img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800", desc:"Proteção UV400 com armação de acetato italiano." },
  { id:12, nome:"Bota Chelsea Suede", preco:580.00, categoria:"calcados", img:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800", desc:"Camurça legítima e solado antiderrapante." }
];

let carrinho = [];
let produtosFiltrados = produtos;

function renderProdutos(lista) {
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";
  if (lista.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:50px;">
        <h3>Nenhum produto encontrado</h3><p>Tente outra categoria.</p>
    </div>`;
    return;
  }
  lista.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.onclick = () => abrirModal(p.id);
    div.innerHTML = `
      <div style="overflow:hidden;"><img src="${p.img}" alt="${p.nome}"></div>
      <div class="product-info">
        <h4>${p.nome}</h4>
        <p>${p.desc.substring(0,40)}...</p>
        <span class="price">R$ ${p.preco.toFixed(2)}</span>
      </div>`;
    grid.appendChild(div);
  });
}

function filterCategory(cat, btn) {
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".navbar a").forEach(b => b.classList.remove("active"));
  
  if(btn) btn.classList.add("active");
  
  produtosFiltrados = cat === "todos" ? produtos : produtos.filter(p => p.categoria === cat);
  renderProdutos(produtosFiltrados);
  
  if(window.innerWidth <= 768) toggleMenu(); // Fecha menu no mobile ao clicar
}

function buscarProduto() {
  const termo = document.getElementById("searchInput").value.toLowerCase();
  const filtrados = produtosFiltrados.filter(p => p.nome.toLowerCase().includes(termo));
  renderProdutos(filtrados);
}

// LÓGICA DO MODAL E PRODUTOS RELACIONADOS
function abrirModal(id) {
  const p = produtos.find(x => x.id === id);
  const modal = document.getElementById("modalProduct");
  const body = document.getElementById("modalBody");
  
  // Renderiza Produto Principal
  body.innerHTML = `
    <img src="${p.img}" alt="${p.nome}">
    <div class="modal-info">
      <h2>${p.nome}</h2>
      <p class="desc">${p.desc}</p>
      <h3 style="color:#c6a664;margin-bottom:20px;font-size:28px;">R$ ${p.preco.toFixed(2)}</h3>
      <button class="btn-add" onclick="addToCart(${p.id})">Adicionar à Sacola</button>
    </div>`;
    
  // Renderiza Produtos Relacionados (Mesma Categoria, exceto o atual)
  renderRelated(p.categoria, p.id);
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Evita rolagem do fundo
}

function renderRelated(categoria, currentId) {
    const container = document.getElementById("relatedProducts");
    // Filtra mesma categoria e exclui o produto atual
    const related = produtos.filter(p => p.categoria === categoria && p.id !== currentId).slice(0, 4);
    
    container.innerHTML = "";
    
    if(related.length === 0) {
        container.innerHTML = "<p>Sem produtos similares no momento.</p>";
        return;
    }

    related.forEach(p => {
        const div = document.createElement("div");
        div.className = "related-card";
        div.onclick = () => abrirModal(p.id); // Abre o novo produto
        div.innerHTML = `
            <img src="${p.img}">
            <h5>${p.nome}</h5>
            <span>R$ ${p.preco.toFixed(2)}</span>
        `;
        container.appendChild(div);
    });
}

function fecharModal() {
  document.getElementById("modalProduct").classList.remove("active");
  document.body.style.overflow = "auto";
}

function addToCart(id) {
  const p = produtos.find(x => x.id === id);
  const item = carrinho.find(x => x.id === id);
  if (item) item.qtd++;
  else carrinho.push({ ...p, qtd: 1 });
  
  atualizarCarrinho();
  fecharModal();
  toggleCart(true);
  showToast(`"${p.nome}" adicionado à sacola!`, "success");
}

function atualizarCarrinho() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";
  let total = 0;
  
  if(carrinho.length === 0) {
      list.innerHTML = "<p style='text-align:center;color:#999;margin-top:20px;'>Sua sacola está vazia.</p>";
  }

  carrinho.forEach(i => {
    total += i.preco * i.qtd;
    const el = document.createElement("div");
    el.className = "drawer-item";
    el.innerHTML = `
      <img src="${i.img}">
      <div style="flex:1">
        <p><strong>${i.nome}</strong></p>
        <p style="color:#c6a664;">R$ ${i.preco.toFixed(2)}</p>
        <div style="display:flex;gap:10px;align-items:center;margin-top:5px;">
          <button onclick="alterarQtd(${i.id},-1)">−</button>
          <span style="font-weight:600;width:20px;text-align:center;">${i.qtd}</span>
          <button onclick="alterarQtd(${i.id},1)">+</button>
        </div>
      </div>`;
    list.appendChild(el);
  });
  
  document.getElementById("cartCount").innerText = carrinho.reduce((acc, item) => acc + item.qtd, 0);
  document.getElementById("totalValue").innerText = `R$ ${total.toFixed(2)}`;
}

function alterarQtd(id, delta) {
  const i = carrinho.find(x => x.id === id);
  if (!i) return;
  i.qtd += delta;
  if (i.qtd <= 0) carrinho = carrinho.filter(x => x.id !== id);
  atualizarCarrinho();
}

function toggleCart(show) {
  const drawer = document.getElementById("drawer");
  if (show) drawer.classList.add("active");
  else drawer.classList.remove("active");
}

function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

function showToast(msg, type) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `✅ ${msg}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function finalizarPedido() {
  if(carrinho.length === 0) {
      showToast("Sua sacola está vazia!", "error");
      return;
  }
  showToast("Pedido enviado com sucesso!", "success");
  carrinho = [];
  atualizarCarrinho();
  toggleCart(false);
}

function scrollToProducts() {
  document.getElementById("productsGrid").scrollIntoView({ behavior: "smooth" });
}

// Fechar modal ao clicar fora
document.getElementById("modalProduct").addEventListener("click", (e) => {
    if (e.target.id === "modalProduct") fecharModal();
});

document.addEventListener("DOMContentLoaded", () => renderProdutos(produtos));
