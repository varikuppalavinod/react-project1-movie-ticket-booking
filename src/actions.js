
export function deposit(amount){
 return{type:"deposit",payload:amount }
}

export function withdraw(amount){
    return { type:"withdraw",payload:amount}
}
export function updatename(name){
    return { type:"updatename",payload:name}
}
export function updatenumber(number){
    return {type:"updatenumber",payload:number}
}