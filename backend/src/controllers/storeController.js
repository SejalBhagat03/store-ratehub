import { prisma } from "../config/prisma.js";

export const getStores = async (req, res) => {
  try {
    const stores = await prisma.store.findMany({
      include: {
        ratings: true,
      },
    });

    res.json(stores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
