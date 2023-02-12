import { Response, Request } from "express";
import { CreateUserDto, UpdateUserDto } from "./dto";


import { userService } from ".";

export async function getAll(req: Request, res: Response) {
  const categories = await userService.getAll();
  res.send(categories);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const response = await userService.getById(id);
  res.send(response);
}

export async function create(req: Request, res: Response) {
  const createData: CreateUserDto = req.body;
  const response = await userService.create(createData);
  res.send(response);
}

export async function deleteData(req: Request, res: Response) {
  const { id } = req.params;
  const response = await userService.remove(id);
  res.send(response);
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const updateData: UpdateUserDto = req.body;
  const response = await userService.update(updateData, id);
  res.send(response);
}
