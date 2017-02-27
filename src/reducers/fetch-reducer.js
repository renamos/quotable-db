//Sample Reducer using middleware to handle promises

export default (state=[], action)=>{
    switch(action.type){
        case 'FETCH_AUTHOR_PENDING':
        return {isSending:true};
        case 'FETCH_AUTHOR_FULFILLED':
            return {data: action.payload.data.data, error: null, isFetched: true };
        case 'FETCH_AUTHOR_REJECTED':
            return {data: null, error: action.payload, isFetched: true};

        case 'FETCH_QUOTE_PENDING':
            return {isSending:true};
        case 'FETCH_QUOTE_FULFILLED':
            return {data: action.payload.data.data, error: null, isFetched: true };
        case 'FETCH_QUOTE_REJECTED':
            return {data: null, error: action.payload, isFetched: true};

        case 'FETCH_BOOK_PENDING':
            return {isSending:true};
        case 'FETCH_BOOK_FULFILLED':
            return {data: action.payload.data.data, error: null, isFetched: true };
        case 'FETCH_BOOK_REJECTED':
            return {data: null, error: action.payload, isFetched: true};

        case 'FETCH_RANDOM_PENDING':
            return {isSending:true};
        case 'FETCH_RANDOM_FULFILLED':
            return {data: action.payload.data.data, error: null, isFetched: true };
        case 'FETCH_RANDOM_REJECTED':
            return {data: null, error: action.payload, isFetched: true};

        case 'ADD_QUOTE_PENDING':
            return {isSending:true};
        case 'ADD_QUOTE_FULFILLED':
            return {data: action.payload.data.data, error: null, isFetched: true };
        case 'ADD_QUOTE_REJECTED':
            return {data: null, error: action.payload, isFetched: true};

        default:
            return state
    }
}