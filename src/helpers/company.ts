import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import { Company } from "../../models/company";
import { AppError } from "./appError";
import { db } from "./firebase";

export const createCompany = async (company: Company) => {
  try {
    return await addDoc(collection(db, "company"), company);
  } catch (err) {
    console.error(err);
    throw new AppError("couldn't create company", [], 409);
  }
};

export const getCompany = async (id: string): Promise<Company> => {
  try {
    return (await (await getDoc(doc(db, "company", id))).data()) as Company;
  } catch (err) {
    console.error(err);
    throw new AppError("couldn't retrieve company", [], 404);
  }
};
