export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UsersRole = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: UsersRole = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
