import userModel from "../models/userModels.js"

//add item to user cart
const addToCart=async(req,res)=>{
    try {
        const { userId, itemId, size } = req.body
        let userData = await userModel.findById(userId)
        let cartData =await userData.cartData;
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1
        }
        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({success:true,message:"Added To Cart"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove item from user cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body
        let userData = await userModel.findById(userId);
            let cartData=await userData.cartData;

        cartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Cart Updated" })


        } catch (error) {
            console.log("error");
            res.json({success:false,message:"error"})
        }
}

//fetch user cart data
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body
        let userData = await userModel.findById(userId);
            let cartData=await userData.cartData;
            res.json({success:true,cartData})
        } catch (error) {
            console.log(error);
            res.json({success:true,message:"error"})
        }
}

export { addToCart, updateCart, getUserCart }