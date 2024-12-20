import {APP_API} from './../../src/app/config/app-api.config';
describe('My First Test', () => {
  it('Visits la page Cv', () => {
    cy.intercept(APP_API.cv, {fixture: 'cvs'});
    cy.visit('/cv');
    cy.get('[data-cy="listCvs"]');
    cy.get('[data-cy="cvCard"]').should('not.exist');
    // Quand tu as un appel http APP_API.cv remplace le résultat pâr le fixture cvs
    cy.get('[data-cy="listCvs"]').children().first().click();
    cy.intercept(APP_API.cv + 1, { fixture: 'cv1' });
    cy.get('[data-cy="cvCardButton"]').click({ force: true });
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/cv/1');
    });

  });
});
