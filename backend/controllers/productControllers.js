import productModel from "../models/productModels.js"
import { v2 as cloudinary } from "cloudinary"

//add product item
const addProduct = async (req, res) => {

    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                return result.secure_url
            })
        )

        const sizesArray = Array.isArray(sizes) ? sizes : JSON.parse(sizes);
        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: sizesArray,
            image: imagesUrl,
            date: Date.now()
        }
        console.log(productData);
        const product = new productModel(productData);
        await product.save()
        res.json({ success: true, message: "Product Added" })

    }catch(error){
        console.log(error)
        res.json({success:false,
        message:"Error"+error.message,
    })
    }
}

//list all products
const listProduct=async(req,res)=>{
    try{
        const products= await productModel.find({});
        res.json({success:true,data:products});
    }catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

//remove products
const removeProduct=async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({
        success:true,
        message:"Product Removed"
    })
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        console.log(productId)
        let product = await productModel.findById(productId)
        res.json({ success: true, data: product })
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}



export { addProduct, listProduct, removeProduct, singleProduct }