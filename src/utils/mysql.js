module.exports = {
    mutipleMysqlModelToObject: (mysqlModelArray) => {
        return mysqlModelArray.map((item) => item.dataValues);
    },
    mysqlModelToObject: (mysqlModel) => {
        return mysqlModel.dataValues;
    },
};
