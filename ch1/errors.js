const products =[]


function insert(arr, product){
    if (!arr || !product) {
        return }

        try{
            if(arr.includes(product)){
                throw new Error("ProductExists")
            }
            arr.push(product)
            return true
        }catch(error){
            console.log(error.message, error.trace)
            throw error

        }
}