import {Op} from "sequelize";

export const createQueryCondition = (query: any) => {
    const queryConditions: any = {};
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

    if (query.sortBy && query.sortOrder) {
        queryConditions.order = [[query.sortBy, query.sortOrder]];
    }

    return queryConditions;
}
