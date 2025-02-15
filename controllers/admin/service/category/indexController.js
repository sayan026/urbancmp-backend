import {ServiceCategory} from "../../../../models/ServiceCategoryModel.js";

export const saveData = async (req, res, next) => {
    const { name, description } = req.body;

    try {
        const duplicate = await ServiceCategory.findOne({
            name: name
        });

        if (duplicate) {
            return res.status(400).json({ message: 'Category name already exists' });
        }

        const created_at = new Date().toLocaleDateString();
        await ServiceCategory.create({
            name,
            description,
            created_at
        });

        return res.status(200).json({ message: 'Service category added successfully' });
    } catch(err) {
        // return res.status(500).json(err)
        await next(err);
    }
}
