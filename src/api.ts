import { TarefaDaLista } from './types/tarefaDaLista.js'

export async function capturaTarefasDaAPI(): Promise<TarefaDaLista[]> {
  const resposta = await fetch('http://localhost:3000/tasks')
  const dadosConvertidos: TarefaDaLista[] = await resposta.json()

  return dadosConvertidos
}

export async function cadastraTarefaNaAPI(
  titulo: string, 
  prioridade: string, 
  descricao: string,
  categoria: string,
  data: string
  ) {
  const resposta = await fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      titulo: titulo,
      prioridade: prioridade.toLowerCase(),
      descricao: descricao,
      categoria: categoria,
      data: data
    }),
  })

  const respostaConvertida: TarefaDaLista = await resposta.json()

  return respostaConvertida
}

export async function deletaTarefaNaAPI(id: string): Promise<void> {
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE',
  })
}
