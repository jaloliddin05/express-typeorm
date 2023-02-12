import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import * as bcrypt from "bcrypt";
import { UserRole } from "./type";
import { Post } from "../post/post.entity";

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

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  public async hashPassword(password: string) {
    this.password = await bcrypt.hash(password, 10);
  }
}
