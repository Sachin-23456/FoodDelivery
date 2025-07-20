import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(new ErrorHandler("Please fill full reservation form!", 400));
  }

  try {
    // ✅ Correctly pass an object to create
    await Reservation.create({ firstName, lastName, email, phone, time, date });

    // ✅ Correct response syntax
    res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    } else {
      return next(new ErrorHandler(error.message, 500));
    }
  }
};
