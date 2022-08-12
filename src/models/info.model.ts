import {Entity, model, property} from '@loopback/repository';

@model()
export class Info extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  fname?: string;

  @property({
    type: 'string',
    required: true,
  })
  lname: string;

  @property({
    type: 'string',
  })
  addr?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  country?: string;

  @property({
    type: 'string',
  })
  DOB?: string;

  @property({
    type: 'date',
  })
  date?: string;


  constructor(data?: Partial<Info>) {
    super(data);
  }
}

export interface InfoRelations {
  // describe navigational properties here
}

export type InfoWithRelations = Info & InfoRelations;
