import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Info} from '../models';
import {InfoRepository} from '../repositories';

export class InfoController {
  constructor(
    @repository(InfoRepository)
    public infoRepository : InfoRepository,
  ) {}

  @post('/infos')
  @response(200, {
    description: 'Info model instance',
    content: {'application/json': {schema: getModelSchemaRef(Info)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Info, {
            title: 'NewInfo',
            exclude: [],
          }),
        },
      },
    })
    info: Omit<Info, 'id'>,
  ): Promise<Info> {
    return this.infoRepository.create(info);
  }

  @get('/infos/count')
  @response(200, {
    description: 'Info model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Info) where?: Where<Info>,
  ): Promise<Count> {
    return this.infoRepository.count(where);
  }

  @get('/infos')
  @response(200, {
    description: 'Array of Info model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Info, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Info) filter?: Filter<Info>,
  ): Promise<Info[]> {
    return this.infoRepository.find(filter);
  }

  @patch('/infos')
  @response(200, {
    description: 'Info PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Info, {partial: true}),
        },
      },
    })
    info: Info,
    @param.where(Info) where?: Where<Info>,
  ): Promise<Count> {
    return this.infoRepository.updateAll(info, where);
  }

  @get('/infos/{id}')
  @response(200, {
    description: 'Info model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Info, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Info, {exclude: 'where'}) filter?: FilterExcludingWhere<Info>
  ): Promise<Info> {
    return this.infoRepository.findById('', filter);
  }

  @patch('/infos/{id}')
  @response(204, {
    description: 'Info PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Info, {partial: true}),
        },
      },
    })
    info: Info,
  ): Promise<void> {
    await this.infoRepository.updateById('', info);
  }

  @put('/infos/{id}')
  @response(204, {
    description: 'Info PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() info: Info,
  ): Promise<void> {
    await this.infoRepository.replaceById('', info);
  }

  @del('/infos/{id}')
  @response(204, {
    description: 'Info DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.infoRepository.deleteById('');
  }
}
