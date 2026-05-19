describe('Planeta QA - API Tests', () => {

  it('cria e valida produto', () => {

    cy.request('POST', '/products', {
      name: 'Chair Cypress',
      category: 'Furniture',
      price: 150,
      stock: 5
    }).then((postRes) => {

      expect(postRes.status).to.eq(200);
      expect(postRes.body).to.have.property('id');

      const id = postRes.body.id;

      cy.request('/products').then((getRes) => {

        expect(getRes.status).to.eq(200);
        expect(getRes.body).to.be.an('array');

        const found = getRes.body.find(p => p.id === id);
        expect(found).to.not.be.undefined;
      });
    });
  });

  it('lista produtos sem quebrar mesmo vazio', () => {

    cy.request('/products').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
    });

  });

});