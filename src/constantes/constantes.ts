import { PrioridadeSelect, CategoriaSelect } from '../types/constantesSelect.js'

export const PRIORIDADES: Record<string, PrioridadeSelect> = {
  alta: {
    texto: 'Alta',
    value: 'alta',
  },
  média: {
    texto: 'Média',
    value: 'média',
  },
  baixa: {
    texto: 'Baixa',
    value: 'baixa',
  },
}

export const CATEGORIAS: Record<string, CategoriaSelect> = {
  pessoal: {
    texto: 'Pessoal',
    value: 'pessoal',
  },
  família: {
    texto: 'Família',
    value: 'família',
  },
  saúde: {
    texto: 'Saúde',
    value: 'saúde',
  },
  estudos: {
    texto: 'Estudos',
    value: 'estudos',
  },
  carreira: {
    texto: 'Carreira',
    value: 'carreira',
  },
  trabalho: {
    texto: 'Trabalho',
    value: 'trabalho',
  },
}