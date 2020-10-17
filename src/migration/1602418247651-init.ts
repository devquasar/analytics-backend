import {MigrationInterface, QueryRunner} from "typeorm";

export class init1602418247651 implements MigrationInterface {
    name = 'init1602418247651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "actions" ("actions_id" SERIAL NOT NULL, "display" character varying NOT NULL, CONSTRAINT "PK_252ec19f9808194bc4d703b46e6" PRIMARY KEY ("actions_id"))`);
        await queryRunner.query(`CREATE TABLE "sessions" ("session_id" integer NOT NULL, "user_id" integer NOT NULL, "start" TIMESTAMP NOT NULL, "end" TIMESTAMP NOT NULL, CONSTRAINT "PK_9340188c93349808f10d1db74a8" PRIMARY KEY ("session_id"))`);
        await queryRunner.query(`CREATE TABLE "user_actions" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "session_id" integer NOT NULL, "action_id" integer NOT NULL, CONSTRAINT "PK_3c8a683381b553ee59ce5b7b13a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("user_id" integer NOT NULL, CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_actions"`);
        await queryRunner.query(`DROP TABLE "sessions"`);
        await queryRunner.query(`DROP TABLE "actions"`);
    }

}
