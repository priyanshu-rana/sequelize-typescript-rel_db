import {
  Model,
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "students",
})
export class Student extends Model<Student> {
  @Unique
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @Column(DataType.STRING)
  first_name!: string;

  @Column(DataType.STRING)
  last_name!: string;

  @Unique
  @Column(DataType.STRING)
  phone_number!: string;

  @Column(DataType.STRING)
  email!: string;
}
