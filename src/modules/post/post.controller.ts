import { Response, Request } from "express";
import { CreatePostDto, UpdatePostDto } from "./dto";

import { postService } from ".";

export async function getAll(req: Request, res: Response) {
  const {page,count} = req.query
  const data = await postService.getAll(page,count);
  res.send(data);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const response = await postService.getById(id);
  res.send(response);
}

export async function create(req: Request, res: Response) {
  const createData: CreatePostDto = req.body;
  const response = await postService.create(createData);
  res.send(response);
}

export async function deleteData(req: Request, res: Response) {
  const { id } = req.params;
  const response = await postService.remove(id);
  res.send(response);
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const updateData: UpdatePostDto = req.body;
  const response = await postService.update(updateData, id);
  res.send(response);
}
