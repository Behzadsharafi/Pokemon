import { Migration } from '@mikro-orm/migrations';

export class Migration20240207085118 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `pokemon` modify `level` int not null default 1;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `pokemon` modify `level` int not null;');
  }

}
