import { Client, Prisma } from '@prisma/client'

export interface ClientsRepository {
  create: (data: Prisma.ClientCreateInput) => Promise<Client>
  findByCpf: (cpf: string) => Promise<Client | null>
  findById: (id: bigint) => Promise<Client | null>
  delete: (id: bigint) => Promise<Client | null>
}
