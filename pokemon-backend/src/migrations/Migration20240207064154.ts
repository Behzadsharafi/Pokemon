import { Migration } from '@mikro-orm/migrations';

export class Migration20240207064154 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `pokemon` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `type` varchar(255) not null, `level` int not null, `max_hp` int not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `pokemon` add unique `pokemon_name_unique`(`name`);');
  }

}
