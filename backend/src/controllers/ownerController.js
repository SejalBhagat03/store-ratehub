import prisma from "../config/prisma.js";

export const getOwnerStore = async (req, res) => {
  try {
    const store = await prisma.store.findFirst({
      where: { ownerId: req.user.id },
      include: { ratings: true }
    });

    res.json(store);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createStore = async (req, res) => {
  try {
    const { name, email, address } = req.body;

    const store = await prisma.store.create({
      data: {
        name,
        email,
        address,
        ownerId: req.user.id,
      },
    });

    res.json(store);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
