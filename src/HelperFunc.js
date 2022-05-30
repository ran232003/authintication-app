export const checkInput = (lable,value)=>{
    if(lable === "Full Name"){
        if(value.length !== 0){
            return true
        }
        return false;
    }
}