# Diagrama

## Relacionamento

```mermaid
classDiagram


class Pessoa {
    id: string;
    Nome: string;
    cpf: string;
    email: string;
    dataNasc :datetime;
}


class Log3 {
    acao: string;
    usuario?: Usuario;
    entidade?: any;
}

```
