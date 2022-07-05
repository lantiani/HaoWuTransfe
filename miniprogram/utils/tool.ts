export const wxApi = function (fn: Function, options: any) {
    return new Promise((resolve, reject) => {
        return fn({
            ...options,
            success: (res: any) => {
                resolve(res)
            },
            fail: (res: any) => {
                reject(res)
            }
        })
    })
}

export function debounce(func:Function, wait:number, immediate:Boolean) {
    let timeout:any, result:any;

    // 检查func是否为函数
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }

    // wait如果忘记设置,,默认为0
    wait = wait || 0;
    var debounced = function (this:any) {
        // console.log(this);  //=>从中可以测试出this指向的container
        //保存this
        let _this = this;
        // 解决前面的event指向问题
        let args = arguments;
        // 清空上从定时器
        if (timeout) clearTimeout(timeout);


        if (immediate) {
            let callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait);
            if (callNow) result = func.apply(_this, args);

        } else {
            timeout = setTimeout(function () {
                // console.log(this)  //=>这里面的this指向window，也就是前面的count那的this是指向window
                //但是防抖函数的this应该是指向container
                func.apply(_this, args);

            }, wait)
        }

        return result;
    }


    //添加取消防抖函数功能
    debounced.cannel = function () {
        clearTimeout(timeout);
        timeout = null;
    }
    return debounced;

}
