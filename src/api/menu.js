import request from '@/utils/request'

/**
 * 获取菜单信息
 */
export function API_getMenus() {
    return request({
        url: '/menu/get/all',
        method: 'post',
        data: {
        }
    })
}