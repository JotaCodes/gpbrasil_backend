import AccountModule from '../modules/AccountModule';

const AccountRegister = async (req: any, res: any) => {
    const name: string = req.fields.name;
    const verify: boolean = req.fields.verify;
    const price: string = req.fields.price;
    const differentials: number = req.fields.differentials;
    const type: number = req.fields.type;
    const image: string = req.fields.image;
    const local: string = req.fields.local;
    const category: number = req.fields.category;
    const account = new AccountModule();
    const response = await account.registerAccount(name, verify, price, differentials, type, image, local, category);
    res.status(200).send(response);
};

const AccountEdit = async (req: any, res: any) => {
    const id: string = req.headers['x-user-token'];
    const name: string = req.fields.name;
    const verify: boolean = req.fields.verify;
    const price: string = req.fields.price;
    const type: number = req.fields.type;
    const image: string = req.fields.image;
    const local: string = req.fields.local;
    const category: number = req.fields.category;
    const account = new AccountModule();
    const response = await account.editAccount(name, verify, price, type, image, local, category, id);
    res.status(200).send(response);
};

const AccountDelete = async (req: any, res: any) => {
    const id: string = req.headers['x-user-token'];
    const account = new AccountModule();
    const response = await  account.deleteAccount(id);
    res.status(200).send(response);
};

const AccountDetail = async (req: any, res: any) => {
    const id: string = req.headers['x-user-token'];
    const account = new AccountModule();
    const response = await  account.detailAccount(id);
    res.status(200).send(response);
};
   
const AccountList = async (req: any, res: any) => {
    const account = new AccountModule();
    const response = await  account.listAccount();
    res.status(200).send(response);
};

const AccountDifferentials = async (req: any, res: any) => {
    const id: string = req.headers['x-user-token'];
    const differential_id: number = req.fields.differential_id;
    const account = new AccountModule();
    const response = await account.differentialsAccount(id , differential_id);
    res.status(200).send(response);
   
};
const AccountDifferentialsRemove = async (req: any, res: any) => {
    const id: string = req.headers['x-user-token'];
    const differential_id: number = req.fields.differential_id;
    const account = new AccountModule();
    const response = await account.removeDifferentialsAccount(id , differential_id);
    res.status(200).send(response);
};

module.exports = {
    register: AccountRegister,
    edit: AccountEdit,
    delete: AccountDelete,
    detail: AccountDetail,
    list: AccountList,
    differentials: AccountDifferentials,
    differentialsRemove: AccountDifferentialsRemove
};
