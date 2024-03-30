import {Op} from "sequelize";

export const createQueryCondition = (query: any) => {
    const queryConditions: any = {
        where: {},
        limit: 10,
        order: [['id', 'DESC']],
        offset: 0
    };
    if (query.limit) {
        queryConditions.limit = Number(query.limit);
    }
    if(query.id) {
        queryConditions.where = {id: query.id};
    }
    if (query.keyword) {
        queryConditions.keyword = {[Op.like]: `%${query.keyword}%`};
    }
    if (query.category) {
        queryConditions.category = query.category;
    }
    if (query.search) {
        queryConditions.search = {[Op.like]: `%${query.search}%`};
    }
    if (query.sort && query.order) {
        queryConditions.order = [[query.sort, query.order]];
    }

    return queryConditions;
}
