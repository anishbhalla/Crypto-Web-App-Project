import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";


export default configureStore({
    reducer : {
        [cryptoNewsApi.reducerPath] :cryptoNewsApi.reducer,
        [cryptoApi.reducerPath] : cryptoApi.reducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware).concat(cryptoNewsApi.middleware),
    //Middleware is a layer that sits between the dispatching of an action and the moment it reaches the reducer.
});

/*
Middleware can intercept actions,
process them, and perform additional logic before actions proceed to reducer.

Middleware allows enhanced functionaliy such as :
1)Logging
2)Async Actions
3)Conditional Dispatching
4)Error Handling
*/