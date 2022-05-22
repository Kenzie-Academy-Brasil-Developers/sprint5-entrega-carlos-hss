import * as TypeORM from "typeorm"
  
@TypeORM.Entity("users")
export class User {
    @TypeORM.PrimaryGeneratedColumn("uuid")
    readonly id: string

    @TypeORM.Column()
    name: string

    @TypeORM.Column({unique: true})
    email: string

    @TypeORM.Column({select: false})
    password: string

    @TypeORM.Column()
    age: number

    @TypeORM.CreateDateColumn({
      name: "created_at",
    })
    createdAt: Date

    @TypeORM.UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date
}
