import gql from 'graphql-tag';

export default gql`
    query {
    booksByCategory(category_id: 1) {
        id
        title
    }
}
`;