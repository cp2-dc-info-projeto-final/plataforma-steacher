# Especificação de Classes

# Sumário

- [Usuario](#Usuario)
- [Aluno](#Aluno)
- [Professor](#Professor)
- [Administrador](#Administrador)
- [Turma](#Turma)
- [Materia](#Materia)
- [Mural](#Mural)

# Descrição
## Usuario
***Atributos:***
+ nome
+ nascimento
+ login
+ senha

***Métodos:***
+ logar( )
+ mudarAtributo( )

## Aluno
***Classes Herdadas:*** Usuario

***Atributos:***
+ nome
+ nascimento
+ matricula
+ biografia
+ login
+ senha
+ Turma

***Métodos:***
+ mudarAtributo( )

## Professor
***Classes Herdadas:*** Usuario

***Atributos***
+ nome
+ nascimento
+ matricula
+ biografia
+ login
+ senha
+ Turmas
+ Máteria

***Métodos:***
+ mudarAtributo( )

## Administrador
***Classes Herdadas:*** Usuario

***Atributos:***
+ nome
+ nascimento
+ matricula
+ login
+ senha

## Turma
***Atributos:***
+ nome
+ curso
+ Materias

***Métodos:***
+ adicionarAluno
+ adicionarProfessor

## Materia
***Atributos:***
+ nome
+ chat
+ midia

***Métodos:***
+ enviarMensagem( )
+ excluirMensagem( )
+ enviarArquivo( )
+ mostrarMensagens( )
+ adicionarProfessor( )

## Mural
***Atributos:***
+ mensagens
+ texto

***Métodos:***
+ mostrarMural( )
+ adicionarMensagem( )
+ excluirMensagem( )
+ listarMensagens( )