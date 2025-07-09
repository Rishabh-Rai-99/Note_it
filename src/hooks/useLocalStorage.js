export default function useLocalStorage(key){

    const setItem = (data)=>{
        try {
            window.localStorage.setItem(key,JSON.stringify(data))
        } catch (error) {
            console.log(error);
        }
    }

    const getItem = ()=>{
        try {            
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.log(error);
        }
    }

    const removeItem = (key)=>{
        try {            
             window.localStorage.removeItem(key)
        } catch (error) {
            console.log(error);
        }
    }

    return {setItem,getItem,removeItem} ;
}