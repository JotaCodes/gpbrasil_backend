import CategoryModule from "../modules/CategoryModule";

const categoryRegister = async (req: any, res: any) => {
    const name: string = req.fields.name;
    const category = new CategoryModule();
    await category.registerCategory(name).then((resp: any) => {
        res.status(200).send(resp);
    })
};
const categoryEdit = async (req: any, res: any) => {
    const id: number = req.params.id;
    const name: string = req.fields.name; 
    const category = new CategoryModule();
    category.editCategory(name, id).then((resp: any) => {
        res.status(200).send(resp);
    })
   
};
const categoryList = async (req: any, res: any) => {
    const category = new CategoryModule();
    category.listCategory(req.query.searchText).then((resp: any) => {
        res.status(200).send(resp);
    })

};
const categoryDetail = async (req: any, res: any) => {
    const id: number = req.params.id;
    const category = new CategoryModule();
    category.detailCategory(id).then((resp: any) => {
        res.status(200).send(resp);
    })
};

const categoryDelete = async (req: any, res: any) => {
    const id: number = req.params.id;
    const category = new CategoryModule();
    category.deleteCategory(id).then((resp: any) => {
        res.status(200).send(resp);
    })
};


module.exports = {
    register: categoryRegister,
    edit: categoryEdit,
    list: categoryList,
    detail: categoryDetail,
    delete: categoryDelete,
};