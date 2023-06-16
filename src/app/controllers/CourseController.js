const Course = require('../models/Course');
const { mysqlModelToObject } = require('../../utils/mysql');

class CourseController {
    /**
     * [GET] /courses/:slug
     * @param {*} req
     * @param {*} res
     */
    show = async (req, res) => {
        try {
            const course = await Course.findOne({ where: { slug: 'ff' } });
            res.json(mysqlModelToObject(course));
        } catch (error) {
            res.json({ error: String(error) });
        }
    };
}

module.exports = new CourseController();
