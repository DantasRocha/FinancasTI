# Diagrama

## Classes

Empresa,Cargo,Pessoa,Banco,Cartao,Conta,Categoria,Limite,Receita,Despesa,Mensagem,Icone,Contato,Usuario,Perfil,Parametros,Enums,Log

## Relacionamento

```mermaid
classDiagram

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Pessoa {
  id         String     @id @default(auto()) @map("_id")
  nome       String
  cpf        String     @unique
  email      String     @unique
  dataNasc   DateTime
  genero     String?
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt
  enderecos  Endereco[] @relation(fields: [id], references: [pessoaId])
  contatos   Contato[]  @relation(fields: [id], references: [pessoaId])
  documentos Documento[] @relation(fields: [id], references: [pessoaId])
  configuracoes Configuracao[] @relation(fields: [id], references: [pessoaId])
}

model Contato {
  id        String  @id @default(auto()) @map("_id")
  tipo      ContatoTipo
  valor     String
  preferencial Boolean @default(false)
  pessoaId  String
}

model Endereco {
  id         String  @id @default(auto()) @map("_id")
  rua        String
  numero     String
  complemento String?
  bairro     String
  cidade     String
  estado     String
  cep        String
  pais       String
  pessoaId   String
}

model Documento {
  id         String  @id @default(auto()) @map("_id")
  tipo       DocumentoTipo
  numero     String
  emissor    String
  dataEmissao DateTime
  validade   DateTime?
  pessoaId   String
}

model Configuracao {
  id        String  @id @default(auto()) @map("_id")
  chave     String
  valor     String
  descricao String?
  escopo    ConfiguracaoEscopo
  pessoaId  String?
}

enum ContatoTipo {
  TELEFONE
  EMAIL
  WHATSAPP
}

enum DocumentoTipo {
  RG
  CPF
  CNH
  PASSAPORTE
}

enum ConfiguracaoEscopo {
  GLOBAL
  USUARIO
  MODULO
}
```
