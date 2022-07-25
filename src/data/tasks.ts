import { v4 as uuidV4 } from "uuid";

export const tasks = [
  { id: uuidV4(), title: "concluir o desafio", done: true },
  { id: uuidV4(), title: "montar o carousel CSS", done: false },
  { id: uuidV4(), title: "fazer a caminhada vespertina", done: false },
];
