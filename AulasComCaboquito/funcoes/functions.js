function useCart({product: { name: [first, last ], code }, ...rest}){
    return {
        name: first+" "+last,
        code,
        describe: rest
    }
}

const article = {
    price: 10.0,
    product: {
        name: [
            'Blusa',
            'Magazinne'
        ],
        code: 1
    },
    size: '2G'
}


const {code, describe, name} = useCart(article);

console.log(code)