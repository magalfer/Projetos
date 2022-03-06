// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PanelsController {
    
    async index() {
        return {response:'Index Panel'};
    } 

    async users() {
        return {response:'users panel'};
    }

    async admin() {
        return {response:'admin route'}
    }
}