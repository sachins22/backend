import LModal from "../models/login.modal.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";

const setDetail = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ApiError(400, 'All fields are required');
    }

    const createLogin = await LModal.create({
        email: email,
        password: password,
    });

    console.log(createLogin)
    if (!createLogin) {
        throw new ApiError(400, 'Login not created');
    }

    return res.status(200).json(
        new ApiResponse(200, createLogin, "Login created successfully")
    );
});

export default setDetail;
