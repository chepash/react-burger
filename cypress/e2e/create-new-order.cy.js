describe('Drag and Drop Ingredients in ConstructorKit', () => {
  it('should allow dragging and dropping ingredients', () => {
    // visit the home page
    cy.visit('http://localhost:3000')

    // find the specific ingredients and drag-and-drop them to ConstructorKit
    cy.contains('Краторная булка N-200i')
      .parent('div')
      .parent('li')
      .as('ingredientBun')
      .should('exist')

    cy.get('div[class*=constructor-kit_burger__]')
      .as('burger-constructor')
      .should('exist')

    cy.get('@ingredientBun').trigger('mousedown', { which: 1 })
    cy.get('@ingredientBun').trigger('dragstart')
    cy.get('@ingredientBun').trigger('dragleave')

    cy.get('@burger-constructor').trigger('dragenter')
    cy.get('@burger-constructor').trigger('dragover')
    cy.get('@burger-constructor').trigger('drop')
    cy.get('@burger-constructor').trigger('dragend')

    cy.contains('Мясо бессмертных моллюсков Protostomia')
      .parent('div')
      .parent('li')
      .as('ingredientMain')
      .should('exist')

    cy.get('@ingredientMain').trigger('mousedown', { which: 1 })
    cy.get('@ingredientMain').trigger('dragstart')
    cy.get('@ingredientMain').trigger('dragleave')

    cy.get('@burger-constructor').trigger('dragenter')
    cy.get('@burger-constructor').trigger('dragover')
    cy.get('@burger-constructor').trigger('drop')
    cy.get('@burger-constructor').trigger('dragend')

    cy.contains('Соус Spicy-X')
      .parent('div')
      .parent('li')
      .as('ingredientSauce')
      .should('exist')

    cy.get('@ingredientSauce').trigger('mousedown', { which: 1 })
    cy.get('@ingredientSauce').trigger('dragstart')
    cy.get('@ingredientSauce').trigger('dragleave')

    cy.get('@burger-constructor').trigger('dragenter')
    cy.get('@burger-constructor').trigger('dragover')
    cy.get('@burger-constructor').trigger('drop')
    cy.get('@burger-constructor').trigger('dragend')

    // check that the ingredients are in the ConstructorKit
    cy.get('@burger-constructor').should('contain', 'Краторная булка N-200i')
    cy.get('@burger-constructor').should('contain', 'Соус Spicy-X')
    cy.get('@burger-constructor').should(
      'contain',
      'Мясо бессмертных моллюсков Protostomia'
    )

    // try to place an order (1st attempt)
    cy.contains('Оформить заказ').as('placeOrderButton').should('exist')
    cy.get('@placeOrderButton').trigger('click')

    cy.url().should('include', '/login')

    // try to login
    cy.get('input[name="email"]').type('chepa_test@mail.com')
    cy.get('input[name="password"]').type('DqrbyTJLY9PcQ')

    cy.contains('Войти').as('loginSubmitButton').should('exist')
    cy.get('@loginSubmitButton').click()

    // try to place an order (2nd attempt)
    cy.url().should('not.include', '/login')
    cy.contains('Оформление заказа...').should('not.exist')
    cy.get('@placeOrderButton').trigger('click')
    cy.contains('Оформление заказа...').as('modal').should('exist')

    cy.intercept('POST', `https://norma.nomoreparties.space/api/orders`).as(
      'placeOrderRequest'
    )
    // wait for the response
    cy.wait('@placeOrderRequest').then(() => {
      cy.contains('Ваш заказ начали готовить').should('exist')

      cy.get('button[class*=modal_modal__close__]')
        .as('closeModalButton')
        .should('exist')
      cy.get('@closeModalButton').trigger('click')

      // check that the ingredients are not in the ConstructorKit
      cy.get('@burger-constructor').should(
        'not.contain',
        'Краторная булка N-200i'
      )
      cy.get('@burger-constructor').should('not.contain', 'Соус Spicy-X')
      cy.get('@burger-constructor').should(
        'not.contain',
        'Мясо бессмертных моллюсков Protostomia'
      )
    })
  })
})
