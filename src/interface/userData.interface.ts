export interface IUserData {
    name:string;
    secondName:string;
    lastName:string;
    image:string;
    country:string;
    city:string;
    phone:string;

}
export interface IUserDataForm extends IUserData{
    password?:string;
    'new-password'?:string;
}
export interface IOption {
    id:string,
    label:string;
}
