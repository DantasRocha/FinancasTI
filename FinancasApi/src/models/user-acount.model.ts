import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class UserAcount extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  User: string;

  @property({
    type: 'string',
    required: true,
  })
  Password: string;

  @property({
    type: 'date',
    required: true,
  })
  dataIs: string;

  @property({
    type: 'date',
    required: true,
  })
  dateAt: string;

  @property({
    type: 'boolean',
    required: true,
  })
  state: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserAcount>) {
    super(data);
  }
}

export interface UserAcountRelations {
  // describe navigational properties here
}

export type UserAcountWithRelations = UserAcount & UserAcountRelations;
