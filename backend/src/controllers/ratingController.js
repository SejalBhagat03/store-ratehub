import prisma from "../config/prisma.js";

export const addRating = async (req, res) => {
  try {
    const { storeId, rating, comment } = req.body;

    const newRating = await prisma.rating.create({
      data: {
        rating,
        comment,
        storeId,
        userId: req.user.id,
      },
    });

    res.json(newRating);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
