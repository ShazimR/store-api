

const getAllProductsStatic = async (req, res) => {
    throw new Error('testing async errors');
    res.status(200).json({msg: 'products static testing route'});
};

const getAllProducts = async (req, res) => {
    res.status(200).json({msg: 'products testing route'});
};


module.exports = {
    getAllProducts,
    getAllProductsStatic,
};
