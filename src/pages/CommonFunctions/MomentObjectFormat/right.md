### 1.使用说明
1. __1.一般情况下第三方的时间组件, 例如: Antd. 返回的日期格式是moment对象, 但是一般后台接收的都是时间字符串所以需要进行转换.__
2. __2.特别是在像搜索的使用场景里, 最后都是从表单中获取所有的搜索条件组成一个对象, 这时候将非常有用.__
3. __3.传入一个包含moment类型的对象, 将所有的moment类型转换成时间字符串.__

### 2.代码测试
