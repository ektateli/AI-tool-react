export function Check(str){
    return /^(\*)(\*)(.*)\*$/.test(str);
}

export function Replace(str){
    return str.replace( /^(\*)(\*)|(\*)\$/g,'')
}