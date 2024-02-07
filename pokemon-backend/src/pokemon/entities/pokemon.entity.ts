import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Pokemon {
  @PrimaryKey()
  id: number;

  @Property({ unique: true })
  name: string;

  @Property()
  type: string;

  @Property({ default: 1 })
  level: number;

  @Property()
  maxHp: number;
}
