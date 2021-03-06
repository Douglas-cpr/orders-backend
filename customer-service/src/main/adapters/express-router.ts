import { Controller } from "presentation/contracts/controller"
import { Request, Response } from "express"

 export const adaptRoute = (controller: Controller<any>) => {
   return async (req: Request, res: Response) => {
     const httpResponse = await controller.handle(req.params.id)
     return res.status(httpResponse.statusCode).json(httpResponse.data)
   }
 }