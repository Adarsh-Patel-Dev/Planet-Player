

const ToastContext = createContext();
const useToastContext = useContext(ToastContext);

const toastReducer = (state , action) =>{
    switch (action.type) {
        case 'ADD-TOAST':
            return { ...state, toastList: [...state.toastList, action.payload]};
         
        case 'REMOVE-TOAST':
            return { ...state, toastList: action.payload};
         
        default:
            return state;
    }
}
const ToastProvider = ({ children }) => {
    const [toastState, toastDispatch] = useReducer(toastReducer, {toastList: [],})


return(
    <ToastContext.Provider value = {{toastState, toastDispatch}}>
        {children}
    </ToastContext.Provider>
)
}

export { useToastContext, ToastProvider}
