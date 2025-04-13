const { gql } = require("apollo-server-express")

const customerDef = gql`
    type product{
        product_id : Int,
        product_name : String,
        description : String ,
        price : Int,
        merchant_id : Int,
        image : String,
        offer : Int,
    }
    type CartProduct{
        customer_id : Int,
        product_id : Int,
        quantity : Int,
        product_name : String,
        description : String ,
        price : Int,
        merchant_id : Int,
        image : String,
        offer:Int,
    } 
    type CustomerDetails{
        name : String,
        email : String,
        address : String,
    }
    type SearchedProduct{
        searched_product_name : String
    }
    type OrderedProduct{
        product_id : Int,
        product_name : String,
        description : String ,
        price : Int,
        merchant_id : Int,
        image : String,
        quantity : Int,
        customer_name : String,
        order_status : String,
        offer : Int
    }
    type OrderDetails{
        product_id : Int,
        customer_id : Int,
        quantity : Int,
        product_name : String,
        description : String,
        price : Int,
        image : String,
        name : String,
        email : String,
        address : String,
        order_status : String,
        offer:Int
    }

    type Query{
        getRandomProducts:[product]
        getCustomerDetails:[CustomerDetails]
        searchProducts(search: String!): [product]
        getCartProducts(customer_id : Int) : [CartProduct]
        getCartQuantity : Int
        getRecentSearch: [SearchedProduct]
        getOrdersProduct : [OrderedProduct]
        getMerchantProduct(page : Int!): [product]
        getMerchantOrders : [OrderDetails]
    }
    input OrderInput {
        product_id: Int!
        quantity: Int!
    }
    input EditedProduct{
        product_id : Int,
        product_name : String,
        description : String ,
        price : Int,
        merchant_id : Int,
        image : String,
        offer : Int
    }

    type  Mutation{
       register(name: String!, email: String!, password: String!, register_type: String): String!
       login(email : String! , password : String! , login_type : String) : String
       setCustomerDetails(name : String!,  address : String!) : String
       addNewProduct(product_name : String! , description : String! , price : Int , merchant_id : Int , image : String) : String
       addToCart(product_id : Int!) : String,
       deleteCartProduct(product_id : Int!) : String,
       setOrders(orders: [OrderInput!]!): String,
       updateMerchantProduct(input :EditedProduct!) : String
       addMerchantProduct(input : EditedProduct!) : String
       deleteMerchantProduct(product_id: Int!) : String
       changeOrderStatus(statusofOrder: String!, product_id: Int!): String
       logout : String
    }
`

module.exports = customerDef