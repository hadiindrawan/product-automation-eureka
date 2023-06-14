import chai from 'chai'
import { expect } from 'chai'
import chaiJsonSchema from 'chai-json-schema'
import pages from './../apis/get-product.api.js';
import { productId } from '../data/product-id.data.js';
import { jsonSchemaHelper } from '../helper/to-json-schema.helper.js';
import { getProductValidRes } from '../schema/get-product.schema.js';
chai.use(chaiJsonSchema)

describe("Product", () => {
    it("User successful retrieve any product with valid id", async () => {
        // Hit the get product endpoint and send the valid product ID parameter, assign to response variable
        const response = await new pages().getProduct(productId.valid)
        // Assign response body to product variable
        const product = response.body

        // To validate the response has a status code of 200
        expect(response.status).to.equals(200);
        // To verify the "name" field in product is "Product X"
        expect(product.name).to.equal('Product X')
        // To verify the "price" field is a numeric value and greater than zero
        expect(product.price).to.be.a('number').and.to.be.greaterThan(0)
        // To validate the "inventory" field is present and has a boolean value for "available"
        expect(product).to.have.property('inventory').that.is.an('object')
        expect(product.inventory).to.have.property('available').that.is.a('boolean')
        // To retrieve the "quantity" value from the "inventory" field and to verify it is a numeric value greater than zero.
        expect(product.inventory.quantity).to.be.a('number').and.to.be.greaterThan(0)
        // To verify the "categories" field contains at least one category and each category has an "id" and a "name" field.
        expect(product).to.have.property('categories').that.is.an('array').and.to.have.lengthOf.at.least(1)
        if (product.hasOwnProperty('categories')) {
            for (const category of product.categories) {
                // To validate the product categories has an "id" and "name" field
                expect(category).to.have.property('id')
                expect(category).to.have.property('name')
            }
        }
        // To retrieve the "reviews" field and ensure it is an array containing at least one review
        expect(product).to.have.property('reviews').that.is.an('array').and.to.have.lengthOf.at.least(1)
        if (product.hasOwnProperty('reviews')) {
            for (const review of product.reviews) {
                // To validate the product review has an "id", "user", "rating", and "comment" field
                expect(review).to.have.property('id')
                expect(review).to.have.property('user')
                expect(review).to.have.property('rating')
                expect(review).to.have.property('comment')
            }
        }
        // Validate the response schema of product matches with valid response
        expect(product).to.be.jsonSchema(jsonSchemaHelper(getProductValidRes, 'success'))
    });

    it("User unsuccessful retrieve any product with invalid id", async () => {
        // Hit the get product endpoint and send the invalid product ID parameter, assign to response variable
        const response = await new pages().getProduct(productId.invalid)

        // To validate the response has a status code of 404
        expect(response.status).to.equals(404);
        // To verify the response has a test "Not found"
        expect(response).to.have.property('text').that.equals('Not found')
    });
})