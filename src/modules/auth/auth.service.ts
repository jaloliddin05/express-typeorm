import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

import { UserService } from "../user/user.service";

export class AuthService {
  constructor(private readonly userService: UserService) {}

  async verifyUser(email: string, password: string) {
    const user = await this.userService.getByEmail(email).catch((err) => {
      throw new Error("User not found");
    });
    const isPasswordSame = this.comparePasswordWidthHash(
      password,
      user.password
    );
    if (!isPasswordSame) {
      throw new Error("Invalid password");
    }
    const { access_token } = this.getJwt(user.id);
    return { user, access_token };
  }

  async comparePasswordWidthHash(password: string, hash: string) {
    const isSame = await bcrypt.compare(password, hash);
    return isSame;
  }

  getJwt(id: string) {
    const token = jwt.sign({ id }, process.env.JWT_KEY, {
      expiresIn: 60 * 40,
    });
    return { access_token: token };
  }
}
