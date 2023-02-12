import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import * as bcrypt from "bcrypt";
import { UserRole } from "./type";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text", unique: true })
  email: string;

  @Column({ type: "text" })
  firstname: string;

  @Column({ type: "text" })
  lastname: string;

  @Column({ type: "text", unique: true })
  username: string;

  @Column({ type: "text" })
  password: string;

  @Column({ type: "int" })
  role: UserRole;

  public async hashPassword(password: string) {
    this.password = await bcrypt.hash(password, 10);
  }
}
