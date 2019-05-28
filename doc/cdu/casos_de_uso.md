# Especificação de Casos de Uso

# Sumário

- [CDU 01 - Login](#cdu-01---Login)
- [CDU 02 - Acesso às turmas](#cdu-02---Acesso-às-turmas)
- [CDU 03 - Acesso às matérias](#cdu-03---Acesso-às-matérias)
- [CDU 04 - Vizualização do perfil](#cdu-04---Vizualização-do-perfil)
- [CDU 05 - Personalização do perfil](#cdu-05---Personalização-do-perfil)
- [CDU 06 - Visualização do mural](#cdu-06---Visualização-do-mural)
- [CDU 07 - Cadastro de usuários](#cdu-07---Cadastro-de-usuários)
- [CDU 08 - Cadastro de turmas](#cdu-08---Cadastro-de-turmas)
- [CDU 09 - Inserção de informações no mural](#cdu-09---Inserção-de-informações-no-mural)
- [CDU 10 - Envio de Arquivos](#cdu-10---Envio-de-arquivos)
- [CDU 11 - Chat de mensagens](#cdu-11---Chat-de-mensagens)


# Descrição
## CDU 01 - Login
**Atores:** Professores, alunos e administradores. 

**Pré-condições:** Deverá possuir um usuário cadastrado.

**Fluxo principal:**
1. Inserir e-mail do usuário.
2. Informar a senha do usuário.
3. Confirmar dados.

**Fluxo alternativo:**
1. Caso senha ou login estiverem errados.
2. Mostrar ao usuário uma mensagem de erro.
   
## CDU 02 - Acesso às turmas
**Atores:** Alunos e professores.

**Pré-condições:** Deverá estar logado como aluno ou professor e estar dentro de alguma turma.

**Fluxo principal:**
1. Acessar às turmas a partir de algum botão ou link no site. 

## CDU 03 - Acesso às matérias
**Atores:** Alunos e professores. 

**Pré-condições:** Deverá estar logado como aluno e professor e estar dentro de alguma matéria.

**Fluxo principal:**
1. Acessar às matérias dentro das turmas.

## CDU 04 - Vizualização do perfil
**Atores:** Alunos e professores. 

**Pré-condições:** Deverá estar logado como aluno ou professor.

**Fluxo principal:**
1. Acessar ao perfil a partir de algum link ou botão.

## CDU 05 - Personalização do perfil
**Atores:** Alunos e professores. 

**Pré-condições:** Deverá estar logado como aluno ou professor.

**Fluxo principal:**
1. Acessar ao perfil a partir de algum link ou botão.
2. Dentro do perfil acessar a área de customização.
3. Informar novos dados.
4. Confirmar dados.

## CDU 06 - Visualização do mural
**Atores:** Alunos, professores e visitantes. 

**Fluxo principal:**
1. Acessar ao perfil a partir de algum link ou botão.
2. Dentro do perfil acessar a área de customização.
3. Informar novos dados.
4. Confirmar dados.

## CDU 07 - Cadastro de usuários
**Atores:** Administradores. 

**Pré-condições:** Deverá estar logado como administrador, deverá existir alguma turma.

**Fluxo principal:**
1. Indicar informações pessoais do usuário.
2. Indicar seu login e senha.
3. Indicar tipo de usuário.
4. Indicar turma.
5. Confirmar dados.

**Fluxo alternativo:**
1. Caso o tipo de usuário for "Professor".
2. Indicar matérias do usuário.

## CDU 08 - Cadastro de turmas
**Atores:** Administradores. 

**Pré-condições:** Deverá estar logado como administrador.

**Fluxo principal:**
1. Indicar nome da turma.
2. Indicar se o curso é tecnico.
2. Confirmar dados.

## CDU 09 - Inserção de informações no mural
**Atores:** Administradores. 

**Pré-condições:** Deverá estar logado como administrador.

**Fluxo principal:**
1. Digitar informação.
2. Enviar informação.

## CDU 10 - Envio de arquivos
**Atores:** Professores. 

**Pré-condições:** Deverá estar logado como professor.

**Fluxo principal:**
1. Escolher um arquivo no computador.
2. Escrever um título para o arquivo.
3. Enviar arquivo para as turmas de sua escolha.

## CDU 11 - Chat de mensagens
**Atores:** Alunos e professores. 

**Pré-condições:** Deverá estar logado como aluno ou professor.

**Fluxo principal:**
1. Escrever uma mensagem para uma ou mais turmas.
2. Enviar mensagem.