describe("Planeta QA - API Tests", () => {

  it("cria e valida produto", () => {

    cy.request({
      method: "POST",
      url: "/products",
      body: {
        name: "Notebook Gamer",
        category: "Eletronicos",
        price: 4500.00,
        stock: 15
      }

    }).then((response) => {

      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq("Notebook Gamer")
      expect(response.body.category).to.eq("Eletronicos")
      expect(response.body.price).to.eq(4500)
      expect(response.body.stock).to.eq(15)
      expect(response.body.id).to.exist

    })

  })

  it("lista produtos", () => {

    cy.request({
      method: "GET",
      url: "/products"

    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.be.an("array")

    })

  })

  it("busca produto por id", () => {

    cy.request({
      method: "POST",
      url: "/products",
      body: {

        name: "Mouse",
        category: "Perifericos",
        price: 120,
        stock: 8

      }

    }).then((createResponse) => {

      const id = createResponse.body.id

      cy.request({
        method: "GET",
        url: `/products/${id}`

      }).then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(id)
        expect(response.body.name).to.eq("Mouse")

      })

    })

  })

})
