// os types permitem tipar de forma personalizada e sua estrutura é semelhante a de um objeto
export type PrioridadeSelect = {
  texto: string
  value: 'Alta' | 'Média' | 'Baixa'
}

export type CategoriaSelect = {
  texto: string
  value: 'pessoal' | 'família' | 'saúde' | 'estudos' | 'carreira' | 'trabalho'
}