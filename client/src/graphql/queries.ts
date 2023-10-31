import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'https://lighthouse-reality-app.vercel.app/graphql';

export const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache()
});

const REALTOR_DETAILS_FRAGMENT = gql`
    fragment RealtorDetail on Realtor {
        id
        userName
        fullName
        email
        avatarImage
        experience
        bio
        city
        sold
        specialization
    }
`;

const PROPERTY_DETAILS_FRAGMENT = gql`
    fragment PropertyDetail on Property {
        id
        for
        type
        kind
        images
        area
        rooms
        bathrooms
        description
        price
        city
        realtor {
            ...RealtorDetail
        }
    }
    ${REALTOR_DETAILS_FRAGMENT}
`;

export const REALTORS_SEARCH_QUERY = gql`
    query RealtorSearchQuery($city: String!, $name: String) {
        searchRealtors(city: $city, name: $name) {
            ...RealtorDetail
        }
    }
    ${REALTOR_DETAILS_FRAGMENT}
`;

export const REALTOR_LOGIN_QUERY = gql`
    query loginRealtor($email: String!, $password: String!) {
        loginRealtor(email: $email, password: $password) {
            token
            realtor {
                ...RealtorDetail
            }
        }
    }
    ${REALTOR_DETAILS_FRAGMENT}
`;

export const GET_AUTH_REALTOR_QUERY = gql`
    query Get_Auth_Realtor {
        authRealtorProfile {
            ...RealtorDetail
        }
    }
    ${REALTOR_DETAILS_FRAGMENT}
`;

export const GET_PROPERTIES_QUERY = gql`
    query Get_Properties($searchPropertyInput: SearchPropertyInput) {
        searchProperties(searchPropertyInput: $searchPropertyInput) {
            ...PropertyDetail
        }
    }
    ${PROPERTY_DETAILS_FRAGMENT}
`;

export const GET_LISTINGS_QUERY = gql`
    query listings($id: ID!) {
        searchListings(id: $id) {
            id
            for
            type
            kind
            images
            area
            rooms
            bathrooms
            description
            price
            city
        }
    }
`;

export const GET_REQUESTS_QUERY = gql`
    query req($id: ID!) {
        searchRequests(id: $id) {
            id
            name
            email
            phone
            message
        }
    }
`;

export const REGISTER_REALTOR_MUTATION = gql`
    mutation Register_Realtor($newRealtor: RealtorInput!) {
        registerRealtor(newRealtor: $newRealtor) {
            token
            realtor {
                ...RealtorDetail
            }
        }
    }
    ${REALTOR_DETAILS_FRAGMENT}
`;

export const PROPERTY_REQUEST_MUTATION = gql`
    mutation Property_Request($newReq: newReqInput!) {
        createPropertyRequest(newReq: $newReq) {
            message
        }
    }
`;

export const CREATE_NEW_PROPERTY_MUTATION = gql`
    mutation New_Property($newProperty: PropertyInput!) {
        createNewProperty(newProperty: $newProperty) {
            id
        }
    }
`;
