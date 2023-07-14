import DifferentialsModule from "../modules/DifferentialsModule";

const differentialsRegister = async (req: any, res: any) => {
    const name: string = req.fields.name;
    const differentials = new DifferentialsModule();
    await differentials.registerDifferentials(name).then((resp: any) => {
        res.status(200).send(resp);
    })
};
const differentialsEdit = async (req: any, res: any) => {
    const id: number = req.params.id;
    const name: string = req.fields.name; 
    const differentials = new DifferentialsModule();
    differentials.editDifferentials(name, id).then((resp: any) => {
        res.status(200).send(resp);
    })
   
};
const differentialsList = async (req: any, res: any) => {
    const differentials = new DifferentialsModule();
    differentials.listDifferentials(req.query.searchText).then((resp: any) => {
        res.status(200).send(resp);
    })

};
const differentialsDetail = async (req: any, res: any) => {
    const id: number = req.params.id;
    const differentials = new DifferentialsModule();
    differentials.detailDifferentials(id).then((resp: any) => {
        res.status(200).send(resp);
    })
};

const differentialsDelete = async (req: any, res: any) => {
    const id: number = req.params.id;
    const differentials = new DifferentialsModule();
    differentials.deleteDifferentials(id).then((resp: any) => {
        res.status(200).send(resp);
    })
};


module.exports = {
    register: differentialsRegister,
    edit: differentialsEdit,
    list: differentialsList,
    detail: differentialsDetail,
    delete: differentialsDelete,
};