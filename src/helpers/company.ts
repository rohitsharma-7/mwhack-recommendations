import { doc, getDoc, addDoc, collection, updateDoc } from "firebase/firestore";
import { Company, Testimonial } from "../../models/company";
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
    return (await getDoc(doc(db, "company", id))).data() as Company;
  } catch (err) {
    console.error(err);
    throw new AppError("couldn't retrieve company", [], 404);
  }
};

export const attachCodeToCompany = async (id: string, otp: string) => {
  try {
    const dock = await doc(db, "company", id);
    await updateDoc(dock, {
      otp,
    });
  } catch (err) {
    console.error(err);
    throw new AppError("couldn't retrieve company", [], 404);
  }
};

export const attachTestimonialToCompany = async (
  id: string,
  testimonial: Testimonial
) => {
  try {
    const allTestimonials = (
      (await getDoc(doc(db, "company", id))).data() as Company
    ).testimonials;
    const dock = await doc(db, "company", id);
    if (allTestimonials !== undefined) {
      await updateDoc(dock, {
        testimonials: [testimonial, ...allTestimonials],
      });
    } else {
      await updateDoc(dock, {
        testimonials: [testimonial],
      });
    }
  } catch (err) {
    console.error(err);
    throw new AppError("couldn't retrieve company", [], 404);
  }
};



export const addTestimonial = async (companyId: string, testimonialId: string, message: string, picture: string) => {


  try {
    // return (await getDoc(doc(db, "company", id))).data() as Company;



  } catch (err) {
    console.error(err);
    throw new AppError("couldn't retrieve company", [], 404);
  }
};