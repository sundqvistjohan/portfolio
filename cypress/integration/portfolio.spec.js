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
              .get('#projects-link')
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

    describe('has a CV page with the authors resume', () => {
        it('can find a CV link in menu, can click it and lands on CV page', () => {
            cy.visit('/')
              .get('nav')
              .should('contain', 'CV')
              .get('#cv-link')
              .click()
              .get('.cv-header')
              .should('contain', 'Johan Sundqvist')
        });
        it('renders both Experience and Education from same component', () => {
            cy.visit('/cv')
              .get('.cv-content')
              .should('contain', 'Sundq Konsult')
              .and('contain', 'Craft Academy')
        });
        it('has the correct picture', () => {
            cy.visit('/cv')
              .get('img')
              .should('have.attr', 'src')
              .and('include', '74340272_10157782657728993_2985960525168377856_n')
        });

    })
    
    
});


