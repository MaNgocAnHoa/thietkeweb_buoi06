var a = 3;
var b = 3 ;

((a%b==0) && (a>=3))? console.log('chan'):console.log('le');

for(let i=0;i<150;i++){
    if(i>10)break;
    console.log(i+1);
}


function tinhgia(soluong,dongia){
   const tien=soluong*dongia;
   return tien
}




    n=5;
    m=3;
    tinhgia(n,m);
    
    console.log(` ${n} cai non, moi cai gia ${m} thi phai tra la ${tinhgia(n,m)}`);

    const A=[1,2,3,4,5]
    for (let i = 0; i < A.length; i++) {
        console.log(A[i]+1);
    
    }
    const B=[1,'sản phẩm',[3,4],{a:2,count:5}]
    for (let i = 0; i < A.length; i++) {
        B.push(A[i])
    
    }
    for (let i = 0; i < B.length; i++) {
        console.log(B[i])
    }
    const P=['ao','quan','giay']
    for(const product of P){
        console.log(product);
    }

    const P1= P.map(product =>{
        if(product=='giay')
        return`doi ${product}`;
        return `cai ${product}`;
    })

    for(const product of P1){
        console.log(product);
    }
    const P2=P.map((product,index,P)=>index==2?`doi ${product}`:`cai ${product}`
    )
    for(const product of P2){
        console.log(product);
    }
