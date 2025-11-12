export const register = async ()=>{
    try {
        const {fullname, email, password} = request.body;
        if(!fullname || email || !password){
            return res.status(403).json({
                success: false,
                message: "All field are required."
            })
        }
    } catch (error) {
        
    }
}