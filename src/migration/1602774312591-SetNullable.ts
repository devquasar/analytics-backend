import {MigrationInterface, QueryRunner} from "typeorm";

export class SetNullable1602774312591 implements MigrationInterface {
    name = 'SetNullable1602774312591'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" ALTER COLUMN "end" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" ALTER COLUMN "end" SET NOT NULL`);
    }

}
