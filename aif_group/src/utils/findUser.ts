export async function finduser(email: string, users: []) {
  const isExist = users.find(user => user.member_email === email);
  return isExist;
}
