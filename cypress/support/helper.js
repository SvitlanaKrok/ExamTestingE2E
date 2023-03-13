function isProductDisplayed(productName) {
  return Cypress.$(`div.mat-grid-tile-content:contains('${productName}')`).length > 0;
}

function isNextPageAvailable() {
  return !Cypress.$("button.mat-paginator-navigation-next[aria-label='Next page']").prop('disabled');
}

export function searchProduct(productName) {
  cy.get('body').then((body) => {
    if (isProductDisplayed(productName)) {
      cy.get('div.mat-grid-tile-content')
        .contains('div', productName)
        .parents('div.mat-grid-tile-content')
        .find('button')
        .click();
    } else if (isNextPageAvailable()) {
      cy.get("button.mat-paginator-navigation-next[aria-label='Next page']").click();
      searchProduct(productName);
    }
  })
}