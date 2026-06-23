# ERP Mirante — Relatório de Testes Manuais

Sistema de gestão empresarial completo desenvolvido para pequenas e médias empresas brasileiras.

## Sobre o Sistema

O ERP Mirante cobre os principais fluxos de uma operação comercial: cadastro de pessoas (clientes e fornecedores), controle de estoque, vendas com PDV integrado, financeiro (contas a pagar e receber), compras com entrada de mercadorias via XML NF-e, emissão fiscal e gestão de usuários por perfil.

## Tecnologias

- **Frontend/Backend:** Next.js 15 com App Router e Server Actions
- **Banco de dados:** PostgreSQL 16 via Prisma ORM
- **Autenticacao:** NextAuth v4 com sessoes JWT e isolamento por empresa
- **Fiscal:** Spedy API (NF-e, NFC-e, NFS-e via SEFAZ sandbox)
- **Pagamentos:** K8Pay (PIX e Boleto via OAuth password grant + AES-128-CBC)
- **Conta digital:** K8 Conta Digital (extrato, conciliacao automatica, multiempresa)
- **Storage:** Cloudflare R2 para fotos de produtos, servicos e anexos
- **Testes unitarios:** Vitest

## Estrutura dos Testes

Os testes manuais seguem o padrao POP-QA-001 da ByStartup.
Cada modulo tem sua propria pagina HTML com fluxos em acordeao e tabela de casos de teste.

