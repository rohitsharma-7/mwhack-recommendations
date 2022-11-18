import {
  doc,
  getDoc,
  addDoc,
  query,
  collection,
  updateDoc,
} from "firebase/firestore";
import { Company, Testimonial } from "../../models/company";
import { AppError } from "./appError";
import { db } from "./firebase";

export const createCompany = async (company: Company) => {
  try {
    return await addDoc(collection(db, "company"), company);
  } catch (err) {
    console.error(err);
    throw new AppError("couldn't create company, something went wrong with the request", [], 409);
  }
};

export const getCompany = async (id: string): Promise<Company> => {
  try {
    return (await getDoc(doc(db, "company", id))).data() as Company;
  } catch (err) {
    console.error(err);
    throw new AppError("couldn't retrieve company, something went wrong with the request", [], 404);
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
    throw new AppError("couldn't attach otp, something went wrong with the request", [], 405);
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
    const dock = doc(db, "company", id);
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
    throw new AppError("couldn't attach testimonial, something went wrong with the request", [], 404);
  }
};

export const addTestimonial = async (
  companyId: string,
  testimonialId: string,
  message: string,
  picture: string
) => {
  try {
    let allTestimonials = (
      (await getDoc(doc(db, "company", companyId))).data() as Company
    ).testimonials;

    let testimonial = allTestimonials.find((b) => b.slug === testimonialId);

    let sortedTestimonials = allTestimonials.filter(
      (b) => b.slug !== testimonialId
    );

    if (testimonial !== undefined) {
      testimonial = { ...testimonial, isPublic: true, picture, message };

      const dock = doc(db, "company", companyId);

      if (sortedTestimonials.length) {
        await updateDoc(dock, {
          testimonials: [testimonial, ...sortedTestimonials],
        });
      } else {
        await updateDoc(dock, {
          testimonials: [testimonial],
        });
      }

      return testimonial;
    }
  } catch (err) {
    console.error(err);
    throw new AppError("couldn't update testimonial, something went wrong with the request", [], 404);
  }
};
