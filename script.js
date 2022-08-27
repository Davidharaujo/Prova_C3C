/*Preparando Constantes */

const resposta = document.getElementsByClassName('resposta');

/*Questão 1 */

function Triangulo(n1,n2,n3) {
    if(n1==n2 && n2==n3){
        return "Triangulo Equilatero"
    }if (n1!=n2 && n1!=n3 && n2!=n3){
        return "Triangulo Escaleno"
    }else {
        return "Triangulo Isósceles"
    }
}
console.log(Triangulo(3,3,3))
console.log(Triangulo(1,2,3))
console.log(Triangulo(2,2,3))

resposta[0].style.cssText = 'color:black; font-size: 20px;';
resposta[0].innerText = `Para o teste do Triangulo Equilatero, foram usados os valores n1=n2=n3=3 para o teste do Triangulo Escaleno, foram usados valores n1!=n2!=n3, no caso [1,2,3] e para testar o  Triangulo Isósceles usamos [2,2,3]. Segue os resultados: ${Triangulo(3,3,3)}, ${Triangulo(1,2,3)} e ${Triangulo(2,2,3)} ` 

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
console.log(Bhaskara(1,2,3))

resposta[1].style.cssText = 'color: black; font-size: 20px;';
resposta[1].innerText = `O teste realizado utilizou como exemplo o mesmo dado na questão e obteve os números ${Bhaskara(3,-5,2)}. Para testar o delta, fizemos o teste com a=1, b=2 e c=3. O resultado podemos ver a seguir: ${Bhaskara(1,2,3)}`

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
console.log(Nota(23))
console.log(Nota(38))
console.log(Nota(59))
console.log(Nota(64))

resposta[2].style.cssText = 'color: black; font-size: 20px;';
resposta[2].innerText = `Para testarmos as condições estabelecidas foram escolhidos os números [23,38,59,64], abordando as possibilidades de arredondamento ou não das notas. Segue os resultados respectivos: ${Nota(23)}, ${Nota(38)}, ${Nota(59)} e ${Nota(64)}`

/*Questão 4*/

LuidyMoura = (n) => {
    for(i=1;i<=n;i++){
        const array=[]
        if(i % 5 == 0){
            array.replace('i','Luidy')
        }if(i % 9 == 0){
            array.replace('i','Moura')
        }if(i % 5 == 0 && i % 9 == 0){
            array.replace('i','LuidyMoura')
        }else{
            array.push(i)
        }
    }
    return array
}

resposta[3].style.cssText = 'color: black; font-size: 20px;';
resposta[3].innerText = `Para a realização dos testes dessa questão foi escolhido o exemplo da mesma, o número 45. Segue a seguir a sequência obtida: [${LuidyMoura(45)}]`

console.log(LuidyMoura(45))