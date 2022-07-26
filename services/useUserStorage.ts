const ID_USER = "@idUser";
const EMAIL_USER = "@emailUser";
const NAME_USER = "@nameUser";
const SELECT_PLAN = "@Plan";

export const setIdUser = (id: any) => {
  window.localStorage.setItem(ID_USER, id);
};

export const setEmailUser = (email: any) => {
  window.localStorage.setItem(EMAIL_USER, email);
};

export const setNameUser = (name: any) => {
  window.localStorage.setItem(NAME_USER, name);
};

export const idUser =
  typeof window !== "undefined" ? localStorage.getItem("@idUser") : null;

export const setPlano = (plan: any) => {
  window.localStorage.setItem(SELECT_PLAN, plan);
};
