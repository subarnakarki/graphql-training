# GraphQL Basics
GraphQL training  using json-server as the backend db

### Installation 
```npm 
npm install
```

### Running Server
```npm
npm run json:server
npm run start
```

Application runs on `localhost:4000/graphql`
Database runs on `localhost:3000` and follows **REST** conventions

### Query Examples

```
query getCompany {
  company(id: "1") {
    ...companyDetails
    users {
      ...userDetails
    }
  }
}

query user {
  user(id: "1") {
    ...userDetails
  }
}

fragment companyDetails on Company {
  id
  name
  description
}

fragment userDetails on User {
  id
  age
  firstName
}
```