import { faker } from '@faker-js/faker'

export default () => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    code: faker.finance.bic(),
    thumbnail: faker.image.abstract(),
    price: faker.commerce.price(),
    stock: faker.finance.amount(1, 100, 0)
})