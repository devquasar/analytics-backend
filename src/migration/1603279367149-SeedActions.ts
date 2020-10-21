import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { CategorySeed } from '../seeds/actions.seed';

export class SeedActions1603279367149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('actions').save(CategorySeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "sessions" WHERE true`);
  }
}
