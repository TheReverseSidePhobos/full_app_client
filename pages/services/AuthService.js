import $api from "../http/index";

export async function loginSer(email, password){
    return $api.post('/login', {email, password});
}
export async function registrationSer(email, password){
    return $api.post('/registration', {email, password});
}
export async function logoutSer(){
    return $api.post('/logout');
}