import { db } from "@/db";
import { checkPasswordValidator } from "@/lib/validators/checkPasswordValidator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.SHELL_SECRET!;

export const POST = async (req: NextRequest) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  const { id: userId } = user;
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();

  const { password } = checkPasswordValidator.parse(body);

  // try {
  const securedUser = await db.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      shellPass: true,
    },
  });

  if (!securedUser?.shellPass) {
    const hashedPass = await bcrypt.hash(password, 10);
    await db.user.update({
      data: {
        shellPass: hashedPass,
      },
      where: {
        id: userId,
      },
    });
  } else {
    const passMatch = await bcrypt.compare(password, securedUser.shellPass);
    if (!passMatch) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 401 });
    }
  }

  const token = jwt.sign({ userId: userId }, secret, { expiresIn: "5m" });

  return new Response(JSON.stringify({ Message: "Successfull!" }), {
    status: 200,
    headers: {
      "Set-Cookie": `shell_token=${token}; Path=/; HttpOnly; Max-Age=600`,
    },
  });
  // } catch (error) {
  //   return NextResponse.json(
  //     { error: error, message: "Internal Server error" },
  //     { status: 500 }
  //   );
  // }
};
