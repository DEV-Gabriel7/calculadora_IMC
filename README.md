# Calculadora de IMC 🧮

Projeto de uma **calculadora de IMC (Índice de Massa Corporal)** construída com **React**.  
Permite ao usuário calcular seu IMC e visualizar a classificação do peso de forma dinâmica e interativa.

## 🔧 Tecnologias utilizadas
- **React**: criação de componentes reutilizáveis e gerenciamento de estado  
- **useState**: manipulação de dados e interatividade  
- **CSS Modules**: estilização modular (`Form.module.css`)  
- **JavaScript**: lógica de cálculo e classificação do IMC  

## 📁 Estrutura do projeto

```
├── src/
│   ├── components/
│   │   └── Form.jsx
│   ├── styles/
│   │   └── Form.module.css
│   └── App.jsx
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Como rodar localmente

1. Clone o repositório:  
```bash
git clone https://github.com/DEV-Gabriel7/seu-repositorio-imc.git
cd seu-repositorio-imc
```

2. Instale as dependências:  
```bash
npm install
```

3. Inicie o projeto:  
```bash
npm start
```

O projeto será aberto automaticamente em `http://localhost:3000`.

## ✨ Funcionalidades

- Inputs para **altura** (em metros) e **peso** (em kg)  
- Máscara no input da altura para permitir até 2 casas decimais  
- Botão **Calcular IMC** com validação de valores  
- Exibição do **resultado do IMC** com duas casas decimais  
- Classificação do IMC:
  - Abaixo do peso  
  - Peso normal  
  - Sobrepeso  
  - Obesidade grau 1  
  - Obesidade grau 2  
  - Obesidade grau 3  
- Estilização dinâmica baseada na classificação (cores de alerta e perigo)  
- **Tabela de classificação** do IMC para consulta rápida

## 🔮 Possíveis melhorias futuras

- Adicionar gráficos ou indicadores visuais do IMC  
- Integração com histórico de cálculos via `localStorage`  
- Layout responsivo avançado para dispositivos móveis  
- Temas claros e escuros

## 👨‍💻 Autor

**Gabriel Ferreira**  
🔗 Linkedin: [@DEV-Gabriel7](https://www.linkedin.com/in/dev-gabriel7/)  
📧 Contato: gabrielriferreira@hotmail.com

## 🌐 Deploy

Hospedado via Vercel:  
👉 [Acesse o projeto](https://calculadora-imc-two-ruby.vercel.app/)

---

💡 Este projeto é uma forma prática de aprender **React, estados e interatividade**, e será atualizado conforme adiciono novas funcionalidades e melhorias! 🚀

