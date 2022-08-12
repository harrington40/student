import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Info, InfoRelations} from '../models';

export class InfoRepository extends DefaultCrudRepository<
  Info,
  typeof Info.prototype.fname,
  InfoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Info, dataSource);
  }
}
