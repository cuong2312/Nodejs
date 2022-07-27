import Product from '../models/product'

export const list  = async (req, res) => {
   // nodejs 18
   try {
        const data = await Product.find();
        res.json(data); 
   } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm nào"
        })
   }
};

export const read = async (req, res) => {
    try {
        const id = req.params.id;
        // const product = data.find(item => item.id == id)
        const  product = await Product.findOne({_id: id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: 'không tìm thấy sản phẩm'
        });//lỗi sau 4s res(trả về) lỗi ko tìm thấy sp
    }
};
export const add = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product )
    } catch (error) {
        res.status(400).json({
            error: 'không thêm được sản phẩm'
        })
    }

};
export const remove = (req, res) => {
    try {
        const id = req.params.id;
        const products = data.filter(item => item.id !== +id);
        res.json(products)
    } catch (error) {
        res.status(400).json({
            error: 'không tìm thấy sản phầm cần xóa'
        })
    }
};

export const update = (req, res) => {
    try {
        const id = req.params.id;
        const newProduct = { id, ...req.body };
        const products = data.map(item => item.id == id ? newProduct : item);
        // update : nếu 
        res.json(products)
    } catch (error) {
        res.status(400).json({
            error: 'không tìm thấy sản phầm cần xóa'
        })
    }
};