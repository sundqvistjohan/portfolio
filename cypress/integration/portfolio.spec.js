context('Portfolio', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    describe('can visit site and read landing page', () => {
        
        it('can read the landing page', () => {
            cy.get('.ui.main.container')
              .should('contain', 'Hi!')
        })

        it('can find the GitHub icon in the footer', () => {
            cy.get('footer')
              .find('.github.icon')
        });
    })
    
    describe('Lists all projects', () => {
        it('navigates to projects page', () => {
            cy.get('nav')
              .should('contain', 'PROJECTS')
              .click()
        })

        it('can find Portfolio as a project', () => {
            cy.visit('/projects')
              .get('.ui.card')
              .and('contain', 'Portfolio')
        });

        it('can find six projects', () => {
            cy.visit('/projects')
              .get('.ui.card')
              .should('have.length', 6)
        });

        it('can find Run distance calculator as a project built with Strava API', () => {
            cy.visit('/projects')
            .get('.ui.card')
            .should('contain', 'Run distance calculator')
            .get('.extra.content')
            .should('contain','Strava API')
        });
    })
    
});


