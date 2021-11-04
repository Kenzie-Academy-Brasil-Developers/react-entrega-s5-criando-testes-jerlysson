context("Search", () => {
  it("pesquisar pelo cep passado", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.intercept("GET", `https://api.postmon.com.br/v1/cep/${"65058526"}`).as(
      "CEP"
    );
    cy.get("[placeholder='Insira o CEP']").type("65058526");
    cy.contains("Buscar pelo CEP").click();

    cy.get(".Address");
  });

  it("Não pesquisar pelo cep com menos de 8 digitos", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.intercept("GET", `https://api.postmon.com.br/v1/cep/${"6505852"}`).as(
      "CEP"
    );
    cy.get("[placeholder='Insira o CEP']").type("6505852");
    cy.contains("Buscar pelo CEP").click();
    cy.contains("CEP inválido! São necessários 8 números");
  });

  it("Não pesquisar pelo cep com o input vazio", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.get("[placeholder='Insira o CEP']").should("be.empty");
    cy.contains("Buscar pelo CEP").should("be.disabled");
  });
});
