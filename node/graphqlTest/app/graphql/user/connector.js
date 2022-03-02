'use strict';
const DataLoader = require('dataloader');
 
class UserConnector {
    constructor(ctx) {
        this.ctx = ctx;
        this.loader = new DataLoader(this.fetch.bind(this));
    }
 
    /**
     * DataLoader缓存数据
     * @param ids
     * @returns {Promise.<*[]>}
     */
    fetch(ids) {
        const users = this.ctx.app.model.User.findAll({
            where: {
                id: ids,
            },
        });
        return users;
    }
 
    /**
     * 查询多个用户信息
     * @param ids
     * @returns {Promise.<Array.<V|Error>>|Promise<Array<Error | V>>}
     */
    fetchByIds(ids) {
        return this.loader.loadMany(ids);
    }
 
    /**
     * 查询所有
     * @returns {*}
     */
    fetchList() {
        const users = this.ctx.app.model.User.findAll();
        return users;
    }
 
    /**
     * 查询单个
     * @param id
     * @returns {Promise<V> | Promise.<V>}
     */
    fetchById(id) {
        return this.loader.load(id);
    }
}
 
module.exports = UserConnector;