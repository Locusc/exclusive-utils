```javascript
/**
 * @author 🌈 JayChan
 */
export const momentObjectFormatDateType = (params, dateFormat = 'YYYY-MM-DD') => {
  if(Object.keys(params).length > 0) {
    let data = new Map()
    for (const key in params) {
      if(params[key]._d && params[key]._d instanceof Date) {
        params[key] = moment(params[key]).format(dateFormat)
      }
      data.set(key, params[key])
    }
    
    let obj = {};
    for(let [k,v] of data) {
      obj[k] = v;
    }
    return obj
  } else {
    return new Error('Object is null')
  }
}
```