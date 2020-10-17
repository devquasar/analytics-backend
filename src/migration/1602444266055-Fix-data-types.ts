import {MigrationInterface, QueryRunner} from "typeorm";

export class FixDataTypes1602444266055 implements MigrationInterface {
    name = 'FixDataTypes1602444266055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "PK_9340188c93349808f10d1db74a8"`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP COLUMN "session_id"`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD "session_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "PK_9340188c93349808f10d1db74a8" PRIMARY KEY ("session_id")`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD "user_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_actions" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "user_actions" ADD "user_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_actions" DROP COLUMN "session_id"`);
        await queryRunner.query(`ALTER TABLE "user_actions" ADD "session_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_96aac72f1574b88752e9fb00089"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "user_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_96aac72f1574b88752e9fb00089"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id")`);
        await queryRunner.query(`ALTER TABLE "user_actions" DROP COLUMN "session_id"`);
        await queryRunner.query(`ALTER TABLE "user_actions" ADD "session_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_actions" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "user_actions" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "PK_9340188c93349808f10d1db74a8"`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP COLUMN "session_id"`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD "session_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "PK_9340188c93349808f10d1db74a8" PRIMARY KEY ("session_id")`);
    }

}
