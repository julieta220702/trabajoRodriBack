class ProductManager{
    
    constructor (){
       
        this.products= []
    //     this.path = filename;
    //     if (fs.existsSync(filename)) {
    //       this.productos = JSON.parse(fs.readFileSync(filename));
    //     } else {
    //       fs.writeFileSync(filename, JSON.stringify([]))
    //     }

    }   
    

    static id = 0
        
    addProducts =({title,description,price,thumbnails,code,stock} ) => {
           if(!title || !description || !thumbnails || !price || !code || !stock){
                return console.log("Rellenar campos requeridos");
            }

           let productExist = this.products.filter((product) => product.code === code)
           if (productExist.length > 0){
                 return console.log("Producto con codigo ya existente");
            }

            ProductManager.id++
            let product = {
                title,
                description,
                price,
                thumbnails,
                code,
                stock,
                id : ProductManager.id
            }
            this.products.push(product)
            const fs = require ('fs')

          const archivo = fs.promises.writeFile('./productos.json' , JSON.stringify(newProduct , null , 2))
          .then(()=>console.log("Se escribieron los productos")).catch((err)=>console.log(err))
            
            
            
        
        }
 
        getProducts = ()=> console.log(this.products);
        getProductById = (id) =>{
            let oneProduct = this.products.filter(product => product.id === id)
            if(oneProduct.length > 0){
                 return  console.log(oneProduct)
            } else{
             console.log("Not Found");
            }
         
         }

         deleteProduct = (id)=>{
            if (this.products.id === id){
               let borrarObjeto = this.products.findIndex(products => products === id)
               this.products.slice(()=>{
                    fs.promises.writeFile('./productos.json', borrarObjeto ,  'utf-8')
               })
            }else{
                    console.log("Error")
            }
          }

         updateProduct = (id)=>{
             let objetoEncontrado = this.products.find((products) => products.id === id)

            if (objetoEncontrado) {
                objetoEncontrado.id= id
                this.products =this.products.map((products)=>{
                    if (products.id === id) {
                        return objetoEncontrado
                    } else {
                        return console.log("error");
                    }
                })
            } 
            
         }

        
}

const newProduct = new ProductManager ()
newProduct.addProducts ({title:"tomate" , description :"Fruta versatil" , price : "300 el kilo" , thumbnails:"Sin imagen" , code:"t1" , stock:3 })
newProduct.addProducts ({title:"cebolla" , description :"Verdura verde y versatil" , price : "250 el kilo" , thumbnails:"Sin imagen" , code:"C1" , stock:7 }) 
newProduct.getProducts()
newProduct.deleteProduct(id = 1)
newProduct.updateProduct(1)



