describe('Drag and Drop Ingredients in ConstructorKit', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  const burgerConstructorSelector = 'div[class*=constructor-kit_burger__]'
  const modalCloseBtnSelector = 'button[class*=modal_modal__close__]'

  const bunIngredientTextSelector = 'Краторная булка N-200i'
  const mainIngredientTextSelector = 'Мясо бессмертных моллюсков Protostomia'
  const sauceIngredientTextSelector = 'Соус Spicy-X'

  const loaderModalTextSelector = 'Оформление заказа...'
  const orderAcceptTextSelector = 'Ваш заказ начали готовить'

  it('should open and close ingredient details modal', () => {
    cy.contains(bunIngredientTextSelector).click()

    cy.contains('Детали ингредиента')
      .parent('div')
      .as('ingredientDetailsModal')
      .should('exist')

    cy.get('@ingredientDetailsModal').contains(bunIngredientTextSelector)

    cy.get(modalCloseBtnSelector).click()

    cy.contains('Детали ингредиента').should('not.exist')
  })

  it('should allow dragging and dropping ingredients, and delete them', () => {
    cy.contains(bunIngredientTextSelector)
      .parent('div')
      .parent('li')
      .as('ingredientBun')
      .should('exist')

    cy.contains(mainIngredientTextSelector)
      .parent('div')
      .parent('li')
      .as('ingredientMain')
      .should('exist')

    cy.contains(sauceIngredientTextSelector)
      .parent('div')
      .parent('li')
      .as('ingredientSauce')
      .should('exist')

    // check drag-and-drop them to ConstructorKit
    cy.get(burgerConstructorSelector).as('burger-constructor').should('exist')

    cy.get('@ingredientBun').trigger('mousedown', { which: 1 })
    cy.get('@ingredientBun').trigger('dragstart')
    cy.get('@ingredientBun').trigger('dragleave')

    cy.get('@burger-constructor').trigger('dragenter')
    cy.get('@burger-constructor').trigger('dragover')
    cy.get('@burger-constructor').trigger('drop')
    cy.get('@burger-constructor').trigger('dragend')

    cy.get('@ingredientMain').trigger('mousedown', { which: 1 })
    cy.get('@ingredientMain').trigger('dragstart')
    cy.get('@ingredientMain').trigger('dragleave')

    cy.get('@burger-constructor').trigger('dragenter')
    cy.get('@burger-constructor').trigger('dragover')
    cy.get('@burger-constructor').trigger('drop')
    cy.get('@burger-constructor').trigger('dragend')

    cy.get('@ingredientSauce').trigger('mousedown', { which: 1 })
    cy.get('@ingredientSauce').trigger('dragstart')
    cy.get('@ingredientSauce').trigger('dragleave')

    cy.get('@burger-constructor').trigger('dragenter')
    cy.get('@burger-constructor').trigger('dragover')
    cy.get('@burger-constructor').trigger('drop')
    cy.get('@burger-constructor').trigger('dragend')

    // check that the ingredients are in the ConstructorKit
    cy.get('@burger-constructor').should('contain', bunIngredientTextSelector)
    cy.get('@burger-constructor').should('contain', sauceIngredientTextSelector)
    cy.get('@burger-constructor').should('contain', mainIngredientTextSelector)
    cy.get('@burger-constructor')
      .contains(mainIngredientTextSelector)
      .parent('span')
      .find('span.constructor-element__action.pr-2')
      .click()

    cy.get('@burger-constructor')
      .contains(sauceIngredientTextSelector)
      .parent('span')
      .find('span.constructor-element__action.pr-2')
      .click()

    // check that the ingredients are deleted
    cy.get('@burger-constructor').should(
      'not.contain',
      sauceIngredientTextSelector
    )
    cy.get('@burger-constructor').should(
      'not.contain',
      mainIngredientTextSelector
    )
  })

  it('should allow to place order with auth', () => {
    // find the specific ingredients
    cy.contains(bunIngredientTextSelector)
      .parent('div')
      .parent('li')
      .as('ingredientBun')
      .should('exist')

    cy.contains(mainIngredientTextSelector)
      .parent('div')
      .parent('li')
      .as('ingredientMain')
      .should('exist')

    cy.contains(sauceIngredientTextSelector)
      .parent('div')
      .parent('li')
      .as('ingredientSauce')
      .should('exist')

    // check drag-and-drop them to ConstructorKit
    cy.get(burgerConstructorSelector).as('burger-constructor').should('exist')

    cy.get('@ingredientBun').trigger('mousedown', { which: 1 })
    cy.get('@ingredientBun').trigger('dragstart')
    cy.get('@ingredientBun').trigger('dragleave')

    cy.get('@burger-constructor').trigger('dragenter')
    cy.get('@burger-constructor').trigger('dragover')
    cy.get('@burger-constructor').trigger('drop')
    cy.get('@burger-constructor').trigger('dragend')

    cy.get('@ingredientMain').trigger('mousedown', { which: 1 })
    cy.get('@ingredientMain').trigger('dragstart')
    cy.get('@ingredientMain').trigger('dragleave')

    cy.get('@burger-constructor').trigger('dragenter')
    cy.get('@burger-constructor').trigger('dragover')
    cy.get('@burger-constructor').trigger('drop')
    cy.get('@burger-constructor').trigger('dragend')

    cy.get('@ingredientSauce').trigger('mousedown', { which: 1 })
    cy.get('@ingredientSauce').trigger('dragstart')
    cy.get('@ingredientSauce').trigger('dragleave')

    cy.get('@burger-constructor').trigger('dragenter')
    cy.get('@burger-constructor').trigger('dragover')
    cy.get('@burger-constructor').trigger('drop')
    cy.get('@burger-constructor').trigger('dragend')

    // check that the ingredients are in the ConstructorKit
    cy.get('@burger-constructor').should('contain', bunIngredientTextSelector)
    cy.get('@burger-constructor').should('contain', sauceIngredientTextSelector)
    cy.get('@burger-constructor').should('contain', mainIngredientTextSelector)

    // try to place an order (1st attempt)
    cy.contains('Оформить заказ').as('placeOrderButton').should('exist')
    cy.get('@placeOrderButton').click()

    cy.url().should('include', '/login')

    // try to login
    cy.intercept('GET', `https://norma.nomoreparties.space/api/auth/user`, {
      statusCode: 200,
      body: {
        success: true,
        user: { email: 'test@mail.com', name: 'testUser' },
      },
    })

    cy.intercept('POST', `https://norma.nomoreparties.space/api/auth/login`, {
      statusCode: 200,
      body: {
        success: true,
        accessToken: 'Bearer someToken123',
        refreshToken: 'someToken123',
        user: {
          email: 'test@mail.com',
          name: 'testUser',
        },
      },
    }).as('loginRequest')

    cy.get('input[name="email"]').type('test@mail.com')
    cy.get('input[name="password"]').type('s0meStr0ngPassw0rd')

    cy.contains('Войти').as('loginSubmitButton').should('exist')
    cy.get('@loginSubmitButton').click()

    cy.wait('@loginRequest').then(() => {
      // try to place an order (2nd attempt)
      cy.url().should('not.include', '/login')
      cy.contains(loaderModalTextSelector).should('not.exist')

      cy.intercept('POST', `https://norma.nomoreparties.space/api/orders`, {
        statusCode: 200,
        body: {
          success: true,
          name: 'Space флюоресцентный бургер',
          order: {
            ingredients: [],
            _id: '64fa36016d2997001caa6e8e',
            owner: {
              name: 'test',
              email: 'test@mail.com',
              createdAt: '2023-08-30T17:55:23.429Z',
              updatedAt: '2023-09-07T16:52:36.640Z',
            },
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2023-09-07T20:43:45.198Z',
            updatedAt: '2023-09-07T20:43:45.396Z',
            number: 19668,
            price: 2056,
          },
        },
        delay: 2000,
      }).as('placeOrderRequest')

      cy.get('@placeOrderButton').click()
      cy.contains(loaderModalTextSelector).should('exist')

      // wait for the response
      cy.wait('@placeOrderRequest').then(() => {
        cy.contains(orderAcceptTextSelector).should('exist')

        cy.get(modalCloseBtnSelector).as('closeModalButton').should('exist')
        cy.get('@closeModalButton').click()
        cy.contains(orderAcceptTextSelector).should('not.exist')

        // check that the ingredients are not in the ConstructorKit
        cy.get('@burger-constructor').should(
          'not.contain',
          bunIngredientTextSelector
        )
        cy.get('@burger-constructor').should(
          'not.contain',
          sauceIngredientTextSelector
        )
        cy.get('@burger-constructor').should(
          'not.contain',
          mainIngredientTextSelector
        )
      })
    })
  })
})
