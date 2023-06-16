const Course = require('../models/Course');
const { mutipleMysqlModelToObject } = require('../../utils/mysql');

class SiteController {
    /**
     * [GET] /
     */
    index = async (req, res) => {
        try {
            var courses = await Course.findAll();
            console.log('courses.length', courses.length);
            res.render('home', {
                courses: mutipleMysqlModelToObject(courses),
            });
        } catch (error) {
            res.json({
                error: 'Sync Course model with db fail: ' + String(error),
            });
        }
    };

    /**
     * [GET] /search
     * @param {*} req
     * @param {*} res
     */
    search = (req, res) => {
        res.render('search');
    };
}

module.exports = new SiteController();
