/*Questão 1 */

function Triangulo(n1,n2,n3) {
    if(n1==n2==n3){
        return "Triangulo Equilatero"
    }if (n1!=n2!=n3){
        return "Triangulo Escaleno"
    }else {
        return "Triangulo Isósceles"
    }
}


/*Questão 2*/

function Bhaskara(a,b,c) {
    const delta = b*b -4*a*c
    const v1 = (-b+Math.sqrt(delta))/(2*a)
    const v2 = (-b-Math.sqrt(delta))/(2*a)
    if(delta<0){
        return "Delta Negativo!"
    }else {
        return [v1,v2]
    }
}

console.log(Bhaskara(3,-5,2))

/*Questão 3*/

function Nota(nota){
    if(nota<38){
        return nota
    }
    valor = nota.toString()
    if(valor.endsWith('3') || valor.endsWith('8')){
        parseInt(valor)
        return valor = nota + 2
    }if(valor.endsWith('4') || valor.endsWith('9')){
        parseInt(valor)
        return valor = nota + 1
    }else{
        return valor
    } 
}
console.log(Nota(44))

/*Questão 4*/

LuidyMoura = (n) => {
    const array=[]
    for(i=1;i<=n;i++){
        if(i % 5 == 0){
            array.push('Luidy')
        }if(i % 9 == 0){
            array.push('Moura')
        }if(i % 5 == 0 && i % 9 == 0){
            array.push('LuidyMoura')
        }else{
            array.push(i)
        }
    }
    return array
}

console.log(LuidyMoura(45))