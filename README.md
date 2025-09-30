# 📄 Documentação Técnica do Portfólio Profissional

Este documento detalha a estrutura, tecnologias e funcionalidades do seu portfólio profissional desenvolvido em Next.js e Tailwind CSS.

---

## Visão Geral do Projeto

Este é um template de portfólio moderno e otimizado, desenvolvido para ser estático, rápido e fácil de manter.

| Recurso | Detalhe |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **Linguagem** | JavaScript / JSX |
| **Estilização** | Tailwind CSS (Design System Utility-First) |
| **Animações** | AOS (Animate On Scroll) |
| **Hospedagem** | Otimizado para Vercel |

---

## 🛠️ Funcionalidades Chave Implementadas

| Recurso | Detalhe da Implementação | Arquivos Chave |
| :--- | :--- | :--- |
| **Contato (Formspree)** | O formulário envia dados diretamente para o seu e-mail através do serviço Formspree, eliminando a necessidade de um backend. | `Contact.jsx` |
| **Botão Flutuante** | Botão de WhatsApp fixo no canto inferior direito (`fixed`), garantindo contato rápido em qualquer seção. | `WhatsAppButton.jsx`, `app/page.jsx` |
| **Animações de Rolagem** | Integração da biblioteca **AOS** para que as seções apareçam com efeitos sutis (`fade-up`, `fade-down`) ao entrar na viewport. | `app/layout.jsx` |
| **Seção de Habilidades** | Layout em **Grid Responsivo** (`grid-cols-2`, `sm:grid-cols-3`, etc.), substituindo o carrossel. | `Skills.jsx` |
| **Metadados (SEO)** | Título profissional e Favicon customizado (ícone do React Icons) configurados corretamente. | `app/head.jsx`, `app/icon.js` |
| **Links de Download** | Botões de CV implementados com o atributo `download`, forçando o download de um link externo. | `Hero.jsx`, `[Seu Outro Componente]` |

---

## 📂 Estrutura de Arquivos Chave

| Caminho | Propósito |
| :--- | :--- |
| `src/app/page.jsx` | Componente principal que orquestra todas as seções do portfólio. |
| `src/app/layout.jsx` | Layout base da aplicação, responsável pela inicialização do **AOS**. |
| `src/app/head.jsx` | Exporta o objeto `metadata` (título e descrição para SEO). |
| `src/app/icon.js` | Componente para o **Favicon** customizado. |
| `src/components/` | Contém todos os componentes de seção (`Hero`, `About`, `Skills`, etc.). |
| `tailwind.config.js` | Arquivo de configuração do Tailwind CSS (cores e utilitários). |

---

## ⚙️ Instalação e Execução Local

Siga estes passos para rodar o projeto em sua máquina:

1.  **Clone o repositório** e navegue até a pasta do projeto.
2.  **Instale as dependências** (incluindo `react-icons` e `aos`):
    ```bash
    npm install
    ```
3.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
    O portfólio estará acessível em `http://localhost:3000`.

---

## 📝 Como Personalizar o Conteúdo

Estes são os pontos de customização mais importantes:

### 1. Links de Contato

| Item | Localização | Ação |
| :--- | :--- | :--- |
| **Link do WhatsApp** | `src/components/WhatsAppButton.jsx` | Substitua o `phoneNumber` pela sua conta, incluindo código do país (ex: `5511999999999`). |
| **Endpoint do Formulário** | `src/components/Contact.jsx` | Troque `SEU_ENDPOINT_DO_FORMSPREE` pelo link gerado pelo **Formspree**. |
| **Link do CV** | `src/components/Hero.jsx` (e segundo componente) | Atualize a constante `CV_LINK` com a URL direta do seu PDF. |

### 2. Conteúdo Estático

| Item | Localização | Ação |
| :--- | :--- | :--- |
| **Skills** | `src/components/Skills.jsx` | Edite o array `const skills` para adicionar/remover habilidades e ícones. |
| **Metadata** | `src/app/head.jsx` | Atualize o `title` e a `description` para a sua marca pessoal. |
| **Texto Geral** | `Hero.jsx`, `About.jsx`, etc. | Altere o texto de cada componente para refletir sua experiência e projetos. |

---