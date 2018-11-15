# React 学习总结

------------------


# 基础知识：
<ul>
<li>
  JSX   
</li>
 eg: 在html里引入变量用{}
<li>
   Props 和 State  
</li>
Props：组件对外的接口， State： 组件对内的接口
<li>
  组件的生命周期
</li>
初始化、挂载、更新、卸载
<li>
  列表  和  key
</li>
<li>
  事件处理 ：  绑定事件  
</li>
注意两点： 1.事件采用驼峰写法  2. 注意绑定this 或者用es6写法
<li>
  表单  
</li>
 state状态管理   受控组件
</ul>


## 生命周期

1、初始化

constructor  ES6  对类的默认方法。

  constructor 常用来初始化state

  ```js
  class MyClass extend React.Component{
      constructor (props){
          super(props);
          this.state = {
              list : this.props.list
          }
      }
  }
```


2、 挂载

render 是一个react 组件必须定义的生命周期，用来渲染dom。  
> 注意：不要在render里面修改state

componentDidMount() 组件挂在完成后调用。 可以发起异步请求，并在异步请求中进行setState。

3、更新

shouldComponentUpdate()  是否重新渲染
每次调用setState 后都会重新调用。 判断是否需要重新渲染组件，默认是true，需要重新render。  如果有些数据的改变不影响界面展示，可以在这里做判断。

getSnapshotBeforeUpdate() 不能在钩子中使用setState。 

componentDidUpdate() 除了首次render之后调用componentDidmount(), 其他render结束后都是调用componentDidUpdate()。 

4、卸载

componentWillUnmount()

一般在componentDidMount里面注册的事件需要在这里卸载删除。


![](https://ws1.sinaimg.cn/large/006c6oKBgy1fx8ki25lsoj30qs0qomya.jpg)

>  其他学习在[My Blog](www.kaige1220.top)
-----------------------


# React 创建组件的三种方式

1. 函数式定义的无状态的组件
创建纯展示的组件，这种组件只负责根据传入的props 来展示。不涉及到要state状态的操作

```js
function helloComponent (){
    return <div></div>
    react.Dom.render(<helloComponent name= "">, mountNode)
}
```
2. ES5 创建   React.CreatClass
      
3. ES6 创建 extends React.Component


## 2和3 的区别：

- 组件能不能访问this对象。  2 可以
- state 的设置不同

-------------------------------

# 其他知识点

ClassName 的命名规范  orItem__picContainer


在组件完成挂载的时候用fetch获取数据：  
```js
componentDidMount() {
      fetch("/mock/order.json").then(res => {
        if (res.ok) {
          res
            .json()
            .then(data => {
              console.log(data);
              this.setState({
                data
              })
            })
        }
      });
    }
```




