import axios from "axios"
import { useEffect, useState } from "react"
import { FakeStoreProduct } from "../FakeStoreInterface/FakestoreProduct";
export function Shopping()
{
    const[categories,setCategories] = useState<string[]>()
    const[products,setProducts] = useState<FakeStoreProduct[]>();

    function LoadProducts():void{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            setProducts(response.data)
        })
    }
    function LoadCategories():void
    {
        axios.get("https://fakestoreapi.com/products/categories")
        .then(response=>{
            setCategories(response.data)
        }
        )
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts();
    },[])

    return(
        <div>
            <ol>
                {
                    categories?.map(category=>
                        <li key={category} value={category}>{category}</li>
                    )
                }
            </ol>
            <div>
                {
                    products?.map(product=>
                        <img className="m-2" key={product.id} src={product.image} width="200" height="200"/>
                    )
                }
            </div>
        </div>
    )
}