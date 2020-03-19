
import request from '@/utils/request'

export const getData = query => {
	console.log(query);
    return request({
        url: '/static/1.txt',
        method: 'get',
        params: query
    });
};