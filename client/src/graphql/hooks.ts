import { useQuery, useMutation, useLazyQuery } from '@apollo/client';

import {
    REALTORS_SEARCH_QUERY,
    REGISTER_REALTOR_MUTATION,
    GET_AUTH_REALTOR_QUERY,
    GET_PROPERTIES_QUERY,
    PROPERTY_REQUEST_MUTATION,
    CREATE_NEW_PROPERTY_MUTATION,
    GET_LISTINGS_QUERY,
    GET_REQUESTS_QUERY
} from './queries';
import { newRealtor, NewReqInput, SearchPropertyInput, NewProperty } from '../types';

export const useRealtors = (city: string, name: string) => {
    const { data, loading, error } = useQuery(REALTORS_SEARCH_QUERY, {
        variables: { city, name },
        fetchPolicy: 'network-only'
    });
    return {
        realtors: data?.searchRealtors,
        loading,
        error: Boolean(error)
    };
};

export const useGetRealtor = () => {
    const [getProfile] = useLazyQuery(GET_AUTH_REALTOR_QUERY);
    return {
        getProfile
    };
};

export const useGetProperties = (input?: SearchPropertyInput) => {
    const { data, loading, error } = useQuery(GET_PROPERTIES_QUERY, {
        variables: { searchPropertyInput: input },
        fetchPolicy: 'network-only'
    });
    return {
        properties: data?.searchProperties,
        loading,
        error
    };
};

export const useGetListings = (id: string) => {
    const { data, loading, error } = useQuery(GET_LISTINGS_QUERY, {
        variables: { id },
        fetchPolicy: 'network-only'
    });

    return {
        properties: data?.searchListings,
        loading,
        error
    };
};

export const useGetRequests = (id: string) => {
    const { data, loading, error } = useQuery(GET_REQUESTS_QUERY, {
        variables: { id },
        fetchPolicy: 'network-only'
    });

    return {
        requests: data?.searchRequests,
        loading,
        error
    };
};

export const usePropertyReq = () => {
    const [mutate, { loading, error }] = useMutation(PROPERTY_REQUEST_MUTATION);

    return {
        makeReq: async (input: NewReqInput) => {
            const { data } = await mutate({
                variables: { newReq: input }
            });

            return {
                message: data?.message
            };
        },
        loading,
        error
    };
};

export const useCreateProperty = () => {
    const [mutate, { loading, error }] = useMutation(CREATE_NEW_PROPERTY_MUTATION);

    return {
        makeReq: async (newProperty: NewProperty) => {
            const { data } = await mutate({
                variables: { newProperty },
                context: {
                    headers: {
                        Authorization: localStorage.getItem('token') || ''
                    }
                }
            });

            return {
                id: data?.id
            };
        },
        loading,
        error
    };
};

export const useRegisterRealtor = () => {
    const [mutate, { loading, error }] = useMutation(REGISTER_REALTOR_MUTATION);
    return {
        regNewRealtor: async (newRealtor: newRealtor) => {
            const {
                data: {
                    registerRealtor: { token, realtor }
                }
            } = await mutate({
                variables: { newRealtor }
            });
            return {
                token,
                realtor
            };
        },
        loading,
        error
    };
};
