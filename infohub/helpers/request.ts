export async function request<Response>(
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<Response> {
  const response = await fetch(input, init);
  try {
    if (response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (error) {
    throw Error(await response.text());
  }
}
