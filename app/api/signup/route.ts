import { FormSchema } from "@/app/lib/types";

export async function POST(request: Request) {
  const body: unknown = await request.json();
  const parsedBody = FormSchema.safeParse(body);

  let zodErrors = {};

  if (!parsedBody.success) {
    const errors = parsedBody.error;
    errors.issues.forEach(
      (issue) =>
        (zodErrors = { ...zodErrors, ...{ [issue.path[0]]: issue.message } })
    );
  }

  if (Object.keys(zodErrors).length > 0)
    return Response.json({
      status: 400,
      message: "validation failed",
      errors: zodErrors,
    });
  else
    return Response.json({
      status: 201,
      message: "sucess",
    });
}
