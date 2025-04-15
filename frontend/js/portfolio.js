// js/portfolio.js
import { portfolioItems } from "./database.js";

function loadPortfolio() {
  // seleciona a <div class="row"> que conterá os itens
  const container = document.querySelector("#portfolio-items");
  if (!container) return;

  portfolioItems.forEach((item) => {
    // cria a estrutura HTML
    const itemDiv = document.createElement("div");
    itemDiv.className = "portfolio-item padd-15";

    itemDiv.innerHTML = `
      <div class="portfolio-item-inner shadow-dark">
        <a href="${item.link}" target="_blank" rel="noopener noreferrer">
          <div class="portfolio-img">
            <img src="${item.image}" alt="${item.title}" />
          </div>
          <div class="portfolio-title">
            <h3><span>PROJETO ${item.id} : </span>${item.title}</h3>
          </div>
        </a>
      </div>
    `;

    container.appendChild(itemDiv);
  });
}

// espera o DOM estar carregado
document.addEventListener("DOMContentLoaded", loadPortfolio);
