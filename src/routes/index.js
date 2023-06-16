const newRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

const route = (app) => {
    app.use('/courses', coursesRouter);
    app.use('/news', newRouter);
    app.use('/', siteRouter);
};

module.exports = route;
