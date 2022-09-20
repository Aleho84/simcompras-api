import { faker } from '@faker-js/faker'

export default () => ({
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    image: faker.internet.avatar()
})